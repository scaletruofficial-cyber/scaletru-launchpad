import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as clientProjects, h as showcaseProjects } from "./router-BdoBHhAy.mjs";
import { n as Reveal, r as SectionHeading, t as Eyebrow } from "./SectionHeading-Crjg2NlZ.mjs";
import { i as ProjectCard, t as FeaturedCaseCard } from "./cards-BwWQMZ-L.mjs";
import { t as CTASection } from "./CTASection-BxnWP4JI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-lB-LmBXT.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					as: "h1",
					eyebrow: "Work",
					title: "Products we've designed and built.",
					body: "Two kinds of work live here. Client projects delivered for real businesses, and products we built ourselves to explore real-world business problems. We keep the distinction clear."
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Client Work" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-6",
					children: clientProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCaseCard, { project }) }, project.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Showcase",
					title: "What We Can Build",
					body: "A selection of digital products and systems we've designed and built to explore real-world business problems."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 md:grid-cols-2",
					children: showcaseProjects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 2 * 70,
						className: i === 0 ? "md:col-span-2" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							project,
							size: i === 0 ? "wide" : "default"
						})
					}, project.slug))
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
export { WorkPage as component };
