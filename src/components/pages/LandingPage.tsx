import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import { LandingPageData } from "../../models";
import { Button, ButtonSize, ButtonType } from "../Button";
import { CatchyContent } from "../CatchyContent";
import { CollectionTile } from "../CollectionTile";
import { FlowerHr } from "../FlowerHr";
import { HeroImageAlpha } from "../HeroImageAlpha";
import { SectionHeading } from "../SectionHeading";
import { TestimonialCollection } from "../TestimonialCollection";

const Container = styled.div`
    .collection-tile + .collection-tile {
        margin-top: ${(props) => props.theme.SPACING.SECTION_INSIDE};
    }

    .flower-hr {
        margin: ${(props) => props.theme.SPACING.SECTION_MARGIN} 0;

        &-catchy {
            margin-top: ${(props) => props.theme.SPACING.SECTION_MARGIN};
            margin-bottom: 20px;
        }
    }

    .section-text {
        font: 1.8rem ${(props) => props.theme.FONTS.SANS};
        text-align: justify;

        &:first-of-type {
            margin-top: 0;
        }
    }

    .shop-now-btn {
        margin: ${(props) => props.theme.SPACING.SECTION_INSIDE} 0;
    }
`;

export interface LandingPageProps {
    pageData: LandingPageData;
}

export function LandingPage({ pageData }: LandingPageProps) {
    return (
        <Layout>
            <Container>
                <Head>
                    <title>{pageData.name}</title>
                </Head>
                <HeroImageAlpha
                    text={["finding joy in each", "handmade creation"]}
                />
                <div className="flower-hr-catchy">
                    <FlowerHr showFlowers={true} />
                </div>
                <section>
                    <CatchyContent
                        title={pageData.mainTextSection.title}
                        content={pageData.mainTextSection.content}
                    />
                    <div className="shop-now-btn">
                        <Button
                            type={ButtonType.Anchor}
                            size={ButtonSize.Large}
                            linkForAnchor={"/category/pink-pouches"}
                            label="Shop Now"
                        />
                    </div>
                    <Image
                        className="img-beta"
                        src={pageData.imageBeta}
                        layout="responsive"
                        width="333"
                        height="241"
                    />
                </section>
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
                <section>
                    <div>
                        <SectionHeading title={"Testimonials"} />
                    </div>
                    <TestimonialCollection
                        testimonials={pageData.testimonials}
                    />
                </section>
            </Container>
        </Layout>
    );
}
