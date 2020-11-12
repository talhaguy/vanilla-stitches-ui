export function getCategoryPageSlugs() {
    return ["colorful", "denim"];
}

export function getProductPageSlugs() {
    return ["flower-pouch", "denim-pouch"];
}

export function getContentPageSlugs() {
    return ["about", "faq"];
}

export function createPathsForStaticPage(slugs: string[]) {
    return slugs.map((slug) => {
        return {
            params: {
                slug,
            },
        };
    });
}
