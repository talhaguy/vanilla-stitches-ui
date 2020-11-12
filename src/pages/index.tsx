import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getCategoryPageSlugs, getContentPageSlugs } from "../data/paths";
import { Layout } from "../components/Layout";
import { NavigationContext } from "../context/NavigationContext";
import {
    getStaticPropsForNavigation,
    StaticPropsForNavigation,
} from "../data/props";

interface HomePageProps extends StaticPropsForNavigation {}

function HomePage({ categoryPageLinks, contentPageLinks }: HomePageProps) {
    return (
        <NavigationContext.Provider
            value={{
                categoryPageLinks,
                contentPageLinks,
            }}
        >
            <Layout>
                <h1>Home Page</h1>
            </Layout>
        </NavigationContext.Provider>
    );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (
    context
) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
        },
    };
};

export default HomePage;
