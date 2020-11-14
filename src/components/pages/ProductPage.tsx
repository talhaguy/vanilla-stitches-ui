import React from "react";
import { StaticPropsForNavigation } from "../../data/props";
import { NavigationContext } from "../../context/NavigationContext";
import { Layout } from "../Layout";
import { ProductPageData } from "./models/ProductPageData";
import { Price } from "../Price";

export interface ProductPageProps extends StaticPropsForNavigation {
    pageData: ProductPageData;
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
                <ul>
                    {pageData.images.map((image, i) => {
                        return (
                            <li key={i}>
                                <img src={image} />
                            </li>
                        );
                    })}
                </ul>
            </Layout>
        </NavigationContext.Provider>
    );
}
