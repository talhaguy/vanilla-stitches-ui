import Link from "next/link";
import React, { Fragment } from "react";
import styled from "styled-components";
import { ProductPageCategory } from "../pageData";

const Container = styled.div.attrs((props) => ({
    "data-testid": "breadcrumbs-cont",
}))`
    font: 1.8rem ${(props) => props.theme.FONTS.SANS};
    text-transform: uppercase;
    letter-spacing: 0.1rem;

    .link {
        color: ${(props) => props.theme.COLORS.GOLD};
    }
`;

export interface BreadcrumbProps {
    category: ProductPageCategory;
}

export function Breadcrumbs({ category }: BreadcrumbProps) {
    return (
        <Container>
            <Link href={category.urlPath}>
                <a className="link">{category.name}</a>
            </Link>
        </Container>
    );
}
