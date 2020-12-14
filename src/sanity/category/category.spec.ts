import { CategoryPageData } from "../../pageData";
import { convertSanityCategoryDataForUI, SanityCategoryData } from "./category";

describe("category", () => {
    describe("convertSanityCategoryDataForUI()", () => {
        it("should convert sanity category data to type `CategoryPageData`", () => {
            const dataFromSanity: SanityCategoryData = {
                heroImage: "/path/to/hero/img",
                name: "A Category",
                description: [
                    {
                        style: "normal",
                        _type: "block",
                        markDefs: [],
                        children: [
                            {
                                _type: "span",
                                text: "Category description...",
                                marks: [],
                            },
                        ],
                    },
                ],
                products: [
                    {
                        name: "First Product",
                        price: {
                            listPrice: 50.0,
                            salePrice: 40.0,
                        },
                        image: "/path/to/first/img",
                        slug: "first-product",
                    },
                    {
                        name: "Second Product",
                        price: {
                            listPrice: 30.0,
                        },
                        image: "/path/to/second/img",
                        slug: "second-product",
                    },
                ],
            };
            const expected: CategoryPageData = {
                heroImage: "/path/to/hero/img",
                name: "A Category",
                description: "<p>Category description...</p>",
                products: [
                    {
                        name: "First Product",
                        price: {
                            listPrice: 50.0,
                            salePrice: 40.0,
                        },
                        image: "/path/to/first/img",
                        urlPath: "/product/first-product",
                    },
                    {
                        name: "Second Product",
                        price: {
                            listPrice: 30.0,
                        },
                        image: "/path/to/second/img",
                        urlPath: "/product/second-product",
                    },
                ],
            };

            const result = convertSanityCategoryDataForUI(dataFromSanity);

            expect(result).toEqual(expected);
        });
    });
});
