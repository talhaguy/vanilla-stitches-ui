import { SanityClient } from "@sanity/client";
import { NavigationLink, NavigationLinkGroup } from "../../models";
import { SlugPathPrepend } from "../../pageData";
import { FETCH_NAVIGATION_LINKS_QUERY } from "./queries";

export enum SanityPageType {
    Product = "product",
    Category = "category",
    Content = "contentPage",
}

export interface SanityNavigationLinkData extends Omit<NavigationLink, "path"> {
    slug: string;
    type: SanityPageType;
}

export interface SanityNavigationLinkGroupData
    extends Omit<NavigationLinkGroup, "links"> {
    links: SanityNavigationLinkData[];
}

export async function fetchNavigationLinks(client: SanityClient) {
    const data = await client.fetch(FETCH_NAVIGATION_LINKS_QUERY);
    return data as SanityNavigationLinkGroupData[];
}

export function convertSanityNavigationLinkGroupDataForUI(
    data: SanityNavigationLinkGroupData[]
) {
    let converted: NavigationLinkGroup[] = [];

    data.forEach((group) => {
        converted.push({
            label: group.label,
            links: group.links.map((link) => {
                let path: string;

                switch (link.type) {
                    case SanityPageType.Category:
                        path = SlugPathPrepend.CategoryPage + "/" + link.slug;
                        break;
                    case SanityPageType.Product:
                        path = SlugPathPrepend.ProductPage + "/" + link.slug;
                        break;
                    case SanityPageType.Content:
                        path = SlugPathPrepend.ContentPage + "/" + link.slug;
                        break;
                    default:
                        path = "";
                        break;
                }

                return {
                    label: link.label,
                    path,
                };
            }),
        });
    });

    return converted;
}
