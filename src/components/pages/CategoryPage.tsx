import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Layout } from "../../components/Layout";
import { CategoryPageData } from "../../models";
import { FlowerHr } from "../FlowerHr";
import { HeroImage } from "../HeroImage";
import { ProductList } from "../ProductList";

const Container = styled.div`
    .description {
        margin: ${(props) => props.theme.SPACING.SECTION_MARGIN} 0;
        font: 1.8rem ${(props) => props.theme.FONTS.SANS};
    }

    .flower-hr {
        margin-bottom: ${(props) => props.theme.SPACING.SECTION_MARGIN};
    }
`;

const Title = styled.h1`
    margin: 0;
    font: inherit;
`;

export interface CategoryPageProps {
    pageData: CategoryPageData;
}

export function CategoryPage({ pageData }: CategoryPageProps) {
    return (
        <Layout>
            <Container>
                <Head>
                    <title>{pageData.name}</title>
                </Head>
                <HeroImage imagePath={pageData.heroImage}>
                    <Title>{pageData.name}</Title>
                </HeroImage>
                <div
                    className="description"
                    dangerouslySetInnerHTML={{
                        __html: pageData.description,
                    }}
                />
                <div className="flower-hr">
                    <FlowerHr showFlowers={true} />
                </div>
                <ProductList products={pageData.products} />
            </Container>
        </Layout>
    );
}
