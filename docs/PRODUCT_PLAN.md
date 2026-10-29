# PixelPlaza: decision memo and phased plan
Prepared 29 October 2026 for Kushagra Pandey.

## What you are building
A curated, map-shaped advertising and discovery directory for independent online businesses. A plot represents a fixed-duration display placement, never property ownership, an investment or guaranteed customer acquisition. Visitors discover a useful brand, open its card and voluntarily follow its website link. The owner controls admission and publication.

A visual map is memorable but is not a defensible business on its own. The hard problem is repeat visits from relevant people. Occupancy is not proof of value: a full grid with no buyers visiting is still poor advertising. Start with one audience—e.g. useful indie tools and small creative brands—rather than accepting every possible category.

## Corrections to the earlier conversation
1. 2000×2000 px divided into 50×50 units gives 1600 UNITS, not necessarily 1600 advertisers. A 4×3 placement uses 12 units. Show listing count, held units and occupied units separately.
2. Do not let an unverified submission hold space for 72 hours: attackers could lock the whole grid. Submission enters a private queue. Only owner approval creates an exclusive hold; reject conflicting approvals transactionally.
3. Do not bind payment confirmation directly to publication. Even if manual payments are introduced later, receipt verification and owner publication remain separate actions.
4. Automatic expiry, release, price increases, renewals and deployments conflict with the owner's current instruction. In strict manual mode, dates only create a due-status for review; they do not change publication or release a plot. Consequently the owner must handle deadlines; you cannot simultaneously promise automatic exact expiry and prohibit every automatic state change. Before paid leases, explicitly settle this policy and write terms matching it.
5. No automated payments or auctions in any future phase. The earlier assistant's proposed Phase 2 is rejected.
6. Manual UPI still involves disputes, mistaken transfers, forged screenshots and refund obligations. 'The site never handles money' does not mean the operator has no financial responsibilities. Start with no payments at all.
7. An atlas is an optional optimization, not a starting requirement. A change-driven canvas with a visible-region strategy and accessible directory is enough for the concept. Server atlases add processing and cache-invalidation complexity; benchmark real artwork first.
8. Daily salted IP hashes are not magic anonymity. Platforms may log raw request IPs. Avoid analytics in the preview. Before launch define retention, minimization and privacy disclosures; don't claim an entire hosting stack stores no IPs without verifying it.
9. An unguessable stats URL is a bearer credential. Anyone who receives it gains access. If used later, scope, hash at rest, expire/revoke, prevent indexing and referrer leakage; prefer authenticated access if reports become sensitive.
10. HTTPS/domain string validation cannot establish that a website is safe. A public domain can resolve to private IPs or later change destination. Do not build automatic link fetching in the pilot. Future server fetching needs DNS/IP validation on every hop and connection-level protections, timeouts, size limits and restricted egress.
11. A fixed-ID redirect prevents arbitrary query-string targets but still sends people to approved third-party sites that can later become malicious. Add visible destination domains and owner takedown controls; never promise endorsement.
12. A paid outbound placement is not an SEO ranking guarantee. Keep sponsored/nofollow attributes and never market 'guaranteed backlinks/rank boosts'.

## Cost and risk boundaries
| Risk | Design choice now | What remains |
|---|---|---|
| Automatic charges | No gateway, card, subscription, billing API, paid service provisioning, ad campaign or domain purchase | Existing internet/electricity/device costs; time spent |
| Hosting overages | Run locally; no cloud resources created | Future hosting needs an explicit plan/limits review |
| Customers paying for no results | ₹0 research pilot; no traffic/sales guarantees | Market demand remains unknown |
| Fake payments | No receipt/payment flow | If manual payments are later approved, verify in bank records; screenshots are not proof |
| Unauthorized public changes | Request → owner approval → owner publish; future server authorization and action log | Demo admin has no authentication and must stay local |
| Grid hoarding | No hold on submission; owner-created holds only | Owner workload; later add limits and abuse controls |
| Upload abuse/copyright | Preview uses text tiles; no uploads | Later require rights attestation, bounded raster re-encoding and complaint/takedown process |
| Malicious links/SSRF | No server fetching; explicit user navigation only | Owner review cannot guarantee continuing safety |
| Data loss | No real data in preview; refresh intentionally clears it | Production needs backups, tested restore and controlled retention |
| Owner absent | No automatic publishing/renewal/release | Queue and due reviews may wait; communicate realistic response times |

No honest plan can guarantee zero business, security or legal risk. The current local build creates no new cloud bill or transaction path. This is different from guaranteeing that a future public business is risk-free.

