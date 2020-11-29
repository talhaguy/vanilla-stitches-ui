import { NavigationLinkGroup } from "../models";
import {
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";

export type {
    CategoryPageData,
    ProductOnCategoryPage,
} from "./models/CategoryPageData";
export type { ContentPageData } from "./models/ContentPageData";
export type { LandingPageData } from "./models/LandingPageData";
export type { ProductPageData } from "./models/ProductPageData";
export type { PageData } from "./models/PageData";
import { PageData } from "./models/PageData";

export interface GetPageSlugsFunction {
    (): Promise<string[]>;
}

// export interface GetProductPageDataFunction {
//     (slug: string): Promise<ProductPageData>;
// }

export interface GetPageDataFunction<T> {
    (slug: string): Promise<T>;
}

export interface GetNavigationLinkGroupDataFunction {
    (): Promise<NavigationLinkGroup[]>;
}

export enum ApiUrl {
    CategoryPageSlugs = "/api/slugs/category",
    ProductPageSlugs = "/api/slugs/product",
    ContentPageSlugs = "/api/slugs/content",
    LandingPageData = "/api/pageData/landing",
    CategoryPageData = "/api/pageData/category",
    ProductPageData = "/api/pageData/product",
    ContentPageData = "/api/pageData/content",
}

export enum SlugPathPrepend {
    CategoryPage = "/category",
    ProductPage = "/product",
    ContentPage = "/page",
}

export function createStaticPathResult(slugs: string[]) {
    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug,
                },
            };
        }),
        fallback: false,
    } as GetStaticPathsResult;
}

export async function getStaticPaths(getPageSlugs: GetPageSlugsFunction) {
    const slugs = await getPageSlugs();
    return createStaticPathResult(slugs);
}

// export interface GetStaticPropsFunc<T> {
//     (
//         getStaticPropsForNavigation: GetStaticPropsForNavigationFunc,
//         getPageData: GetPageDataFunc<T>,
//         context: GetStaticPropsContext<ContextSlugParameter>
//     ): Promise<
//         GetStaticPropsResult<StaticPropsForNavigation & { pageData: T }>
//     >;
// }

export interface ContextSlugParameter extends ParsedUrlQuery {
    slug: string;
}
export interface AppStaticPropsResult<T> {
    topNavigationLinkGroups: NavigationLinkGroup[];
    pageData: T;
}
export interface GetStaticPropsFunc<T> {
    (
        getNavigationLinkGroupData: GetNavigationLinkGroupDataFunction,
        getPageData: GetPageDataFunction<T>,
        context: GetStaticPropsContext<ContextSlugParameter>
    ): Promise<GetStaticPropsResult<AppStaticPropsResult<T>>>;
}

export const getStaticProps: GetStaticPropsFunc<PageData> = async (
    getNavigationLinkGroupData,
    getPageData,
    context
) => {
    // TODO: run promises concurrently, rather than one by one
    const topNavigationLinkGroups = await getNavigationLinkGroupData();
    const pageData = await getPageData(
        context.params ? context.params.slug : ""
    );

    return {
        props: {
            topNavigationLinkGroups,
            pageData,
        },
    };
};
