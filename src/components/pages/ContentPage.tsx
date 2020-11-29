import React from "react";
import { Layout } from "../../components/Layout";
import { ContentPageData } from "../../pageData";

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
            {pageData.content}
        </Layout>
    );
}
