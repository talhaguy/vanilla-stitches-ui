import React from "react";
import HomePage from "../../src/pages";
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
    it("should render", () => {
        render(<HomePage />);
        expect(screen.queryByText("Home Page")).not.toBeNull();
    });
});
