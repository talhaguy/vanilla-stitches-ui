import React from "react";
import { StaticPropsForNavigation } from "../../data/props";
import { NavigationContext } from "../../context/NavigationContext";
import { Layout } from "../../components/Layout";
import Link from "next/link";
import { CategoryPageData } from "./models/CategoryPageData";

export interface CategoryPageProps extends StaticPropsForNavigation {
    pageData: CategoryPageData;
}

export function CategoryPage({
    categoryPageLinks,
    contentPageLinks,
    pageData,
}: CategoryPageProps) {
    return (
        <NavigationContext.Provider
            value={{
                categoryPageLinks,
                contentPageLinks,
            }}
        >
            <Layout>
                <h1>{pageData.name}</h1>
                <div>
                    <img src={pageData.heroImage} />
                </div>
                {pageData.description.map((block, i) => {
                    return <p key={i}>{block}</p>;
                })}
                <p>{pageData.description}</p>
                <ul>
                    {pageData.products.map((product, i) => {
                        return (
                            <li key={i}>
                                <Link href={product.link}>
                                    <a>
                                        <img src={product.image} />
                                        <div>{product.name}</div>
                                        <div>
                                            {product.price.salePrice
                                                ? product.price.salePrice
                                                : product.price.listPrice}
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Layout>
        </NavigationContext.Provider>
    );
}
