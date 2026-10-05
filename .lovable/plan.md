# Emberly product images

Replace the placeholder Emberly mockup with the three real product shots you uploaded, using the laptop shot as Emberly's main image everywhere it appears.

## What changes where

- **Home page tile** — the laptop shot, shown in a plain rounded frame with no fake browser bar on top of it (the shot already contains a real laptop, so a second browser chrome would look wrong).
- **Work page card** — the laptop shot.
- **Emberly project page** — the laptop shot across the top, then the desktop dashboard and portrait checklist shots as a two-image gallery below "What we built".
- **Alt text** — rewritten to describe the actual shots instead of the old mockup.
- **Other five projects** — untouched. TradeSphere, DirectLet, CRM System, ArenaX and PrintBlink keep their current images until you send theirs.

```text
Home tile        Work card        Emberly page
[laptop]         [laptop]         [laptop  full width]
                                 [dashboard] [checklist]
```

## Technical notes

- Upload the three PNGs to CDN asset storage with the asset CLI, writing pointers to `src/assets/emberly-laptop-mockup.png.asset.json`, `emberly-portfolio-shot.png.asset.json` and `emberly-portfolio-mock.png.asset.json`, then delete `src/assets/emberly.jpg` — the binary never stays in the repo.
- `src/lib/site-data.ts`: import the pointer JSONs and use their `.url`; point Emberly's `image` at the laptop pointer, add `gallery: [dashboard, checklist]`, and update `imageAlt`.
- `Project` type gains an optional `gallery?: { src: string; alt: string }[]`, so other projects are unaffected.
- `BrowserFrame` gains an optional `chrome?: boolean` (default `true`); the home tile passes `chrome={false}`.
- `src/routes/work.$slug.tsx`: render the gallery section only when `project.gallery?.length`, two columns on desktop, stacked on mobile, lazy-loaded.
- No new metadata needed — the asset URLs are relative, so they stay out of `og:image`.
- Verify with a build check and screenshots of the home page, `/work`, and `/work/emberly` at desktop and mobile widths.

## For the other five projects

Send one landscape shot per project, roughly 3:2 and at least 1600px wide — that's what the cards and page headers crop from. A dashboard shot and a portrait shot are welcome extras for each project page's gallery.
