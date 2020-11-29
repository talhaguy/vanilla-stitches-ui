import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import {
    getStaticPaths as getStaticPathsForContentPage,
    getStaticProps as getStaticPropsForContentPage,
    ContextSlugParameter,
    AppStaticPropsResult,
} from "../../pageData";
import {
    fetchNavigationLinks,
    fetchAllContentSlugs,
    fetchContentBySlug,
} from "../../sanity";
import { ContentPage, ContentPageProps } from "../../components";

export default ContentPage;

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsForContentPage(fetchAllContentSlugs);
};

export const getStaticProps: GetStaticProps<
    AppStaticPropsResult<ContentPageProps>,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForContentPage(
        fetchNavigationLinks,
        fetchContentBySlug,
        context
    ) as Promise<GetStaticPropsResult<AppStaticPropsResult<ContentPageProps>>>;
};
