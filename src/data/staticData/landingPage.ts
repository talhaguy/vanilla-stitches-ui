import {
    GetLandingPageDataFunc,
    GetStaticPropsForNavigationFunc,
} from "../props";

export const getStaticProps = async (
    getStaticPropsForNavigation: GetStaticPropsForNavigationFunc,
    getLandingPageData: GetLandingPageDataFunc,
    context
) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();
    const pageData = getLandingPageData();

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            pageData,
        },
    };
};
