export type { PriceData } from "./PriceData";

export type { NavigationLink } from "./NavigationLink";

export type { NavigationLinkGroup } from "./NavigationLinkGroup";

export * from "./pageRenderData";

import { CategoryPageData } from "./CategoryPageData";
export type {
    CategoryPageData,
    ProductOnCategoryPage,
} from "./CategoryPageData";

import type { ContentPageData } from "./ContentPageData";
export type { ContentPageData } from "./ContentPageData";

import type { LandingPageData } from "./LandingPageData";
export type { Testimonial, LandingPageData } from "./LandingPageData";

import type { ProductPageData } from "./ProductPageData";
export type {
    ProductPageData,
    ProductPageCategory,
    ProductPageGalleryImage,
} from "./ProductPageData";

export type PageData =
    | LandingPageData
    | CategoryPageData
    | ProductPageData
    | ContentPageData;
