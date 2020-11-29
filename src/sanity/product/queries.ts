export const ALL_PRODUCT_SLUGS = `*[_type == "product"].slug.current`;

export function createFetchProductBySlugQuery(slug: string) {
    return `*[_type == "product" && slug.current == "${slug}"][0]{
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
}
