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
                    {/* favicon */}
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/android-icon-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />

                    {/* fonts */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Serif:ital@0;1&display=swap"
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
