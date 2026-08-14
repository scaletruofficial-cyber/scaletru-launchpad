import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  business: z.string().max(160).optional().default(""),
  email: z.string().email().max(160),
  projectType: z.string().min(1).max(80),
  description: z.string().min(10).max(4000),
  budget: z.string().max(80).optional().default(""),
  timeline: z.string().max(80).optional().default(""),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const to = process.env["ENQUIRY_TO_EMAIL"];

    const text = [
      `Name: ${data.name}`,
      `Business: ${data.business || "—"}`,
      `Email: ${data.email}`,
      `Project type: ${data.projectType}`,
      `Budget: ${data.budget || "—"}`,
      `Timeline: ${data.timeline || "—"}`,
      "",
      data.description,
    ].join("\n");

    if (!apiKey || !to) {
      console.info("[scaletru] new project enquiry (email not configured yet)\n" + text);
      return { ok: true as const, delivered: false as const };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: "Scaletru Website <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject: `New project enquiry — ${data.name}${data.business ? ` (${data.business})` : ""}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error("[scaletru] enquiry email failed", res.status, await res.text());
      console.info("[scaletru] enquiry payload\n" + text);
      return { ok: true as const, delivered: false as const };
    }

    return { ok: true as const, delivered: true as const };
  });
