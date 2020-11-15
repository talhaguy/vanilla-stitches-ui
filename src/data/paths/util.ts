export interface CreatePathsForStaticPageFunc {
    (slugs: string[]): {
        params: {
            slug: string;
        };
    }[];
}

export const createPathsForStaticPage: CreatePathsForStaticPageFunc = (
    slugs
) => {
    return slugs.map((slug) => {
        return {
            params: {
                slug,
            },
        };
    });
};
