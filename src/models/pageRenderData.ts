import { ParsedUrlQuery } from "querystring";
import { NavigationLinkGroup } from "./NavigationLinkGroup";

export interface ContextSlugParameter extends ParsedUrlQuery {
    slug: string;
}

export interface AppStaticPropsResult<T> {
    topNavigationLinkGroups: NavigationLinkGroup[];
    pageData: T;
}
