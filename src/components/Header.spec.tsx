import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";
import { NavigationContext, WindowContext } from "../context";
import { SnipCartMetaStateContext } from "../snipcart";
import { Header } from "./Header";
import { RouterContext } from "next/dist/next-server/lib/router-context";

describe("Header", () => {
    it("should show/hide the navigation menu when menu buttons and links are clicked", () => {
        // need to implement scrollTo otherwise an error is thrown when clicking a link
        window.scrollTo = jest.fn();

        render(
            // need to provide router provider otherwise there is an error complaining
            // that push cannot be used on undefined
            <RouterContext.Provider
                value={{
                    basePath: "",
                    route: "",
                    pathname: "",
                    query: {},
                    asPath: "",
                    push: async () => true,
                    replace: async () => true,
                    reload: () => null,
                    back: () => null,
                    prefetch: async () => undefined,
                    beforePopState: () => null,
                    isFallback: false,
                    events: {
                        on: () => null,
                        off: () => null,
                        emit: () => null,
                    },
                }}
            >
                <WindowContext.Provider value={window}>
                    <SnipCartMetaStateContext.Provider
                        value={{
                            snipCartGlobal: null,
                            isReady: false,
                            readyFuncQueue: [],
                            isInitted: false,
                            inittedFuncQueue: [],
                            usedYet: false,
                        }}
                    >
                        <NavigationContext.Provider
                            value={{
                                topNavigationLinkGroups: [
                                    {
                                        label: "Categories",
                                        links: [
                                            {
                                                label: "Pouches",
                                                path: "/category/pouches",
                                            },
                                        ],
                                    },
                                ],
                            }}
                        >
                            <ThemeProvider theme={THEME}>
                                <Header />
                            </ThemeProvider>
                        </NavigationContext.Provider>
                    </SnipCartMetaStateContext.Provider>
                </WindowContext.Provider>
            </RouterContext.Provider>
        );

        const navigationCont = screen.getByTestId("navigation-cont");

        // nav should not be visible initially
        expect(navigationCont).not.toBeVisible();
        fireEvent.click(screen.getByLabelText("Menu"));
        expect(navigationCont).toBeVisible();

        // test for nav closing when clicking link
        fireEvent.click(screen.getByText("Pouches"));
        expect(navigationCont).not.toBeVisible();

        // test close menu button
        fireEvent.click(screen.getByLabelText("Menu"));
        expect(navigationCont).toBeVisible();
        fireEvent.click(screen.getByLabelText("Close"));
        expect(navigationCont).not.toBeVisible();
    });
});
