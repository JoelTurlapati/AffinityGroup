# Affinity Group — Project Handoff

> Onboarding doc for a fresh Claude Code session / new Claude account. Read this first, then the local memory files (see bottom).

## What this project is
Marketing website for **The Affinity Group** (wealth-management / fiduciary firm, Canton–Akron OH). Built as a set of standalone HTML pages that are embedded into a Wix Studio site via HTML-embed widgets.

## Coordinates
| Thing | Value |
|---|---|
| Local repo | `C:\Pravaltech\Developer\OneDrive - Praval\Desktop\Sample1` |
| GitHub repo | `JoelTurlapati/AffinityGroup` (PUBLIC), branch `main` |
| Wix site (the ONLY one to touch) | "**Affinity Site Dev**", siteId `099a04e7-6f5e-4084-9126-80700236b601` |
| Wix live preview URL | `https://tagplanning.wixstudio.com/demo` |
| Wix login | `scottprivate@tagplanning.com` |
| Live read-only site (reference only, do NOT edit) | "Affinity Site", siteId `49665c90-a0e5-4bbc-91a2-85ff5c39ce9e` |
| Pages | 46 files in `html-pages/*.html` |

## The current workflow (IMPORTANT)
1. Edit `html-pages/<file>.html` with the Edit tool.
2. Commit + push (see PowerShell block below).
3. **The user then manually re-pastes each changed file's HTML into its Wix HTML-embed widget in Wix Studio.** Wix does NOT auto-sync from GitHub.

> A "URL-mode embed" automation (point Wix embeds at the GitHub Pages URL so pushes go live with no paste) is documented in `WIX-URL-EMBED-SETUP.md` but is **NOT adopted — still under review.** Until the user says otherwise, assume the manual re-paste workflow above.

## Working conventions (from user feedback)
- **Never paste full file contents into chat** — use the Edit tool, then push. Share only diffs/specific lines when explanation is needed.
- Use **PowerShell** for git/CLI (Windows machine).
- The `html-pages/*.html` files contain **double-encoded UTF-8 (mojibake)** throughout. When adding non-ASCII: use `\unicode` escapes inside CSS `content:` (e.g. `\2713`), and HTML numeric entities in body text (e.g. `&#128218;` for 📚). Never paste raw emoji/smart-punctuation.
- Design tokens: teal `#1D7080` / dark `#145568` / `#0e3d47`; gold `#C9A84C`; fonts Playfair Display (headings) + Inter (body); fixed nav 72px.
- Shared header/footer: master copies in `partials/nav.html` + `partials/footer.html`; run `sync-shared.ps1` to propagate (home.html excluded from nav sync). Nav/footer **CSS** is per-file, not synced.

## Asset pipeline
- **Images:** find on Pexels → `UploadImageToWixSite` (Wix MCP, siteId above) → returns a `static.wixstatic.com` URL that passes Wix iframe CSP → reference that URL in the HTML. (github.io/Pexels URLs are blocked by Wix CSP inside the iframe.)
- **Video:** the Wix MCP connector **cannot upload video** — the user uploads the mp4 to Wix Media Manager manually, then we reference the `video.wixstatic.com/video/.../720p/mp4/file.mp4` URL.
- **ffmpeg** is installed (winget Gyan.FFmpeg) for assembling clips; not on PATH by default.

## Environment / PATH (set once per PowerShell session)
```powershell
cd "C:\Pravaltech\Developer\OneDrive - Praval\Desktop\Sample1"
$env:PATH = "C:\Program Files\nvm\v22.22.3;C:\Users\joel.t\AppData\Roaming\npm;C:\Program Files\GitHub CLI;" + $env:PATH
git add .
git commit -m "description"
git push
```
Node v22.22.3 (nvm-windows), GitHub CLI authed as JoelTurlapati, Wix CLI v1.1.206 (`wix.cmd`). Note: `wix dev` is broken on this machine (known Windows bug) — not needed for the embed workflow.

## New-account setup checklist (same machine)
- [ ] **Reconnect the Wix MCP connector** and log in as `scottprivate@tagplanning.com`.
- [ ] Confirm `ListWixSites` shows siteId `099a04e7-6f5e-4084-9126-80700236b601` ("Affinity Site Dev") — **only touch that site**.
- [ ] Confirm GitHub CLI still authed as JoelTurlapati (`gh auth status`) — persists on same machine.
- [ ] Confirm the local memory files auto-loaded (MEMORY.md index). They live at
      `C:\Users\joel.t\.claude\projects\C--Pravaltech-Developer-OneDrive---Praval-Desktop-Komal\memory\`
      (filesystem-based, not tied to the Claude login) — should carry over automatically.

## Most recent session (2026-06-18) — pushed, PENDING Wix re-paste
Changed 4 files (commits 534821d, c3aff19, a5ada27):
- **recommended-reading-library.html** — fixed "The Power of Zero" link/cover (revised ed.); fixed mojibake books emoji; **added** "The Millionaire Next Door" (Stanley/Danko) and "The Gap and the Gain" (Sullivan/Hardy); **removed** "Money for Couples" (Ramit Sethi).
- **business-sale-planning.html** — hero image → background video.
- **total-wealth-management.html** — hero video swapped to new URL.
- **businessowners.html** — §3 "Services Tailored to Business Owners" dark buildings bg → solid teal gradient.

**Re-paste these 4 in Wix, then verify:** both new book covers load (the Gap-and-Gain cover comes from Google Books — check it renders), both hero videos autoplay, businessowners §3 shows the teal gradient.

## Local memory files (read for full history)
- `MEMORY.md` — index
- `project_affinity_group.md` — full project status, batch history, all design/embed/asset notes
- `feedback_workflow.md` — editing/push conventions
