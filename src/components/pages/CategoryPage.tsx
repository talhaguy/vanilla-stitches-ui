import React from "react";
import { Layout } from "../../components/Layout";
import Link from "next/link";
import { CategoryPageData } from "../../pageData";
import { Price } from "../Price";

export interface CategoryPageProps {
    pageData: CategoryPageData;
}

export function CategoryPage({ pageData }: CategoryPageProps) {
    return (
        <Layout>
            <h1>{pageData.name}</h1>
            <div>
                <img src={pageData.heroImage} />
            </div>
            {pageData.description}
            <p>{pageData.description}</p>
            <ul>
                {pageData.products.map((product, i) => {
                    return (
                        <li key={i}>
                            <Link href={product.urlPath}>
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
    );
}
