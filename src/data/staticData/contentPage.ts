import { createPathsForStaticPage, GetPageSlugsFunc } from "../paths";
import {
    GetStaticPropsForNavigationFunc,
    GetContentPageDataFunc,
} from "../props";

export const getStaticPaths = async (getContentPageSlugs: GetPageSlugsFunc) => {
    const slugs = getContentPageSlugs();
    const paths = createPathsForStaticPage(slugs);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (
    getStaticPropsForNavigation: GetStaticPropsForNavigationFunc,
    getContentPageData: GetContentPageDataFunc,
    context
) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();
    const pageData = getContentPageData();

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            pageData,
        },
    };
};
