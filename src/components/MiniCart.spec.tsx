import { render, screen } from "@testing-library/react";
import { cleanup } from "@testing-library/react-hooks";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";
import { MiniCart } from "./MiniCart";

describe("MiniCart", () => {
    it("should show number of items in cart only when greater than 0", () => {
        render(
            <ThemeProvider theme={THEME}>
                <MiniCart numItems={0} />
            </ThemeProvider>
        );

        expect(
            screen.queryByTestId("minicart-numitems")
        ).not.toBeInTheDocument();

        cleanup();

        render(
            <ThemeProvider theme={THEME}>
                <MiniCart numItems={1} />
            </ThemeProvider>
        );

        expect(screen.queryByTestId("minicart-numitems")).toBeInTheDocument();
    });
});
