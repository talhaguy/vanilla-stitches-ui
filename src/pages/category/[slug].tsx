import { GetStaticPaths, GetStaticProps } from "next";
import { getCategoryPageSlugs } from "../../data/paths";
import {
    getCategoryPageData,
    getStaticPropsForNavigation,
} from "../../data/props";
import {
    CategoryPage,
    CategoryPageProps,
} from "../../components/pages/CategoryPage";
import {
    getStaticPaths as getStaticPathsForCategoryPage,
    getStaticProps as getStaticPropsForCategoryPage,
} from "../../data/staticData/categoryPage";

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForCategoryPage(getCategoryPageSlugs);
};

export const getStaticProps: GetStaticProps<
    CategoryPageProps,
    {
        slug: string;
    }
> = async (context) => {
    return getStaticPropsForCategoryPage(
        getStaticPropsForNavigation,
        getCategoryPageData,
        context
    );
};
