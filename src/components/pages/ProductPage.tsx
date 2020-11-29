import React from "react";
import { Layout } from "../Layout";
import { ProductPageData } from "../../pageData";
import { Price } from "../Price";
import { AddToCartButton } from "../AddToCartButton";
import { PriceData } from "../../models";

export interface ProductPageProps {
    pageData: ProductPageData;
}

function getActivePrice(price: PriceData) {
    return price.salePrice ? price.salePrice : price.listPrice;
}

export function ProductPage({ pageData }: ProductPageProps) {
    return (
        <Layout>
            <h1>{pageData.name}</h1>
            <Price price={pageData.price} />
            {pageData.description}
            <AddToCartButton
                item={{
                    id: pageData.id,
                    price: getActivePrice(pageData.price) + "",
                    url: pageData.urlPath,
                    image: pageData.images.cart,
                    name: pageData.name,
                }}
            />
            <ul>
                {pageData.images.gallery.map((image, i) => {
                    return (
                        <li key={i}>
                            <img src={image.thumb} />
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
}
