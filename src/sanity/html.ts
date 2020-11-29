import blocksToHtml from "@sanity/block-content-to-html";

export function convertBlocksToHtml(blocks: any) {
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

    const html = blocksToHtml({
        blocks,
        serializers: serializers,
    });

    return html as string;
}
