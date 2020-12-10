import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { LandingPageData } from "../../pageData";
import { CollectionTile } from "../CollectionTile";
import { FlowerHr } from "../FlowerHr";
import { SectionHeading } from "../SectionHeading";

const Container = styled.div`
    .collection-tile + .collection-tile {
        margin-top: ${(props) => props.theme.SPACING.SECTION_INSIDE};
    }

    .flower-hr {
        margin: ${(props) => props.theme.SPACING.SECTION_MARGIN} 0;
    }

    .section-text {
        font: 1.8rem ${(props) => props.theme.FONTS.SANS};
        text-align: justify;

        &:first-of-type {
            margin-top: 0;
        }
    }
`;

export interface LandingPageProps {
    pageData: LandingPageData;
}

export function LandingPage({ pageData }: LandingPageProps) {
    return (
        <Layout>
            <Container>
                <h1>Vanilla Stitches</h1>
                <div>
                    <img src={pageData.imageAlpha} />
                </div>
                <p>{pageData.subTitle}</p>
                <div>
                    <img src={pageData.imageBeta} />
                </div>
                <div>
                    <h2>{pageData.mainTextSection.title}</h2>
                    {pageData.mainTextSection.content.map((block, i) => {
                        return <p key={i}>{block}</p>;
                    })}
                </div>
                <div className="flower-hr">
                    <FlowerHr showFlowers={true} />
                </div>
                <section>
                    <div>
                        <SectionHeading title={"Collections"} />
                    </div>
                    <p className="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque at lobortis ex. Phasellus eleifend mi
                        ullamcorper felis tempus.
                    </p>
                    <div className="collection-tile">
                        <CollectionTile
                            linkPath={"/category/pink-pouches"}
                            label={"Pink Pouches"}
                            imageLink={"/misc/sample-pouches.png"}
                        />
                    </div>
                    <div className="collection-tile">
                        <CollectionTile
                            linkPath={"/category/bookmarks"}
                            label={"Bookmarks"}
                            imageLink={"/misc/sample-pouches.png"}
                        />
                    </div>
                </section>
                <div className="flower-hr">
                    <FlowerHr showFlowers={true} />
                </div>
                <div>
                    <ul>
                        {pageData.testimonials.map((testimonial, i) => {
                            return (
                                <li key={i}>
                                    <div>
                                        <img src={testimonial.image} />
                                    </div>
                                    <blockquote>
                                        {testimonial.quote.map((block, j) => {
                                            return <p key={j}>{block}</p>;
                                        })}
                                        <footer>- {testimonial.author}</footer>
                                    </blockquote>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </Layout>
    );
}
