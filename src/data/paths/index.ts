import { FetchFunc } from "../../network/models/fetch";
import {
    getCategoryPageSlugs as _getCategoryPageSlugs,
    getProductPageSlugs as _getProductPageSlugs,
    getContentPageSlugs as _getContentPageSlugs,
} from "./getPaths";

export interface GetPageSlugsFunc {
    (): Promise<string[]>;
}

export const getCategoryPageSlugs: GetPageSlugsFunc = ((fetch: FetchFunc) => {
    return () => {
        return _getCategoryPageSlugs(fetch);
    };
})(fetch);

export interface GetProductPageSlugsFunc {
    (): Promise<string[]>;
}

export const getProductPageSlugs: GetPageSlugsFunc = ((fetch: FetchFunc) => {
    return () => {
        return _getProductPageSlugs(fetch);
    };
})(fetch);

export interface GetCategoryPageSlugsFunc {
    (): Promise<string[]>;
}

export const getContentPageSlugs: GetPageSlugsFunc = ((fetch: FetchFunc) => {
    return () => {
        return _getContentPageSlugs(fetch);
    };
})(fetch);

export { createPathsForStaticPage } from "./util";
