import { getStaticProps } from "./getStaticProps";

describe("getStaticProps()", () => {
    let getNavigationLinkGroupData;
    let getPageData;

    beforeEach(() => {
        getNavigationLinkGroupData = jest.fn().mockResolvedValue([
            {
                label: "Categories",
                links: [
                    {
                        label: "Pink Pouches",
                        path: "/category/pink-pouches",
                    },
                    {
                        label: "Bookmarks",
                        path: "/category/bookmarks",
                    },
                ],
            },
            {
                label: "Pages",
                links: [
                    {
                        label: "About",
                        path: "/page/about",
                    },
                ],
            },
        ]);

        getPageData = jest.fn().mockReturnValue({
            name: "A page",
        });
    });

    it("should return a next js static props result", (done) => {
        const context = {
            params: {
                slug: "green-pouches",
            },
        };

        const promise = getStaticProps(
            getNavigationLinkGroupData,
            getPageData,
            context
        );

        const expected = {
            props: {
                topNavigationLinkGroups: [
                    {
                        label: "Categories",
                        links: [
                            {
                                label: "Pink Pouches",
                                path: "/category/pink-pouches",
                            },
                            {
                                label: "Bookmarks",
                                path: "/category/bookmarks",
                            },
                        ],
                    },
                    {
                        label: "Pages",
                        links: [
                            {
                                label: "About",
                                path: "/page/about",
                            },
                        ],
                    },
                ],
                pageData: {
                    name: "A page",
                },
            },
        };

        promise.then((result) => {
            expect(result).toEqual(expected);
            done();
        });
    });

    it('should pass in `""` as slug to `getPageData` function when params don\'t exist', (done) => {
        const context = {};

        const promise = getStaticProps(
            getNavigationLinkGroupData,
            getPageData,
            context
        );

        promise.then((result) => {
            expect(getPageData).toHaveBeenCalledWith("");
            done();
        });
    });
});
