import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";
import { AddToCartButton } from "./AddToCartButton";

describe("AddToCartButton", () => {
    it("should have the required snip cart data attributes", () => {
        const props = {
            item: {
                id: "ABCD123",
                price: "$12.34",
                url: "/product/pink-pouch",
                image: "/path/to/img.jpg",
                name: "Pink Pouch",
            },
        };

        render(
            <ThemeProvider theme={THEME}>
                <AddToCartButton {...props} />
            </ThemeProvider>
        );

        const element = screen.getByTestId("button-cont");

        const currentAttrs = element
            .getAttributeNames()
            .filter((name) => name.indexOf("data-item-") > -1)
            .sort();

        const requiredAttrs = [
            "data-item-id",
            "data-item-price",
            "data-item-url",
            "data-item-image",
            "data-item-name",
        ].sort();

        expect(currentAttrs).toEqual(requiredAttrs);
    });
});
