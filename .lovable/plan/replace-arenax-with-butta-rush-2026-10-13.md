# Replace ArenaX with Butta Rush

Replace ArenaX throughout the portfolio with **Butta Rush**, using the supplied PDF for the case-study copy and the five uploaded images. Leave TradeSphere unchanged until the second project arrives.

## Content and placement

- Name: **Butta Rush**. Category: **Food & catering website**.
- Show it under **Client Work**, alongside PrintBlink: the PDF describes a website delivered for the Butta Rush business.
- Fill the existing case-study sections: introduction, overview, challenge, approach, what we built, key features and outcome.
- Focus the story on replacing scattered messages with a filterable menu, an order basket with naira totals, pickup details and a prepared WhatsApp order.
- Describe the delivered experience without inventing sales results, conversion figures or a technology stack. Omit technology badges because the PDF does not name the framework.
- Keep Scaletru’s existing appearance; the bakery colors remain inside the supplied images only.

## Images

- **Main image:** the supplied homepage laptop photo, shown fully and centered without cropping the laptop.
- **Gallery:** desktop menu, desktop pickup, mobile menu and mobile pickup, in that order. Preserve their proportions, with desktop shots paired and mobile shots paired on wider screens, stacked on phones.
- Use the supplied files unchanged, with descriptive alternative text. Do not add extra browser chrome over images that already contain it.

## Links and consistency

- New project address: `/work/butta-rush`.
- Replace ArenaX in the home and Work listings, related projects and Digital Systems service examples.
- Redirect `/work/arenax` to the new page so an old link does not lead to a missing page.
- Update the Work page description to reflect food ordering rather than tournament software.
- Leave PrintBlink, DirectLet, Tracleads, Emberly and TradeSphere content and imagery untouched.

## Technical details

- Upload the five images to CDN asset storage and save their returned `.asset.json` pointers before importing them.
- Replace the ArenaX entry and image import in `src/lib/site-data.ts`; retain the existing shared project-data structure and gallery renderer.
- Add a per-project image-fit option only if required to show the complete Butta Rush laptop in every placement, preserving other projects’ display behavior.
- Handle the old slug redirect in the existing project-detail loader and give the new page app-specific title, description, Open Graph and Twitter metadata. Relative CDN image URLs will not be used as social-image tags.
- Update the task list to mark the ArenaX replacement complete and keep the TradeSphere replacement pending your next upload.

## Verification

- Check the home page, Work page, Services example and Butta Rush detail page, including navigation from a portfolio card.
- Verify the old ArenaX address redirects correctly.
- Inspect large-screen and phone layouts for complete laptop framing, all four gallery images, readable copy and no horizontal overflow.
- Confirm the preview reports no compilation errors before completion.