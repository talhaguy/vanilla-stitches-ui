import { GetStaticPaths, GetStaticProps } from "next";
import {
    ContextSlugParameter,
    AppStaticPropsResult,
    CategoryPageData,
} from "../../models";
import { CategoryPage } from "../../components";
import {
    getAllCategorySlugs,
    getCategoryBySlug,
    getNavigation,
} from "../../db";
import { NavigationLinkGroup } from "../../models";

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getAllCategorySlugs();
    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug: slug.replace("/category/", ""),
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<
    AppStaticPropsResult<CategoryPageData>,
    ContextSlugParameter
> = async (context) => {
    // TODO: handle error
    const [categoryData, navigationData] = await Promise.all([
        getCategoryBySlug("/category/" + context.params.slug),
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
                ...categoryData,
                products: categoryData.products.map((p) => {
                    return {
                        ...p,
                        urlPath: p.slug,
                    };
                }),
            },
        },
    };
};
