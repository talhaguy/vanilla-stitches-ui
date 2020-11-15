import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import {
    getStaticPaths as getStaticPathsForCategoryPage,
    getStaticProps as getStaticPropsForCategoryPage,
    ContextSlugParameter,
    getCategoryPageSlugs,
    getCategoryPageData,
} from "../../data";
import { CategoryPage, CategoryPageProps } from "../../components";

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForCategoryPage(getCategoryPageSlugs);
};

export const getStaticProps: GetStaticProps<
    CategoryPageProps,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForCategoryPage(
        getCategoryPageData,
        context
    ) as Promise<GetStaticPropsResult<CategoryPageProps>>;
};
