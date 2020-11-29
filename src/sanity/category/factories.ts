import { partial } from "lodash";
import {
    GetPageSlugsFunction,
    GetPageDataFunction,
    CategoryPageData,
} from "../../pageData";
import {
    convertSanityCategoryDataForUI,
    fetchAllCategorySlugs as _fetchAllCategorySlugs,
    fetchCategoryBySlug as _fetchCategoryBySlug,
} from "./category";
import { getClient } from "../client";

export const fetchAllCategorySlugs: GetPageSlugsFunction = partial(
    _fetchAllCategorySlugs,
    getClient()
);

const fetchCategoryBySlugPartial = partial(_fetchCategoryBySlug, getClient());

export const fetchCategoryBySlug: GetPageDataFunction<CategoryPageData> = (
    slug: string
) => fetchCategoryBySlugPartial(slug).then(convertSanityCategoryDataForUI);
