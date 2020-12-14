import { convertSanityProductDataForUI, SanityProductData } from "./product";
import { ProductPageData } from "../../pageData";

describe("product", () => {
    describe("convertSanityProductDataForUI()", () => {
        it("should convert sanity data to type `ProductPageData`", () => {
            const dataFromSanity: SanityProductData = {
                id: "12345",
                name: "A Product",
                images: {
                    gallery: [
                        {
                            thumb: "/path/to/thumb/one",
                            large: "path/to/large/one",
                        },
                        {
                            thumb: "/path/to/thumb/two",
                            large: "path/to/large/two",
                        },
                    ],
                    cart: "/path/to/cart/img",
                },
                price: {
                    listPrice: 100.0,
                    salePrice: 80.0,
                },
                description: [
                    {
                        style: "normal",
                        _type: "block",
                        markDefs: [],
                        children: [
                            {
                                _type: "span",
                                text: "Product description...",
                                marks: [],
                            },
                        ],
                    },
                ],
                slug: "a-product-slug",
                categories: [
                    {
                        slug: "a-category-slug",
                        name: "A Category",
                    },
                    {
                        slug: "another-category-slug",
                        name: "Another Category",
                    },
                ],
            };

            const expected: ProductPageData = {
                id: "12345",
                name: "A Product",
                images: {
                    gallery: [
                        {
                            thumb: "/path/to/thumb/one",
                            large: "path/to/large/one",
                        },
                        {
                            thumb: "/path/to/thumb/two",
                            large: "path/to/large/two",
                        },
                    ],
                    cart: "/path/to/cart/img",
                },
                price: {
                    listPrice: 100.0,
                    salePrice: 80.0,
                },
                description: "<p>Product description...</p>",
                urlPath: "/product/a-product-slug",
                categories: [
                    {
                        urlPath: "/category/a-category-slug",
                        name: "A Category",
                    },
                    {
                        urlPath: "/category/another-category-slug",
                        name: "Another Category",
                    },
                ],
            };

            const result = convertSanityProductDataForUI(dataFromSanity);

            expect(result).toEqual(expected);
        });
    });
});
