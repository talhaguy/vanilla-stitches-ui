import { GetStaticProps, GetStaticPropsResult } from "next";
import {
    getStaticProps as getStaticPropsForLandingPage,
    ContextSlugParameter,
    getLandingPageData,
} from "../data";
import { LandingPage, LandingPageProps } from "../components";

export default LandingPage;

export const getStaticProps: GetStaticProps<
    LandingPageProps,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForLandingPage(getLandingPageData, context) as Promise<
        GetStaticPropsResult<LandingPageProps>
    >;
};
