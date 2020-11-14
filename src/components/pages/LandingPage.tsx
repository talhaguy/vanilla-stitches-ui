import React from "react";
import { Layout } from "../../components/Layout";
import { NavigationContext } from "../../context/NavigationContext";
import { StaticPropsForNavigation } from "../../data/props";
import { LandingPageData } from "./models/LandingPageData";

export interface LandingPageProps extends StaticPropsForNavigation {
    pageData: LandingPageData;
}

export function LandingPage({
    categoryPageLinks,
    contentPageLinks,
    pageData,
}: LandingPageProps) {
    return (
        <NavigationContext.Provider
            value={{
                categoryPageLinks,
                contentPageLinks,
            }}
        >
            <Layout>
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
            </Layout>
        </NavigationContext.Provider>
    );
}
