import React from "react";
import styled from "styled-components";
import { Currency, formatPrice } from "../currency";
import { PriceData } from "../models/PriceData";

export enum PriceSize {
    Small,
    Medium,
}

interface ContainerProps {
    size: PriceSize;
}

const Container = styled.div<ContainerProps>`
    font: ${(props) => (props.size === PriceSize.Small ? "1.8rem" : "2.4rem")}
        ${(props) => props.theme.FONTS.SANS};

    .sale {
        color: ${(props) => props.theme.COLORS.BLOOD_RED};
        margin-right: 10px;
    }

    .list {
        color: ${(props) => props.theme.COLORS.BLACK};
    }

    .list-on-sale {
        color: ${(props) => props.theme.COLORS.DARK_GRAY};
        text-decoration: line-through;
    }
`;

export interface PriceProps extends ContainerProps {
    price: PriceData;
}

export function Price({ price, size }: PriceProps) {
    const isOnSale = typeof price.salePrice !== "undefined";

    // TODO: support more currencies
    return (
        <Container size={size}>
            {isOnSale && (
                <span className="sale" data-testid="sale-price">
                    {formatPrice(Currency.PhillipinesPeso, price.salePrice)}
                </span>
            )}
            <span
                className={`list ${isOnSale ? "list-on-sale" : ""}`}
                data-testid="list-price"
            >
                {formatPrice(Currency.PhillipinesPeso, price.listPrice)}
            </span>
        </Container>
    );
}
