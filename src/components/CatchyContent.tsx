import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { SectionHeading } from "./SectionHeading";

const Container = styled.div`
    position: relative;
    overflow: hidden;
    margin: 0 -${(props) => props.theme.SPACING.PAGE_MARGIN};

    .content {
        position: relative;
        z-index: 3;
        font: 1.8rem ${(props) => props.theme.FONTS.SERIF};
        font-style: italic;
        text-align: justify;
        padding: 0 40px;
    }

    .img-1-cont,
    .img-2-cont {
        position: absolute;
        z-index: 1;
        opacity: 0.1;
    }

    .img-1-cont {
        top: 25px;
        left: -60px;
    }

    .img-2-cont {
        bottom: 50px;
        right: -80px;
    }

    .stitch-1-cont,
    .stitch-2-cont {
        position: absolute;
        z-index: 2;
        overflow: hidden;
    }

    .stitch-1-cont {
        bottom: 0;
        left: 19px;
        width: 341px;
        transform: rotate(-90deg);
        transform-origin: left;
    }

    .stitch-2-cont {
        top: 47px;
        right: 22px;
        width: 184px;
        transform: rotate(-90deg);
        transform-origin: right;
    }
`;

export interface CatchyContentProps {
    title: string;
    content: string;
}

export function CatchyContent({ title, content }: CatchyContentProps) {
    return (
        <Container>
            <div>
                <SectionHeading title={title} />
            </div>
            <div className="img-1-cont">
                <Image
                    src="/flower/logo_flower_black_one_petal_turqoise_fill.svg"
                    width="162"
                    height="154"
                    layout="fixed"
                />
            </div>
            <div className="stitch-1-cont">
                <Image
                    src="/misc/straight-stitch-turqoise.svg"
                    width="783"
                    height="3"
                    layout="fixed"
                    className="stitch-1"
                />
            </div>
            <div
                className="content"
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
            <div className="stitch-2-cont">
                <Image
                    src="/misc/straight-stitch-pink.svg"
                    width="783"
                    height="3"
                    layout="fixed"
                    className="stitch-2"
                />
            </div>
            <div className="img-2-cont">
                <Image
                    src="/flower/logo_flower_black_one_petal_pink_fill.svg"
                    width="310"
                    height="295"
                    layout="fixed"
                />
            </div>
        </Container>
    );
}
