import { GetStaticPaths, GetStaticProps } from "next";
import {
    ContextSlugParameter,
    AppStaticPropsResult,
    ProductPageData,
} from "../../pageData";
import { ProductPage } from "../../components";
import { getAllProductSlugs, getNavigation, getProductBySlug } from "../../db";
import { NavigationLinkGroup } from "../../models";

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getAllProductSlugs();
    console.log("slugs...", slugs);

    return {
        paths: slugs.map((slug) => ({
            params: {
                slug: slug.replace("/product/", ""),
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<
    AppStaticPropsResult<ProductPageData>,
    ContextSlugParameter
> = async (context) => {
    // TODO: handle error
    const [productData, navigationData] = await Promise.all([
        getProductBySlug("/product/" + context.params.slug),
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

    const pageData = {
        ...productData,
        id: productData.product_id,
        category: {
            ...productData.category,
            urlPath: productData.category.slug,
        },
        urlPath: productData.slug,
    };

    return {
        props: {
            topNavigationLinkGroups,
            pageData,
        },
    };
};
