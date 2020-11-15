import { categoryPageData } from "../../../test/mocks/categoryPageData";
import { contentPageData } from "../../../test/mocks/contentPageData";
import { landingPageData } from "../../../test/mocks/landingPageData";
import { productPageData } from "../../../test/mocks/productPageData";
import { CategoryPageData } from "../../components/pages/models/CategoryPageData";
import { ContentPageData } from "../../components/pages/models/ContentPageData";
import { LandingPageData } from "../../components/pages/models/LandingPageData";
import { ProductPageData } from "../../components/pages/models/ProductPageData";
import { FetchFunc } from "../../network/models/fetch";
import { ApiUrl } from "../constants/ApiUrl";

export interface GetPageDataFunc<T> {
    (fetch: FetchFunc, slug: string): Promise<T>;
}

export const getProductPageData: GetPageDataFunc<ProductPageData> = async (
    fetch,
    slug
) => {
    // TODO: remove mock data
    try {
        const response = await fetch(ApiUrl.ProductPageData + "?slug=" + slug);
        return await response.json();
    } catch (err) {
        return Promise.resolve(productPageData);
    }
};

export const getCategoryPageData: GetPageDataFunc<CategoryPageData> = async (
    fetch,
    slug
) => {
    // TODO: remove mock data
    try {
        const response = await fetch(ApiUrl.CategoryPageData + "?slug=" + slug);
        return await response.json();
    } catch (err) {
        return Promise.resolve(categoryPageData);
    }
};

export const getContentPageData: GetPageDataFunc<ContentPageData> = async (
    fetch,
    slug
) => {
    // TODO: remove mock data
    try {
        const response = await fetch(ApiUrl.ContentPageData + "?slug=" + slug);
        return await response.json();
    } catch (err) {
        return Promise.resolve(contentPageData);
    }
};

export const getLandingPageData: GetPageDataFunc<LandingPageData> = async (
    fetch,
    slug
) => {
    // TODO: remove mock data
    try {
        const response = await fetch(ApiUrl.LandingPageData + "?slug=" + slug);
        return await response.json();
    } catch (err) {
        return Promise.resolve(landingPageData);
    }
};
