import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ButtonStyleReset } from "./styles/ButtonStyleReset";

const Container = styled(ButtonStyleReset)`
    .hamburger-img {
        filter: ${(props) => props.theme.SHADOWS.ICONS};
    }
`;

export interface MenuButtonProps {
    toggleNav: () => void;
}

export function MenuButton({ toggleNav }: MenuButtonProps) {
    return (
        <Container onClick={toggleNav}>
            <Image
                src="/icon/menu-black-18dp.svg"
                width={36}
                height={36}
                className="hamburger-img"
            />
        </Container>
    );
}
