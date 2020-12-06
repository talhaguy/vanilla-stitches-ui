import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface ContainerProps {
    height: number;
}

const Container = styled.div<ContainerProps>`
    position: relative;
    height: ${(props) => props.height}px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    margin: 0 -${(props) => props.theme.SPACING.PAGE_MARGIN};

    .title-cont {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .title-child-cont {
        font: 3rem ${(props) => props.theme.FONTS.SANS};
        letter-spacing: 2px;
        text-transform: uppercase;
        text-align: center;
        color: ${(props) => props.theme.COLORS.WHITE};
    }

    .img-cont {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: ${(props) => props.height}px;
    }
`;

export interface HeroImageProps {
    imagePath: string;
    children: React.ReactNode;
}

export function HeroImage({ imagePath, children }: HeroImageProps) {
    const HEIGHT = 208;

    return (
        <Container height={HEIGHT}>
            <div className="title-cont">
                <div className="title-child-cont">{children}</div>
            </div>
            <div>
                <Image src={imagePath} layout="fill" objectFit="cover" />
            </div>
        </Container>
    );
}
