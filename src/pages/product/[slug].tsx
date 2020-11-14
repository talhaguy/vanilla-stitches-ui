import { GetStaticPaths, GetStaticProps } from "next";
import {
    createPathsForStaticPage,
    getProductPageSlugs,
} from "../../data/paths";
import {
    getProductPageData,
    getStaticPropsForNavigation,
} from "../../data/props";
import {
    getStaticPaths as getStaticPathsForProductPage,
    getStaticProps as getStaticPropsForProductPage,
} from "../../data/staticData/productPage";
import {
    ProductPage,
    ProductPageProps,
} from "../../components/pages/ProductPage";

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForProductPage(
        getProductPageSlugs,
        createPathsForStaticPage
    );
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async (
    context
) => {
    return getStaticPropsForProductPage(
        getStaticPropsForNavigation,
        getProductPageData,
        context
    );
};
