import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
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
                    ></div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
