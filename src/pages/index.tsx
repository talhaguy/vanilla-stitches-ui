import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getCategoryPageSlugs } from "../data/paths";

interface HomePageProps {
    categoryPageLinks: string[];
}

function HomePage({ categoryPageLinks }: HomePageProps) {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <h2>Categories:</h2>
                <ul>
                    {categoryPageLinks.map((link) => (
                        <li>
                            <Link href={link}>
                                <a>{link}</a>
                            </Link>
                        </li>
                    ))}
                    <li></li>
                </ul>

                <h2>Products:</h2>
                <ul>
                    <li></li>
                </ul>

                <h2>Content Pages:</h2>
                <ul>
                    <li></li>
                </ul>
            </nav>
        </div>
    );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (
    context
) => {
    let categoryPageLinks = getCategoryPageSlugs();
    categoryPageLinks = categoryPageLinks.map((link) => "/category/" + link);

    return {
        props: {
            categoryPageLinks,
        },
    };
};

export default HomePage;
