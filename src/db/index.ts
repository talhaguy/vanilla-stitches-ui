import { MongoClient, Db } from "mongodb";

let client: MongoClient = null;

const uri =
    process.env.NODE_ENV === "production"
        ? process.env.PROD_DB_URL
        : process.env.DEV_DB_URL;

const dbName = "vanillastitchesdb";

export async function connectToDb(): Promise<Db> {
    if (process.env.NODE_ENV === "development") {
        if (!(global as any)._mongoClient) {
            client = new MongoClient(uri, {});
            await client.connect();
            (global as any)._mongoClient = client;
            return (global as any)._mongoClient.db(dbName);
        }
        return (global as any)._mongoClient.db(dbName);
    }

    if (!client) {
        client = new MongoClient(uri, {});
        await client.connect();
        return client.db(dbName);
    }

    return client.db(dbName);
}

///////////////

export interface Navigation {
    navigation_id: string;
    name: string;
    link_categories: NavigationLinkCategory[];
}

export interface NavigationLinkCategory {
    label: string;
    links: {
        label: string;
        slug: string;
        slug_reference_collection?: string;
        slug_reference_id?: string;
    }[];
}

export async function getNavigation(id: string): Promise<Navigation> {
    const db = await connectToDb();
    const navigation = await db.collection<Navigation>("navigation").findOne(
        {
            navigation_id: id,
        },

        {
            projection: {
                _id: 0,
            },
        }
    );

    return navigation;
}

///////////////

export interface LandingPage {
    landing_page_id: string;
    name: string;
    imageAlpha: string;
    imageBeta: string;
    mainTextSection: {
        title: string;
        content: string;
    };
    testimonials: {
        quote: string;
        author: string;
        image: string;
    }[];
}

export async function getLandingPage(id: string): Promise<LandingPage> {
    const db = await connectToDb();
    return await db.collection<LandingPage>("landing_page").findOne(
        {
            landing_page_id: id,
        },
        {
            projection: {
                _id: 0,
            },
        }
    );
}

/////////////

export interface ContentPage {
    content_page_id: string;
    name: string;
    heroImage: string;
    content: string;
    slug: string;
}

export async function getContentPageBySlug(slug: string): Promise<ContentPage> {
    const db = await connectToDb();
    return await db.collection<ContentPage>("content_page").findOne(
        {
            slug,
        },
        {
            projection: {
                _id: 0,
            },
        }
    );
}

export async function getAllContentPageSlugs(): Promise<string[]> {
    const db = await connectToDb();
    const slugs = await db
        .collection<Pick<ContentPage, "slug">>("content_page")
        .find(
            {},
            {
                projection: {
                    _id: 0,
                    slug: 1,
                },
            }
        )
        .toArray();
    return slugs.map((s) => {
        return s.slug;
    });
}

///////////////

export interface Category {
    category_id: string;
    slug: string;
    name: string;
    heroImage: string;
    description: string;
    products: CategoryProduct[];
}

export interface CategoryProduct {
    product_id: string;
    name: string;
    image: string;
    price: {
        listPrice: number;
        salePrice: number;
    };
    slug: string;
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
    const db = await connectToDb();
    return await db.collection<Category>("category").findOne(
        {
            slug,
        },
        {
            projection: {
                _id: 0,
            },
        }
    );
}

export async function getAllCategorySlugs(): Promise<string[]> {
    const db = await connectToDb();
    const slugs = await db
        .collection<Pick<Category, "slug">>("category")
        .find(
            {},
            {
                projection: {
                    _id: 0,
                    slug: 1,
                },
            }
        )
        .toArray();
    return slugs.map((s) => {
        return s.slug;
    });
}

///////////////

export interface Product {
    product_id: string;
    name: string;
    description: string;
    images: {
        gallery: [
            {
                thumb: string;
                large: string;
            }
        ];
        cart: string;
    };
    category: {
        category_id: string;
        name: string;
        slug: string;
    };
    price: {
        listPrice: number;
        salePrice: number;
    };
    slug: string;
}

export async function getAllProductSlugs(): Promise<string[]> {
    const db = await connectToDb();
    const slugs = await db
        .collection<Pick<Product, "slug">>("product")
        .find(
            {},
            {
                projection: {
                    _id: 0,
                    slug: 1,
                },
            }
        )
        .toArray();
    console.log("got these slugs -----------", slugs);

    return slugs.map((s) => s.slug);
}

export async function getProductBySlug(slug: string): Promise<Product> {
    const db = await connectToDb();
    console.log("FIND BY ", slug);

    return db.collection<Product>("product").findOne(
        {
            slug,
        },
        {
            projection: {
                _id: 0,
            },
        }
    );
}

///////////////

// export function removeMongoId(doc: Document): Omit<Document, "_id"> {
//     delete doc._id;
//     return doc;
// }
