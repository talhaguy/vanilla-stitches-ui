import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/Layout";
import { NavigationContext } from "../../context/NavigationContext";
import {
    createPathsForStaticPage,
    getContentPageSlugs,
} from "../../data/paths";
import {
    getStaticPropsForNavigation,
    StaticPropsForNavigation,
} from "../../data/props";

interface ContentPageProps extends StaticPropsForNavigation {
    message: string;
}

function ContentPage({
    categoryPageLinks,
    contentPageLinks,
    message,
}: ContentPageProps) {
    return (
        <NavigationContext.Provider
            value={{
                categoryPageLinks,
                contentPageLinks,
            }}
        >
            <Layout>
                <p>{message}</p>
            </Layout>
        </NavigationContext.Provider>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getContentPageSlugs();
    const paths = createPathsForStaticPage(slugs);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<ContentPageProps> = async (
    context
) => {
    const {
        categoryPageLinks,
        contentPageLinks,
    } = getStaticPropsForNavigation();

    let message;
    if (context.params.slug === "about") {
        message = "Learn about us on this page.";
    } else {
        message = "Here are the most asked questions.";
    }

    return {
        props: {
            categoryPageLinks,
            contentPageLinks,
            message,
        },
    };
};

export default ContentPage;
