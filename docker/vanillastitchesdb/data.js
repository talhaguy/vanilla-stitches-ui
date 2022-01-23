// Categories

db.category.insertMany([
    {
        "category_id": "cat1",
        "slug": "/category/cat1",
        "name": "Cat Name",
        "heroImage": "/hero/bookmarks.png",
        "description": "Lorem ipsum",
        "products": [
            {
                "product_id": "foo123",
                "name": "Foo",
                "image": "/product/pink-pouch-thumb.jpeg",
                "price": {
                    "listPrice": 100,
                    "salePrice": 80
                },
                "slug": "/product/foo123"
            },
            {
                "product_id": "foo234",
                "name": "Foo 2",
                "image": "/product/pink-pouch-thumb.jpeg",
                "price": {
                    "listPrice": 100,
                    "salePrice": 80
                },
                "slug": "/product/foo234"
            },
            {
                "product_id": "foo345",
                "name": "Foo 3",
                "image": "/product/pink-pouch-thumb.jpeg",
                "price": {
                    "listPrice": 100,
                    "salePrice": 80
                },
                "slug": "/product/foo345"
            }
        ]
    }
])


// Products

db.product.insertMany([
    {
        "product_id": "foo123",
        "name": "Foo",
        "description": "Lorem ipsum",
        "images": {
            "gallery": [
                {
                    "thumb": "/product/pink-pouch-thumb.jpeg",
                    "large": "/product/pink-pouch-large.jpeg"
                },
                {
                    "thumb": "/product/pink-pouch-thumb.jpeg",
                    "large": "/product/pink-pouch-large.jpeg"
                },
                {
                    "thumb": "/product/pink-pouch-thumb.jpeg",
                    "large": "/product/pink-pouch-large.jpeg"
                },
                {
                    "thumb": "/product/pink-pouch-thumb.jpeg",
                    "large": "/product/pink-pouch-large.jpeg"
                }
            ],
            "cart": "/product/pink-pouch-thumb.jpeg"
        },
        "category": {
            "category_id": "cat1",
            "name": "Cat 1",
            "slug": "/category/cat1"
        },
        "price": {
            "listPrice": 100,
            "salePrice": 80
        },
        "slug": "/product/foo123",
        "stock": 100
    },
    {
        "product_id": "foo234",
        "name": "Foo 2",
        "description": "Lorem ipsum",
        "images": {
            "gallery": [
                {
                    "thumb": "/product/pink-pouch-thumb.jpeg",
                    "large": "/product/pink-pouch-large.jpeg"
                }
            ],
            "cart": "/product/pink-pouch-thumb.jpeg"
        },
        "category": {
            "category_id": "cat1",
            "name": "Cat 1",
            "slug": "/category/cat1"
        },
        "price": {
            "listPrice": 100,
            "salePrice": 80
        },
        "slug": "/product/foo234",
        "stock": 100
    },
    {
        "product_id": "foo345",
        "name": "Foo 3",
        "description": "Lorem ipsum",
        "images": {
            "gallery": [
                {
                    "thumb": "/product/pink-pouch-thumb.jpeg",
                    "large": "/product/pink-pouch-large.jpeg"
                }
            ],
            "cart": "/product/pink-pouch-thumb.jpeg"
        },
        "category": {
            "category_id": "cat1",
            "name": "Cat 1",
            "slug": "/category/cat1"
        },
        "price": {
            "listPrice": 100,
            "salePrice": 80
        },
        "slug": "/product/foo345",
        "stock": 100
    }
])

// Landing Page

db.landing_page.insertMany([
    {
        "landing_page_id": "homepage",
        "name": "Landing Page",
        "imageAlpha": "/hero/bookmarks.png",
        "imageBeta": "/hero/bookmarks.png",
        "mainTextSection": {
            "title": "Title",
            "content": "Lorem ipsum"
        },
        "testimonials": [
            {
                "quote": "Lorem ipsum",
                "author": "Talha",
                "image": "/hero/bookmarks.png"
            }
        ]
    }
])

// Content Page

db.content_page.insertMany([
    {
        "content_page_id": "contentpage123",
        "name": "Content Page",
        "heroImage": "/hero/bookmarks.png",
        "content": "Lorem ipsum",
        "slug": "/page/contentpage123"
    }
])

// Navigation

db.navigation.insertMany([
    {
        "navigation_id": "main",
        "name": "Link",
        "link_categories": [
            {
                "label": "One",
                "links": [
                    {
                        "slug_reference_collection": "category",
                        "slug_reference_id": "cat1",
                        "label": "Link 1",
                        "slug": "/category/cat1"
                    },
                    {
                        "label": "Link 2",
                        "slug": "/page/contentpage123"
                    }
                ]
            }
        ]
    }
])