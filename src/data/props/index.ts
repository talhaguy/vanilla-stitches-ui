import { CategoryPageData } from "../../components/pages/models/CategoryPageData";
import { ContentPageData } from "../../components/pages/models/ContentPageData";
import { LandingPageData } from "../../components/pages/models/LandingPageData";
import { ProductPageData } from "../../components/pages/models/ProductPageData";
import { FetchFunc } from "../../network/models/fetch";
import {
    GetPageSlugsFunc,
    getCategoryPageSlugs,
    getContentPageSlugs,
} from "../paths";
import {
    getStaticPropsForNavigation as _getStaticPropsForNavigation,
    StaticPropsForNavigation,
} from "./navigation";
import {
    getCategoryPageData as _getCategoryPageData,
    getProductPageData as _getProductPageData,
    getContentPageData as _getContentPageData,
    getLandingPageData as _getLandingPageData,
} from "./pageData";

export interface GetStaticPropsForNavigationFunc {
    (): Promise<StaticPropsForNavigation>;
}

export const getStaticPropsForNavigation = ((
    getCategoryPageSlugs: GetPageSlugsFunc,
    getContentPageSlugs: GetPageSlugsFunc
) => {
    return () => {
        return _getStaticPropsForNavigation(
            getCategoryPageSlugs,
            getContentPageSlugs
        );
    };
})(getCategoryPageSlugs, getContentPageSlugs);

export interface GetPageDataFunc<T> {
    (slug: string): Promise<T>;
}

export const getCategoryPageData: GetPageDataFunc<CategoryPageData> = ((
    fetch: FetchFunc
) => {
    return (slug) => {
        return _getCategoryPageData(fetch, slug);
    };
})(fetch);

export const getProductPageData: GetPageDataFunc<ProductPageData> = ((
    fetch: FetchFunc
) => {
    return (slug) => {
        return _getProductPageData(fetch, slug);
    };
})(fetch);

export const getContentPageData: GetPageDataFunc<ContentPageData> = ((
    fetch: FetchFunc
) => {
    return (slug) => {
        return _getContentPageData(fetch, slug);
    };
})(fetch);

export const getLandingPageData: GetPageDataFunc<LandingPageData> = ((
    fetch: FetchFunc
) => {
    return (slug) => {
        return _getLandingPageData(fetch, slug);
    };
})(fetch);
