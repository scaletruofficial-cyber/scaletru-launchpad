import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as processSteps } from "./router-BdoBHhAy.mjs";
import { n as Reveal, r as SectionHeading } from "./SectionHeading-Crjg2NlZ.mjs";
import { t as CTASection } from "./CTASection-BxnWP4JI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-CoPUSwvm.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					as: "h1",
					eyebrow: "Process",
					title: "From idea to impact.",
					body: "Every project runs through the same six stages. The depth changes with the scope — the thinking doesn't."
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-px overflow-hidden rounded-2xl border border-border bg-border",
					children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * 60,
						className: "grid gap-6 bg-surface p-8 md:grid-cols-[auto_1fr_2fr] md:items-start md:gap-12 md:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold tracking-[0.22em] text-primary",
								children: step.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-extrabold md:text-4xl",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-semibold",
								children: step.short
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
								children: step.long
							})] })
						]
					}, step.number))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
				title: "Need help figuring out what you need?",
				body: "That's okay. We'll figure it out together."
			})
		})
	] });
}
//#endregion
export { ProcessPage as component };
