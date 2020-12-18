import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";
import { TabbedInfoBox } from "./TabbedInfoBox";

describe("TabbedInfoBox", () => {
    it("should show correct tab's content when tab is clicked", () => {
        render(
            <ThemeProvider theme={THEME}>
                <TabbedInfoBox
                    tabs={[
                        {
                            name: "First Tab",
                            content: "First Tab Content",
                        },
                        {
                            name: "Second Tab",
                            content: "Second Tab Content",
                        },
                    ]}
                />
            </ThemeProvider>
        );

        expect(screen.queryByText("First Tab Content")).toBeVisible();
        expect(screen.queryByText("Second Tab Content")).not.toBeVisible();

        fireEvent.click(
            screen.queryByRole("button", {
                name: "Second Tab",
            })
        );

        expect(screen.queryByText("First Tab Content")).not.toBeVisible();
        expect(screen.queryByText("Second Tab Content")).toBeVisible();

        fireEvent.click(
            screen.queryByRole("button", {
                name: "First Tab",
            })
        );

        expect(screen.queryByText("First Tab Content")).toBeVisible();
        expect(screen.queryByText("Second Tab Content")).not.toBeVisible();
    });
});
