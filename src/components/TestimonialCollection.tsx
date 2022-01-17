import React from "react";
import styled from "styled-components";
import { Testimonial as TestimonialData } from "../models";
import { Testimonial } from "./Testimonial";

const Container = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;

    .testimonial-cont + .testimonial-cont {
        margin-top: 40px;
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
