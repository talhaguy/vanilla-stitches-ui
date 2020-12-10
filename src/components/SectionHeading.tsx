import React from "react";
import styled from "styled-components";

const Container = styled.h2`
    font: 2.4rem ${(props) => props.theme.FONTS.SANS};
    text-transform: uppercase;
    text-align: center;
    margin: 10px;
`;

export interface SectionHeadingProps {
    title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
    return <Container>{title}</Container>;
}
