import tradesphereImg from "@/assets/tradesphere.jpg";
import directletImg from "@/assets/directlet.jpg";
import crmImg from "@/assets/crm.jpg";
import arenaxImg from "@/assets/arenax.jpg";
import printblinkImg from "@/assets/printblink.jpg";
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
      "A client engagement focused on building a professional digital presence that represents the business properly online.",
    image: printblinkImg,
    imageAlt: "PrintBlink website interface mockup shown in a browser frame",
    overview:
      "PrintBlink is genuine client work: a digital presence project delivered by Scaletru. Detailed project documentation is being finalised, so parts of this case study are marked as placeholders rather than filled with assumptions.",
    challenge: "[Placeholder — the specific business problem will be documented here once confirmed with the client.]",
    approach:
      "[Placeholder — the strategy, structure and design decisions behind the build will be documented here once confirmed.]",
    built: [
      "[Placeholder — scope of work to be confirmed]",
      "[Placeholder — pages and components delivered]",
      "[Placeholder — content and design system decisions]",
    ],
    features: [
      "[Placeholder — key feature]",
      "[Placeholder — key feature]",
      "[Placeholder — key feature]",
    ],
    outcomeLabel: "What changed",
    outcome:
      "[Placeholder — outcomes will be published only once measured and confirmed with the client. We do not publish results we cannot verify.]",
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
      "DirectLet connects landlords and tenants directly with listings, search and filters, inspection booking, in-app messaging, and payments, built for the Nigerian rental market.",
    image: directletImg,
    imageAlt: "DirectLet rental marketplace interface showing property listings and messaging",
    overview:
      "DirectLet is a rental platform built around a specific market reality: finding a place to rent in Nigeria usually means going through layers of intermediaries with little transparency.",
    challenge:
      "Tenants struggle to verify listings and book inspections. Landlords struggle to reach serious tenants. Everything happens over scattered phone calls and messages.",
    approach:
      "We designed a direct landlord-to-tenant flow — discovery, filtering, inspection booking, conversation and payment — so the entire rental journey lives in one place with a clear record of it.",
    built: [
      "Property listings with rich detail pages",
      "Search with filters tuned to how people actually look for rentals",
      "Inspection booking",
      "In-app messaging between landlords and tenants",
      "Payment handling",
    ],
    features: [
      "Listing creation and management",
      "Filtered search and discovery",
      "Inspection scheduling",
      "Direct messaging",
      "Payments",
    ],
    tech: ["Full-stack web application", "Real-time messaging", "Payment integration"],
    outcomeLabel: "What it demonstrates",
    outcome:
      "DirectLet shows how we approach marketplace products built for a local market — designing around real behaviour rather than importing a foreign template.",
  },
  {
    slug: "crm-system",
    name: "CRM System",
    category: "Business operations platform",
    kind: "showcase",
    short:
      "Built to a full commercial feature spec — leads, sales pipeline, follow-ups, reporting, and notifications. Designed as a real tool for businesses to manage customer relationships.",
    image: crmImg,
    imageAlt: "CRM dashboard interface showing sales pipeline, analytics and lead records",
    overview:
      "A customer relationship platform built to a complete commercial specification rather than a demo scope — the kind of internal system a growing business actually runs on.",
    challenge:
      "Most growing businesses track customers across spreadsheets, chat threads and memory. Nothing is connected, follow-ups get missed, and no one can see the real state of the pipeline.",
    approach:
      "We built around the daily workflow: capture the lead, move it through defined stages, never lose a follow-up, and give the owner a view of what is actually happening.",
    built: [
      "Lead capture and customer records",
      "Sales pipeline with stage management",
      "Follow-up tracking",
      "Reporting and analytics views",
      "Notifications",
    ],
    features: [
      "Pipeline and deal stages",
      "Customer and contact records",
      "Follow-up reminders",
      "Reporting dashboards",
      "In-app notifications",
    ],
    tech: ["Full-stack web application", "Role-based access", "Analytics views"],
    outcomeLabel: "What it demonstrates",
    outcome:
      "This project shows our ability to interpret a full commercial feature specification and turn it into a coherent, usable operations tool.",
  },
  {
    slug: "arenax",
    name: "ArenaX",
    category: "Tournament management platform",
    kind: "showcase",
    short:
      "Built to run competitive tournaments end to end — brackets, scheduling, and admin score confirmation. Shared directly with the University of Port Harcourt's Director of Sports, whose hands-on feedback shaped features including group-stage standings and team management.",
    image: arenaxImg,
    imageAlt: "ArenaX tournament platform interface showing brackets and group standings",
    overview:
      "ArenaX manages competitive tournaments from registration through to a confirmed final result — brackets, fixtures, scores and the admin layer that keeps results trustworthy.",
    challenge:
      "Tournaments are usually run on paper, group chats and spreadsheets. Fixtures drift, scores get disputed, and standings are hard to keep accurate in real time.",
    approach:
      "We built the bracket and scheduling engine first, then added an admin confirmation step so no score enters the standings without being verified.",
    built: [
      "Tournament brackets",
      "Match scheduling",
      "Admin score confirmation",
      "Group-stage standings",
      "Team management",
    ],
    features: [
      "Bracket generation and progression",
      "Fixture scheduling",
      "Admin-verified score entry",
      "Group-stage standings tables",
      "Team and roster management",
    ],
    tech: ["Full-stack web application", "Role-based admin controls"],
    outcomeLabel: "Validation",
    outcome:
      "ArenaX was shared directly with the University of Port Harcourt's Director of Sports, whose hands-on feedback shaped features including group-stage standings and team management. It has not been officially adopted or deployed for a university tournament — the value here is direct stakeholder feedback and feature validation from someone who runs real competitions.",
  },
  {
    slug: "emberly",
    name: "Emberly",
    category: "Habit tracking app",
    kind: "showcase",
    short:
      "A clean, focused habit tracker built to make daily consistency easier — simple enough to open every day without friction.",
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
      "Emberly is a deliberately small product. It exists to prove a point we care about: restraint is a design skill, and the best daily-use tools do less, faster.",
    challenge:
      "Most habit apps collapse under their own features. The more they ask of you, the less likely you are to open them on the day it matters.",
    approach:
      "We cut everything that was not required to log a habit and see progress, then spent the effort on clarity, speed and the feeling of a streak building.",
    built: [
      "Daily habit logging",
      "Streak and progress visualisation",
      "Weekly and calendar views",
      "A fast, low-friction mobile interface",
    ],
    features: ["Habit creation", "One-tap daily logging", "Streak tracking", "Progress overview"],
    tech: ["Mobile-first application"],
    outcomeLabel: "What it demonstrates",
    outcome:
      "Emberly shows our product judgement in miniature — knowing what to leave out is often what makes a product usable.",
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
    examples: ["crm-system", "arenax"],
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
    examples: ["emberly", "directlet", "crm-system"],
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
