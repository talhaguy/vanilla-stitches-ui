import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useSnipCartGlobal } from "../snipcart";
import { MenuButton } from "./MenuButton";
import { MiniCart } from "./MiniCart";
import { Navigation } from "./Navigation";
import { NavigationContext } from "../context";
import Link from "next/link";

const Container = styled.header`
    background-color: ${(props) => props.theme.COLORS.LIGHT_PINK};
    height: 91px;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));

    .content {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 ${(props) => props.theme.SPACING.PAGE_MARGIN};
    }

    .logo-img {
        filter: ${(props) => props.theme.SHADOWS.ICONS};
    }

    .highlight {
        background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};
        height: 7px;
    }
`;

export interface HeaderProps {}

export function Header(props: HeaderProps) {
    const { topNavigationLinkGroups } = useContext(NavigationContext);
    const [_, snipCartRunOnInit] = useSnipCartGlobal();

    const [numItems, setNumItems] = useState(0);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        snipCartRunOnInit((snipCart) => {
            setNumItems(snipCart.store.getState().cart.items.count);
        });
    });

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <>
            <Container>
                <div className="content">
                    <MenuButton toggleNav={toggleNav} />
                    <Link href="/">
                        <a>
                            <Image
                                src="/logo/logo_as_paths_black.svg"
                                width={177}
                                height={67}
                                className="logo-img"
                            />
                        </a>
                    </Link>
                    <MiniCart numItems={numItems} />
                </div>
                <div className="highlight"></div>
            </Container>
            <Navigation
                navigationLinkGroups={topNavigationLinkGroups}
                showNav={showNav}
                toggleNav={toggleNav}
            />
        </>
    );
}
