import { getCategoryPageSlugs, getContentPageSlugs } from "./paths";

export interface StaticPropsForNavigation {
    categoryPageLinks: string[];
    contentPageLinks: string[];
}

export function getStaticPropsForNavigation() {
    let categoryPageLinks = getCategoryPageSlugs();
    categoryPageLinks = categoryPageLinks.map((link) => "/category/" + link);

    let contentPageLinks = getContentPageSlugs();
    contentPageLinks = contentPageLinks.map((link) => "/page/" + link);

    return {
        categoryPageLinks,
        contentPageLinks,
    };
}
