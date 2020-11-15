import React from "react";
import { StaticPropsForNavigation } from "../../data/props/navigation";
import { NavigationContext } from "../../context/NavigationContext";
import { Layout } from "../../components/Layout";
import Link from "next/link";
import { CategoryPageData } from "./models/CategoryPageData";
import { Price } from "../Price";

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
                                <Link href={"/product/" + product.slug}>
                                    <a>
                                        <img src={product.image} />
                                        <div>{product.name}</div>
                                        <Price price={product.price} />
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
