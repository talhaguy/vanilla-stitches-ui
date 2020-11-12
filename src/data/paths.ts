export function getCategoryPageSlugs() {
    // TODO: make request for data...
    return ["colorful", "denim"];
}

export function getProductPageSlugs() {
    // TODO: make request for data...
    return ["flower-pouch", "denim-pouch"];
}

export function getContentPageSlugs() {
    // TODO: make request for data...
    return ["about", "faq"];
}

export function getProductsForCategory(slug: string) {
    // TODO: make request for data...
    if (slug === "colorful") {
        return ["flower-pouch"];
    } else {
        return ["denim-pouch"];
    }
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
