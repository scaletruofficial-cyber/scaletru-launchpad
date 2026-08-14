import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — From Idea to Impact | Scaletru" },
      {
        name: "description",
        content:
          "Discover, Define, Design, Build, Launch, Grow — how Scaletru takes a business problem and turns it into a working digital product.",
      },
      { property: "og:title", content: "Our Process — From Idea to Impact | Scaletru" },
      {
        property: "og:description",
        content: "A clear six-stage process from first conversation to a product that keeps growing.",
      },
      { property: "og:url", content: "/process" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Process"
              title="From idea to impact."
              body="Every project runs through the same six stages. The depth changes with the scope — the thinking doesn't."
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page">
          <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.number}
                as="li"
                delay={i * 60}
                className="grid gap-6 bg-surface p-8 md:grid-cols-[auto_1fr_2fr] md:items-start md:gap-12 md:p-12"
              >
                <span className="text-sm font-semibold tracking-[0.22em] text-primary">
                  {step.number}
                </span>
                <h2 className="text-2xl font-extrabold md:text-4xl">{step.title}</h2>
                <div>
                  <p className="text-base font-semibold">{step.short}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {step.long}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="border-t border-border">
        <CTASection
          title="Need help figuring out what you need?"
          body="That's okay. We'll figure it out together."
        />
      </div>
    </>
  );
}
