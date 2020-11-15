import {
    GetPageDataFunc,
    getStaticPropsForNavigation,
    GetStaticPropsForNavigationFunc,
} from "../props";
import { ContextSlugParameter } from "./models/ContextSlugParameter";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { getStaticProps as _getStaticProps } from "./staticProps";
import { PageData } from "../../components/pages/models/PageData";

export { getStaticPaths } from "./staticPaths";

export interface GetStaticPropsFunc<T> {
    (
        getPageData: GetPageDataFunc<T>,
        context: GetStaticPropsContext<ContextSlugParameter>
    ): Promise<GetStaticPropsResult<T>>;
}

export const getStaticProps: GetStaticPropsFunc<PageData> = ((
    getStaticPropsForNavigation: GetStaticPropsForNavigationFunc
) => {
    return ((getPageData, context) => {
        return _getStaticProps(
            getStaticPropsForNavigation,
            getPageData,
            context
        );
    }) as GetStaticPropsFunc<PageData>;
})(getStaticPropsForNavigation);
