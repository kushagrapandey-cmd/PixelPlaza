# Improved PixelPlaza implementation prompt

Act as a senior product designer and full-stack engineer. Build PixelPlaza: a curated visual directory where approved businesses receive fixed-duration rectangular display placements linking to their public websites. It is advertising space, not property ownership, an investment, or guaranteed traffic.

## Non-negotiable authority and money rules
- Never implement automated payments, checkout, stored payment credentials, recurring billing, auto-renewal, escrow, bids or auctions, now or in later phases.
- Default to a free pilot. Do not provision cloud resources, start trials, buy a domain, run ads, subscribe, send outreach or deploy without explicit owner approval for the concrete action and any cost.
- Visitors can browse and submit private requests. Only the owner may approve a hold, publish, edit, reject, suspend, release, renew or change pricing.
- No automatic expiration/release/publication or background state mutations in strict manual mode. Due dates are informational; owner acts on a review queue. Explain that this requires manual deadline handling before agreeing to paid fixed-term leases.
- Any later manually recorded payment must require separate owner publication. Never treat an uploaded receipt or screenshot as proof. Do not implement even manual payment records until separately requested.
- Never claim zero financial/business/security/legal risk. Describe exactly which risk pathways are absent and what remains.

## Execute by phase
Complete only the explicitly authorized phase. First deliver a local responsive prototype and stop for design review. Never turn a mock admin panel into production authentication. Keep demo data explicitly labelled, preview-only, separate from real metrics and excluded from production.

## Prototype
- 2000×2000 px world, 50px units: 40×40 = 1600 units. Render an empty world by default, with optional labelled samples.
- Pan, pinch zoom, reset view, tap and numeric selection; add drag selection as a separate mode only if it doesn't conflict with mobile panning.
- Search/categories and accessible list/card alternatives.
- ₹0 request summary and owner studio simulation: submitted → approved/held → published; reject, release and take down are explicit actions with confirmations.
- No emails, uploads, external scripts/fonts, analytics, tracking or durable personal data in the prototype. Clearly document refresh-reset behavior and unprotected simulated owner controls.
- Supply standalone HTML, dependency-free local server, same-Wi-Fi Android instructions, tests and honest QA limitations.

## Later secure MVP, only after authorization
- Current supported Next.js App Router + TypeScript + Tailwind, PostgreSQL + Prisma, server validation (Zod), bounded Sharp raster conversion. Choose storage and hosting only after an approved cost/eligibility review. No assumption that Vercel Hobby permits commercial advertising.
- Config-derived world dimensions; positive integer rectangles, bounded coordinates. Define unit occupancy separately from listing count.
- Submission never holds land. Owner approval creates a reservation with transactional Postgres GiST exclusion constraint across world + half-open x/y ranges for held/published blocking states. Test simultaneous overlaps: exactly one approval succeeds. Release only on owner action.
- Persist server-owned approval state, immutable quotes, requested duration, optional activation dates and append-only action events atomically. No client-controlled publication/payment status.
- Authenticated single owner, strong password hash or approved identity provider, secure/httpOnly/SameSite cookies, session expiry, CSRF protection, rate limits and authorization on every mutation. No secrets or PII in public build artifacts or repository.
- HTTPS public-domain URLs; reject userinfo, unsafe schemes, IP literal forms, local/internal hosts and unsupported ports. No arbitrary server-side fetch in initial MVP. If a future link checker is approved, protect DNS resolution, every redirect and actual outbound connection against SSRF and rebinding; cap response size/time and isolate egress.
- Restrict uploads to supported raster formats, byte and pixel limits before decode, resource-constrained re-encoding, metadata stripping, generated storage keys and owner moderation; never serve original SVG/HTML or user-controlled active content.
- /go/[plotId] resolves only server-approved active records, never accepts a query target, shows visible destination domain and uses safe sponsored/nofollow/noopener links. No executable user HTML.
- Prefer no analytics at first. If approved, minimize data, define view/open/click and CTR denominators, document bot-filter limitations, retention and provider logs. No invented stats. Private report links are scoped revocable credentials, never public IDs alone.
- Published listings only in directory/SEO/sitemap. Keep pending/rejected data private. Report abuse and manual takedown controls. Clearly mark house listings. No fake endorsements or SEO ranking promises.
- Benchmark a change-driven canvas and accessible directory before introducing server-generated atlases. No per-cell DOM trees, continuous render loops or live website embeds.
- Add content/category policies and privacy/terms drafts marked for qualified review, not falsely described as legally complete.

## Definition of done per phase
Document what is real vs mocked. Run geometry/state tests, meaningful server authorization and overlap-race tests when a backend exists, desktop and small-screen browser checks and manual Android instructions. Test reject/release/suspend paths and replayed requests. Provide reproducible setup, env example only where needed, migrations, rollback/restore notes and deferred work. No production claim or deployment without evidence and authorization.
