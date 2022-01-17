# Vanilla Stiches UI

The headless storefront UI for the Vanilla Stitches brand.

## Release 1.0

Release 1.0 marks the completion of the mobile site MVP. Users can browse the storefront pages, add products to cart, and checkout. The desktop site is targeted for the next release.

## Tech Stack

-   TypeScript
-   NextJS
-   React
-   Styled Components
-   Jest
-   MongoDB (Content)
-   SnipCart (Cart)

## Environment Setup

In addition to the environment variables in `.env`, make sure the following variables are present as well. On local environments, you may use a `.env.local`.

```
SNIP_CART_PUBLIC_API_KEY=XXXXXXXXXX
PROD_DB_URL=XXXXXXXXXX
```

To set up the data base run the following commands:

```
cd docker/vanillastitchesdb
docker-compose up -d

Then in the container run:

```

mongo --username myuser --password password
use vanillastitchesdb

```

Using your preferred method, e.g. MongoDB Compass, insert the test data found in `docker/vanillastitchesdb/data.js`.
```
