> **Current demo update — 29 October 2026:** The owner has authorized automatic lease expiry. Published browser-demo leases expire at their stored deadline; expired space becomes available and renewal requires a new request and approval. No automatic payments or renewals. The default view is browsing; use Get a plot for selection. Demo controls in the footer allow approval duration (1-minute test / 30 days / 90 days) and publication. Records persist in this browser only, not a shared booking database. External advertiser navigation is disabled. Email API is implemented but sending configuration is awaiting explicit credential-transfer approval; the UI offers an email-app draft or local simulation and never claims an unsent email succeeded. The hosted demo is authorized. Earlier local-only/manual-expiry statements below describe the initial plan and are superseded by this update.

# PixelPlaza — local concept preview

A curated visual directory of independent businesses: the map is a discovery interface, not real estate, an investment, an auction or a promise of traffic.

**Phase 0 only. No money, accounts, remote storage, background jobs or production deployment.** The owner studio is a local simulation, not protected admin software. Do not expose it as a real booking service.

## Run on your computer

Install Node.js from its official website if needed. No npm install is required.

```bash
cd PixelPlaza
npm run dev
```

Open http://localhost:3000 on that computer. To stop, Ctrl+C.

## Open on your Android phone

1. Connect phone and laptop to the same trusted Wi-Fi.
2. Run the server above on the laptop, preferably in Windows terminal if using Windows. WSL networking can require separate setup; do not assume its internal IP is reachable from the phone.
3. Run `ipconfig` on Windows (or `ip -4 addr` on Linux) and find the active Wi-Fi adapter's IPv4 address.
4. On your phone open `http://<laptop-Wi-Fi-IPv4>:3000`, replacing the placeholder. Example format only: `http://192.168.1.10:3000`.
5. If Windows asks, allow Node only on your trusted private network. Do not disable the firewall, forward router ports, or expose this demo publicly. Guest Wi-Fi/client isolation may prevent access.

`localhost` on your phone means your phone, not your laptop or ChatGPT's remote workspace. The internal agent preview is not a public mobile URL.

**Standalone alternative:** `dist/index.html` contains the entire app, CSS and JS. Download/open it in a browser that supports local HTML scripts. Some Android file viewers show source or suppress JavaScript; use the Wi-Fi server method if that happens.

## Explore

- Starts empty: 40×40 units, 50 px per unit.
- Show sample world toggles seven unmistakably fictional sample brands. They do not enter published-demo counters.
- Pan/zoom (including pinch), choose via tap or accessible numeric coordinates, sizes 1–8 units in either dimension.
- Search/category filters, fit-to-results, mobile-friendly list view and cards.
- Submit a request → Owner studio → Approve & hold → Publish free pilot. Every owner action asks for confirmation.
- Pending requests do not reserve land. Approval checks conflicts and creates a local hold. Approved plots show a generic HELD tile; business details stay out of the directory until publication.
- Reject, release hold, take down, action history, reset. Reload clears all data.
- No email or uploads collected. No timers, expiry, payment receipt, automatic renewal, analytics or real reservations. Duration is a request field only.
- Explicit Visit website opens the entered public HTTPS domain in a new tab; this is a direct link, not the planned server-side /go redirect. Samples cannot be visited.

## Validation

`npm test` runs geometry, URL, transition and offline prototype checks. Browser QA verified form submission, approval, separate publication and resulting active state. These are not PostgreSQL concurrency tests or a production security audit. Actual Android touch behavior and your home Wi-Fi route require device testing.

## Project files

- `dist/index.html`: self-contained preview.
- `server.cjs`: dependency-free local HTTP server.
- `tests/core.test.cjs`: Node tests.
- `docs/PRODUCT_PLAN.md`: analysis, risks, phases, recommendations.
- `docs/BUILD_PROMPT.md`: revised production implementation brief.

The proposed Next.js/Postgres backend is intentionally deferred until the experience is approved. No production claims should be inferred from the client-side guards in this prototype.
