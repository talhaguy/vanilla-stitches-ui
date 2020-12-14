import { ContentPageData } from "../../pageData";
import { convertSanityContentDataForUI, SanityContentData } from "./content";

describe("content", () => {
    describe("convertSanityContentDataForUI()", () => {
        it("should convert sanity data to type `ContentPageData`", () => {
            const dataFromSanity: SanityContentData = {
                name: "A Content Page",
                heroImage: "/path/to/hero/img",
                content: [
                    {
                        style: "normal",
                        _type: "block",
                        markDefs: [],
                        children: [
                            {
                                _type: "span",
                                text: "Some content...",
                                marks: [],
                            },
                        ],
                    },
                    {
                        style: "normal",
                        _type: "block",
                        markDefs: [],
                        children: [
                            {
                                _type: "span",
                                text: "More content...",
                                marks: [],
                            },
                        ],
                    },
                ],
            };
            const expected: ContentPageData = {
                name: "A Content Page",
                heroImage: "/path/to/hero/img",
                content:
                    "<div><p>Some content...</p><p>More content...</p></div>",
            };

            const result = convertSanityContentDataForUI(dataFromSanity);

            expect(result).toEqual(expected);
        });
    });
});
