import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Arrow, s as cn } from "./router-BdoBHhAy.mjs";
import { i as Tag } from "./SectionHeading-Crjg2NlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-BwWQMZ-L.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/services",
		hash: service.slug,
		className: "group flex h-full flex-col justify-between gap-10 rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-9",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold tracking-[0.22em] text-primary",
				children: service.number
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-2xl font-bold md:text-3xl",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: service.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: tag }, tag))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm leading-relaxed text-muted-foreground md:text-base",
				children: service.blurb
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary",
			children: ["Explore Service ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
		})]
	});
}
function ProjectCard({ project, size = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cn("group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-primary/40", size === "wide" && "md:col-span-2"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/work/$slug",
			params: { slug: project.slug },
			className: "flex h-full flex-col",
			"aria-label": `${project.name} — view project`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-b border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: project.imageAlt,
					width: 1600,
					height: 1e3,
					loading: "lazy",
					decoding: "async",
					className: cn(project.imageFit === "contain" ? "w-full object-contain" : "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]", size === "wide" ? "aspect-[21/9]" : "aspect-[16/10]")
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col gap-4 p-7 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold md:text-2xl",
							children: project.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: project.category
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: project.short
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold transition-colors group-hover:text-primary",
						children: ["View Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
					})
				]
			})]
		})
	});
}
function FeaturedCaseCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "group overflow-hidden rounded-3xl border border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 flex flex-col justify-center gap-8 p-7 md:p-12 lg:order-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-3xl font-extrabold md:text-4xl",
							children: project.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: project.category
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground md:text-base",
						children: project.short
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-6 border-t border-border pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
								children: "What was the problem?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm text-muted-foreground",
								children: project.challenge
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
								children: "What did we build?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm text-muted-foreground",
								children: project.approach
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
								children: "What changed?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm text-muted-foreground",
								children: project.outcome
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work/$slug",
						params: { slug: project.slug },
						className: "group/cta inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary",
						children: ["View Case Study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "transition-transform duration-300 group-hover/cta:translate-x-1",
							children: "→"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 flex items-center justify-center overflow-hidden border-b border-border lg:order-2 lg:border-b-0 lg:border-l",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: project.imageAlt,
					width: 1600,
					height: 1e3,
					loading: "lazy",
					decoding: "async",
					className: cn("block w-full", project.slug === "printblink" || project.imageFit === "contain" ? "h-auto object-contain" : "h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]")
				})
			})]
		})
	});
}
function FounderCard({ name, role, focus, initials }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-surface p-7 md:p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-lg font-extrabold text-primary",
				children: initials
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-2xl font-bold",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm font-medium text-primary",
				children: role
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: focus
			})
		]
	});
}
function ProcessTimeline({ steps, detailed = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3",
		children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "bg-surface p-7 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-[0.22em] text-primary",
						children: step.number
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "h-px flex-1 bg-border"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 text-xl font-bold md:text-2xl",
					children: step.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: detailed ? step.long : step.short
				})
			]
		}, step.number))
	});
}
//#endregion
export { ServiceCard as a, ProjectCard as i, FounderCard as n, ProcessTimeline as r, FeaturedCaseCard as t };
