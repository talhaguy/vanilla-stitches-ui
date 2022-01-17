import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Layout } from "../../components/Layout";
import { ContentPageData } from "../../models";
import { HeroImage } from "../HeroImage";

const Container = styled.div`
    .content {
        margin: ${(props) => props.theme.SPACING.SECTION_MARGIN} 0;
        font: 1.8rem ${(props) => props.theme.FONTS.SANS};
    }
`;

const Title = styled.h1`
    margin: 0;
    font: inherit;
`;

export interface ContentPageProps {
    pageData: ContentPageData;
}

export function ContentPage({ pageData }: ContentPageProps) {
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
                    className="content"
                    dangerouslySetInnerHTML={{ __html: pageData.content }}
                />
            </Container>
        </Layout>
    );
}
