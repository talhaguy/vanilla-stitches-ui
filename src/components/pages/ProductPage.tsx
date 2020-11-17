import React from "react";
import { StaticPropsForNavigation } from "../../data/props/navigation";
import { NavigationContext } from "../../context/NavigationContext";
import { Layout } from "../Layout";
import { ProductPageData } from "./models/ProductPageData";
import { Price } from "../Price";
import { AddToCartButton } from "../AddToCartButton";
import { PriceData } from "../../models";

export interface ProductPageProps extends StaticPropsForNavigation {
    pageData: ProductPageData;
}

function getActivePrice(price: PriceData) {
    return price.salePrice ? price.salePrice : price.listPrice;
}

export function ProductPage({
    categoryPageLinks,
    contentPageLinks,
    pageData,
}: ProductPageProps) {
    return (
        <NavigationContext.Provider
            value={{
                categoryPageLinks,
                contentPageLinks,
            }}
        >
            <Layout>
                <h1>{pageData.name}</h1>
                <Price price={pageData.price} />
                {pageData.description.map((block, i) => {
                    return <p key={i}>{block}</p>;
                })}
                <AddToCartButton
                    item={{
                        id: pageData.id,
                        price: getActivePrice(pageData.price) + "",
                        url: pageData.url,
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
        </NavigationContext.Provider>
    );
}
