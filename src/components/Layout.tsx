import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { NavigationContext } from "../context/NavigationContext";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Normalize } from "./Normalize";

export const PageContainer = styled.main`
    padding: 0 ${(props) => props.theme.SPACING.PAGE_MARGIN};
`;

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const { topNavigationLinkGroups } = useContext(NavigationContext);

    return (
        <>
            <Normalize />
            <GlobalStyle />
            <Header />
            <Navigation navigationLinkGroups={topNavigationLinkGroups} />
            <PageContainer>{children}</PageContainer>
        </>
    );
}
