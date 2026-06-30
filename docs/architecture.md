# Skyline Computer World Architecture

## Phase 1: Design System

The visual system uses the requested palette with Poppins headings, Inter body text, restrained cards, soft shadows, and responsive spacing. Components are reusable around marketplace primitives: layout, product cards, sections, forms, and dashboards.

## Phase 2: Project Architecture

The project is a monorepo to keep frontend, backend, and shared contracts aligned. Shared Zod schemas define API input and product structures once, reducing drift between React forms and Express validation.

## Phase 3: Routing

React Router powers homepage, catalog, product detail, cart, services, business, support, account, wishlist, and admin pages. Product URLs are SEO-friendly slugs.

## Phase 4: Authentication

The API includes JWT login/register foundations and role-based middleware. Production OAuth flows for Google and GitHub should be implemented through a hardened provider strategy before launch.

## Phase 5: Homepage

The homepage is a premium platform entry point, not a simple store landing page. It highlights products, categories, IT services, business value, technology news, newsletter signup, and a professional footer.

## Phase 6: Product Catalog

The catalog supports intent-style search across product name, brand, category, technical specs, and tags. Filtering is structured for brand, price, RAM, storage, processor, graphics, OS, availability, rating, and warranty expansion.

## Phase 7: Product Details

Product pages include gallery, zoom-on-hover behavior, thumbnails, specifications, warranty, delivery, related products, Q&A, reviews, and bundled purchase areas.

## Phase 8: Shopping Cart

Cart state supports add, remove, quantity updates, subtotal, tax, shipping, coupon-code architecture, and checkout handoff.

## Phase 9: Backend APIs

Express exposes REST endpoints for authentication, products, categories, cart, orders, payments, services, appointments, support, and analytics. Helmet, CORS, rate limiting, JSON limits, and Zod validation are included.

## Phase 10: Database

PostgreSQL tables cover users, products, brands, categories, images, orders, order items, payments, reviews, wishlist, shopping cart, inventory, suppliers, services, appointments, and support tickets. JSONB specs allow flexible device attributes while preserving relational commerce data.

## Phase 11: Admin Dashboard

The admin UI includes revenue metrics, orders, customers, inventory alerts, operational queue, and analytics layout. API analytics routes are protected by admin role checks.

## Phase 12: Deployment

Deploy the frontend to Vercel. Deploy the API to AWS EC2 behind a load balancer. Use AWS RDS PostgreSQL with automated backups and migrations. Store product images in S3 and persist URLs in `product_images`. Add CloudFront for image delivery and caching.

## Scalability Decisions

- Separate web/API packages support independent deployment and scaling.
- Shared schema package prevents contract drift.
- PostgreSQL remains the source of truth for commerce, identity, inventory, and support.
- S3 stores product media; the database stores only URLs and metadata.
- Slugs, GIN indexes, JSONB specs, and pagination prepare product discovery for large catalogs.
- RBAC separates customer, staff, and admin capabilities.
- The route/module structure supports future AI assistant, PC builder, vendor marketplace, loyalty, and branch inventory modules.
