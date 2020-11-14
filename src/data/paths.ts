export interface GetPageSlugsFunc {
    (): string[];
}

export const getCategoryPageSlugs: GetPageSlugsFunc = () => {
    // TODO: make request for data...
    return ["colorful", "denim"];
};

export const getProductPageSlugs: GetPageSlugsFunc = () => {
    // TODO: make request for data...
    return ["flower-pouch", "denim-pouch"];
};

export const getContentPageSlugs: GetPageSlugsFunc = () => {
    // TODO: make request for data...
    return ["about", "faq"];
};

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
