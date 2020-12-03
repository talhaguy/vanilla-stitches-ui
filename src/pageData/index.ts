export type {
    CategoryPageData,
    ProductOnCategoryPage,
} from "./models/CategoryPageData";
export type { ContentPageData } from "./models/ContentPageData";
export type { LandingPageData } from "./models/LandingPageData";
export type {
    ProductPageData,
    ProductPageCategory,
    ProductPageGalleryImage,
} from "./models/ProductPageData";
export type { PageData } from "./models/PageData";

export { ApiUrl } from "./constants/ApiUrl";
export { SlugPathPrepend } from "./constants/SlugPathPrepend";

export type { GetNavigationLinkGroupDataFunction } from "./dataInterface/GetNavigationLinkGroupDataFunction";
export type { GetPageDataFunction } from "./dataInterface/GetPageDataFunction";
export type { GetPageSlugsFunction } from "./dataInterface/GetPageSlugsFunction";

export { getStaticPaths } from "./getStaticPaths";

export type {
    ContextSlugParameter,
    AppStaticPropsResult,
    GetStaticPropsFunc,
} from "./getStaticProps";
export { getStaticProps } from "./getStaticProps";
