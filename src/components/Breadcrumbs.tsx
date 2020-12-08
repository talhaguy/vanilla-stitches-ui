import Link from "next/link";
import React, { Fragment } from "react";
import styled from "styled-components";
import { ProductPageCategory } from "../pageData";

const Container = styled.div`
    font: 1.8rem ${(props) => props.theme.FONTS.SANS};
    text-transform: uppercase;
    letter-spacing: 0.1rem;

    .link {
        color: ${(props) => props.theme.COLORS.GOLD};
    }
`;

export interface BreadcrumbProps {
    categories: ProductPageCategory[];
}

export function Breadcrumbs({ categories }: BreadcrumbProps) {
    return (
        <Container>
            {categories.map((category, i, arr) => (
                <Fragment key={i}>
                    <Link href={category.urlPath} key={i}>
                        <a className="link">{category.name}</a>
                    </Link>
                    {i !== arr.length - 1 && " | "}
                </Fragment>
            ))}
        </Container>
    );
}
