import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    createPathsForStaticPage,
    getProductPageSlugs,
} from "../../data/paths";

interface ProductPageProps {
    shortDescription: string;
}

function ProductPage({ shortDescription }: ProductPageProps) {
    return <p>{shortDescription}</p>;
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
    const shortDescription =
        context.params.slug === "flower-pouch"
            ? "This is a flower pouch."
            : "This is a denim pouch.";

    return {
        props: {
            shortDescription,
        },
    };
};

export default ProductPage;
