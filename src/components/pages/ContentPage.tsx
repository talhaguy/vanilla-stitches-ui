import React from "react";
import { Layout } from "../../components/Layout";
import { NavigationContext } from "../../context/NavigationContext";
import { StaticPropsForNavigation } from "../../data/props/navigation";
import { ContentPageData } from "./models/ContentPageData";

export interface ContentPageProps extends StaticPropsForNavigation {
    pageData: ContentPageData;
}

export function ContentPage({
    categoryPageLinks,
    contentPageLinks,
    pageData,
}: ContentPageProps) {
    return (
        <NavigationContext.Provider
            value={{
                categoryPageLinks,
                contentPageLinks,
            }}
        >
            <Layout>
                <h1>{pageData.name}</h1>
                <div>
                    <img src={pageData.heroImage} />
                </div>
                {pageData.content.map((block, i) => {
                    return <p key={i}>{block}</p>;
                })}
            </Layout>
        </NavigationContext.Provider>
    );
}
