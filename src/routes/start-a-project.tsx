import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ActionButton } from "@/components/site/Button";
import { submitEnquiry } from "@/lib/enquiry.functions";

export const Route = createFileRoute("/start-a-project")({
  head: () => ({
    meta: [
      { title: "Start a Project — Scaletru" },
      {
        name: "description",
        content:
          "Tell Scaletru what you're trying to build, improve or solve. Websites, web apps, digital systems and product design — scoped around your needs.",
      },
      { property: "og:title", content: "Start a Project — Scaletru" },
      {
        property: "og:description",
        content: "Let's build what's next. Share your project and we'll take it from there.",
      },
      { property: "og:url", content: "/start-a-project" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/start-a-project" }],
  }),
  component: StartProjectPage,
});

const projectTypes = [
  "Website",
  "E-commerce",
  "Web App",
  "Digital System",
  "UI/UX Design",
  "Something Else",
];
const budgets = ["Not sure yet", "Under ₦500k", "₦500k – ₦1.5m", "₦1.5m – ₦5m", "₦5m+"];
const timelines = ["As soon as possible", "1–2 months", "3–6 months", "Just exploring"];

const fieldClass =
  "w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
const labelClass = "block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";

function StartProjectPage() {
  const send = useServerFn(submitEnquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          business: String(fd.get("business") ?? ""),
          email: String(fd.get("email") ?? ""),
          projectType: String(fd.get("projectType") ?? ""),
          description: String(fd.get("description") ?? ""),
          budget: String(fd.get("budget") ?? ""),
          timeline: String(fd.get("timeline") ?? ""),
        },
      });
      form.reset();
      setStatus("done");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="section-y">
      <div className="container-page grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            as="h1"
            eyebrow="Start a Project"
            title="Let's build what's next."
            body="Tell us what you're trying to build, improve or solve."
          />
          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm font-semibold">Not sure exactly what you need yet?</p>
            <p className="mt-2 text-sm text-muted-foreground">That's okay. We'll figure it out together.</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          {status === "done" ? (
            <div className="rounded-2xl border border-primary/40 bg-surface p-8 md:p-12">
              <h2 className="text-2xl font-extrabold">Thanks — we've got it.</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                We'll read your project properly and get back to you by email.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm font-semibold text-primary underline underline-offset-4"
              >
                Send another project
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 rounded-2xl border border-border bg-surface p-6 md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Name
                  </label>
                  <input id="name" name="name" required autoComplete="name" className={`mt-3 ${fieldClass}`} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="business">
                    Business / Company
                  </label>
                  <input id="business" name="business" autoComplete="organization" className={`mt-3 ${fieldClass}`} />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={`mt-3 ${fieldClass}`} />
              </div>

              <div>
                <label className={labelClass} htmlFor="projectType">
                  Project Type
                </label>
                <select id="projectType" name="projectType" required defaultValue="" className={`mt-3 ${fieldClass}`}>
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="description">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  minLength={10}
                  placeholder="What are you trying to build, improve or solve?"
                  className={`mt-3 resize-y ${fieldClass}`}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="budget">
                    Budget Range
                  </label>
                  <select id="budget" name="budget" defaultValue="" className={`mt-3 ${fieldClass}`}>
                    <option value="">Select a range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="timeline">
                    Timeline
                  </label>
                  <select id="timeline" name="timeline" defaultValue="" className={`mt-3 ${fieldClass}`}>
                    <option value="">Select a timeline</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {status === "error" ? (
                <p role="alert" className="text-sm text-destructive">
                  Something went wrong sending that. Please try again, or email{" "}
                  <EmailContact />

                </p>
              ) : null}

              <div className="pt-2">
                <ActionButton type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending" : "Start Project"}
                </ActionButton>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
