import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, p as projects } from "./router-BdoBHhAy.mjs";
import { i as Tag, n as Reveal, t as Eyebrow } from "./SectionHeading-Crjg2NlZ.mjs";
import { t as CTASection } from "./CTASection-BxnWP4JI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-C10N44lo.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { project } = Route.useLoaderData();
	const isClient = project.kind === "client";
	const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-12 pt-16 md:pb-16 md:pt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work",
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
					children: "← All work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: isClient ? "Client Work" : "Showcase" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 text-4xl font-extrabold leading-[1.05] md:text-6xl",
							children: project.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground",
							children: project.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
							children: project.short
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: project.imageAlt,
				width: 1600,
				height: 1e3,
				loading: "eager",
				className: "w-full rounded-2xl border border-border object-cover"
			}) })
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-14 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold md:text-4xl",
					children: "Overview"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "space-y-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-muted-foreground md:text-lg",
							children: project.overview
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "The challenge"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: project.challenge
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "The approach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: project.approach
						})] })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold md:text-4xl",
					children: "What we built"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4",
					children: project.built.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-muted-foreground md:text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
						}), item]
					}, item))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold md:text-4xl",
							children: "Key features"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border",
							children: project.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "bg-surface px-6 py-4 text-sm md:text-base",
								children: feature
							}, feature))
						}),
						project.tech?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							children: project.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: t }, t))
						}) : null
					]
				})]
			})
		}),
		project.gallery?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold md:text-4xl",
					children: "Product shots"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid items-start gap-5 md:grid-cols-2",
					children: project.gallery.map((shot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "overflow-hidden rounded-2xl border border-border bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: shot.src,
								alt: shot.alt,
								loading: "lazy",
								decoding: "async",
								className: "h-auto w-full"
							})
						})
					}, shot.src))
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-2xl border border-border bg-surface p-8 md:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: project.outcomeLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg",
						children: project.outcome
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold md:text-3xl",
					children: "More work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2",
					children: others.map((other) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work/$slug",
						params: { slug: other.slug },
						className: "group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: other.image,
							alt: other.imageAlt,
							width: 1600,
							height: 1e3,
							loading: "lazy",
							className: other.imageFit === "contain" ? "aspect-[16/10] w-full object-contain" : "aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold",
								children: other.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground",
								children: other.category
							})]
						})]
					}, other.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
		})
	] });
}
//#endregion
export { ProjectDetail as component };
