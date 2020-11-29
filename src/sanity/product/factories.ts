import { partial } from "lodash";
import {
    GetPageSlugsFunction,
    GetPageDataFunction,
    ProductPageData,
} from "../../pageData";
import {
    convertSanityProductDataForUI,
    fetchAllProductSlugs as _fetchAllProductSlugs,
    fetchProductBySlug as _fetchProductBySlug,
} from "./product";
import { getClient } from "../client";

export const fetchAllProductSlugs: GetPageSlugsFunction = partial(
    _fetchAllProductSlugs,
    getClient()
);

const fetchProductBySlugPartial = partial(_fetchProductBySlug, getClient());

export const fetchProductBySlug: GetPageDataFunction<ProductPageData> = (
    slug: string
) => fetchProductBySlugPartial(slug).then(convertSanityProductDataForUI);
