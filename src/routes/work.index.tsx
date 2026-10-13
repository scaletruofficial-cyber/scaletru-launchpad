import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { FeaturedCaseCard, ProjectCard } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { clientProjects, showcaseProjects } from "@/lib/site-data";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Scaletru Digital Product Studio" },
      {
        name: "description",
        content:
          "Client work and product showcases from Scaletru: fragrance commerce, food ordering websites, rental platforms, CRM systems and mobile apps.",
      },
      { property: "og:title", content: "Work — Scaletru Digital Product Studio" },
      {
        property: "og:description",
        content: "Digital products and systems designed and built by Scaletru.",
      },
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Work"
              title="Products we've designed and built."
              body="Two kinds of work live here. Client projects delivered for real businesses, and products we built ourselves to explore real-world business problems. We keep the distinction clear."
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page">
          <Reveal>
            <Eyebrow>Client Work</Eyebrow>
          </Reveal>
          <div className="mt-8 space-y-6">
            {clientProjects.map((project) => (
              <Reveal key={project.slug}>
                <FeaturedCaseCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Showcase"
              title="What We Can Build"
              body="A selection of digital products and systems we've designed and built to explore real-world business problems."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {showcaseProjects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 70} className={i === 0 ? "md:col-span-2" : undefined}>
                <ProjectCard project={project} size={i === 0 ? "wide" : "default"} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border">
        <CTASection />
      </div>
    </>
  );
}
