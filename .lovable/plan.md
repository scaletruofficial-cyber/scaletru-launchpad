# Scaletru — Promotion Banner (Square Social Post)

One attention-leading promotional image for Scaletru: 1080x1080, near-black with electric lime, one real product screen as the hero, and the name "Scaletru" carrying the composition.

## What you'll get

A single square image saved to Files, sized for Instagram and LinkedIn feeds, plus small variants if you want them. Nothing in the site's code changes — this is a standalone artwork.

## The wording

The name is the hook, so the headline plays on "Scaletru" itself rather than inventing an offer. Pick one; the rest of the copy stays fixed.

Headlines — 4 options, 30 characters or fewer so they stay readable in a small feed thumbnail:

| # | Headline |
| --- | --- |
| 1 | Built to scale. Built true. |
| 2 | Your business, scaled true. |
| 3 | We build products that scale. |
| 4 | Ready to scale your business? |

The other two lines — 1 option each, fixed:

| Kind | Limit | Line |
| --- | --- | --- |
| Supporting line | ~60 characters | Digital products, websites and systems for growing businesses. |
| Button | ~20 characters | Start a Project |

No discounts, no made-up numbers, no client logos, no "trusted by" claims — nothing the site doesn't already stand behind.

## Composition

The name set enormous, the product screen sitting beneath it, the button bottom-left. Lime is used twice only: one accent word and the button.

```text
+--------------------------------+
|  digital product studio        |   small, tracked, muted
|                                |
|  BUILT TO                      |   oversized off-white
|  BUILT TRUE.                   |   "true" in lime
|                                |
|   [ laptop: real DirectLet     |
|     landing page on screen ]   |   the actual product
|                                |
|  Digital products, websites    |   muted, two lines
|  and systems for growing       |
|  businesses.                   |
|                                |
|  [ Start a Project ]  SCALETRU |   lime pill, wordmark
+--------------------------------+
```

Everything sits inside a 90px safe margin so nothing is clipped when the feed crops it, and nothing overlaps.

## How it's made

1. **Ground the brand.** Read the palette, type and voice straight from the site's own design tokens and copy, and save them as a brand profile so future creative matches this one.
2. **Ground the product shot.** The screen shown is your real interface, taken from the already-uploaded DirectLet landing shot — the page itself is never redrawn or invented, only the scene around it.
3. **Render.** One square image, built around that real screen, with the approved wording added.
4. **Inspect and improve.** The render is opened at full size and checked for spelling, clipped text, overlapping elements, low contrast and edge crowding. The worst problem is fixed first and re-checked; earlier versions stay on disk so you can compare.
5. **Deliver.** The finished image lands in Files, grouped with the brand profile, and is shown to you for approval before anything else is made.

## Technical notes

- Canvas: 1080x1080 px, saved as a JPG under `ads/images/` in Files, filename `scaletru_promo_square.jpg`. Every rework writes a new file (`scaletru_promo_square_v2.jpg`) rather than overwriting.
- Palette comes from the site's own tokens: near-black background, off-white type, electric lime accent, muted grey supporting text. No hard-coded hexes invented for the banner.
- Typography: the site's Manrope, at a heavy weight for the headline; the supporting line and labels stay restrained so the headline keeps the attention.
- Product source: the existing DirectLet landing asset already in the project (`src/assets/directlet-laptop-photo.png.asset.json`) is passed as the image input, so the interface shown is the real one. The brand profile records it as the canonical product shot for this piece.
- Safe area: 90px inset on all four sides for the square format; headline, button and wordmark all sit inside it.
- Claims policy: only statements the site already makes appear. No invented results, adoption, client counts, or testimonials.
- The wordmark is set as text, not a logo file — if you have a real Scaletru logo, upload it and it replaces the typeset name.
- After the image is approved, the same layout can be re-cut to 1200x628 (link preview) and 1080x1920 (story) without changing the wording.
