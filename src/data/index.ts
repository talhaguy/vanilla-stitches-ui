export type {
    GetPageSlugsFunc,
    GetProductPageSlugsFunc,
    GetCategoryPageSlugsFunc,
} from "./paths";
export {
    getCategoryPageSlugs,
    getProductPageSlugs,
    getContentPageSlugs,
    createPathsForStaticPage,
} from "./paths";

export type { GetStaticPropsForNavigationFunc, GetPageDataFunc } from "./props";
export {
    getStaticPropsForNavigation,
    getCategoryPageData,
    getProductPageData,
    getContentPageData,
    getLandingPageData,
} from "./props";

export type { ContextSlugParameter, GetStaticPropsFunc } from "./staticData";
export { getStaticProps, getStaticPaths } from "./staticData";
