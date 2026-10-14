import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as ButtonLink } from "./router-BdoBHhAy.mjs";
import { n as Reveal } from "./SectionHeading-Crjg2NlZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-BxnWP4JI.js
var import_jsx_runtime = require_jsx_runtime();
function CTASection({ title = "Let's build what's next.", body = "Tell us what you're trying to build, improve or solve. If you're not sure yet, that's fine — we'll figure it out together.", secondary }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center md:px-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto max-w-3xl text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-[3.2rem]",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg",
							children: body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/start-a-project",
								children: "Start a Project"
							}), secondary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: secondary.to,
								variant: "secondary",
								children: secondary.label
							}) : null]
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { CTASection as t };
