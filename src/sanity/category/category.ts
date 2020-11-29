import { SanityClient } from "@sanity/client";
import {
    CategoryPageData,
    ProductOnCategoryPage,
    SlugPathPrepend,
} from "../../pageData";
import { convertBlocksToHtml } from "../html";
import { ALL_CATEGORY_SLUGS, createFetchCategoryBySlugQuery } from "./queries";

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
    const data = await client.fetch(createFetchCategoryBySlugQuery(), {
        slug,
    });
    return data as SanityCategoryData;
}

export function convertSanityCategoryDataForUI(data: SanityCategoryData) {
    const convertedProducts: ProductOnCategoryPage[] = data.products.map(
        (sanityProduct) => {
            return Object.assign({}, sanityProduct, {
                urlPath: SlugPathPrepend.ProductPage + "/" + sanityProduct.slug,
            });
        }
    );
    const converted: CategoryPageData = Object.assign({}, data, {
        description: convertBlocksToHtml(data.description),
        products: convertedProducts,
    });
    return converted;
}
