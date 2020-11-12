import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    createPathsForStaticPage,
    getCategoryPageSlugs,
} from "../../data/paths";

interface CategoryPageProps {
    description: string;
}

function CategoryPage({ description }: CategoryPageProps) {
    return <p>{description}</p>;
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
    const description =
        context.params.slug === "colorful"
            ? "The colors on these are lovely."
            : "Go in style with denim.";

    return {
        props: {
            description,
        },
    };
};

export default CategoryPage;
