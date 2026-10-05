import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, Tag } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { Arrow } from "@/components/site/Button";
import { getProject, projects } from "@/lib/site-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Scaletru" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — ${project.category} | Scaletru`;
    return {
      meta: [
        { title },
        { name: "description", content: project.short },
        { property: "og:title", content: title },
        { property: "og:description", content: project.short },
        { property: "og:url", content: `/work/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="container-page section-y text-center">
      <h1 className="text-3xl font-extrabold">Project not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        This project doesn't exist. Browse everything we've built instead.
      </p>
      <Link to="/work" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold">
        View all work <Arrow />
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const isClient = project.kind === "client";
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="container-page">
          <Link
            to="/work"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All work
          </Link>
          <Reveal className="mt-8">
            <Eyebrow>{isClient ? "Client Work" : "Showcase"}</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {project.category}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.short}
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-page">
          <Reveal>
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={1000}
              loading="eager"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">Overview</h2>
          </Reveal>
          <Reveal delay={80} className="space-y-10">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.overview}
            </p>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The challenge
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The approach
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.approach}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">What we built</h2>
            <ul className="mt-8 space-y-4">
              {project.built.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground md:text-base">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl font-extrabold md:text-4xl">Key features</h2>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {project.features.map((feature) => (
                <li key={feature} className="bg-surface px-6 py-4 text-sm md:text-base">
                  {feature}
                </li>
              ))}
            </ul>
            {project.tech?.length ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>

      {project.gallery?.length ? (
        <section className="border-t border-border section-y">
          <div className="container-page">
            <Reveal>
              <h2 className="text-3xl font-extrabold md:text-4xl">Product shots</h2>
            </Reveal>
            <div className="mt-10 grid items-start gap-5 md:grid-cols-2">
              {project.gallery.map((shot, i) => (
                <Reveal key={shot.src} delay={i * 80}>
                  <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border section-y">
        <div className="container-page">
          <Reveal className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {project.outcomeLabel}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.outcome}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border section-y">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold md:text-3xl">More work</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/work/$slug"
                params={{ slug: other.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/40"
              >
                <img
                  src={other.image}
                  alt={other.imageAlt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold">{other.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {other.category}
                  </p>
                </div>
              </Link>
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
