import React from "react";
import styled from "styled-components";

const Container = styled.button`
    background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};
    width: 100%;
    padding: 15px;
    color: ${(props) => props.theme.COLORS.WHITE};
    text-align: center;
    text-transform: uppercase;
    font: 2.4rem ${(props) => props.theme.FONTS.SANS};
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    letter-spacing: 1.5px;
`;

export interface ButtonProps {
    label: string;
}

export function Button({ label }: ButtonProps) {
    return <Container>{label}</Container>;
}
