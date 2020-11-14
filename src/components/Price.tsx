import React from "react";
import { PriceData } from "../models/PriceData";

export interface PriceProps {
    price: PriceData;
}

export function Price({ price }: PriceProps) {
    if (price.salePrice) {
        return (
            <div>
                Was {price.listPrice} / Now {price.salePrice}
            </div>
        );
    } else {
        return <div>{price.listPrice}</div>;
    }
}
