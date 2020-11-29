import sanityClient from "@sanity/client";
import { Environment } from "../constants";

export function getClientConfig() {
    return {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset:
            process.env.NODE_ENV === Environment.Production
                ? process.env.SANITY_DATASET_PROD
                : process.env.SANITY_DATASET_DEV,
        token: process.env.SANITY_READ_DATA_TOKEN,
        useCdn: false, // needs to be false as private data cannot be cached in sanity
    };
}

export function getClient() {
    return sanityClient(getClientConfig());
}
