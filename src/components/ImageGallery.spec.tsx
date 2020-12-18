import { fireEvent, render, screen } from "@testing-library/react";
import { cleanup } from "@testing-library/react-hooks";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";
import { ImageGallery } from "./ImageGallery";

describe("ImageGallery", () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={THEME}>
                <ImageGallery
                    images={[
                        {
                            thumb: "/first/thumb.jpg",
                            large: "/first/large.jpg",
                        },
                        {
                            thumb: "/second/thumb.jpg",
                            large: "/second/large.jpg",
                        },
                    ]}
                />
            </ThemeProvider>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("should select first image initially", () => {
        expect(
            screen
                .getByTestId("thumb-cont-0")
                .querySelector("img")
                .classList.contains("selected")
        ).toBeTruthy();
    });

    it("should select clicked image thumb", () => {
        expect(
            screen
                .getByTestId("thumb-cont-1")
                .querySelector("img")
                .classList.contains("selected")
        ).toBeFalsy();
        fireEvent.click(screen.getByLabelText("Thumb 2"));
        expect(
            screen
                .getByTestId("thumb-cont-1")
                .querySelector("img")
                .classList.contains("selected")
        ).toBeTruthy();
    });
});
