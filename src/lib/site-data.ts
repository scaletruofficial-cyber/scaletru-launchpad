import tradesphereImg from "@/assets/tradesphere.jpg";
import tracleadsSlide from "@/assets/tracleads-portfolio-mockup.png.asset.json";
import buttaRushLaptop from "@/assets/butta-rush-home-laptop.png.asset.json";
import buttaRushMenuDesktop from "@/assets/butta-rush-menu-desktop.png.asset.json";
import buttaRushPickupDesktop from "@/assets/butta-rush-pickup-desktop.png.asset.json";
import buttaRushMenuMobile from "@/assets/butta-rush-menu-mobile.png.asset.json";
import buttaRushPickupMobile from "@/assets/butta-rush-pickup-mobile.png.asset.json";
import printblinkLaptop from "@/assets/printblink-laptop-home.png.asset.json";
import printblinkProducts from "@/assets/printblink-products.png.asset.json";
import printblinkAbout from "@/assets/printblink-mobile-about.png.asset.json";
import printblinkContact from "@/assets/printblink-mobile-contact.png.asset.json";
import directletLaptop from "@/assets/directlet-laptop-photo.png.asset.json";
import directletLanding from "@/assets/directlet-landing-shot.png.asset.json";
import directletListings from "@/assets/directlet-listings-shot.png.asset.json";
import directletLandlord from "@/assets/directlet-landlord-dashboard.png.asset.json";
import directletTenant from "@/assets/directlet-tenant-dashboard.png.asset.json";
import emberlyLaptop from "@/assets/emberly-laptop-mockup.png.asset.json";
import emberlyDashboard from "@/assets/emberly-portfolio-shot.png.asset.json";
import emberlyChecklist from "@/assets/emberly-portfolio-mock.png.asset.json";

export type ProjectKind = "client" | "showcase";

export type Project = {
  slug: string;
  name: string;
  category: string;
  kind: ProjectKind;
  short: string;
  image: string;
  imageAlt: string;
  imageFit?: "contain";
  gallery?: { src: string; alt: string }[];
  overview: string;
  challenge: string;
  approach: string;
  built: string[];
  features: string[];
  tech?: string[];
  outcome: string;
  outcomeLabel: string;
};

