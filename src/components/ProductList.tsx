import React from "react";
import styled from "styled-components";
import { ProductOnCategoryPage } from "../models";
import { ProductListItem } from "./ProductListItem";

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;

    .product {
        width: calc(50% - (${(props) => props.theme.SPACING.PAGE_MARGIN} / 2));

        &:nth-child(n + 3) {
            margin-top: ${(props) => props.theme.SPACING.SECTION_INSIDE};
        }
    }
`;

export interface ProductListProps {
    products: ProductOnCategoryPage[];
}

export function ProductList({ products }: ProductListProps) {
    return (
        <Container>
            {products.map((product, i) => {
                return (
                    <div className="product">
                        <ProductListItem
                            key={i}
                            urlPath={product.urlPath}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    </div>
                );
            })}
        </Container>
    );
}
