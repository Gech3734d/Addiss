# Addis Eats — Next.js full-stack learning app

Responsive Ethiopian-food ordering demo built from the folder structure in the supplied screenshot (`app/`, `app/components/`, `app/data`-style menu data).

## Included concepts
- App Router file-based routes, dynamic `/menu/[id]`, `loading.js`, `error.js`, `not-found.js`, layouts, route metadata, sitemap and robots.
- Server Components for page shells and dynamic dish details; Client Components for cart, filters, checkout, live status and charts.
- Route Handlers for menu, orders, dashboard and login/logout.
- Shared fetcher that throws on non-OK responses; SWR fallback data and polling; TanStack Query caching/refresh.
- Cart persisted in browser localStorage; API validates order items against the server menu.
- Cookie-based login example and middleware-protected `/admin`.
- Responsive design, accessible labels/buttons/table caption, Recharts bar/line charts, illustrative delivery map, ETB prices, `.env.example`.

## Run on Windows
1. Install Node.js LTS from https://nodejs.org/ and restart your terminal.
2. Extract this ZIP. Open a terminal in the folder containing `package.json`.
3. Run:
   ```powershell
   npm install
   Copy-Item .env.example .env.local
   ```
4. Optional: open `.env.local` and set `DEMO_ADMIN_PASSWORD` to a strong local-only password. If unset, the default local demo login is `admin` / `AddisEats@2026`. Example:
   ```env
   APP_NAME=Addis Eats
   SESSION_SECRET=replace-with-a-long-random-secret
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   DEMO_ADMIN_USER=admin
   DEMO_ADMIN_PASSWORD=your-own-strong-local-password
   ```
5. Run `npm run dev`, then open http://localhost:3000.
6. For production verification run `npm run build` then `npm start`.

## Main routes
- `/` home and featured menu
- `/menu` searchable/category-filtered menu
- `/menu/doro` dynamic dish detail
- `/cart`, `/checkout`
- `/track?order=AE-1042` sample delivery status
- `/dashboard` charts, orders table and map illustration
- `/login` and `/admin` protected demo area

## Before real deployment
This is a functional learning/demo app, not a production commerce system. Replace in-memory order storage with a database, use a signed session or trusted identity provider, add authorization in every sensitive handler, add rate limiting/CSRF protections as appropriate, integrate real mapping/GPS and payment provider, add tests, and set environment variables in the hosting platform. `SESSION_SECRET` is included as an environment example but the minimal demo cookie is not yet signed. Do not put secrets in `NEXT_PUBLIC_*`.


## Demo authentication troubleshooting
- Default local credentials: `admin` / `AddisEats@2026`, unless overridden in `.env.local`.
- After changing `.env.local`, stop the dev server with Ctrl+C and run `npm run dev` again.
- Visit `/login`, sign in, and confirm redirect to `/admin`. Use Sign out to clear the cookie.
- Teaching demo only: cookie value is not cryptographically signed; do not use it to protect real customer data or deploy as-is.
