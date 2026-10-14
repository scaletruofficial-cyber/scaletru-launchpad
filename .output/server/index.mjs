globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"c00-xbUQ1UD0MztN4gPqmo5GyK4qji0\"",
		"mtime": "2026-10-13T10:37:39.704Z",
		"size": 3072,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-10-13T10:37:39.713Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/about-D9zTplef.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118b-PRfieoAc8YIpkKUf6IIGGxvsfg0\"",
		"mtime": "2026-10-14T12:41:06.433Z",
		"size": 4491,
		"path": "../public/assets/about-D9zTplef.js"
	},
	"/assets/cards-xDu5Xixc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1780-3YZvFMQqdBHdBCvVG3Mt5h/veDc\"",
		"mtime": "2026-10-14T12:41:06.456Z",
		"size": 6016,
		"path": "../public/assets/cards-xDu5Xixc.js"
	},
	"/assets/CTASection-BXziBOpW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4de-XQf7OoSfZzzo6Un5qxeAw9UoAfQ\"",
		"mtime": "2026-10-14T12:41:06.414Z",
		"size": 1246,
		"path": "../public/assets/CTASection-BXziBOpW.js"
	},
	"/assets/process-BObYyggE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5fc-RVsrY6eboxWmbSJvejFVzw9IABE\"",
		"mtime": "2026-10-14T12:41:06.484Z",
		"size": 1532,
		"path": "../public/assets/process-BObYyggE.js"
	},
	"/assets/routes-BtdckJvT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24f5-z0ghLjLHsKXghL6/dD9iNRNMdpA\"",
		"mtime": "2026-10-14T12:41:06.501Z",
		"size": 9461,
		"path": "../public/assets/routes-BtdckJvT.js"
	},
	"/assets/SectionHeading-CFNTFMSQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d4-9Ol/odRdNZadF6BxLZ59lF6rD2c\"",
		"mtime": "2026-10-14T12:41:06.426Z",
		"size": 1492,
		"path": "../public/assets/SectionHeading-CFNTFMSQ.js"
	},
	"/assets/services-C7V6HJxt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e17-Q5e5JB9xzalw0OEYCxZKVk1Yz/s\"",
		"mtime": "2026-10-14T12:41:06.545Z",
		"size": 3607,
		"path": "../public/assets/services-C7V6HJxt.js"
	},
	"/assets/start-a-project-CDLcVtBG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2567-twDyqlMlqnLweTsNmVLKtk1rhCE\"",
		"mtime": "2026-10-14T12:41:06.555Z",
		"size": 9575,
		"path": "../public/assets/start-a-project-CDLcVtBG.js"
	},
	"/assets/work.index-wX8ioEUA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66c-IIxA5T06G3cwsGMgP5VhuiKZl4M\"",
		"mtime": "2026-10-14T12:41:06.609Z",
		"size": 1644,
		"path": "../public/assets/work.index-wX8ioEUA.js"
	},
	"/assets/index-DMgV-7Pc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6cb1e-LxU5B9A7K9jng/gF+oh5NSmusmg\"",
		"mtime": "2026-10-14T12:41:06.410Z",
		"size": 445214,
		"path": "../public/assets/index-DMgV-7Pc.js"
	},
	"/assets/styles-BaCk2Yd8.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1407f-ieW2/gBz6wygt8HnQ6P/Fo9fsnU\"",
		"mtime": "2026-10-14T12:41:06.614Z",
		"size": 82047,
		"path": "../public/assets/styles-BaCk2Yd8.css"
	},
	"/assets/work._slug-C0xXc2Q_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1549-DqMuttkZwx2di+mO5dH0W61BbWc\"",
		"mtime": "2026-10-14T12:41:06.585Z",
		"size": 5449,
		"path": "../public/assets/work._slug-C0xXc2Q_.js"
	},
	"/assets/work._slug-DIajzLNL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"236-33S7WfXWaSk0PdWCeJvKIZcESwI\"",
		"mtime": "2026-10-14T12:41:06.606Z",
		"size": 566,
		"path": "../public/assets/work._slug-DIajzLNL.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_yyYpLw = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_yyYpLw
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
