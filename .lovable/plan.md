# Essence replacement and portfolio order

Replace TradeSphere with **Essence**, using your case-study PDF and three supplied images. Keep **Client Work** and **Showcase** separate, with larger-scope projects leading each section.

## Portfolio order

Apply the same order on Home and Work:

**Client Work**
1. PrintBlink
2. Butta Rush

**Showcase**
1. DirectLet — the two-sided rental platform with multiple operational roles
2. Tracleads — the multi-tenant CRM and sales workspace
3. Essence — the fragrance store with catalog, scent quiz, wishlist and checkout journey
4. Emberly — the focused habit-tracking app

This is an editorial ranking by scope and workflow breadth, not revenue, user numbers or claimed success. DirectLet takes the first, wider Showcase card. Preserve uncropped image framing when using that wider format.

## Essence case study

- Name: **Essence**; category: **Fragrance e-commerce concept**; classification: **Showcase**, as the PDF explicitly describes a concept store.
- Fill the existing sections using the supplied PDF: overview, challenge, approach, what we built, key features, technology and outcome.
- Cover the transformation from a home-goods store into a fragrance house; the 100-product catalog; 5 ml, 10 ml and 50 ml options with size-aware pricing; fragrance notes; the five-question scent quiz; wishlist; and cart/checkout journey.
- Include the supplied stack: React, TypeScript, Vite, Tailwind CSS and shadcn/ui, with shared client-side cart and wishlist state.
- Clearly describe it as demo-ready: accounts, persistent orders and real payments are future connections, not live capabilities. No invented sales or conversion results.
- Keep Scaletru’s dark design and typography unchanged; Essence’s editorial styling stays inside its images and case-study description.

## Images and links

- Use the **homepage laptop image** as Essence’s cover everywhere, fully visible without cropping or added browser chrome.
- Add the **catalog desktop/mobile composition** and **product desktop/mobile composition** as the two gallery images, preserving their full proportions.
- New page: `/work/essence`. Redirect `/work/tradesphere` to it, while preserving the existing ArenaX → Butta Rush redirect.
- Replace TradeSphere’s Home opening image with Essence, without changing the other two opening images.
- Replace TradeSphere service examples with Essence in Digital Presence and Digital Products; order project examples consistently with the portfolio ranking.
- Update Work descriptions to include fragrance commerce and retain unique page metadata.

## Technical details

- Upload the three JPGs through the asset CLI and import their returned CDN pointers in shared site data.
- Replace the TradeSphere record and store the display order centrally so Home, Work and related-work suggestions stay consistent.
- Use the existing `imageFit` option for Essence, and preserve complete photography for DirectLet’s newly widened card rather than stretching or cropping it.
- Update the shared detail-page loader for the retired slug redirect. Continue to omit social-image metadata for relative asset URLs.
- Record the completed replacement and ordering in the task list.

## Verification

- Confirm both portfolio sections show the exact order above on Home and Work.
- Open Essence from its card and verify all three images, complete case-study content and accurate demo-status wording.
- Check both retired addresses redirect to their replacements and service links resolve correctly.
- Inspect desktop and phone layouts for full laptop framing, gallery proportions and no horizontal overflow; confirm the preview has no compilation errors.