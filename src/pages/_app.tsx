import type { AppProps } from "next/app";
import { NavigationContext, WindowContext } from "../context";
import {
    SnipCartMetaStateContext,
    SnipCartMetaStateMap,
    useResetHistory,
} from "../snipcart";

interface MyAppProps {
    appProps: AppProps;
}

// snip cart state to be shared and persisted through rerenders
const snipCartMetaState: SnipCartMetaStateMap = {
    snipCartGlobal: null,
    isReady: false,
    readyFuncQueue: [],
    isInitted: false,
    inittedFuncQueue: [],
    usedYet: false,
};

function MyApp({ appProps: { Component, pageProps } }: MyAppProps) {
    useResetHistory();

    return <Component {...pageProps} />;
}

function AppContainer(appProps: AppProps) {
    console.log("in MyApp", appProps.pageProps);
    console.log(
        "DEBUG: is window in MyApp?",
        typeof window !== "undefined" ? window : null
    );

    return (
        <WindowContext.Provider
            value={typeof window !== "undefined" ? window : null}
        >
            <SnipCartMetaStateContext.Provider value={snipCartMetaState}>
                <NavigationContext.Provider
                    value={{
                        categoryPageLinks: appProps.pageProps.categoryPageLinks,
                        contentPageLinks: appProps.pageProps.contentPageLinks,
                    }}
                >
                    <MyApp appProps={appProps} />
                </NavigationContext.Provider>
            </SnipCartMetaStateContext.Provider>
        </WindowContext.Provider>
    );
}

export default AppContainer;
