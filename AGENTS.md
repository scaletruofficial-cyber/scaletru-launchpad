<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Project covers and galleries are managed in shared site data using CDN asset pointers, so updates remain consistent across all project placements.
- Portfolio display order is defined centrally in shared site data and reused by filtered collections and related-work suggestions, so placements stay consistent.
- Project-specific uncropped cover behavior is declared by the shared imageFit field and respected by portfolio cards, so laptop photography stays fully visible without changing other covers.
- Retired project slugs redirect in the shared project-detail loader, so existing portfolio links continue to reach their replacements.
- The browser-tab icon is a small raster derivative of the custom logo source, declared in the root head; keep the default icon removed to avoid stale branding.
