import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, Tag } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { Arrow } from "@/components/site/Button";
import { services, getProject } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Websites, Products & Systems | Scaletru" },
      {
        name: "description",
        content:
          "Digital presence, digital products, digital systems and product design. Scaletru builds the right digital solution around your business needs.",
      },
      { property: "og:title", content: "Services — Websites, Products & Systems | Scaletru" },
      {
        property: "og:description",
        content: "Four ways Scaletru helps growing businesses build better digital products.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Services"
              title="Digital solutions built around your business."
              body="We don't sell packages. We work out what your business actually needs, then design and build it properly."
            />
          </Reveal>
          <Reveal delay={80} className="mt-12 flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                {service.title}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {services.map((service) => (
        <section key={service.slug} id={service.slug} className="border-t border-border section-y">
          <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.22em] text-primary">
                {service.number}
              </span>
              <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">{service.title}</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.what}
              </p>
              <p className="mt-8 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Pricing:</span> Projects are scoped
                around your needs.
              </p>
            </Reveal>

            <Reveal delay={80} className="space-y-10">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  What we build
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.build.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground md:text-base">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Who it's for
                </h3>
                <p className="mt-4 text-sm text-muted-foreground md:text-base">{service.who}</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  What you get
                </h3>
                <ul className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
                  {service.gets.map((item) => (
                    <li key={item} className="bg-surface px-6 py-4 text-sm md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Related projects
                </h3>
                <div className="mt-4 flex flex-wrap gap-4">
                  {service.examples.map((slug) => {
                    const project = getProject(slug);
                    if (!project) return null;
                    return (
                      <Link
                        key={slug}
                        to="/work/$slug"
                        params={{ slug }}
                        className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/60"
                      >
                        {project.name} <Arrow />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <div className="border-t border-border">
        <CTASection
          title="Not sure which one you need?"
          body="Tell us the problem you're trying to solve and we'll tell you what should be built — even if it's smaller than you expected."
          secondary={{ to: "/process", label: "See our process" }}
        />
      </div>
    </>
  );
}
