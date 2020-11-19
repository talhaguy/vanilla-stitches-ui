import type { AppProps } from "next/app";
import { WithContext } from "../context";
import { useCartStateAtTopLevel } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
    console.log("in MyApp", Component, pageProps);
    const [
        numItemsRef,
        subtotalRef,
        wasSnipCartInitializedRef,
    ] = useCartStateAtTopLevel(typeof window !== "undefined" ? window : null);
    console.log(
        "DEBUG: is window in MyApp?",
        typeof window !== "undefined" ? window : null
    );

    return (
        <WithContext
            window={typeof window !== "undefined" ? window : null}
            cartStateContextMap={{
                numItemsRef,
                subtotalRef,
                wasSnipCartInitializedRef,
            }}
            navigationContextMap={{
                categoryPageLinks: pageProps.categoryPageLinks,
                contentPageLinks: pageProps.contentPageLinks,
            }}
        >
            <Component {...pageProps} />
        </WithContext>
    );
}

export default MyApp;
