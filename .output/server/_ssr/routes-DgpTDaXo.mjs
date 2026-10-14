import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Arrow, c as clientProjects, d as pillars, f as processSteps, h as showcaseProjects, l as founders, m as services, o as ButtonLink, s as cn, u as getProject } from "./router-BdoBHhAy.mjs";
import { n as Reveal, r as SectionHeading, t as Eyebrow } from "./SectionHeading-Crjg2NlZ.mjs";
import { a as ServiceCard, i as ProjectCard, n as FounderCard, r as ProcessTimeline, t as FeaturedCaseCard } from "./cards-BwWQMZ-L.mjs";
import { t as CTASection } from "./CTASection-BxnWP4JI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DgpTDaXo.js
var import_jsx_runtime = require_jsx_runtime();
function BrowserFrame({ src, alt, label, className, imgClassName, priority = false, chrome = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]", className),
		children: [chrome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "h-2 w-2 rounded-full bg-border-strong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "h-2 w-2 rounded-full bg-border-strong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "h-2 w-2 rounded-full bg-border-strong"
				}),
				label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 truncate text-[0.7rem] font-medium tracking-wide text-muted-foreground",
					children: label
				}) : null
			]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width: 1600,
			height: 1e3,
			loading: priority ? "eager" : "lazy",
			decoding: priority ? "sync" : "async",
			className: cn("block h-full w-full object-cover", imgClassName)
		})]
	});
}
var valueStrip = [
	"Digital Presence",
	"Digital Products",
	"Digital Systems",
	"Product Design"
];
var outcomes = [
	{
		title: "Get More Customers",
		body: "Build digital experiences that help people discover, understand and trust your business."
	},
	{
		title: "Save Time",
		body: "Replace repetitive manual processes with useful digital systems."
	},
	{
		title: "Grow Without Limits",
		body: "Build digital infrastructure that can evolve as the business grows."
	}
];
function Home() {
	const essence = getProject("essence");
	const tracleads = getProject("tracleads");
	const emberly = getProject("emberly");
	if (!essence || !tracleads || !emberly) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Digital Product Studio" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-7 text-4xl font-extrabold leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.2rem]",
							children: [
								"We Build Digital Products That",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Scale Your Business"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
							children: "Scaletru designs and builds the right digital product for your business — so you can get more customers, save time, and grow without limits."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/start-a-project",
								children: "Start a Project"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/work",
								variant: "secondary",
								children: "View Our Work"
							})]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserFrame, {
							src: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896175/tracleads-portfolio-mockup.png",
							alt: "Tracleads landing page on a laptop with dashboard, sign-in and leads windows, built by Scaletru",
							label: "scaletru — tracleads",
							priority: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserFrame, {
								src: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895852/essence-homepage-laptop.jpg",
								alt: essence.imageAlt,
								label: "essence",
								chrome: false
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserFrame, {
								src: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896808/emberly-laptop-mockup.png",
								alt: "Emberly habit tracking app landing page on a laptop, built by Scaletru",
								label: "emberly",
								imgClassName: "aspect-[16/11]",
								chrome: false
							})]
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-label": "What we do",
			className: "border-y border-border bg-surface/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "container-page grid gap-y-4 py-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-2 md:flex md:items-center md:justify-between",
				children: valueStrip.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "h-1 w-1 rounded-full bg-primary"
					}), item]
				}, item))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The gap",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Your business is growing. Your digital presence should too." }),
					body: "Most businesses outgrow their first website long before they replace it. Manual processes pile up, tools stop talking to each other, and customers meet an experience that no longer reflects the quality of the work. We turn those gaps into digital products and systems that carry the business forward."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3",
					children: outcomes.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 90,
						className: "bg-surface p-8 md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold md:text-2xl",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: item.body
						})]
					}, item.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "What we build",
						title: "The right digital product for the job.",
						body: "Four ways we help businesses move from where they are to where they're trying to get."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-5 md:grid-cols-2",
						children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
						}, service.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/services",
							variant: "secondary",
							children: "Explore Services"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Client Work" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-6",
						children: clientProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCaseCard, { project }) }, project.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								eyebrow: "Showcase",
								title: "What We Can Build",
								body: "A selection of digital products and systems we've designed and built to explore real-world business problems."
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid gap-5 md:grid-cols-2",
								children: showcaseProjects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i % 2 * 70,
									className: i === 0 ? "md:col-span-2" : "",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
										project,
										size: i === 0 ? "wide" : "default"
									})
								}, project.slug))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								className: "mt-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/work",
									className: "group inline-flex items-center gap-2 text-sm font-semibold hover:text-primary",
									children: ["See all work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
								})
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Why Scaletru",
					title: "More than pixels. More than code.",
					body: "Great digital products sit at the intersection of business, design and technology. We bring all three together to build solutions that aren't just visually impressive — but actually useful."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2",
					children: pillars.map((pillar, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 70,
						className: "bg-surface p-7 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: pillar.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: pillar.body
						})]
					}, pillar.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Process",
						title: "From idea to impact.",
						body: "A clear path from the first conversation to a product your business can keep growing with."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, { steps: processSteps })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/process",
							variant: "secondary",
							children: "See how we work"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "About",
						title: "Small team. Serious builds.",
						body: "Scaletru is a digital product studio founded by two student-builders combining design, development, strategy and modern technology to help growing businesses build better digital products and systems."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "We may be a small team, but great digital products don't require a massive agency. They require the right thinking, the right skills and the commitment to build things properly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/about",
							variant: "secondary",
							children: "More about us"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: founders.map((founder, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderCard, { ...founder })
					}, founder.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, { secondary: {
				to: "/work",
				label: "View Our Work"
			} })
		})
	] });
}
//#endregion
export { Home as component };
