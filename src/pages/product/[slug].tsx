import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import {
    getStaticPaths as getStaticPathsForProductPage,
    getStaticProps as getStaticPropsForProductPage,
    ContextSlugParameter,
    AppStaticPropsResult,
} from "../../pageData";
import {
    fetchNavigationLinks,
    fetchAllProductSlugs,
    fetchProductBySlug,
} from "../../sanity";
import { ProductPage, ProductPageProps } from "../../components";

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForProductPage(fetchAllProductSlugs);
};

export const getStaticProps: GetStaticProps<
    AppStaticPropsResult<ProductPageProps>,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForProductPage(
        fetchNavigationLinks,
        fetchProductBySlug,
        context
    ) as Promise<GetStaticPropsResult<AppStaticPropsResult<ProductPageProps>>>;
};
