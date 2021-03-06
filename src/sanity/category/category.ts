import { SanityClient } from "@sanity/client";
import {
    CategoryPageData,
    ProductOnCategoryPage,
    SlugPathPrepend,
} from "../../pageData";
import { convertBlocksToHtml } from "../html";
import { ALL_CATEGORY_SLUGS, FETCH_CATEGORY_BY_SLUG_QUERY } from "./queries";

export async function fetchAllCategorySlugs(client: SanityClient) {
    const data = await client.fetch(ALL_CATEGORY_SLUGS);
    return data as string[];
}

export interface SanityProductOnCategoryPageData
    extends Omit<ProductOnCategoryPage, "urlPath"> {
    slug: string;
}

export interface SanityCategoryData
    extends Omit<CategoryPageData, "description" | "products"> {
    description: any[];
    products: SanityProductOnCategoryPageData[];
}

export async function fetchCategoryBySlug(client: SanityClient, slug: string) {
    const data = await client.fetch(FETCH_CATEGORY_BY_SLUG_QUERY, {
        slug,
    });
    return data as SanityCategoryData;
}

export function convertSanityCategoryDataForUI(data: SanityCategoryData) {
    const convertedProducts: ProductOnCategoryPage[] = data.products.map(
        (sanityProduct) => {
            const { slug, ...otherProperties } = sanityProduct;
            return {
                ...otherProperties,
                urlPath: SlugPathPrepend.ProductPage + "/" + slug,
            };
        }
    );
    const converted: CategoryPageData = Object.assign({}, data, {
        description: convertBlocksToHtml(data.description),
        products: convertedProducts,
    });
    return converted;
}
