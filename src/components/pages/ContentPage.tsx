import React from "react";
import { Layout } from "../../components/Layout";
import { ContentPageData } from "./models/ContentPageData";

export interface ContentPageProps {
    pageData: ContentPageData;
}

export function ContentPage({ pageData }: ContentPageProps) {
    return (
        <Layout>
            <h1>{pageData.name}</h1>
            <div>
                <img src={pageData.heroImage} />
            </div>
            {pageData.content.map((block, i) => {
                return <p key={i}>{block}</p>;
            })}
        </Layout>
    );
}
