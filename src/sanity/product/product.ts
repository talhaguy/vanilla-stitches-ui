import { SanityClient } from "@sanity/client";
import {
    ProductPageCategory,
    ProductPageData,
    SlugPathPrepend,
} from "../../pageData";
import { convertBlocksToHtml } from "../html";
import { ALL_PRODUCT_SLUGS, createFetchProductBySlugQuery } from "./queries";

export async function fetchAllProductSlugs(client: SanityClient) {
    const data = await client.fetch(ALL_PRODUCT_SLUGS);
    return data as string[];
}

export interface SanityProductPageCategory
    extends Omit<ProductPageCategory, "urlPath"> {
    slug: string;
}

export interface SanityProductData
    extends Omit<ProductPageData, "description" | "urlPath" | "categories"> {
    description: any[];
    slug: string;
    categories: SanityProductPageCategory[];
}

export async function fetchProductBySlug(client: SanityClient, slug: string) {
    const data = await client.fetch(createFetchProductBySlugQuery(slug));
    return data as SanityProductData;
}

export function convertSanityProductDataForUI(data: SanityProductData) {
    const convertedCategories: ProductPageCategory[] = data.categories.map(
        (sanityCategory) => {
            const { slug, ...otherProperties } = sanityCategory;
            return {
                ...otherProperties,
                urlPath: SlugPathPrepend.CategoryPage + "/" + slug,
            };
        }
    );

    const { slug, ...otherProperties } = data;
    return {
        ...otherProperties,
        description: convertBlocksToHtml(data.description),
        urlPath: SlugPathPrepend.ProductPage + "/" + slug,
        categories: convertedCategories,
    };
}
