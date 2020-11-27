import sanityClient, { SanityClient } from "@sanity/client";
import blocksToHtml from "@sanity/block-content-to-html";
import { Environment } from "../constants";

export function getClient() {
    const clientConfig = {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset:
            process.env.NODE_ENV === Environment.Production
                ? process.env.SANITY_DATASET_PROD
                : process.env.SANITY_DATASET_DEV,
        token: process.env.SANITY_READ_DATA_TOKEN,
        useCdn: false, // needs to be false as private data cannot be cached in sanity
    };
    console.log(clientConfig);
    const client = sanityClient(clientConfig);
    return client;
}

export function getHtmlForBlocks(blocks: any) {
    // `h` is a way to build HTML known as hyperscript
    // See https://github.com/hyperhype/hyperscript for more info
    const h = blocksToHtml.h;

    const serializers = {
        types: {
            code: (props) =>
                h(
                    "pre",
                    { className: props.node.language },
                    h("code", props.node.code)
                ),
        },
    };
    const el = blocksToHtml({
        blocks,
        serializers: serializers,
    });
    console.log(el);
}

export async function getCategories(client: SanityClient) {
    const query = `*[_type == "product"]`;
    const data = await client.fetch(query);
    return data;
}

export function handleFetchError(err: any) {}
