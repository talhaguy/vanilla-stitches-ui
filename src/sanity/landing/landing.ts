import { LandingPageData } from "../../pageData";

// TODO: temporarily using hardcoded data.
export async function fetchLandingPageDataBySlug(slug: string) {
    const data: LandingPageData = {
        imageAlpha: "http://lorempixel.com/400/400/fashion/",
        imageBeta: "http://lorempixel.com/300/300/fashion/",
        subTitle: "Mauris facilisis iaculis libero pulvinar blandit.",
        mainTextSection: {
            title: "Our Story",
            content: [
                "Etiam non felis id lacus volutpat posuere. Cras imperdiet neque sed tortor commodo, eu facilisis sem tincidunt. Maecenas non tincidunt quam. Maecenas tellus nulla, eleifend eu consequat quis, pellentesque quis sapien. Aenean et nunc semper odio varius commodo. In ultricies, orci ac scelerisque blandit, justo magna dapibus lectus, nec tristique mi ipsum eu turpis. Cras congue sit amet massa quis accumsan. Nullam maximus erat at mi tincidunt convallis. Nullam ultricies vestibulum dolor at bibendum. Morbi accumsan id est ut pharetra. Nullam condimentum, urna vel aliquam consequat, quam ante molestie magna, et semper mauris est vel lectus. Nam laoreet, mi quis euismod ornare, ipsum orci pellentesque lectus, vitae maximus diam magna a felis.",
            ],
        },
        testimonials: [
            {
                quote: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est nulla, facilisis iaculis volutpat et, aliquam eu nibh. Ut rutrum ultricies arcu, ut congue dui elementum sed. Aenean pretium mauris risus, eget interdum ante maximus nec. Aenean elementum nibh odio, ac pellentesque justo lobortis id. Vivamus rhoncus enim a tincidunt pretium. In gravida viverra metus, in pharetra orci commodo ac. Phasellus pellentesque dui euismod arcu egestas venenatis. Nullam in leo sem. Sed id facilisis nunc.",
                ],
                author: "Fakhruddin Burney",
                image: "http://lorempixel.com/200/200/fashion/",
            },
        ],
    };
    return data;
}
