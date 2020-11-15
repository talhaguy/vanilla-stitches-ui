import { GetPageSlugsFunc } from "../paths";

export interface StaticPropsForNavigation {
    categoryPageLinks: string[];
    contentPageLinks: string[];
}

export interface GetStaticPropsForNavigationFunc {
    (
        getCategoryPageSlugs: GetPageSlugsFunc,
        getContentPageSlugs: GetPageSlugsFunc
    ): Promise<StaticPropsForNavigation>;
}

export const getStaticPropsForNavigation: GetStaticPropsForNavigationFunc = async (
    getCategoryPageSlugs,
    getContentPageSlugs
) => {
    // TODO: remove mock data
    // TODO: run promises concurrently rather than one after another

    try {
        const categoryPageLinks = await getCategoryPageSlugs();
        const contentPageLinks = await getContentPageSlugs();

        return {
            categoryPageLinks,
            contentPageLinks,
        };
    } catch (err) {
        return {
            categoryPageLinks: [],
            contentPageLinks: [],
        };
    }
};
