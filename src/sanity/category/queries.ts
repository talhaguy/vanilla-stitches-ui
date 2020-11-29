export const ALL_CATEGORY_SLUGS = `*[_type == "category"].slug.current`;

export function createFetchCategoryBySlugQuery() {
    return `*[_type == "category" && slug.current == $slug][0]{
      "heroImage": image.asset->url,
      name,
      description,
      "products": *[_type=='product' && references(^._id)]{
    		"slug": slug.current,
      	name,
      	"price": price{
    			listPrice,
      		salePrice
      	},
    		"image": productImages[0].thumb.asset->url
      }
    }`;
}
