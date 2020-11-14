import React from "react";
import { ProductPage } from "../../../src/components/pages/ProductPage";
import { render, screen } from "@testing-library/react";
import { productPageData } from "../../mocks/productPageData";

describe("ProductPage", () => {
    it("should render", () => {
        render(
            <ProductPage
                categoryPageLinks={[]}
                contentPageLinks={[]}
                pageData={productPageData}
            />
        );
        expect(screen.queryByText("Flower Pouch")).not.toBeNull();
    });
});
