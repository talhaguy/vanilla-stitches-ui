import { StringNullableChain } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button, ButtonSize, ButtonType } from "./Button";

const Container = styled.div`
    .link {
        width: 100%;
        height: 100%;
        display: block;
    }

    .img-cont {
        position: relative;
    }

    .img {
        opacity: 0.8;
    }

    .btn-cont {
        position: absolute;
        bottom: 10px;
        width: 100%;
        text-align: center;
    }
`;

export interface CollectionTileProps {
    linkPath: string;
    label: string;
    imageLink: string;
}

export function CollectionTile({
    linkPath,
    label,
    imageLink,
}: CollectionTileProps) {
    return (
        <Container>
            <Link href={linkPath}>
                <a className="link">
                    <div className="img-cont">
                        <Image
                            src={imageLink}
                            layout="responsive"
                            width="333"
                            height="241"
                            className="img"
                        />
                        <div className="btn-cont">
                            <Button
                                label={label}
                                type={ButtonType.Button}
                                size={ButtonSize.Small}
                            />
                        </div>
                    </div>
                </a>
            </Link>
        </Container>
    );
}
