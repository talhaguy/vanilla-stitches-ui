import {
    convertSanityNavigationLinkGroupDataForUI,
    SanityNavigationLinkGroupData,
    SanityPageType,
} from "./navigation";
import { NavigationLinkGroup } from "../../models";

describe("navigation", () => {
    describe("convertSanityNavigationLinkGroupDataForUI()", () => {
        it("should convert data from sanity to type `NavigationLinkGroup[]`", () => {
            const dataFromSanity: SanityNavigationLinkGroupData[] = [
                {
                    label: "Some Link Group Label",
                    links: [
                        {
                            slug: "some-slug",
                            type: SanityPageType.Category,
                            label: "Some Category Link Label",
                        },
                        {
                            slug: "another-slug",
                            type: SanityPageType.Category,
                            label: "Another Category Link Label",
                        },
                    ],
                },
                {
                    label: "Another Link Group Label",
                    links: [
                        {
                            slug: "yet-another-slug",
                            type: SanityPageType.Content,
                            label: "Content Link Label",
                        },
                    ],
                },
                {
                    label: "Yet Another Link Group Label",
                    links: [
                        {
                            slug: "the-slugs-keep-coming",
                            type: SanityPageType.Product,
                            label: "Product Link Label",
                        },
                    ],
                },
            ];
            const expected: NavigationLinkGroup[] = [
                {
                    label: "Some Link Group Label",
                    links: [
                        {
                            path: "/category/some-slug",
                            label: "Some Category Link Label",
                        },
                        {
                            path: "/category/another-slug",
                            label: "Another Category Link Label",
                        },
                    ],
                },
                {
                    label: "Another Link Group Label",
                    links: [
                        {
                            path: "/page/yet-another-slug",
                            label: "Content Link Label",
                        },
                    ],
                },
                {
                    label: "Yet Another Link Group Label",
                    links: [
                        {
                            path: "/product/the-slugs-keep-coming",
                            label: "Product Link Label",
                        },
                    ],
                },
            ];

            const result = convertSanityNavigationLinkGroupDataForUI(
                dataFromSanity
            );

            expect(result).toEqual(expected);
        });
    });
});
