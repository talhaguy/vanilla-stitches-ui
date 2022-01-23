import React from "react";
import styled from "styled-components";
import { Testimonial as TestimonialData } from "../models";
import { Testimonial } from "./Testimonial";

const Container = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;

    @media (min-width: ${(props) => props.theme.BREAKPOINTS.LARGE}) {
        flex-direction: row;
        justify-content: space-between;
    }

    .testimonial-cont + .testimonial-cont {
        margin-top: 40px;

        @media (min-width: ${(props) => props.theme.BREAKPOINTS.LARGE}) {
            margin-top: 0;
        }
    }

    .testimonial-cont {
        @media (min-width: ${(props) => props.theme.BREAKPOINTS.LARGE}) {
            width: calc(
                50% - (${(props) => props.theme.SPACING.PAGE_MARGIN} / 2)
            );
        }
    }
`;

export interface TestimonialCollectionProps {
    testimonials: TestimonialData[];
}

export function TestimonialCollection({
    testimonials,
}: TestimonialCollectionProps) {
    return (
        <Container>
            {testimonials.map((testimonial, i) => {
                return (
                    <li className="testimonial-cont" key={i}>
                        <Testimonial testimonial={testimonial} />
                    </li>
                );
            })}
        </Container>
    );
}
