import { CategoryPageData } from "./CategoryPageData";
import { ContentPageData } from "./ContentPageData";
import { LandingPageData } from "./LandingPageData";
import { ProductPageData } from "./ProductPageData";

export type PageData =
    | LandingPageData
    | CategoryPageData
    | ProductPageData
    | ContentPageData;
