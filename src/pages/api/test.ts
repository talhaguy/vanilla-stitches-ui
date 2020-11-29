import { NextApiRequest, NextApiResponse } from "next";
import { fetchNavigationLinks } from "../../sanity/navigation/factories";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await fetchNavigationLinks();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
