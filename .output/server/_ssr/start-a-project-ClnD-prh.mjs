import { r as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { U as isRedirect, b as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ActionButton, r as EmailContact } from "./router-BdoBHhAy.mjs";
import { n as Reveal, r as SectionHeading } from "./SectionHeading-Crjg2NlZ.mjs";
import { a as TSS_SERVER_FUNCTION, i as createServerFn, o as getServerFnById } from "./server-C-7eyybs.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-a-project-ClnD-prh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var schema = objectType({
	name: stringType().min(1).max(120),
	business: stringType().max(160).optional().default(""),
	email: stringType().email().max(160),
	projectType: stringType().min(1).max(80),
	description: stringType().min(10).max(4e3),
	budget: stringType().max(80).optional().default(""),
	timeline: stringType().max(80).optional().default("")
});
var submitEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => schema.parse(data)).handler(createSsrRpc("617707e00effff11fe2ad158ad24aa66c3e087d1885e1e35dc054328f3e2b494"));
var projectTypes = [
	"Website",
	"E-commerce",
	"Web App",
	"Digital System",
	"UI/UX Design",
	"Something Else"
];
var budgets = [
	"Not sure yet",
	"Under ₦500k",
	"₦500k – ₦1.5m",
	"₦1.5m – ₦5m",
	"₦5m+"
];
var timelines = [
	"As soon as possible",
	"1–2 months",
	"3–6 months",
	"Just exploring"
];
var fieldClass = "w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
var labelClass = "block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";
function StartProjectPage() {
	const send = useServerFn(submitEnquiry);
	const [status, setStatus] = (0, import_react.useState)("idle");
	async function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const fd = new FormData(form);
		setStatus("sending");
		try {
			await send({ data: {
				name: String(fd.get("name") ?? ""),
				business: String(fd.get("business") ?? ""),
				email: String(fd.get("email") ?? ""),
				projectType: String(fd.get("projectType") ?? ""),
				description: String(fd.get("description") ?? ""),
				budget: String(fd.get("budget") ?? ""),
				timeline: String(fd.get("timeline") ?? "")
			} });
			form.reset();
			setStatus("done");
		} catch (error) {
			console.error(error);
			setStatus("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-16 lg:grid-cols-[0.85fr_1.15fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				as: "h1",
				eyebrow: "Start a Project",
				title: "Let's build what's next.",
				body: "Tell us what you're trying to build, improve or solve."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border border-border bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Not sure exactly what you need yet?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "That's okay. We'll figure it out together."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-primary/40 bg-surface p-8 md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-extrabold",
							children: "Thanks — we've got it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "We'll read your project properly and get back to you by email."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStatus("idle"),
							className: "mt-8 text-sm font-semibold text-primary underline underline-offset-4",
							children: "Send another project"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "grid gap-6 rounded-2xl border border-border bg-surface p-6 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								name: "name",
								required: true,
								autoComplete: "name",
								className: `mt-3 ${fieldClass}`
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "business",
								children: "Business / Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "business",
								name: "business",
								autoComplete: "organization",
								className: `mt-3 ${fieldClass}`
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelClass,
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							autoComplete: "email",
							className: `mt-3 ${fieldClass}`
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelClass,
							htmlFor: "projectType",
							children: "Project Type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "projectType",
							name: "projectType",
							required: true,
							defaultValue: "",
							className: `mt-3 ${fieldClass}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select a project type"
							}), projectTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t,
								children: t
							}, t))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelClass,
							htmlFor: "description",
							children: "Project Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "description",
							name: "description",
							required: true,
							rows: 5,
							minLength: 10,
							placeholder: "What are you trying to build, improve or solve?",
							className: `mt-3 resize-y ${fieldClass}`
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "budget",
								children: "Budget Range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "budget",
								name: "budget",
								defaultValue: "",
								className: `mt-3 ${fieldClass}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a range"
								}), budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: b,
									children: b
								}, b))]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelClass,
								htmlFor: "timeline",
								children: "Timeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "timeline",
								name: "timeline",
								defaultValue: "",
								className: `mt-3 ${fieldClass}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a timeline"
								}), timelines.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t,
									children: t
								}, t))]
							})] })]
						}),
						status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							role: "alert",
							className: "text-sm text-destructive",
							children: [
								"Something went wrong sending that. Please try again, or email",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailContact, {})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
								type: "submit",
								disabled: status === "sending",
								children: status === "sending" ? "Sending" : "Start Project"
							})
						})
					]
				})
			})]
		})
	});
}
//#endregion
export { StartProjectPage as component };
