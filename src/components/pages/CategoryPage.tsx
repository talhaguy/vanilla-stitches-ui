import React from "react";
import { Layout } from "../../components/Layout";
import { CategoryPageData } from "../../pageData";
import { ProductList } from "../ProductList";

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
            <ProductList products={pageData.products} />
        </Layout>
    );
}
