# Addis Eats data strategy

| Consumer | Query/key | Source | Refresh / caching | Reason |
|---|---|---|---|---|
| Menu | SWR key `/api/dishes` | `GET /api/dishes` | Fallback data from `app/lib/dishes.js`; no focus revalidation | Fast first paint and one shared fetcher; API remains the update boundary. |
| Dish detail | Static params from `app/lib/dishes.js`, dynamic `/menu/[id]` | Server component | Pre-render known IDs; `notFound()` for unknown IDs | SEO-friendly detail routes without a client-side loading flash. |
| Order status | SWR key `/api/orders?id=<id>` | `GET /api/orders` | Poll every 5 seconds, pause/resume UI, stop polling after 2 minutes | Demonstrates polling and a visible refresh control. |
| Dashboard | TanStack Query key `["dashboard","summary"]` | `GET /api/dashboard` | 30s stale time, refetch every 15s | Dashboard benefits from structured caching and periodic refresh. |
| Checkout | POST `/api/orders` | Route Handler validates body/items | No cache; `Cache-Control: no-store` on reads | Orders are writes and must not be cached. |
| Auth | POST `/api/auth/login`, POST `/api/auth/logout` | Route Handlers + HTTP-only cookie | Cookie expires after 8 hours | Demonstrates cookie flow and route middleware. Replace with signed sessions/IdP for production. |

## Fetching conventions
- `app/lib/api.js` is the shared JSON fetcher and throws on every non-2xx response.
- SWR is used for menu data and polling order status.
- TanStack Query is used for the operations dashboard. Avoid fetching the same resource with both libraries in the same component.
- Server components render the shell and detail pages; interactive components own cart state, filters, charts, and forms.
- `app/api/*/route.js` contains Next.js Route Handlers. `middleware.js` redirects unauthenticated users from `/admin` to `/login`.

## Important demo limitations
- Orders are stored in a process-local `globalThis` Map. They disappear on server restart and are not shared across serverless instances. Use a database (e.g. PostgreSQL + Prisma) for real persistence.
- The login cookie is a deliberately minimal teaching example, not a cryptographically signed session. Protect each sensitive data operation in its handler; middleware alone is not authorization.
- Charts, map and dashboard values are illustrative. The map is a visual placeholder, not live mapping/GPS.
- No real payment processor is connected.
