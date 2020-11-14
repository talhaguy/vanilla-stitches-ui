import { createPathsForStaticPage, GetPageSlugsFunc } from "../paths";
import {
    GetCategoryPageDataFunc,
    GetStaticPropsForNavigationFunc,
} from "../props";

export const getStaticPaths = async (
    getCategoryPageSlugs: GetPageSlugsFunc
) => {
    const slugs = getCategoryPageSlugs();
    const paths = createPathsForStaticPage(slugs);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (
    getStaticPropsForNavigation: GetStaticPropsForNavigationFunc,
    getCategoryPageData: GetCategoryPageDataFunc,
    context
) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();
    const pageData = getCategoryPageData();

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            pageData,
        },
    };
};
