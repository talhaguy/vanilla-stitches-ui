import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";
import { NavigationContext, WindowContext } from "../context";
import {
    SnipCartMetaStateContext,
    SnipCartMetaStateMap,
    useCustomizePaymentForm,
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
    useCustomizePaymentForm();

    return <Component {...pageProps} />;
}

function AppContainer(appProps: AppProps) {
    return (
        <>
            <Head>
                {/*
                    viewport tag needs to go here due to the following issue in which next js cannot
                    dedup the viewport tags in _document.tsx/js
                    https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md
                */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <WindowContext.Provider
                value={typeof window !== "undefined" ? window : null}
            >
                <SnipCartMetaStateContext.Provider value={snipCartMetaState}>
                    <NavigationContext.Provider
                        value={{
                            topNavigationLinkGroups:
                                appProps.pageProps.topNavigationLinkGroups,
                        }}
                    >
                        <ThemeProvider theme={THEME}>
                            <MyApp appProps={appProps} />
                        </ThemeProvider>
                    </NavigationContext.Provider>
                </SnipCartMetaStateContext.Provider>
            </WindowContext.Provider>
        </>
    );
}

export default AppContainer;
