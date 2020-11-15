import { FetchFunc } from "../../models/fetch";
import { ApiUrl } from "../constants/ApiUrl";

export interface GetPageSlugsFunc {
    (fetch: FetchFunc): Promise<string[]>;
}

export const getCategoryPageSlugs: GetPageSlugsFunc = async (fetch) => {
    // TODO: remove mock data
    try {
        const response = await fetch(ApiUrl.CategoryPageSlugs);
        return response.json();
    } catch (err) {
        return ["colorful", "denim"];
    }
};

export const getProductPageSlugs: GetPageSlugsFunc = async (fetch) => {
    // TODO: remove mock data
    try {
        const response = await fetch(ApiUrl.ProductPageSlugs);
        return response.json();
    } catch (err) {
        return ["flower-pouch", "denim-pouch"];
    }
};

export const getContentPageSlugs: GetPageSlugsFunc = async (fetch) => {
    // TODO: remove mock data
    try {
        const response = await fetch(ApiUrl.ContentPageSlugs);
        return response.json();
    } catch (err) {
        return ["about", "faq"];
    }
};
