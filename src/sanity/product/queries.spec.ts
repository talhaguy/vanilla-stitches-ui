import { createFetchProductBySlugQuery } from "./queries";

describe("queries", () => {
    describe("createFetchProductBySlugQuery()", () => {
        it("should build query with slug parameter", () => {
            const slug = "cool-product";
            const expected = `*[_type == "product" && slug.current == "${slug}"][0]{
              categories[]->{
                name,
                "slug": slug.current
              },
              hidden,
              id,
              name,
              price{
                listPrice,
                salePrice
              },
              "images": {
                "gallery": productImages[]{
                  "large": large.asset->url,
                  "thumb": thumb.asset->url,
                },
                "cart": productImages[0].thumb.asset->url
              },
              "slug": slug.current,
              description
            }`;

            const result = createFetchProductBySlugQuery(slug);

            expect(result.replace(/\s/g, "")).toBe(expected.replace(/\s/g, ""));
        });
    });
});
