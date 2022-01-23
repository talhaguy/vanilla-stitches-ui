import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { ProductPageGalleryImage } from "../models";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${(props) => props.theme.BREAKPOINTS.LARGE}) {
        flex-direction: row;
        justify-content: space-between;
    }

    .main-image-cont {
        @media (min-width: ${(props) => props.theme.BREAKPOINTS.LARGE}) {
            width: calc(
                50% - (${(props) => props.theme.SPACING.PAGE_MARGIN} / 2)
            );
        }
    }

    .thumbs {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;

        @media (min-width: ${(props) => props.theme.BREAKPOINTS.LARGE}) {
            width: calc(
                50% - (${(props) => props.theme.SPACING.PAGE_MARGIN} / 2)
            );
        }
    }

    .thumb-cont {
        margin-top: 17px;
        width: calc(50% - (${(props) => props.theme.SPACING.PAGE_MARGIN} / 2));
        height: calc(50% - (${(props) => props.theme.SPACING.PAGE_MARGIN} / 2));

        @media (min-width: ${(props) => props.theme.BREAKPOINTS.LARGE}) {
            margin-top: 0;
        }
    }

    .thumb {
        border: 3px solid transparent !important;
        cursor: pointer;
    }

    .selected {
        border: 3px solid ${(props) => props.theme.COLORS.GOLD} !important;
    }
`;

export interface ImageGalleryProps {
    images: ProductPageGalleryImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <Container>
            <div className="main-image-cont" data-testid="main-image-cont">
                <Image
                    src={images[selectedImageIndex].large}
                    width={350}
                    height={252}
                    layout="responsive"
                />
            </div>
            <ul className="thumbs">
                {images.map((image, i) => {
                    return (
                        <li
                            key={i}
                            className="thumb-cont"
                            data-testid={`thumb-cont-${i}`}
                        >
                            <Image
                                className={`thumb ${
                                    selectedImageIndex === i ? "selected" : ""
                                }`}
                                src={image.thumb}
                                width={200}
                                height={144}
                                layout="responsive"
                                onClick={() => setSelectedImageIndex(i)}
                                role="button"
                                aria-label={`Thumb ${i + 1}`}
                            />
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}
