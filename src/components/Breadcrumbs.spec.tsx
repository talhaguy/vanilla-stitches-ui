import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants";
import { Breadcrumbs } from "./Breadcrumbs";

describe("Breadcrumbs", () => {
    it("should separate multiple links with `|`", () => {
        render(
            <ThemeProvider theme={THEME}>
                <Breadcrumbs
                    categories={[
                        {
                            name: "Pink Pouches",
                            urlPath: "/category/pink-pouches",
                        },
                        {
                            name: "Small Pouches",
                            urlPath: "/category/small-pouches",
                        },
                    ]}
                />
            </ThemeProvider>
        );

        const linksText = screen.getByTestId("breadcrumbs-cont").textContent;
        const expected = "Pink Pouches | Small Pouches";

        expect(linksText).toBe(expected);
    });
});
