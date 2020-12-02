import React from "react";
import styled from "styled-components";
import { Currency, formatPrice } from "../currency";
import { PriceData } from "../models/PriceData";

const Container = styled.div`
    font: 1.8rem ${(props) => props.theme.FONTS.SANS};

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

export interface PriceProps {
    price: PriceData;
}

export function Price({ price }: PriceProps) {
    const isOnSale = typeof price.salePrice !== "undefined";

    // TODO: support more currencies
    return (
        <Container>
            {isOnSale && (
                <span className="sale">
                    {formatPrice(Currency.PhillipinesPeso, price.salePrice)}
                </span>
            )}
            <span className={`list ${isOnSale ? "list-on-sale" : ""}`}>
                {formatPrice(Currency.PhillipinesPeso, price.listPrice)}
            </span>
        </Container>
    );
}