export const projects: Project[] = [
  {
    slug: "printblink",
    name: "PrintBlink",
    category: "Website / Digital Presence",
    kind: "client",
    short:
      "Digital storefront and hardware enquiry platform for PrintBlink, an authorized partner for Hyperdist commercial printing equipment and office supplies.",
    image: printblinkLaptop.url,
    imageAlt: "PrintBlink project laptop mockup showing the supplied Hyperdist printer distribution homepage",
    gallery: [
      {
        src: printblinkProducts.url,
        alt: "PrintBlink project product catalogue mockup showing printer browsing and search",
      },
      {
        src: printblinkAbout.url,
        alt: "PrintBlink project mobile about page mockup with the Printers, chosen properly headline",
      },
      {
        src: printblinkContact.url,
        alt: "PrintBlink project mobile contact page mockup showing a WhatsApp enquiry option",
      },
    ],
    overview:
      "PrintBlink serves corporate and enterprise clients as an authorized distribution partner for Hyperdist printing systems and workplace consumables. The engagement focused on engineering an authoritative digital presence that modernizes client discovery and transitions commercial buyers out of fragmented offline sales loops.",
    challenge:
      "Procurement teams and corporate purchasers previously depended on static PDF catalogues and unstructured messaging to identify models and check hardware specifications. This manual friction delayed response times, increased overhead for sales representatives, and made comparing high-volume office hardware unnecessarily difficult.",
    approach:
      "Scaletru designed and built a fast, performance-first product showcase prioritizing intuitive category exploration and rapid specification checks. Rather than forcing complex self-serve e-commerce checkout onto high-ticket commercial hardware, the interface pairs instant model filtering directly with contextual WhatsApp RFQ pipelines for immediate quote qualification.",
    built: [
      "High-performance responsive web platform and commercial catalog showcase",
      "Structured hardware inventory hierarchy with dynamic category filtering",
      "Contextual WhatsApp sales integration with prefilled product and model parameters",
      "Distributor credentialing suite, partner overview, and direct procurement channels",
    ],
    features: [
      "Multi-tier hardware filtering covering inkjet, enterprise laser, multifunction, and consumable supplies",
      "One-click corporate inquiry routing that attaches model SKUs and specifications directly to WhatsApp chats",
      "Mobile-first responsive architecture designed for sub-second page loads and zero layout shift",
      "Technical spec sheets highlighting print speeds, duty cycles, connectivity, and consumable compatibility",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    outcomeLabel: "What changed",
    outcome:
      "Replaced scattered offline PDF sharing with a centralized, verified digital storefront that corporate procurement officers can review instantly. Inbound sales requests now reach account executives pre-qualified with precise hardware configurations, cutting quote cycle times and eliminating repetitive back-and-forth model confirmations.",
  },
  {
    slug: "tradesphere",
    name: "TradeSphere",
    category: "Multi-vendor marketplace",
    kind: "showcase",
    short:
      "A full-stack marketplace built to support multiple vendors, product image management, and live payments — from vendor storefronts to a Nomba-powered checkout flow.",
    image: tradesphereImg,
    imageAlt: "TradeSphere marketplace interface showing vendor storefronts and checkout",
    overview:
      "TradeSphere explores what it takes to run a marketplace where many independent vendors sell under one roof — storefronts, catalogue management, and a real payment flow rather than a mocked one.",
    challenge:
      "Marketplaces are deceptively complex. Each vendor needs control over their own catalogue and storefront, while buyers need one coherent shopping and checkout experience across all of them.",
    approach:
      "We modelled vendors, products and orders as separate concerns from the start, then designed the buyer experience so the multi-vendor structure stays invisible until it matters — at cart and checkout.",
    built: [
      "Vendor storefronts with independent product catalogues",
      "Product management including image upload and handling",
      "Buyer-side browsing, search and cart",
      "A live checkout flow powered by Nomba",
    ],
    features: [
      "Multi-vendor product management",
      "Product image upload and media handling",
      "Cart and order flow across vendors",
      "Live payment integration",
    ],
    tech: ["Full-stack web application", "Nomba payments", "Cloud media storage"],
    outcomeLabel: "What it demonstrates",
    outcome:
      "TradeSphere shows that Scaletru can build commerce infrastructure end to end — not a storefront template, but the vendor, catalogue and payment systems underneath it.",
  },
  {
    slug: "directlet",
    name: "DirectLet",
    category: "Rental marketplace",
    kind: "showcase",
    short:
      "A two-sided rental marketplace connecting verified Nigerian landlords directly with tenants in Lagos and Abuja, eliminating agent markups and scam-prone WhatsApp workflows.",
    image: directletLaptop.url,
    imageAlt:
      "DirectLet rental marketplace landing page shown on a laptop screen on a bright desk against a soft green wall",
    gallery: [
      {
        src: directletLanding.url,
        alt: "DirectLet landing page in a browser window with the Rent direct headline and property photos",
      },
      {
        src: directletListings.url,
        alt: "DirectLet listings page in a browser window showing search filters and property cards for Lagos and Abuja",
      },
      {
        src: directletLandlord.url,
        alt: "DirectLet landlord dashboard showing my listings with active and verified rental properties",
      },
      {
        src: directletTenant.url,
        alt: "DirectLet tenant dashboard showing my bookings with confirmed, completed and requested inspections",
      },
    ],
    overview:
      "DirectLet is a purpose-built rental marketplace tailored to the operational realities of the Nigerian residential property market. The platform connects vetted landlords with prospective tenants across major urban centres like Lagos and Abuja, removing unvetted intermediaries from the discovery, inspection, and agreement phases.",
    challenge:
      "Renting residential property in Nigeria is burdened by exorbitant 10–20% agent commission and 'agreement' fees, rampant listing fraud, and uncoordinated inspection arrangements conducted across fragmented WhatsApp threads. Without verified landlord identities or structured scheduling, both tenants and property owners endure severe trust deficits and operational friction.",
    approach:
      "Scaletru engineered a web application around trust verification and structured transaction checkpoints rather than open-ended classifieds. We decoupled the frontend interface from the core backend via a modular REST and WebSocket architecture, prioritizing fast localized filtering, strict role-based dashboards, and a formal inspection booking and payment pipeline.",
    built: [
      "Full-featured two-sided marketplace frontend with dedicated Tenant, Landlord, and Admin operational portals",
      "Landlord listing management suite with verified credential badging and property status toggles",
      "Inspection booking and fee checkout pipeline (₦3,000–₦5,000) with real-time status tracking",
      "Real-time landlord-tenant messaging inbox powered by WebSockets with REST conversation history fallbacks",
      "Location-sensitive search engine with Lagos/Abuja neighborhood filters, price bands, and interactive map pins",
      "Centralized administrative moderation panel for user identity audits, dispute flags, and listing verification",
    ],
    features: [
      "Verified Landlord Badge system tied to identity vetting to protect tenants against phantom rentals",
      "In-app inspection scheduler with scheduled slots, status progression, and automated confirmation states",
      "Integrated inspection fee checkout flow to eliminate offline cash disputes and confirm tenant intent",
      "Live chat inbox with persistent message history, role indicators, and direct listing context references",
      "Neighborhood-level search filters calibrated for Lagos (Island, Mainland) and Abuja districts",
      "Role-gated dashboard environments with custom views for active inquiries, listings, and pending bookings",
    ],
    tech: [
      "React 19",
      "TanStack Start",
      "TanStack Router & Query",
      "Tailwind CSS",
      "TypeScript",
      "Socket.IO Client",
      "Leaflet / OpenStreetMap",
      "Node.js / Express (Backend Integration)",
    ],
    outcomeLabel: "What it demonstrates",
    outcome:
      "Demonstrates Scaletru's ability to architect and deliver complex, localized two-sided marketplaces engineered for emerging markets where trust infrastructure is the primary product hurdle. The build proves that high-friction, offline informal workflows—such as fragmented WhatsApp inspections and cash deposits—can be distilled into a unified, secure web product.",
  },
  {
    slug: "tracleads",
    name: "Tracleads",
    category: "CRM / sales workspace",
    kind: "showcase",
    short:
      "A full-spec CRM and sales operations workspace built by Scaletru for daily internal use. Tracleads brings lead capture, deal progression and customer context into one multi-tenant product.",
    image: tracleadsSlide.url,
    imageAlt:
      "Tracleads portfolio slide showing its landing page on a laptop screen, with dashboard, sign-in, workspace setup and leads windows arranged around it",
    overview:
      "Tracleads is Scaletru's internal CRM and sales operations workspace, designed to manage client deals from first enquiry through to close. The product serves as both an operational system for the team and a showcase of full commercial SaaS execution.",
    challenge:
      "Growing businesses often manage sales across disconnected spreadsheets, fragmented chat histories and manual reminders. That creates weak ownership, incomplete customer context and follow-ups that are easy to miss as deal volume grows.",
    approach:
      "Scaletru designed the product around a clear multi-tenant workspace model, with secure account access and structured onboarding for each business. The sales workflow was reduced to the core operational path: capture and qualify leads, move deals through defined stages, maintain contact and company records, schedule follow-ups and review performance from one system.",
    built: [
      "Multi-tenant workspace onboarding with business profile setup",
      "Secure account access with Google sign-in and session-aware workspace protection",
      "Lead, contact and company management across a shared CRM workspace",
      "Deal pipeline, task scheduling and reporting views for daily sales operations",
    ],
    features: [
      "Lead capture with search, filtering and sorting",
      "Visual deal pipeline from New to Qualified, Proposal and Won",
      "Connected contacts and companies directory",
      "Tasks, follow-up scheduling and reporting dashboards",
    ],
    tech: [
      "React 19 and TanStack Start",
      "TypeScript and Tailwind CSS",
      "Lovable Cloud authentication and relational data",
    ],
    outcomeLabel: "What it demonstrates",
    outcome:
      "Tracleads demonstrates Scaletru's ability to take a commercial SaaS product from system design through secure onboarding and operational workflows. It proves that the studio can deliver scalable, multi-tenant software built for repeated daily use rather than a static product demonstration.",
  },
  {
    slug: "butta-rush",
    name: "Butta Rush",
    category: "Food & catering website",
    kind: "client",
    short:
      "A WhatsApp-first website for a bakery and catering business, bringing menu discovery, order building and pickup scheduling into one clear customer journey.",
    image: buttaRushLaptop.url,
    imageAlt: "Butta Rush homepage shown on a laptop, featuring Nigerian meals, cakes and catering",
    imageFit: "contain",
    gallery: [
      { src: buttaRushMenuDesktop.url, alt: "Butta Rush desktop menu with category filters, Nigerian meals and naira prices" },
      { src: buttaRushPickupDesktop.url, alt: "Butta Rush desktop pickup booking with date, hourly time slots, address and WhatsApp order summary" },
      { src: buttaRushMenuMobile.url, alt: "Butta Rush mobile menu showing Jollof Rice and the order basket with a naira total" },
      { src: buttaRushPickupMobile.url, alt: "Butta Rush mobile pickup form and order summary ready to send on WhatsApp" },
    ],
    overview:
      "Butta Rush is a bakery and catering business offering cakes, pastries, Nigerian meals and party trays. Scaletru designed and developed a website that connects browsing with ordering: customers explore the menu, build a basket, choose pickup details and send the complete request to the business on WhatsApp.",
    challenge:
      "Food orders handled through scattered messages can leave important details incomplete. Butta Rush needed a clear way for customers to discover the menu and share their items, quantities and pickup preferences without adding an account or online checkout.",
    approach:
      "We kept WhatsApp as the final handoff and structured everything before it. A filterable menu and order basket lead into pickup scheduling, then a prepared message brings the full request together for availability confirmation. The design pairs a warm, dark visual identity with higher-contrast text and generous tap targets.",
    built: [
      "A responsive bakery and catering website with menu discovery",
      "Category filtering, product details and an order basket",
      "Pickup booking with a date, time and address",
      "A prepared WhatsApp message containing the full order and pickup details",
      "Static hosting and accessibility refinements without a database or account flow",
    ],
    features: [
      "Menu categories covering cakes, pastries, meals and trays",
      "Item quantities and order totals displayed in naira",
      "Price on request for items without a confirmed price",
      "15 hourly pickup choices from 7 AM to 9 PM",
      "Order and pickup summary sent directly to WhatsApp",
      "Mobile-friendly ordering with large tap targets and readable text",
    ],
    outcomeLabel: "What we delivered",
    outcome:
      "Butta Rush now has a connected path from menu discovery to a complete WhatsApp order request, with items and pickup preferences gathered before the conversation begins. The delivered scope covers discovery, ordering, scheduling, WhatsApp handoff, hosting and accessibility. Future refinements identified in the case study include real food photography, remaining price confirmations and an optional brand refresh.",
  },
  {
    slug: "emberly",
    name: "Emberly",
    category: "Habit tracking app",
    kind: "showcase",
    short:
      "A distraction-free habit tracker built around daily momentum, calm typography, and zero-latency local-first logging.",
    image: emberlyLaptop.url,
    imageAlt:
      "Emberly habit tracking app landing page shown on a laptop screen in a warm, plant-filled workspace",
    gallery: [
      {
        src: emberlyDashboard.url,
        alt: "Emberly daily ritual dashboard showing today's habit, a reflection prompt and bottom navigation",
      },
      {
        src: emberlyChecklist.url,
        alt: "Emberly daily ritual checklist with a 50 percent progress ring and four colour-coded habits",
      },
    ],
    overview:
      "Emberly is an opinionated, mobile-first habit tracking application engineered to strip away the social noise and commercial friction prevalent in modern self-improvement tools. Designed around daily momentum, the product provides a quiet, intentional space for users to log recurring rituals, maintain streaks, and record daily reflections.",
    challenge:
      "Most consumer habit apps suffer from compounding product bloat—complex onboarding taxonomies, gamified vanity metrics, and intrusive push notifications that trigger user fatigue and abandonment. Instead of building personal discipline, users end up managing the tool itself rather than their habits.",
    approach:
      "We approached Emberly with deliberate product restraint, paring interaction cost down to single-tap confirmations and instant tactile feedback. The architecture pairs a local-first client cache with real-time cloud synchronization, ensuring instantaneous offline UI updates backed by row-level security and relational persistence.",
    built: [
      "Mobile-first responsive web client with custom typography and semantic design tokens",
      "Local-first state orchestration with resilient background synchronization",
      "Relational data model with Row Level Security (RLS) for multi-tenant isolation",
      "Anonymous, private-by-default community question exchange and reflection pipeline",
    ],
    features: [
      "One-tap ritual checklist with haptic-inspired micro-interactions and completion audio",
      "Dynamic SVG progress ring visualizing real-time daily momentum and completion velocity",
      "Daily Spark journaling engine with automated 84-day visit-and-reflection heatmaps",
      "Real-time cross-device sync and avatar profile management via backend subscriptions",
    ],
    tech: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Router",
      "PostgreSQL",
      "Supabase Realtime & RLS",
      "Vite",
    ],
    outcomeLabel: "What it demonstrates",
    outcome:
      "Emberly proves that exceptional product judgment often lies in what gets excluded rather than added. The project demonstrates disciplined interface craftsmanship, low-latency client architecture, and the ability to turn a saturated consumer category into a refined, high-utility digital artifact.",
  },
];

