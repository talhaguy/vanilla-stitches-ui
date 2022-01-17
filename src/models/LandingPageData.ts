export interface Testimonial {
    quote: string;
    author: string;
    image: string;
}

export interface LandingPageData {
    name: string;
    imageAlpha: string;
    imageBeta: string;
    mainTextSection: {
        title: string;
        content: string;
    };
    testimonials: Testimonial[];
}
