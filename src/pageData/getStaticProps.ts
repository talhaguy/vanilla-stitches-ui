import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import { NavigationLinkGroup } from "../models";
import { GetNavigationLinkGroupDataFunction } from "./dataInterface/GetNavigationLinkGroupDataFunction";
import { GetPageDataFunction } from "./dataInterface/GetPageDataFunction";
import { PageData } from "./models/PageData";

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