## Suggested creative improvements, ordered
- **Neighbourhoods, not a noisy billboard:** Tools / Shops / Creative / Learning; useful discovery paths and curated editorial collections. Choose one narrow launch audience first.
- **Free founding cohort:** Invite 5–10 useful projects manually. Label your own properties as House projects. Fictional brands stay in a preview-only toggle. No fake occupancy, views or buyers.
- **Directory parity:** Every map action has a keyboard/list alternative. A 50px cell shrinks on mobile, so users must not depend on tiny logos or precision dragging.
- **Readable creative sizes:** Offer suggested 2×2, 4×3, 6×4 sizes with a larger detail card; keep 1×1 possible only with clear legibility expectations. Cap how much any advertiser can occupy.
- **Owner-curated spotlight:** Rotate only when the owner chooses and applies a change. Explain any paid priority later.
- **Shareable placement cards:** Optional, generated only when requested; no automatic social posting, cash referral payouts or misleading ownership language.
- **Transparent value:** Later show human-filtered outbound clicks as estimates, with measurement definitions; don't fabricate CTR or treat each render as a meaningful impression.
- **Simple fixed quotes:** Avoid dynamic scarcity pricing initially. Store a quote version and freeze its amount and scope. Price changes affect future approved quotes only.
- **No motion tax:** No autoplay video, cursor particles, perpetual canvas loop or remote site embeds. Draw only on data/viewport changes, cap pixel ratio, respect reduced motion if animations are added.
- **Owner control panel:** Explicit preview/diff, approval, publish, suspend, release, audit history. Later add a manual global pause. No public user gets owner powers.

## Phases and acceptance gates
| Phase | Work | Gate |
|---|---|---|
| 0: Local concept (delivered) | Empty grid, labelled samples, map/list, selection, ₹0 request, simulated review/hold/publication, local action history | Owner reviews appearance and mobile usability; no real data |
| 1: Demand validation | User personally contacts 20–30 relevant owners; show demo, ask goals, current channels, placement interest; recruit 5 non-binding trial commitments | Evidence of real interest, no advance payments or automated outreach |
| 2: Secure local MVP | Current supported Next.js/TypeScript, Postgres/Prisma, owner auth, server validation, atomic placement constraints, upload processing, approval logs, export and restore | Tests for concurrent approval, permissions, CSRF, URL/image validation, quote immutability, no unauthorized changes |
| 3: Approved free public pilot | Select suitable host/limits, clear data policy and ad policy, abuse reporting, genuine house/founding listings, optional minimal analytics | Explicit owner approval of host, costs, publication and all external integrations |
| 4: Optional manual commercial operation | Only if separately requested: fixed quote, manually verified receipt records, separate owner activation, written cancellation/refund rules | Evidence of useful traffic; appropriate professional review; no payment automation ever |
| 5: Improve proven demand | Discovery collections, share cards, performance tuning, controlled expansion | Measured visitor usefulness and owner approval; no auctions or auto-spend |

Phase 2 transaction model: submitted applications need not occupy the grid. An approved reservation writes an exclusive rectangle in a single transaction. Use a Postgres GiST exclusion constraint on world ID and integer half-open x/y ranges for blocking states; migrate/test extensions and constraint support explicitly. Concurrent overlapping approvals must yield exactly one successful reservation. Status updates and audit entries commit atomically. In manual mode constraints depend on explicit blocking states, never volatile NOW() in an index predicate. Admin release changes state deliberately.

## Revised permissions interpretation
Normal visitor actions (browse/search/submit request) can occur without asking the owner individually. They cannot publish content, reserve exclusive land, approve a price, confirm a receipt, renew, delete existing listings, send external messages or provision paid resources. Those are owner-only commands. This distinction makes a usable website while preserving the requested business control. Strictly approving every click would make a public website unusable.

## Hosting check
Official Vercel Hobby documentation and fair-use guidance restrict Hobby to personal/non-commercial use. Do not assume an advertising business qualifies just because its first trial is free. No Vercel project, paid trial, database or storage service was created here.

Sources checked 29 October 2026:
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/limits/fair-use-guidelines
- https://vercel.com/pricing
- https://developers.cloudflare.com/pages/platform/limits/

Cloudflare Pages is a candidate to evaluate for a static public pilot; its documented free-tier limits are not by themselves a complete legal/commercial eligibility review. Verify then-current terms and whether the selected backend/storage products require billing before connecting anything. Keeping moderation local and publishing static reviewed listings is a possible low-complexity alternative, but public request submission still needs an independently designed secure channel.

This memo does not determine GST registration, advertising-law compliance or privacy-law applicability. Do that scoped legal/tax check before commercial launch; placeholder policy pages are not compliance.
