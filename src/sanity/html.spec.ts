import { convertBlocksToHtml } from "./html";

describe("html", () => {
    describe("convertBlocksToHtml()", () => {
        it("should convert sanity html blocks to html string", () => {
            const blocks = [
                {
                    style: "normal",
                    _type: "block",
                    markDefs: [],
                    children: [
                        {
                            _type: "span",
                            text: "That was ",
                            marks: [],
                        },
                        {
                            _type: "span",
                            text: "bold",
                            marks: ["strong"],
                        },
                        {
                            _type: "span",
                            text: " of you.",
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
                            text: "Amazing, actually.",
                            marks: [],
                        },
                    ],
                },
            ];

            const result = convertBlocksToHtml(blocks);

            expect(result).toBe(
                "<div><p>That was <strong>bold</strong> of you.</p><p>Amazing, actually.</p></div>"
            );
        });
    });
});
