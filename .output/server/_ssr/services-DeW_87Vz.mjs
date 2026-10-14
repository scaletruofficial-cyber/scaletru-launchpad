import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Arrow, m as services, u as getProject } from "./router-BdoBHhAy.mjs";
import { i as Tag, n as Reveal, r as SectionHeading } from "./SectionHeading-Crjg2NlZ.mjs";
import { t as CTASection } from "./CTASection-BxnWP4JI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DeW_87Vz.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					as: "h1",
					eyebrow: "Services",
					title: "Digital solutions built around your business.",
					body: "We don't sell packages. We work out what your business actually needs, then design and build it properly."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					className: "mt-12 flex flex-wrap gap-2",
					children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${service.slug}`,
						className: "rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground",
						children: service.title
					}, service.slug))
				})]
			})
		}),
		services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: service.slug,
			className: "border-t border-border section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-[0.22em] text-primary",
						children: service.number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-3xl font-extrabold md:text-5xl",
						children: service.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: service.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: tag }, tag))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-base leading-relaxed text-muted-foreground md:text-lg",
						children: service.what
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: "Pricing:"
						}), " Projects are scoped around your needs."]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "space-y-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "What we build"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: service.build.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-muted-foreground md:text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
								}), item]
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "Who it's for"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground md:text-base",
							children: service.who
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "What you get"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border",
							children: service.gets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "bg-surface px-6 py-4 text-sm md:text-base",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "Related projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-4",
							children: service.examples.map((slug) => {
								const project = getProject(slug);
								if (!project) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/work/$slug",
									params: { slug },
									className: "group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/60",
									children: [
										project.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
									]
								}, slug);
							})
						})] })
					]
				})]
			})
		}, service.slug)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
				title: "Not sure which one you need?",
				body: "Tell us the problem you're trying to solve and we'll tell you what should be built — even if it's smaller than you expected.",
				secondary: {
					to: "/process",
					label: "See our process"
				}
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
