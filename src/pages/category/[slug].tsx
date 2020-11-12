import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    createPathsForStaticPage,
    getCategoryPageSlugs,
} from "../../data/paths";
import {
    getStaticPropsForNavigation,
    StaticPropsForNavigation,
} from "../../data/props";
import { NavigationContext } from "../../context/NavigationContext";
import { Layout } from "../../components/Layout";

interface CategoryPageProps extends StaticPropsForNavigation {
    description: string;
}

function CategoryPage({
    categoryPageLinks,
    contentPageLinks,
    description,
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

export const getStaticProps: GetStaticProps<CategoryPageProps> = async (
    context
) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();

    const description =
        context.params.slug === "colorful"
            ? "The colors on these are lovely."
            : "Go in style with denim.";

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            description,
        },
    };
};

export default CategoryPage;
