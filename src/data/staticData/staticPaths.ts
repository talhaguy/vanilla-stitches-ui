import { createPathsForStaticPage, GetPageSlugsFunc } from "../paths";
import { GetStaticPathsResult } from "next";

export interface GetStaticPathsFunc {
    (getPageSlugs: GetPageSlugsFunc): Promise<GetStaticPathsResult>;
}

export const getStaticPaths: GetStaticPathsFunc = async (getPageSlugs) => {
    const slugs = await getPageSlugs();
    const paths = createPathsForStaticPage(slugs);

    return {
        paths,
        fallback: false,
    };
};
