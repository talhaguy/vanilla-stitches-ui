import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import { getProductPageSlugs } from "../../data/paths";
import { getProductPageData } from "../../data/props";
import {
    getStaticPaths as getStaticPathsForProductPage,
    getStaticProps as getStaticPropsForProductPage,
} from "../../data/staticData";
import {
    ProductPage,
    ProductPageProps,
} from "../../components/pages/ProductPage";
import { ContextSlugParameter } from "../../data/staticData/models/ContextSlugParameter";

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
