import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";
import { Price, PriceSize } from "./Price";

describe("Price", () => {
    it("should only show sale price if it is passed in", () => {
        render(
            <ThemeProvider theme={THEME}>
                <Price
                    price={{
                        listPrice: 100,
                    }}
                    size={PriceSize.Medium}
                />
            </ThemeProvider>
        );

        expect(screen.queryByTestId("list-price")).toBeInTheDocument();
        expect(screen.queryByTestId("sale-price")).not.toBeInTheDocument();

        cleanup();

        render(
            <ThemeProvider theme={THEME}>
                <Price
                    price={{
                        listPrice: 100,
                        salePrice: 80,
                    }}
                    size={PriceSize.Medium}
                />
            </ThemeProvider>
        );

        expect(screen.queryByTestId("list-price")).toBeInTheDocument();
        expect(screen.queryByTestId("sale-price")).toBeInTheDocument();
    });
});
