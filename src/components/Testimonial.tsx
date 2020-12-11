import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Testimonial as TestimonialData } from "../pageData";

const Container = styled.div`
    .quote-cont {
        margin: 0;
        text-align: center;
        margin-bottom: ${(props) => props.theme.SPACING.SECTION_INSIDE};
    }

    .quote,
    .author {
        font: 1.8rem ${(props) => props.theme.FONTS.SERIF};
    }

    .quote {
        margin: 0;
        color: ${(props) => props.theme.COLORS.DARK_GRAY};
        font-style: italic;

        p:first-child::before {
            content: "\\201C";
        }

        p:last-child::after {
            content: "\\201D";
        }

        p:last-child {
            margin-bottom: 15px;
        }
    }

    .author {
        color: ${(props) => props.theme.COLORS.BLACK};
    }

    .img {
    }
`;

export interface TestimonialProps {
    testimonial: TestimonialData;
}

export function Testimonial({ testimonial }: TestimonialProps) {
    return (
        <Container>
            <figure className="quote-cont">
                <blockquote
                    className="quote"
                    dangerouslySetInnerHTML={{
                        __html: testimonial.quote,
                    }}
                ></blockquote>
                <figcaption className="author">
                    - {testimonial.author}
                </figcaption>
            </figure>
            <Image
                src={testimonial.image}
                layout="responsive"
                width="333"
                height="241"
                className="img"
            />
        </Container>
    );
}
