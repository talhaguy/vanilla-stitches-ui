import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    createPathsForStaticPage,
    getCategoryPageSlugs,
    getProductsForCategory,
} from "../../data/paths";
import {
    getStaticPropsForNavigation,
    StaticPropsForNavigation,
} from "../../data/props";
import { NavigationContext } from "../../context/NavigationContext";
import { Layout } from "../../components/Layout";
import Link from "next/link";

interface CategoryPageProps extends StaticPropsForNavigation {
    description: string;
    products: string[];
}

function CategoryPage({
    categoryPageLinks,
    contentPageLinks,
    description,
    products,
}: CategoryPageProps) {
    return (
        <NavigationContext.Provider
            value={{
                categoryPageLinks,
                contentPageLinks,
            }}
        >
            <Layout>
                <p>{description}</p>
                <ul>
                    {products.map((product, i) => {
                        return (
                            <li key={i}>
                                <Link href={"/product/" + product}>
                                    {product}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Layout>
        </NavigationContext.Provider>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getCategoryPageSlugs();
    const paths = createPathsForStaticPage(slugs);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<
    CategoryPageProps,
    {
        slug: string;
    }
> = async (context) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();

    const description =
        context.params.slug === "colorful"
            ? "The colors on these are lovely."
            : "Go in style with denim.";

    const products = getProductsForCategory(context.params.slug);

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            description,
            products,
        },
    };
};

export default CategoryPage;
