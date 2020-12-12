import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    overflow: hidden;
    position: relative;
    padding-top: 130px;
    margin-top: ${(props) => props.theme.SPACING.SECTION_MARGIN};

    .flower-cont {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-117px);
        z-index: 1;
        opacity: 0.2;
    }

    .footer {
        position: relative;
        z-index: 2;
        background-color: ${(props) => props.theme.COLORS.LIGHT_PINK};
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        padding: ${(props) => props.theme.SPACING.PAGE_MARGIN};
    }

    .icon-links {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .icon-link {
        display: block;
    }
`;

export interface FooterProps {}

export function Footer({}: FooterProps) {
    return (
        <Container>
            <div className="flower-cont">
                <Image
                    src="/flower/logo_flower_black_one_petal_pink_fill.svg"
                    layout="fixed"
                    width="234"
                    height="223"
                />
            </div>
            <footer className="footer">
                <ul className="icon-links">
                    <li>
                        <Link href={"https://www.facebook.com/vanillastitches"}>
                            <a className="icon-link">
                                <Image
                                    src="/icon/facebook-black-18dp.svg"
                                    layout="fixed"
                                    width="36"
                                    height="36"
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"https://www.instagram.com/vanilla.stitches/"}
                        >
                            <a className="icon-link">
                                <Image
                                    src="/icon/ig_logo.svg"
                                    layout="fixed"
                                    width="36"
                                    height="36"
                                />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"mailto:vanilla.stitches.ph@gmail.com"}>
                            <a className="icon-link">
                                <Image
                                    src="/icon/email-black-18dp.svg"
                                    layout="fixed"
                                    width="36"
                                    height="36"
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </footer>
        </Container>
    );
}
