import React from "react";
import styled from "styled-components";
import { ProductOnCategoryPage } from "../models";
import { ProductListItem } from "./ProductListItem";

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export interface ProductListProps {
    products: ProductOnCategoryPage[];
}

export function ProductList({ products }: ProductListProps) {
    return (
        <Container>
            {products.map((product, i) => {
                return (
                    <ProductListItem
                        key={i}
                        urlPath={product.urlPath}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                );
            })}
        </Container>
    );
}
