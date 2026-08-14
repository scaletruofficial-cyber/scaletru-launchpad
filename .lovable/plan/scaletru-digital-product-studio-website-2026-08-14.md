# Scaletru — Digital Product Studio Website

A complete, custom-built multi-page site: dark, premium, typographically led, with electric lime used sparingly as the signature accent.

## Design foundation

- Colors: near-black #0A0A0A base, deep charcoal #111111 surfaces, off-white #F5F5F2 text, muted gray #A1A1A1, electric lime #B7FF3C accent (CTAs, hover states, small details only).
- Typeface: Manrope, loaded via the root document head. Strong hierarchy — oversized confident headlines, restrained size scale.
- Layout: consistent max-width container, generous section spacing, subtle 1px borders on cards and section dividers, balanced asymmetry where it improves composition.
- Motion: light fade/slide reveals on scroll, hover lifts on cards, arrow nudges on CTAs, sticky nav blur transition. Nothing heavy or parallax-driven.

## Pages

1. **Home** — Hero, value strip, business problem, what we build, work (client + showcase), why Scaletru, process, about, final CTA, footer. Built in exactly the specified order.
2. **Work** — full portfolio index: PrintBlink as featured client work, then the five showcase products.
3. **Services** — hero plus the four expanded categories (what it is, what we build, who it's for, what you get, related projects, CTA). Pricing shown as "Projects are scoped around your needs."
4. **Process** — the six stages expanded, ending with "Need help figuring out what you need?"
5. **About** — story, mission, founders (Chiagozie, Marvellous), how we work, AI as leverage, small-team advantage.
6. **Start a Project** — the conversion page and form.
7. **Project detail pages** — one reusable template driving six pages: PrintBlink (case-study framing, placeholder copy where details aren't confirmed), TradeSphere, DirectLet, CRM System, ArenaX, Emberly (project framing: overview, challenge, approach, what we built, key features, gallery, validation, CTA).

## Content accuracy

- No invented results, testimonials, logos, numbers, or adoption claims anywhere.
- PrintBlink case study ships with clearly marked placeholders for problem / build / outcome.
- ArenaX described only as having received direct feedback from the UniPort Director of Sports that shaped features — never as officially adopted.
- Client Work and Showcase stay visually distinct sections; CTAs read "View Case Study →" vs "View Project →" accordingly.
- AI appears once, as one of four pillars, never as the headline positioning.

## Visuals

Generated product-interface mockups (marketplace, rental listings, CRM dashboard, tournament brackets, habit tracker, PrintBlink site) composed into browser/device frames for the hero and project cards — no stock photography, no abstract 3D. These are built as swappable image assets so real screenshots can replace them directly when you upload them.

## Start a Project form

Fields: name, business, email, project type (select), project description, budget range, timeline. Client-side validation, premium compact layout, success state, and the reassurance line "Not sure exactly what you need yet?".

Submissions are emailed to you. Because sending mail needs a provider key, the plan is: build the form plus a server-side send endpoint, then ask you for a Resend API key and the destination email address to activate delivery. Until the key is added, submissions are validated and the endpoint logs them rather than dropping them silently.

## Technical notes

- TanStack Start file routes: `index`, `work`, `work.$slug`, `services`, `process`, `about`, `start-a-project`.
- Reusable components: Navbar, Footer, Button, SectionHeading, ServiceCard, ProjectCard, FeaturedCaseCard, FounderCard, ProcessStep, CTASection, FormField, FormSelect, Tag, BrowserFrame, Reveal.
- Design tokens defined in `src/styles.css` under the existing `@theme inline` system — no hardcoded color utilities in components.
- Per-route `head()` metadata: unique titles, descriptions, OG/Twitter tags, canonical links; JSON-LD Organization on root and per-project structured data on detail pages.
- Accessibility: semantic landmarks, one H1 per page, visible focus rings in lime, labeled form controls, alt text, keyboard-operable mobile menu.
- Mobile designed intentionally: compact nav with full-screen menu, stacked cards, vertical process timeline, no horizontal overflow.
