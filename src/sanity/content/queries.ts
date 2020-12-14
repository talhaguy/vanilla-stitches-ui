export const ALL_CONTENT_SLUGS = `*[_type == "contentPage"].slug.current`;

export const FETCH_CONTENT_BY_SLUG_QUERY = `*[_type == "contentPage" && slug.current == $slug][0]{
  name,
  "heroImage": image.asset->url,
  content
}`;
