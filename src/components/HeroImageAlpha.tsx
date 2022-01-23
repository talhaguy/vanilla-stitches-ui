import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    margin: 0 -${(props) => props.theme.SPACING.PAGE_MARGIN};
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

    .text-cont {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        align-items: flex-end;
        font: 2.4rem ${(props) => props.theme.FONTS.SERIF};
        color: ${(props) => props.theme.COLORS.WHITE};
        font-style: italic;
        padding: 0 ${(props) => props.theme.SPACING.PAGE_MARGIN} 15px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .text-line:first-child {
        margin-right: 30px;
    }

    .img-cont {
        height: 500px;
        position: relative;
        z-index: 1;
    }
`;

export interface HeroImageAlphaProps {
    text: string[];
}

export function HeroImageAlpha({ text }: HeroImageAlphaProps) {
    return (
        <Container>
            <div className="text-cont">
                <div className="text-line">{text[0]}</div>
                {typeof text[1] !== "undefined" && (
                    <div className="text-line">{text[1]}</div>
                )}
            </div>
            <div className="img-cont">
                <Image
                    src="/misc/sample-pouches.png"
                    layout="fill"
                    width="333"
                    height="241"
                    objectFit="cover"
                />
            </div>
        </Container>
    );
}
