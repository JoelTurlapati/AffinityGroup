# Wix HTML Embed → URL Mode (stop the copy-paste)

**Goal:** Stop re-pasting HTML into Wix on every change. Instead, each Wix HTML
embed points at the page's GitHub Pages URL. After a `git push`, GitHub Pages
rebuilds (~30–60s) and Wix shows the new version on next load. **No more pasting,
including header/footer changes.**

This is a **one-time** switch per page. Do it once; it's permanent.

---

## Why this works (verified 2026-06-17)

- Repo `JoelTurlapati/AffinityGroup` is **public**, Pages live at
  `https://joelturlapati.github.io/AffinityGroup/`.
- `html-pages/*.html` return HTTP 200 and reflect the latest push.
- GitHub Pages sends **no `X-Frame-Options` / `Content-Security-Policy`**, so the
  pages are allowed to load inside Wix's iframe.
- Pages already `postMessage` their height (`iFrameHeight` / `{height}`) to the
  parent — the same auto-resize signal used today, so resize keeps working.

---

## STEP 1 — Pilot ONE page first (do not convert all 46 yet)

1. In Wix Studio, open the **Home** page.
2. Select the HTML embed element → settings → switch from **"Code"** to
   **"Website address"** (a.k.a. URL).
3. Paste: `https://joelturlapati.github.io/AffinityGroup/html-pages/home.html`
4. Publish (or Preview) and check:
   - Page renders correctly.
   - Height auto-fits (no inner scrollbar / no cut-off).
   - Nav links and CTAs work.
5. Make a tiny test edit locally (e.g. footer), `git push`, wait ~1 min, reload
   the live page → confirm the change appears **without** re-pasting.

If the pilot looks good, convert the rest using the table below.
If height doesn't auto-fit in URL mode, tell Claude — there's a Velo
`onMessage` snippet that forces it.

---

## STEP 2 — Convert the rest (URL per page)

Base URL: `https://joelturlapati.github.io/AffinityGroup/html-pages/`

For each Wix page, switch its embed to "Website address" and use:

| Wix page | URL (append filename to base URL) |
|---|---|
| Home | `home.html` |
| Total Wealth Management | `total-wealth-management.html` |
| Investment Management | `investment-management.html` |
| Retirement Planning | `retirement-planning.html` |
| Tax Planning & Preparation | `tax-planning-preparation.html` |
| Real Estate Investing | `real-estate-investing.html` |
| Insurance Planning | `life-disability-insurance.html` |
| Estate Planning | `estate-planning.html` |
| 401(k) & Retirement | `401k-retirement.html` |
| Outsourced CFO | `outsourced-cfo.html` |
| Business Financial Mgmt | `business-financial-management.html` |
| Business Sale Planning | `business-sale-planning.html` |
| Executive Benefit Planning | `executive-benefit-planning.html` |
| Entity Structure & Legal | `legal-structure.html` |
| Business Organizations | `business-organizations.html` |
| Business Owners | `businessowners.html` |
| Banking & Loans | `banking-loans.html` |
| Bookkeeping | `bookkeeping.html` |
| Business Agreements | `business-agreements.html` |
| Group Health Insurance | `group-health-insurance.html` |
| Payroll Services | `payroll-services.html` |
| High Earners | `high-earners.html` |
| New High Earners | `newhighearners.html` |
| Pre-Retirees & Retirees | `pre-retirees-and-retirees.html` |
| Our Team | `our-team.html` |
| Fiduciary vs Broker | `fiduciary-vs-broker.html` |
| FAQs | `faqs.html` |
| Contact | `contact.html` |
| Content Library | `content-library.html` |
| Recommended Reading Library | `recommended-reading-library.html` |
| Financial Calculators | `financial-calculators.html` |
| eMoney | `emoney.html` |
| Team — Scott | `team-scott.html` |
| Team — Automn | `team-automn.html` |
| Team — Kate | `team-kate.html` |
| Team — Brandon | `team-brandon.html` |
| Team — Logan | `team-logan.html` |
| Team — Mel | `team-mel.html` |
| Team — Mark | `team-mark.html` |
| Team — Tim | `team-tim.html` |
| Team — Andy | `team-andy.html` |
| Team — Schechter | `team-schechter.html` |
| Team — Leugers | `team-leugers.html` |
| Team — Forker | `team-forker.html` |
| Team — Atlas | `team-atlas.html` |
| Team — Pioneer | `team-pioneer.html` |

---

## Ongoing workflow after conversion

1. Edit the file(s) in `html-pages/` locally.
2. `git add . && git commit && git push`
3. Wait ~30–60s for GitHub Pages to rebuild.
4. Reload the live Wix page. Done — no pasting.

(Header/footer changes that touch all files: still edit/commit/push once;
every URL-embedded page picks them up automatically.)

---

## Caveats (honest)

- **CDN cache:** GitHub Pages/Fastly may take up to ~10 min worst case; usually
  near-instant on deploy. Hard-refresh if needed.
- **SEO:** Content inside an iframe isn't indexed as the Wix page's own text.
  This is **already true today** (Wix's HTML embed is itself an iframe), so URL
  mode is **no worse** — but it's a reason to keep real SEO copy/meta in the Wix
  page settings regardless.
- **Editing header/footer across 46 files** is now solved by `sync-shared.ps1`
  (see below) — pairs perfectly with this URL workflow.

---

## Edit the header/footer ONCE: `sync-shared.ps1`

The nav and footer are duplicated inside every `html-pages/*.html`. Instead of
editing 46 files, edit the master copy and run the sync script:

1. Edit `partials/nav.html` and/or `partials/footer.html`.
2. Run: `powershell -ExecutionPolicy Bypass -File .\sync-shared.ps1`
   (add `-WhatIf` first to preview which files would change.)
3. `git add . ; git commit -m "..." ; git push`

What it does:
- Replaces the `<nav class="ag-nav">…</nav>` and `<footer class="ag-footer">…</footer>`
  blocks in every page with the master partials. Page-unique content, `<head>`
  CSS, and scripts are never touched.
- **home.html is excluded from the nav sync** (older nav structure its own CSS is
  built for); it still gets the footer sync. Edit home's nav by hand.
- Preserves each file's BOM and line-ending style.

Note: nav/footer **CSS** still lives in each page's `<head><style>`; the script
syncs the HTML blocks, not the CSS. CSS changes remain a manual/regex task.
