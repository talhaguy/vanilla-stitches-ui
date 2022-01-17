import { PriceData } from "./PriceData";

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
    category: ProductPageCategory;
    name: string;
    description: string;
    images: {
        gallery: ProductPageGalleryImage[];
        cart: string;
    };
    price: PriceData;
    urlPath: string;
}
