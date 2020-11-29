import { SanityClient } from "@sanity/client";
import { ProductPageData, SlugPathPrepend } from "../../pageData";
import { convertBlocksToHtml } from "../html";
import { ALL_PRODUCT_SLUGS, createFetchProductBySlugQuery } from "./queries";

export async function fetchAllProductSlugs(client: SanityClient) {
    const data = await client.fetch(ALL_PRODUCT_SLUGS);
    return data as string[];
}

export interface SanityProductData
    extends Omit<ProductPageData, "description" | "urlPath"> {
    description: any[];
    slug: string;
}

export async function fetchProductBySlug(client: SanityClient, slug: string) {
    const data = await client.fetch(createFetchProductBySlugQuery(slug));
    return data as SanityProductData;
}

export function convertSanityProductDataForUI(data: SanityProductData) {
    const converted: ProductPageData = Object.assign({}, data, {
        description: convertBlocksToHtml(data.description),
        urlPath: SlugPathPrepend.ProductPage + "/" + data.slug,
    });
    return converted;
}
