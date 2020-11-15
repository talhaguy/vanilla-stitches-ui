import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import { getCategoryPageSlugs } from "../../data/paths";
import { getCategoryPageData } from "../../data/props";
import {
    CategoryPage,
    CategoryPageProps,
} from "../../components/pages/CategoryPage";
import {
    getStaticPaths as getStaticPathsForCategoryPage,
    getStaticProps as getStaticPropsForCategoryPage,
} from "../../data/staticData";
import { ContextSlugParameter } from "../../data/staticData/models/ContextSlugParameter";

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
