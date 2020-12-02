import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Price } from "./Price";
import { PriceData } from "../models";
import Image from "next/image";

const Container = styled.li`
    width: 50%;

    &:nth-child(odd) {
        padding-right: 5px;
    }

    &:nth-child(even) {
        padding-left: 5px;
    }

    &:nth-child(n + 3) {
        margin-top: ${(props) => props.theme.SPACING.SECTION_INSIDE};
    }

    .link {
        display: block;
        text-decoration: none;
    }

    .product-name {
        font: 1.8rem ${(props) => props.theme.FONTS.SANS};
        color: ${(props) => props.theme.COLORS.BLACK};
        text-decoration: none;
        margin: 6px 0 0;
    }
`;

export interface ProductListItemProps {
    urlPath: string;
    image: string;
    name: string;
    price: PriceData;
}

export function ProductListItem({
    urlPath,
    image,
    name,
    price,
}: ProductListItemProps) {
    return (
        <Container>
            <Link href={urlPath}>
                <a className="link">
                    <Image
                        src={image}
                        width={200}
                        height={144}
                        layout="responsive"
                        className="img"
                    />
                    <div className="product-name">{name}</div>
                    <Price price={price} />
                </a>
            </Link>
        </Container>
    );
}
