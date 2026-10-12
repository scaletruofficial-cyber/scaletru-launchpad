# Use scaletruofficial@gmail.com as the site contact email

## What changes

Your real inbox, **scaletruofficial@gmail.com**, becomes the contact address everywhere it appears on the site, replacing the placeholder `hello@scaletru.com`. Two spots today:

1. **Footer → Connect → "Email"** — the link opens a new message to scaletruofficial@gmail.com.
2. **Start a Project form** — the message shown if a submission fails tells people to email scaletruofficial@gmail.com instead.

The footer link keeps its "Email" label and styling, so nothing else in the layout moves.

## Enquiry inbox

New project enquiries from the Start a Project form are emailed to an address held in a private setting that is still empty — so submissions aren't reaching you yet. After the copy change, I'll reopen the secure form so you can enter:

- **ENQUIRY_TO_EMAIL** — scaletruofficial@gmail.com (the inbox enquiries land in)
- **RESEND_API_KEY** — your Resend key, starting `re_`

You type both into the form yourself; neither passes through this chat. Once both are saved, a submitted enquiry arrives in your inbox automatically.

## Technical details

- `src/components/site/Footer.tsx` — the `connect` list's Email entry: `href` becomes `mailto:scaletruofficial@gmail.com`.
- `src/routes/start-a-project.tsx` — the error-branch paragraph: the fallback address becomes scaletruofficial@gmail.com.
- Both names already exist in the secret store, so the values are re-entered through the secure update form rather than written anywhere in the code.
- Verification: build log clean, then load the footer and trigger the form's error state to confirm the new address renders, and confirm a live submission reaches your inbox once the secrets are saved.
