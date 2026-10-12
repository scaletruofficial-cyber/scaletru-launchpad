# Make the footer Email link reliable

## Why it fails
The link is set up correctly, but email links only work when the visitor has an email app set up on their device, and the editor preview often blocks them. So clicking "Email" can do nothing.

## Fix
- Show the address itself in the footer (scaletruofficial@gmail.com) so people can always see it.
- Clicking it opens a new Gmail message to that address in a new tab (works without an email app).
- Add a small "Copy" button next to it that copies the address and shows a brief "Copied" confirmation.
- Same treatment for the address shown on the Start a Project page.

## Technical details
- Footer.tsx: replace mailto entry with a Gmail compose URL (`https://mail.google.com/mail/?view=cm&to=...`), opened with target _blank; add copy button using navigator.clipboard + sonner toast (mount Toaster in __root if missing).
- start-a-project.tsx: render the address as the same link + copy button.
