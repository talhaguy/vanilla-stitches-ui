import { partial } from "lodash";
import {
    GetPageSlugsFunction,
    GetPageDataFunction,
    ContentPageData,
} from "../../pageData";
import {
    convertSanityContentDataForUI,
    fetchAllContentSlugs as _fetchAllContentSlugs,
    fetchContentBySlug as _fetchContentBySlug,
} from "./content";
import { getClient } from "../client";

export const fetchAllContentSlugs: GetPageSlugsFunction = partial(
    _fetchAllContentSlugs,
    getClient()
);

const fetchContentBySlugPartial = partial(_fetchContentBySlug, getClient());

export const fetchContentBySlug: GetPageDataFunction<ContentPageData> = (
    slug: string
) => fetchContentBySlugPartial(slug).then(convertSanityContentDataForUI);
