import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { CategoryPageData } from "../../pageData";
import { HeroImage } from "../HeroImage";
import { ProductList } from "../ProductList";

const Title = styled.h1`
    margin: 0;
    font: inherit;
`;

export interface CategoryPageProps {
    pageData: CategoryPageData;
}

export function CategoryPage({ pageData }: CategoryPageProps) {
    return (
        <Layout>
            <HeroImage imagePath={pageData.heroImage}>
                <Title>{pageData.name}</Title>
            </HeroImage>
            {pageData.description}
            <p>{pageData.description}</p>
            <ProductList products={pageData.products} />
        </Layout>
    );
}
