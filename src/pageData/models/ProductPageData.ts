import { PriceData } from "../../models/PriceData";

export interface ProductPageGalleryImage {
    thumb: string;
    large: string;
}

export interface ProductPageCategory {
    name: string;
    urlPath: string;
}

export interface ProductPageData {
    id: string;
    categories: ProductPageCategory[];
    name: string;
    description: string;
    images: {
        gallery: ProductPageGalleryImage[];
        cart: string;
    };
    price: PriceData;
    urlPath: string;
}
