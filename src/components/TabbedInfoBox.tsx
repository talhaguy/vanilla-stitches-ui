import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    .tab-name-cont {
        display: flex;
        margin-bottom: 15px;
    }

    .tab {
        position: relative;
        z-index: 1;
        flex-basis: 0;
        flex-grow: 1;
        text-align: center;
        background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};
        color: ${(props) => props.theme.COLORS.WHITE};
        font: 1.8rem ${(props) => props.theme.FONTS.SANS};
        padding: 16px;
        cursor: pointer;

        &.active {
            box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.25);
            z-index: 2;

            &:after {
                content: "";
                height: 7px;
                width: 100%;
                background-color: ${(props) => props.theme.COLORS.GOLD};
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
    }

    .tab-content-cont {
        font: 1.8rem ${(props) => props.theme.FONTS.SERIF};
    }

    .content {
        display: none;

        &.active {
            display: block;
        }
    }
`;

export interface Tab {
    name: string;
    content: string;
}

export interface TabbedInfoBoxProps {
    tabs: Tab[];
}

export function TabbedInfoBox({ tabs }: TabbedInfoBoxProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    let tabNames = [];
    let tabContent = [];

    tabs.forEach((tab, i) => {
        const activeClassName = activeTabIndex === i ? "active" : "";

        tabNames.push(
            <div
                className={"tab " + activeClassName}
                onClick={() => setActiveTabIndex(i)}
                key={i}
                role="button"
            >
                {tab.name}
            </div>
        );

        tabContent.push(
            <div
                className={"content " + activeClassName}
                dangerouslySetInnerHTML={{ __html: tab.content }}
                key={i}
            />
        );
    });

    return (
        <Container>
            <div className="tab-name-cont">{tabNames}</div>
            <div className="tab-content-cont">{tabContent}</div>
        </Container>
    );
}
