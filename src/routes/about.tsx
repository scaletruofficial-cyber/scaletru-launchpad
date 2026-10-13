import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FounderCard } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { founders, pillars } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Scaletru — A Digital Product Studio" },
      {
        name: "description",
        content:
          "Scaletru is a digital product studio combining business thinking, design, development and modern tooling to build useful products for growing businesses.",
      },
      { property: "og:title", content: "About Scaletru — A Digital Product Studio" },
      {
        property: "og:description",
        content: "Small team, serious builds. Meet the studio behind Scaletru.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="About"
              title="Small team. Serious builds."
              body="Scaletru is a digital product studio founded by two student-builders combining design, development, strategy and modern technology to help growing businesses build better digital products and systems."
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">Our story</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              Scaletru started the way most useful things do — by building. We kept noticing the same
              pattern around us: capable businesses held back by digital presence that undersold
              them, and by manual processes that quietly consumed their week. So we built products
              to understand those problems properly, and turned that into a studio.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              We're based in Nigeria and build for businesses here first, with the standards and
              craft you'd expect from a studio anywhere.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl font-extrabold md:text-4xl">Our mission</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              To make serious digital products accessible to growing businesses — the kind of
              software that changes how a company operates, not just how it looks.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              That means being honest about what should be built, saying no to scope that doesn't
              serve the outcome, and shipping work we'd be happy to put our name on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Founders"
              title="Two people. Design and engineering."
              body="Every project is worked on directly by the people who founded the studio."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {founders.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 80}>
                <FounderCard {...founder} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Business, design and technology — together."
              body="Great digital products sit at the intersection of all three. Treating them as separate stages is how projects end up beautiful but useless, or functional but unusable."
            />
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 70} className="bg-surface p-7 md:p-8">
                <h3 className="text-lg font-bold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page">
          <Reveal className="rounded-3xl border border-border bg-surface p-8 md:p-14">
            <h2 className="max-w-3xl text-2xl font-extrabold leading-snug md:text-4xl">
              We may be a small team, but great digital products don't require a massive agency.
              They require the right thinking, the right skills and the commitment to build things
              properly.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Working with us means talking directly to the people designing and building your
              product — no account layer, no handoff between five teams, no diluted decisions.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border">
        <CTASection secondary={{ to: "/work", label: "View Our Work" }} />
      </div>
    </>
  );
}
