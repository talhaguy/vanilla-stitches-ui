import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { getUIOverrides } from "../snipcart";

// this is ONLY run on the server
class MyDocument extends Document {
    constructor(props) {
        console.log("in MyDocument");
        super(props);
    }

    // server render styled components
    // adapted from https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* fonts */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Serif&display=swap"
                        rel="stylesheet"
                    />

                    {/* snip cart link tags */}
                    <link rel="preconnect" href="https://app.snipcart.com" />
                    <link rel="preconnect" href="https://cdn.snipcart.com" />
                    <link
                        rel="stylesheet"
                        href={`https://cdn.snipcart.com/themes/v${process.env.SNIP_CART_VERSION}/default/snipcart.css`}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* snip cart script and custom div */}
                    <script
                        async
                        src={`https://cdn.snipcart.com/themes/v${process.env.SNIP_CART_VERSION}/default/snipcart.js`}
                    ></script>
                    <div
                        hidden
                        id="snipcart"
                        data-api-key={process.env.SNIP_CART_PUBLIC_API_KEY}
                        data-currency="php"
                        dangerouslySetInnerHTML={{ __html: getUIOverrides() }}
                    ></div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
