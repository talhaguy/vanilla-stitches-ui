import { CategoryPageData } from "../../src/components/pages/models/CategoryPageData";

export const categoryPageData: CategoryPageData = {
    heroImage: "http://lorempixel.com/900/300/fashion/",
    name: "Colorful",
    description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum rutrum quam, ac cursus quam facilisis sit amet. Nunc est felis, fringilla sed augue eu, vestibulum accumsan felis. Proin nec ante et arcu facilisis sagittis quis in justo. Curabitur semper ultricies facilisis. Ut quis sapien volutpat, scelerisque elit in, euismod magna. Nulla consequat hendrerit risus ac aliquam. Vestibulum ac finibus nisi. Etiam aliquam arcu nec nibh pulvinar sodales. Nulla rhoncus dictum pretium.",
        "Curabitur id nisi laoreet, varius nisi sit amet, tincidunt nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ullamcorper lorem in purus tincidunt, at sagittis nulla fermentum. Integer vel tellus pulvinar, luctus tellus quis, ultricies nulla. In auctor lacinia iaculis. Curabitur id lacus sapien.",
    ],
    products: [
        {
            slug: "flower-pouch",
            name: "Flower Pouch",
            price: {
                listPrice: 21.99,
                salePrice: 15.99,
            },
            image: "http://lorempixel.com/300/300/fashion/",
        },
        {
            slug: "rainbow-pouch",
            name: "Rainbow Pouch",
            price: {
                listPrice: 25.0,
                salePrice: 21.99,
            },
            image: "http://lorempixel.com/300/300/fashion/",
        },
    ],
};
