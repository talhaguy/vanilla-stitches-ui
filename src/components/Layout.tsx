import React, { ReactNode } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { SnipCartStyle } from "../snipcart";
import { Header } from "./Header";
import { Normalize } from "./Normalize";
import { Footer } from "./Footer";

export const PageContainer = styled.main`
    padding: 0 ${(props) => props.theme.SPACING.PAGE_MARGIN};
`;

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Normalize />
            <GlobalStyle />
            <SnipCartStyle />
            <Header />
            <PageContainer>{children}</PageContainer>
            <Footer />
        </>
    );
}
