# Skyline Computer World

Skyline Computer World is a production-oriented technology marketplace platform for products, IT services, support, business procurement, and future AI-assisted shopping.

## Architecture

- `apps/web`: React, Vite, Tailwind CSS, React Router, Framer Motion, React Hook Form, Zod, Axios.
- `apps/api`: Node.js, Express.js, JWT-ready authentication, validation, security middleware, REST modules.
- `packages/shared`: Shared product, service, cart, and validation contracts.
- `db/schema.sql`: PostgreSQL schema for marketplace, orders, support, appointments, analytics foundations.
- `docs/architecture.md`: Phase notes, decisions, deployment plan, and future roadmap.

## Run Locally

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`

API: `http://localhost:4000/api/health`

## Environment

Copy `.env.example` into `apps/api/.env` and configure production values before deployment.
