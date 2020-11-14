import { categoryPageData } from "../../test/mocks/categoryPageData";
import { contentPageData } from "../../test/mocks/contentPageData";
import { productPageData } from "../../test/mocks/productPageData";
import { CategoryPageData } from "../components/pages/models/CategoryPageData";
import { ContentPageData } from "../components/pages/models/ContentPageData";
import { ProductPageData } from "../components/pages/models/ProductPageData";
import { getCategoryPageSlugs, getContentPageSlugs } from "./paths";

export interface StaticPropsForNavigation {
    categoryPageLinks: string[];
    contentPageLinks: string[];
}

export interface GetStaticPropsForNavigationFunc {
    (): StaticPropsForNavigation;
}

export const getStaticPropsForNavigation: GetStaticPropsForNavigationFunc = () => {
    let categoryPageLinks = getCategoryPageSlugs();
    categoryPageLinks = categoryPageLinks.map((link) => "/category/" + link);

    let contentPageLinks = getContentPageSlugs();
    contentPageLinks = contentPageLinks.map((link) => "/page/" + link);

    return {
        categoryPageLinks,
        contentPageLinks,
    };
};

export interface GetProductPageDataFunc {
    (): ProductPageData;
}

export const getProductPageData: GetProductPageDataFunc = () => {
    return productPageData;
};

export interface GetCategoryPageDataFunc {
    (): CategoryPageData;
}

export const getCategoryPageData: GetCategoryPageDataFunc = () => {
    return categoryPageData;
};

export interface GetContentPageDataFunc {
    (): ContentPageData;
}

export const getContentPageData: GetContentPageDataFunc = () => {
    return contentPageData;
};
