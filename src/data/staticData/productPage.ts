import { CreatePathsForStaticPageFunc, GetPageSlugsFunc } from "../paths";
import {
    GetProductPageDataFunc,
    GetStaticPropsForNavigationFunc,
} from "../props";

export const getStaticPaths = async (
    getProductPageSlugs: GetPageSlugsFunc,
    createPathsForStaticPage: CreatePathsForStaticPageFunc
) => {
    const slugs = getProductPageSlugs();
    const paths = createPathsForStaticPage(slugs);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (
    getStaticPropsForNavigation: GetStaticPropsForNavigationFunc,
    getProductPageData: GetProductPageDataFunc,
    context
) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();

    const pageData = getProductPageData();

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            pageData,
        },
    };
};
