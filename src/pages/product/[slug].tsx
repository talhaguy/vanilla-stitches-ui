import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import {
    getStaticPaths as getStaticPathsForProductPage,
    getStaticProps as getStaticPropsForProductPage,
    ContextSlugParameter,
    getProductPageSlugs,
    getProductPageData,
} from "../../data";
import { ProductPage, ProductPageProps } from "../../components";

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForProductPage(getProductPageSlugs);
};

export const getStaticProps: GetStaticProps<
    ProductPageProps,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForProductPage(getProductPageData, context) as Promise<
        GetStaticPropsResult<ProductPageProps>
    >;
};
