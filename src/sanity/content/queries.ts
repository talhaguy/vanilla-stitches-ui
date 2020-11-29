export const ALL_CONTENT_SLUGS = `*[_type == "contentPage"].slug.current`;

export function createFetchContentBySlugQuery() {
    return `*[_type == "contentPage" && slug.current == $slug][0]{
      name,
      "heroImage": image.asset->url,
      content
    }`;
}
