import React from "react";
import styled from "styled-components";

export enum ButtonType {
    Large,
    Small,
}

interface ContainerProps {
    buttonType: ButtonType;
}

const Container = styled.button<ContainerProps>`
    background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};
    width: ${(props) =>
        props.buttonType === ButtonType.Small ? "initial" : "100%"};
    padding: ${(props) =>
            props.buttonType === ButtonType.Small ? "10px" : "15px"}
        25px;
    color: ${(props) => props.theme.COLORS.WHITE};
    text-align: center;
    text-transform: uppercase;
    font: 2.4rem ${(props) => props.theme.FONTS.SANS};
    font: ${(props) =>
        `${props.buttonType === ButtonType.Small ? "1.8rem" : "2.4rem"} ${
            props.theme.FONTS.SANS
        }`};
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    letter-spacing: 1.5px;
`;

export interface ButtonProps {
    label: string;
    type: ButtonType;
}

export function Button({ label, type }: ButtonProps) {
    return <Container buttonType={type}>{label}</Container>;
}
