export interface Testimonial {
    quote: string;
    author: string;
    image: string;
}

export interface LandingPageData {
    imageAlpha: string;
    imageBeta: string;
    mainTextSection: {
        title: string;
        content: string;
    };
    testimonials: Testimonial[];
}
