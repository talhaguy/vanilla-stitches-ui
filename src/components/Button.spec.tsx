import { render, screen } from "@testing-library/react";
import { Button, ButtonSize, ButtonType } from "./Button";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";

describe("Button", () => {
    it("should render href on link if type is anchor", () => {
        render(
            <ThemeProvider theme={THEME}>
                <Button
                    label="My Button"
                    type={ButtonType.Anchor}
                    size={ButtonSize.Large}
                    linkForAnchor="/some/path"
                />
            </ThemeProvider>
        );

        const button = screen.getByText("My Button");

        expect(button.getAttribute("href")).toBe("/some/path");
    });
});
