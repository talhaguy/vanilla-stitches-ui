import React from "react";
import styled from "styled-components";
import Link from "next/link";

export enum ButtonType {
    Anchor,
    Button,
}

export enum ButtonSize {
    Large,
    Small,
}

interface ContainerProps {
    buttonType: ButtonType;
    buttonSize: ButtonSize;
}

const Container = styled.div<ContainerProps>`
    .btn,
    .anchor {
        background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};
        width: ${(props) =>
            props.buttonSize === ButtonSize.Small ? "initial" : "100%"};
        padding: ${(props) =>
                props.buttonSize === ButtonSize.Small ? "10px" : "15px"}
            25px;
        color: ${(props) => props.theme.COLORS.WHITE};
        text-align: center;
        text-transform: uppercase;
        font: 2.4rem ${(props) => props.theme.FONTS.SANS};
        font: ${(props) =>
            `${props.buttonSize === ButtonSize.Small ? "1.8rem" : "2.4rem"} ${
                props.theme.FONTS.SANS
            }`};
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        letter-spacing: 1.5px;
    }

    .btn {
        border: none;
    }

    .anchor {
        display: inline-block;
        text-decoration: none;
    }
`;

export interface ButtonProps {
    label: string;
    type: ButtonType;
    size: ButtonSize;
    linkForAnchor?: string;
}

export function Button({ label, size, type, linkForAnchor }: ButtonProps) {
    return (
        <Container buttonType={type} buttonSize={size}>
            {type === ButtonType.Button ? (
                <button className="btn">{label}</button>
            ) : (
                <Link href={linkForAnchor}>
                    <a className="anchor">{label}</a>
                </Link>
            )}
        </Container>
    );
}
