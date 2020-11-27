import { NextApiRequest, NextApiResponse } from "next";
import {
    getClient,
    getCategories,
    handleFetchError,
    getHtmlForBlocks,
} from "../../sanity";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const client = getClient();
    try {
        const data = await getCategories(client);
        getHtmlForBlocks(data[0].description);
        res.status(200).json(data);
    } catch (err) {
        handleFetchError(err);
        res.status(400).json({ message: err.message });
    }
};
