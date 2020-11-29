import React, { ReactNode, useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Normalize } from "./Normalize";

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
            {children}
        </>
    );
}
