import { getStaticPaths } from "./getStaticPaths";

describe("getStaticPaths()", () => {
    it("should create a next js static paths result with an array of slug paths", (done) => {
        const getPageSlugs = jest
            .fn()
            .mockReturnValue(["pink-pouches", "bookmarks"]);
        const expected = {
            paths: [
                {
                    params: {
                        slug: "pink-pouches",
                    },
                },
                {
                    params: {
                        slug: "bookmarks",
                    },
                },
            ],
            fallback: false,
        };

        const promise = getStaticPaths(getPageSlugs);

        promise.then((result) => {
            expect(result).toEqual(expected);
            done();
        });
    });
});
