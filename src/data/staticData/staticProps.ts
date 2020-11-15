import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { PageData } from "../../components/pages/models/PageData";
import { GetStaticPropsForNavigationFunc, GetPageDataFunc } from "../props";
import { StaticPropsForNavigation } from "../props/navigation";
import { ContextSlugParameter } from "./models/ContextSlugParameter";

export interface GetStaticPropsFunc<T> {
    (
        getStaticPropsForNavigation: GetStaticPropsForNavigationFunc,
        getPageData: GetPageDataFunc<T>,
        context: GetStaticPropsContext<ContextSlugParameter>
    ): Promise<
        GetStaticPropsResult<StaticPropsForNavigation & { pageData: T }>
    >;
}

export const getStaticProps: GetStaticPropsFunc<PageData> = async (
    getStaticPropsForNavigation,
    getPageData,
    context
) => {
    // TODO: run promises concurrently, rather than one by one
    const {
        categoryPageLinks,
        contentPageLinks,
    } = await getStaticPropsForNavigation();
    const pageData = await getPageData(
        context.params ? context.params.slug : "/"
    );

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            pageData,
        },
    };
};
