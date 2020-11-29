import { SanityClient } from "@sanity/client";
import { ContentPageData } from "../../pageData";
import { convertBlocksToHtml } from "../html";
import { ALL_CONTENT_SLUGS, createFetchContentBySlugQuery } from "./queries";

export async function fetchAllContentSlugs(client: SanityClient) {
    const data = await client.fetch(ALL_CONTENT_SLUGS);
    return data as string[];
}

export interface SanityContentData extends Omit<ContentPageData, "content"> {
    content: any[];
}

export async function fetchContentBySlug(client: SanityClient, slug: string) {
    const data = await client.fetch(createFetchContentBySlugQuery(), {
        slug,
    });
    return data as SanityContentData;
}

export function convertSanityContentDataForUI(data: SanityContentData) {
    const converted: ContentPageData = Object.assign({}, data, {
        content: convertBlocksToHtml(data.content),
    });
    return converted;
}
