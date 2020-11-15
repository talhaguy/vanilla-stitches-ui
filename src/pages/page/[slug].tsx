import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import {
    ContentPage,
    ContentPageProps,
} from "../../components/pages/ContentPage";
import { getContentPageSlugs } from "../../data/paths";
import { getContentPageData } from "../../data/props";
import {
    getStaticPaths as getStaticPathsForContentPage,
    getStaticProps as getStaticPropsForContentPage,
} from "../../data/staticData";
import { ContextSlugParameter } from "../../data/staticData/models/ContextSlugParameter";

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
