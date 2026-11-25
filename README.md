# Angular SSR storefront

An Angular 17 frontend for a storefront, using RouteMisr's external e-commerce API. The backend and payment processing are not implemented in this repository.

## What is here

- Standalone Angular components for products, categories, brands and product details
- Login/register screens, route guards, cart, wishlist and order screens
- Angular SSR configuration with an Express entry point and client hydration
- TypeScript, Tailwind CSS, PrimeNG and Flowbite

This is a learning and portfolio project. The presence of checkout screens does not prove a working payment integration. External API availability, authentication and account requirements affect the flows. No production customer results or live checkout verification are claimed.

## Run locally

Use a Node.js version compatible with Angular 17, then:

```bash
npm ci
npm start
```

The development server normally runs at `http://localhost:4200`. API configuration is in `src/app/core/environments/environments.ts`. Use your own test account and keep credentials out of commits.

## Build and SSR

```bash
npm run build
npm run serve:ssr:ecommerce
```

The second command starts the generated Node SSR server after a successful build. Test browser-only behavior and authenticated routes separately; having SSR configured does not mean every authenticated page renders server-side.

## Tests

```bash
npm test
```

This runs the configured Angular/Karma tests. No new passing test count or browser/payment test result is claimed in this README update.

## Implementation notes

[Article: Angular SSR on a third-party API](https://dev.to/ziadtaha/i-built-an-angular-17-ssr-storefront-on-a-third-party-api-heres-what-ssr-actually-changes-with-548d).
