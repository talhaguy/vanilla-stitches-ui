import React, { Fragment } from "react";
import Link from "next/link";
import { NavigationLinkGroup } from "../models";
import styled from "styled-components";
import Image from "next/image";
import { FlowerHr } from "./FlowerHr";

const Container = styled.nav.attrs((props) => ({
    "data-testid": "navigation-cont",
}))`
    display: none;

    &.show {
        display: block;
    }

    .menu {
        background-color: ${(props) => props.theme.COLORS.WHITE};
        position: fixed;
        top: 0;
        left: 0;
        z-index: 600;
        width: 80%;
        height: 100%;
        overflow: hidden;
        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.25);
    }

    .overlay {
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 500;
        width: 100%;
        height: 100%;
    }

    .close {
        z-index: 610;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .links-cont {
        z-index: 610;
        padding: 20px ${(props) => props.theme.SPACING.PAGE_MARGIN};
        height: 100%;
        overflow: scroll;
    }

    .group-cont {
        // provide some bottom spacing when view is too small to fit in all the links
        &:last-child {
            margin-bottom: 40px;
        }
    }

    .group-header {
        font: 1.4rem ${(props) => props.theme.FONTS.SANS};
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 20px;
    }

    .link-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .link-list-item + .link-list-item {
        margin-top: 15px;
    }

    .link {
        font: 2rem ${(props) => props.theme.FONTS.SANS};
        letter-spacing: 1px;
        text-decoration: underline;
        color: ${(props) => props.theme.COLORS.GOLD};
        text-transform: uppercase;
    }

    .flower {
        z-index: 600;
        position: absolute;
        bottom: -60px;
        right: -117px;
        overflow: hidden;
        opacity: 0.2;

        // hide flower on screens with height less than 460px
        // b/c it overlaps with some UI elements
        @media (max-height: 460px) {
            display: none;
        }
    }

    .link-hr {
        overflow: hidden;
        margin: ${(props) => props.theme.SPACING.SECTION_INSIDE} 0;
    }
`;

interface NavigationProps {
    navigationLinkGroups: NavigationLinkGroup[];
    showNav: boolean;
    toggleNav: () => void;
}

export function Navigation({
    navigationLinkGroups,
    showNav,
    toggleNav,
}: NavigationProps) {
    return (
        <Container className={showNav ? "show" : ""}>
            <div className="menu">
                <div className="close">
                    <Image
                        src="/icon/close-black-18dp.svg"
                        layout="fixed"
                        width="36"
                        height="36"
                        onClick={toggleNav}
                        role="button"
                        aria-label="Close"
                    />
                </div>
                <div className="links-cont">
                    {navigationLinkGroups.map((group, i, arr) => {
                        return (
                            <Fragment key={i}>
                                <div className="group-cont">
                                    <h2 className="group-header">
                                        {group.label}
                                    </h2>
                                    <ul className="link-list">
                                        {group.links.map((link, j) => {
                                            return (
                                                <li
                                                    key={j}
                                                    className="link-list-item"
                                                >
                                                    <Link href={link.path}>
                                                        <a
                                                            onClick={toggleNav}
                                                            className="link"
                                                        >
                                                            {link.label}
                                                        </a>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                {arr.length - 1 !== i && (
                                    <div className="link-hr">
                                        <FlowerHr showFlowers={false} />
                                    </div>
                                )}
                            </Fragment>
                        );
                    })}
                </div>
                <div className="flower">
                    <Image
                        src="/flower/logo_flower_black_one_petal_pink_fill.svg"
                        width="327"
                        height="312"
                        layout="fixed"
                        className="flower-img"
                    />
                </div>
            </div>
            <div className="overlay"></div>
        </Container>
    );
}
