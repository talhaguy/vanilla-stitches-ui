import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    createPathsForStaticPage,
    getProductPageSlugs,
} from "../../data/paths";
import {
    getStaticPropsForNavigation,
    StaticPropsForNavigation,
} from "../../data/props";
import { NavigationContext } from "../../context/NavigationContext";
import { Layout } from "../../components/Layout";

interface ProductPageProps extends StaticPropsForNavigation {
    shortDescription: string;
}

function ProductPage({
    categoryPageLinks,
    contentPageLinks,
    shortDescription,
}: ProductPageProps) {
    return (
        <NavigationContext.Provider
            value={{
                categoryPageLinks,
                contentPageLinks,
            }}
        >
            <Layout>
                <p>{shortDescription}</p>
            </Layout>
        </NavigationContext.Provider>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getProductPageSlugs();
    const paths = createPathsForStaticPage(slugs);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async (
    context
) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();

    const shortDescription =
        context.params.slug === "flower-pouch"
            ? "This is a flower pouch."
            : "This is a denim pouch.";

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            shortDescription,
        },
    };
};

export default ProductPage;
