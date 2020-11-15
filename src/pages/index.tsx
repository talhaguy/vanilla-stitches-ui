import { GetStaticProps, GetStaticPropsResult } from "next";
import { getLandingPageData } from "../data/props";
import { LandingPage, LandingPageProps } from "../components/pages/LandingPage";
import { getStaticProps as getStaticPropsForLandingPage } from "../data/staticData";
import { ContextSlugParameter } from "../data/staticData/models/ContextSlugParameter";

export default LandingPage;

export const getStaticProps: GetStaticProps<
    LandingPageProps,
    ContextSlugParameter
> = async (context) => {
    return getStaticPropsForLandingPage(getLandingPageData, context) as Promise<
        GetStaticPropsResult<LandingPageProps>
    >;
};
