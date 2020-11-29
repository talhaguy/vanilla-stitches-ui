import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import {
    getStaticPaths as getStaticPathsForCategoryPage,
    getStaticProps as getStaticPropsForCategoryPage,
    ContextSlugParameter,
    AppStaticPropsResult,
} from "../../pageData";
import {
    fetchNavigationLinks,
    fetchAllCategorySlugs,
    fetchCategoryBySlug,
} from "../../sanity";
import { CategoryPage, CategoryPageProps } from "../../components";

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForCategoryPage(fetchAllCategorySlugs);
};

export const getStaticProps: GetStaticProps<
    AppStaticPropsResult<CategoryPageProps>,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForCategoryPage(
        fetchNavigationLinks,
        fetchCategoryBySlug,
        context
    ) as Promise<GetStaticPropsResult<AppStaticPropsResult<CategoryPageProps>>>;
};
