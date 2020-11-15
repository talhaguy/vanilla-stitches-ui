import { PriceData } from "../../../models/PriceData";

export interface ProductOnCategoryPage {
    slug: string;
    name: string;
    price: PriceData;
    image: string;
}

export interface CategoryPageData {
    heroImage: string;
    name: string;
    description: string[];
    products: ProductOnCategoryPage[];
}
