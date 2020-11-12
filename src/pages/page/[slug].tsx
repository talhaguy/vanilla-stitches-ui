import { GetStaticPaths, GetStaticProps } from "next";
import {
    createPathsForStaticPage,
    getContentPageSlugs,
} from "../../data/paths";

interface ContentPageProps {
    message: string;
}

function ContentPage({ message }: ContentPageProps) {
    return <p>{message}</p>;
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
    let message;
    if (context.params.slug === "about") {
        message = "Learn about us on this page.";
    } else {
        message = "Here are the most asked questions.";
    }

    return {
        props: {
            message,
        },
    };
};

export default ContentPage;
