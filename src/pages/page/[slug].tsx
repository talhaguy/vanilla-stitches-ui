import { GetStaticPaths, GetStaticProps } from "next";
import {
    ContentPage,
    ContentPageProps,
} from "../../components/pages/ContentPage";
import {
    createPathsForStaticPage,
    getContentPageSlugs,
} from "../../data/paths";
import {
    getContentPageData,
    getStaticPropsForNavigation,
} from "../../data/props";
import {
    getStaticPaths as getStaticPathsForContentPage,
    getStaticProps as getStaticPropsForContentPage,
} from "../../data/staticData/contentPage";

export default ContentPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForContentPage(
        getContentPageSlugs,
        createPathsForStaticPage
    );
};

export const getStaticProps: GetStaticProps<ContentPageProps> = async (
    context
) => {
    return getStaticPropsForContentPage(
        getStaticPropsForNavigation,
        getContentPageData,
        context
    );
};
