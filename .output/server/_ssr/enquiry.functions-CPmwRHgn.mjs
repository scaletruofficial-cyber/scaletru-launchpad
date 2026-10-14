import { a as TSS_SERVER_FUNCTION, i as createServerFn } from "./server-C-7eyybs.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/enquiry.functions-CPmwRHgn.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitEnquiry_createServerFn_handler = createServerRpc({
	id: "617707e00effff11fe2ad158ad24aa66c3e087d1885e1e35dc054328f3e2b494",
	name: "submitEnquiry",
	filename: "src/lib/enquiry.functions.ts"
}, (opts) => submitEnquiry.__executeServer(opts));
var submitEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => schema.parse(data)).handler(submitEnquiry_createServerFn_handler, async ({ data }) => {
	const apiKey = processModule.env["RESEND_API_KEY"];
	const to = processModule.env["ENQUIRY_TO_EMAIL"];
	const text = [
		`Name: ${data.name}`,
		`Business: ${data.business || "—"}`,
		`Email: ${data.email}`,
		`Project type: ${data.projectType}`,
		`Budget: ${data.budget || "—"}`,
		`Timeline: ${data.timeline || "—"}`,
		"",
		data.description
	].join("\n");
	if (!apiKey || !to) {
		console.info("[scaletru] new project enquiry (email not configured yet)\n" + text);
		return {
			ok: true,
			delivered: false
		};
	}
	const res = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"content-type": "application/json"
		},
		body: JSON.stringify({
			from: "Scaletru Website <onboarding@resend.dev>",
			to: [to],
			reply_to: data.email,
			subject: `New project enquiry — ${data.name}${data.business ? ` (${data.business})` : ""}`,
			text
		})
	});
	if (!res.ok) {
		console.error("[scaletru] enquiry email failed", res.status, await res.text());
		console.info("[scaletru] enquiry payload\n" + text);
		return {
			ok: true,
			delivered: false
		};
	}
	return {
		ok: true,
		delivered: true
	};
});
//#endregion
export { submitEnquiry_createServerFn_handler };
