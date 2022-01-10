import { GetStaticPaths, GetStaticProps } from "next";
import {
    ContextSlugParameter,
    AppStaticPropsResult,
    ContentPageData,
} from "../../pageData";
import { ContentPage, ContentPageProps } from "../../components";
import {
    getAllContentPageSlugs,
    getContentPageBySlug,
    getNavigation,
} from "../../db";
import { NavigationLinkGroup } from "../../models";

export default ContentPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getAllContentPageSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: {
                slug: slug.replace("/page/", ""),
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<
    AppStaticPropsResult<ContentPageData>,
    ContextSlugParameter
> = async (context) => {
    // TODO: handle error
    const [contentPageData, navigationData] = await Promise.all([
        getContentPageBySlug("/page/" + context.params.slug),
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
            pageData: {
                ...contentPageData,
            },
        },
    };
};