export const clientProjects = projects.filter((p) => p.kind === "client");
export const showcaseProjects = projects.filter((p) => p.kind === "showcase");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type Service = {
  number: string;
  slug: string;
  title: string;
  tags: string[];
  blurb: string;
  what: string;
  build: string[];
  who: string;
  gets: string[];
  examples: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "digital-presence",
    title: "Digital Presence",
    tags: ["Websites", "Landing Pages", "E-commerce"],
    blurb:
      "Build a professional digital presence that helps your business attract and convert customers.",
    what: "How your business shows up online — the website, the story, the first impression, and the path from interest to enquiry or purchase.",
    build: [
      "Company and brand websites",
      "High-intent landing pages",
      "E-commerce storefronts",
      "Content structure and copy direction",
    ],
    who: "Businesses whose online presence no longer matches the quality of what they actually deliver.",
    gets: [
      "A site designed around your customers' decisions",
      "Clear structure, hierarchy and messaging",
      "Responsive, fast and accessible build",
      "SEO foundations in place from day one",
    ],
    examples: ["printblink", "tradesphere"],
  },
  {
    number: "02",
    slug: "digital-products",
    title: "Digital Products",
    tags: ["Web Apps", "SaaS", "Customer Portals"],
    blurb: "Turn ideas and business needs into functional digital products people can actually use.",
    what: "A real application with users, data and workflows — the thing your customers or team log into and rely on.",
    build: [
      "Web applications",
      "SaaS products and MVPs",
      "Customer portals and account areas",
      "Marketplaces and multi-sided platforms",
    ],
    who: "Founders turning an idea into a product, and businesses that need something no off-the-shelf tool provides.",
    gets: [
      "Product definition before a line of code",
      "A working, deployed application",
      "Accounts, permissions and payments where needed",
      "A codebase that can keep growing",
    ],
    examples: ["tradesphere", "directlet", "emberly"],
  },
  {
    number: "03",
    slug: "digital-systems",
    title: "Digital Systems",
    tags: ["Dashboards", "Booking", "Ordering", "Automation"],
    blurb: "Make your business easier to operate with systems designed around the way you work.",
    what: "Internal tooling that replaces the spreadsheets, chat threads and manual steps holding your operations together.",
    build: [
      "Operations and admin dashboards",
      "Booking and scheduling systems",
      "Ordering and fulfilment flows",
      "Reporting and workflow automation",
    ],
    who: "Service and operations-heavy businesses spending hours on work software should be doing.",
    gets: [
      "A system mapped to your actual process",
      "Fewer manual steps and missed handoffs",
      "Visibility into what is happening day to day",
      "Team training and handover",
    ],
    examples: ["tracleads", "butta-rush"],
  },
  {
    number: "04",
    slug: "product-design",
    title: "Product Design",
    tags: ["UI/UX", "Product Strategy", "Design Systems"],
    blurb: "Design digital experiences that are intuitive, useful and built around your users.",
    what: "The thinking and craft that decide whether a product feels obvious or exhausting to use.",
    build: [
      "UX flows and information architecture",
      "Interface design across web and mobile",
      "Design systems and component libraries",
      "Product strategy and feature definition",
    ],
    who: "Teams with an existing product that underperforms, and anyone who needs the thinking done before the building starts.",
    gets: [
      "Research-informed structure and flows",
      "High-fidelity interface design",
      "A reusable, documented design system",
      "Design ready to be built",
    ],
    examples: ["emberly", "directlet", "tracleads"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    short: "Understand the business, users and goals.",
    long: "We start with your business, not your feature list. What you sell, who buys it, where things break, and what a genuinely better outcome looks like. Most projects change shape at this stage — usually for the better.",
  },
  {
    number: "02",
    title: "Define",
    short: "Determine what needs to be built and why.",
    long: "We turn the findings into a scope: what gets built, what it does, what it deliberately does not do, and how we will know it worked. You leave this stage knowing exactly what you are getting.",
  },
  {
    number: "03",
    title: "Design",
    short: "Create the structure, UX and visual direction.",
    long: "Structure first, then the interface. Flows, screens, states and the visual language — designed so it can be built and so your users never have to think about how it works.",
  },
  {
    number: "04",
    title: "Build",
    short: "Develop the actual product.",
    long: "Development in reviewable increments, so you see the product take shape instead of waiting for a reveal. Clean architecture, sensible integrations, and code written to be extended.",
  },
  {
    number: "05",
    title: "Launch",
    short: "Test, refine and release.",
    long: "Testing across devices, performance and accessibility passes, content checks, then release. We stay close through the first stretch of real usage and fix what real users surface.",
  },
  {
    number: "06",
    title: "Grow",
    short: "Maintain, improve and expand the product as the business evolves.",
    long: "Products are not finished at launch. We stay available to maintain, improve and extend what we built as your business changes and you learn more about your users.",
  },
];

export const pillars = [
  {
    title: "Business Thinking",
    body: "We start with the problem and desired outcome.",
  },
  {
    title: "Design",
    body: "We make the experience clear, intuitive and useful.",
  },
  {
    title: "Development",
    body: "We turn the solution into a functional digital product.",
  },
  {
    title: "AI as Leverage",
    body: "We use modern AI tools to accelerate exploration, development and iteration — while our own expertise remains responsible for the decisions and final product.",
  },
];

export const founders = [
  {
    name: "Chiagozie",
    role: "UI/UX Designer",
    focus: "Product design, user experience, visual direction and product thinking.",
    initials: "C",
  },
  {
    name: "Marvellous",
    role: "Full-Stack Developer",
    focus: "Development, architecture, integrations and technical implementation.",
    initials: "M",
  },
];
