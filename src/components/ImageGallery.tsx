import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { ProductPageGalleryImage } from "../pageData";

const Container = styled.div`
    .thumbs {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
    }

    .thumb-cont {
        width: 50%;
        margin-top: 17px;

        &:nth-child(odd) {
            padding-right: 7px;
        }

        &:nth-child(even) {
            padding-left: 7px;
        }
    }

    .thumb {
        border: 3px solid transparent !important;
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
            <div data-testid="main-image-cont">
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
