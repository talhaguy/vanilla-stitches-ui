import React, { ReactNode, useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const { categoryPageLinks, contentPageLinks } = useContext(
        NavigationContext
    );

    return (
        <>
            <Header />
            <Navigation
                categoryPageLinks={categoryPageLinks}
                contentPageLinks={contentPageLinks}
            />
            {children}
        </>
    );
}
