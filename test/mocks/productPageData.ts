import { ProductPageData } from "../../src/models";

export const productPageData: ProductPageData = {
    id: "P000001",
    categories: [
        {
            name: "Colorful",
            urlPath: "colorful",
        },
    ],
    name: "Flower Pouch",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna felis, hendrerit eget molestie eget, mollis in enim. Aliquam ut pretium massa, eget porttitor leo. In auctor porta euismod. Nulla imperdiet eu lorem quis lobortis. Cras accumsan velit quis laoreet tincidunt. Quisque aliquet velit consequat, scelerisque libero et, condimentum dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ullamcorper metus quis metus posuere, eget porta massa mollis. Donec viverra porta risus non ultrices. Suspendisse urna libero, vehicula vitae commodo quis, lacinia nec ipsum. Ut ipsum eros, mattis vitae eros nec, placerat condimentum lacus. Vestibulum tortor velit, accumsan ut odio feugiat, dignissim imperdiet mauris. Phasellus congue est non ultrices placerat. Curabitur ut mauris eleifend, tincidunt elit sit amet, porta felis. Quisque commodo lacus id neque scelerisque, tincidunt tristique felis faucibus. Sed bibendum vehicula eleifend.
        Donec tempus iaculis diam, ut aliquam tortor pretium nec. Maecenas luctus pulvinar lorem at lacinia. Etiam ut nulla at est rutrum pharetra eget ac sapien. Nunc euismod malesuada eros, non condimentum lectus ultrices eget. Suspendisse diam ante, consequat et nibh et, efficitur consequat neque. Fusce a convallis mauris. Nullam elementum, massa sed molestie egestas, risus neque tempor magna, nec tristique dui ex eget quam. Morbi non venenatis orci, dictum fermentum nunc. Donec ac risus nec mi porttitor bibendum. Phasellus sit amet consequat risus, nec varius urna. Donec placerat mi non massa rutrum, et scelerisque dolor congue. Aliquam erat volutpat.
        Sed laoreet luctus venenatis. Phasellus ipsum urna, sollicitudin sed lobortis et, vulputate varius lectus. Ut vulputate purus in dui mollis, vel efficitur tortor rhoncus. Donec blandit faucibus neque, id viverra ex. Aliquam posuere eu sapien vitae tempor. Praesent lacus mi, dictum sit amet leo id, ornare faucibus orci. Mauris lorem odio, convallis ac erat quis, malesuada tincidunt lacus. Nulla convallis tincidunt neque, nec rutrum lectus fermentum eu. Vivamus dapibus cursus ligula, id euismod ipsum aliquam at. Fusce et nisi nec arcu porttitor sollicitudin. Fusce quis cursus magna. Pellentesque sit amet nunc vitae ex laoreet venenatis non nec dui. Praesent aliquam erat in lacus porta, id venenatis diam volutpat.`,
    images: {
        gallery: [
            {
                thumb: "http://lorempixel.com/200/200/fashion/",
                large: "http://lorempixel.com/600/600/fashion/",
            },
            {
                thumb: "http://lorempixel.com/200/200/fashion/",
                large: "http://lorempixel.com/600/600/fashion/",
            },
            {
                thumb: "http://lorempixel.com/200/200/fashion/",
                large: "http://lorempixel.com/600/600/fashion/",
            },
            {
                thumb: "http://lorempixel.com/200/200/fashion/",
                large: "http://lorempixel.com/600/600/fashion/",
            },
        ],
        cart: "http://lorempixel.com/100/100/fashion/",
    },
    price: {
        listPrice: 21.99,
        salePrice: 15.99,
    },
    urlPath: "/product/flower-pouch",
};
