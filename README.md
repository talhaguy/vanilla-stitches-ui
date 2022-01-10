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
-   Sanity (Content)
-   SnipCart (Cart)

## Environment Setup

In addition to the environment variables in `.env`, make sure the following variables are present as well:

-   `SNIP_CART_PUBLIC_API_KEY`
-   `SANITY_READ_DATA_TOKEN`
-   `SANITY_DATASET_DEV`
-   `SANITY_DATASET_PROD`

On local environments, you may use a `.env.local`:

// TODO: remove sanity references

```
SNIP_CART_PUBLIC_API_KEY=asdfasdfasdfasdf
SANITY_READ_DATA_TOKEN=asdfasdfasdfasdf
SANITY_DATASET_DEV=dev
SANITY_DATASET_PROD=prod
```

// TODO: document the following commands
cd docker/vanillastitchesdb
docker-compose up -d
mongo --username myuser --password password
use vanillastitchesdb

nvm use
