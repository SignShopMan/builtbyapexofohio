# builtbyapexofohio.com — Apex Exteriors Services

Astro 7 + Tailwind v4 static site for Apex Exteriors Services LLC (Bellefontaine / Logan County, Ohio).

**Design source of truth:** [`../BRAND-GUIDE.md`](../BRAND-GUIDE.md). Read it before touching colors, type, or layout.
Photo descriptions and hero picks: [`../photos/MANIFEST.md`](../photos/MANIFEST.md).

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview
```

## Where things live

| Path | What |
|---|---|
| `src/styles/global.css` | Brand tokens (`@theme`), angular `clip-*` utilities, base styles |
| `src/data/site.ts` | Phone, email, service area, nav, trust badges — change contact info here |
| `src/data/services.ts` | Service pages content + which photos each one uses |
| `src/data/financing.ts` | Payment calculator: credit tiers, illustrative APRs, terms, 0% promo — **update APRs from the Hearth dashboard** |
| `src/components/PaymentCalculator.astro` | Monthly payment estimator on `/financing` (Apply button uses `site.hearthUrl` when set) |
| `src/components/RoofEstimator.astro` | "How big is my roof?" estimator on `/roof-estimator`; emails/texts the summary to the business |
| `src/layouts/Base.astro` | `<head>`, SEO/OG tags, LocalBusiness JSON-LD, header + footer |
| `src/components/` | Hero, ServiceCard, CtaBand, TrustBar, PhotoGrid, BeforeAfter, Stripe, Button, Icon |
| `src/pages/` | `/`, `/services`, `/services/[slug]`, `/gallery`, `/financing`, `/roof-estimator`, `/about`, `/contact`, 404 |
| `src/assets/photos/` | Job photos (Astro optimizes only the ones that are imported) |
| `public/brand/` | Logo SVG/PNG, stripe |
| `public/` | Favicons, OG image, `CNAME`, `robots.txt` |

## Deploy

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
`public/CNAME` pins the custom domain. In the repo settings → Pages, set **Source: GitHub Actions** and add `builtbyapexofohio.com` as the custom domain, then point DNS:

- `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `<github-user>.github.io`

## Before launch

- [ ] Confirm phone number (guide §12 — 6204 vs 9523) in `src/data/site.ts`
- [ ] Wire the contact form (`src/pages/contact.astro`) to Netlify Forms / Formspree / a Worker
- [ ] Crew/owner photo for `/about`
- [ ] Client's Hearth financing link → `hearthUrl` in `src/data/site.ts`
- [ ] Sanity-check the illustrative APRs in `src/data/financing.ts` against what Hearth actually shows his customers
- [ ] Replace the FB cover photo with a brand-matched one
