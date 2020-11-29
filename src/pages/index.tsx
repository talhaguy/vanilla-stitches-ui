import { GetStaticProps, GetStaticPropsResult } from "next";
import {
    getStaticProps as getStaticPropsForLandingPage,
    ContextSlugParameter,
    AppStaticPropsResult,
} from "../pageData";
import { fetchNavigationLinks, fetchLandingPageDataBySlug } from "../sanity";
import { LandingPage, LandingPageProps } from "../components";

export default LandingPage;

export const getStaticProps: GetStaticProps<
    AppStaticPropsResult<LandingPageProps>,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForLandingPage(
        fetchNavigationLinks,
        fetchLandingPageDataBySlug,
        context
    ) as Promise<GetStaticPropsResult<AppStaticPropsResult<LandingPageProps>>>;
};
