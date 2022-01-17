import { GetStaticProps } from "next";
import {
    ContextSlugParameter,
    AppStaticPropsResult,
    LandingPageData,
    NavigationLinkGroup,
} from "../models";
import { LandingPage } from "../components";
import { getLandingPage, getNavigation } from "../db";

export default LandingPage;

export const getStaticProps: GetStaticProps<
    AppStaticPropsResult<LandingPageData>,
    ContextSlugParameter
> = async (context) => {
    // TODO: handle error
    const [homepageData, navigationData] = await Promise.all([
        getLandingPage("homepage"),
        getNavigation("main"),
    ]);

    const topNavigationLinkGroups: NavigationLinkGroup[] = navigationData.link_categories.map(
        (l) => {
            return {
                label: l.label,
                links: l.links.map((l) => {
                    return {
                        label: l.label,
                        path: l.slug,
                    };
                }),
            };
        }
    );

    return {
        props: {
            topNavigationLinkGroups,
            pageData: homepageData,
        },
    };
};
