import { GetStaticPathsResult } from "next";
import { GetPageSlugsFunction } from "./dataInterface/GetPageSlugsFunction";

function createStaticPathResult(slugs: string[]) {
    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug,
                },
            };
        }),
        fallback: false,
    } as GetStaticPathsResult;
}

export async function getStaticPaths(getPageSlugs: GetPageSlugsFunction) {
    const slugs = await getPageSlugs();
    return createStaticPathResult(slugs);
}
