import { GetStaticProps } from "next";
import { getLandingPageData, getStaticPropsForNavigation } from "../data/props";
import { LandingPage, LandingPageProps } from "../components/pages/LandingPage";
import { getStaticProps as getStaticPropsForLandingPage } from "../data/staticData/landingPage";

export default LandingPage;

export const getStaticProps: GetStaticProps<LandingPageProps> = async (
    context
) => {
    return getStaticPropsForLandingPage(
        getStaticPropsForNavigation,
        getLandingPageData,
        context
    );
};
