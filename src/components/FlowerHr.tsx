import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface ContainerProps {
    imgWidth: number;
    imgHeight: number;
}

const Container = styled.div<ContainerProps>`
    margin: 0 -${(props) => props.theme.SPACING.PAGE_MARGIN};
    overflow: hidden;
    height: ${(props) => props.imgHeight}px;
    position: relative;

    .img-cont {
        position: absolute;
        top: 0;
        left: -${(props) => props.imgWidth / 2}px;
        transform: translate(50vw);
    }
`;

export interface FlowerHrProps {}

export function FlowerHr({}: FlowerHrProps) {
    const IMG_WIDTH = 650;
    const IMG_HEIGHT = 59;

    return (
        <Container imgWidth={IMG_WIDTH} imgHeight={IMG_HEIGHT}>
            <div className="img-cont">
                <Image
                    src="/flower/squiggly-stitch_teal_with_flowers.svg"
                    width={IMG_WIDTH}
                    height={IMG_HEIGHT}
                    layout="fixed"
                />
            </div>
        </Container>
    );
}
