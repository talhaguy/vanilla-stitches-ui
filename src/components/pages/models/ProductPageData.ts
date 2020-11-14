import { PriceData } from "../../../models/PriceData";

export interface ProductPageData {
    categories: string[];
    name: string;
    description: string[];
    images: string[];
    price: PriceData;
}
