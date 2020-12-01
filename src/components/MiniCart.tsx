import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ButtonStyleReset } from "./styles/ButtonStyleReset";
import { CSSClass } from "../snipcart";

const Container = styled(ButtonStyleReset)`
    position: relative;

    .cart-img {
        filter: ${(props) => props.theme.SHADOWS.ICONS};
    }

    .num-items {
        position: absolute;
        top: -3px;
        right: -4px;
        width: 21px;
        height: 21px;
        background-color: ${(props) => props.theme.COLORS.WHITE};
        border 1px solid ${(props) => props.theme.COLORS.BLACK};
        border-radius: 21px;
        font: 1.2rem ${(props) => props.theme.FONTS.SANS};
        text-align: center;
        line-height: 19px;
    }
`;

export interface MiniCartProps {
    numItems: number;
}

export function MiniCart({ numItems }: MiniCartProps) {
    return (
        <Container className={CSSClass.Cart}>
            <Image
                src="/icon/shopping_bag-black-18dp.svg"
                width={36}
                height={36}
                className="cart-img"
            />
            {numItems > 0 && <div className="num-items">{numItems}</div>}
        </Container>
    );
}
