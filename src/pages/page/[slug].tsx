import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import { ContentPage, ContentPageProps } from "../../components";
import {
    getStaticPaths as getStaticPathsForContentPage,
    getStaticProps as getStaticPropsForContentPage,
    ContextSlugParameter,
    getContentPageSlugs,
    getContentPageData,
} from "../../data";

export default ContentPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForContentPage(getContentPageSlugs);
};

export const getStaticProps: GetStaticProps<
    ContentPageProps,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForContentPage(getContentPageData, context) as Promise<
        GetStaticPropsResult<ContentPageProps>
    >;
};
