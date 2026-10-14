import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Arrow } from "./router-BdoBHhAy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-DsDD6jjL.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page section-y text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold",
				children: "Project not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "This project doesn't exist. Browse everything we've built instead."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/work",
				className: "group mt-8 inline-flex items-center gap-2 text-sm font-semibold",
				children: ["View all work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
			})
		]
	});
}
//#endregion
export { ProjectNotFound as notFoundComponent };
