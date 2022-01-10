import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Layout } from "../Layout";
import { ProductPageData } from "../../pageData";
import { Price, PriceSize } from "../Price";
import { AddToCartButton } from "../AddToCartButton";
import { PriceData } from "../../models";
import { Breadcrumbs } from "../Breadcrumbs";
import { ImageGallery } from "../ImageGallery";
import Image from "next/image";
import { TabbedInfoBox } from "../TabbedInfoBox";
import { FlowerHr } from "../FlowerHr";

const Container = styled.div`
    margin-top: 10px;

    .product-name-img-cont {
        position: relative;
        height: 161px;
        margin: 0 -${(props) => props.theme.SPACING.PAGE_MARGIN} ${(props) =>
                props.theme.SPACING.SECTION_INSIDE} 0;
        overflow: hidden;
    }

    .product-name-cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .product-name {
        font: 2.4rem ${(props) => props.theme.FONTS.SERIF};
        color: ${(props) => props.theme.COLORS.BLACK};
        margin: ${(props) => props.theme.SPACING.SECTION_INSIDE} 0 0;
        padding-right: 80px;
    }

    .name-flower-cont {
        position: absolute;
        top: 0;
        right: -83px;
    }

    .name-flower {
        opacity: 0.2;
        transform: rotate(-47deg);
    }

    .price {
        margin: ${(props) => props.theme.SPACING.SECTION_INSIDE} 0 10px;
    }

    .add-to-cart {
        margin-bottom: ${(props) => props.theme.SPACING.SECTION_MARGIN};
    }

    .flower-hr {
        margin-bottom: ${(props) => props.theme.SPACING.SECTION_MARGIN};
    }
`;

export interface ProductPageProps {
    pageData: ProductPageData;
}

function getActivePrice(price: PriceData) {
    return price.salePrice ? price.salePrice : price.listPrice;
}

export function ProductPage({ pageData }: ProductPageProps) {
    return (
        <Layout>
            <Container>
                <Head>
                    <title>{pageData.name}</title>
                </Head>
                <div className="product-name-img-cont">
                    <div className="product-name-cont">
                        <Breadcrumbs category={pageData.category} />
                        <h1 className="product-name">{pageData.name}</h1>
                    </div>
                    <div className="name-flower-cont">
                        <Image
                            src="/flower/logo_flower_black_one_petal_turqoise_fill.svg"
                            width="168"
                            height="161"
                            className="name-flower"
                        />
                    </div>
                </div>
                <ImageGallery images={pageData.images.gallery} />
                <div>
                    <div className="price">
                        <Price price={pageData.price} size={PriceSize.Medium} />
                    </div>
                    <div className="add-to-cart">
                        <AddToCartButton
                            item={{
                                id: pageData.id,
                                price: getActivePrice(pageData.price) + "",
                                url: pageData.urlPath,
                                image: pageData.images.cart,
                                name: pageData.name,
                            }}
                        />
                    </div>
                </div>
                <div className="flower-hr">
                    <FlowerHr showFlowers={true} />
                </div>
                <TabbedInfoBox
                    tabs={[
                        {
                            name: "Details",
                            content: pageData.description,
                        },
                        {
                            name: "Shipping",
                            content:
                                "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel dolor diam. Proin sed porta odio, et viverra diam. Donec pretium nisi nunc, vel rutrum velit blandit ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis fermentum sit amet ligula in ultricies. Phasellus imperdiet neque felis. Nulla consequat leo id purus feugiat, eu pharetra turpis blandit. Nunc fermentum nisi vehicula, vehicula enim at, cursus tortor. Phasellus euismod facilisis eleifend. Ut ac viverra neque. Etiam auctor felis ut nisl dignissim, ac blandit orci porta. Maecenas et eleifend dui, non tempor ex. Mauris in pharetra dolor, sed finibus urna. Maecenas id laoreet risus. Donec nulla enim, sollicitudin et ex in, scelerisque interdum nisi.</p>",
                        },
                    ]}
                />
            </Container>
        </Layout>
    );
}
