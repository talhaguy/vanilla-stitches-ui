import { ParsedUrlQuery } from "querystring";

export interface ContextSlugParameter extends ParsedUrlQuery {
    slug: string;
}
