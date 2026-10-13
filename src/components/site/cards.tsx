import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Project, Service } from "@/lib/site-data";
import { Arrow } from "./Button";
import { Tag } from "./SectionHeading";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services"
      hash={service.slug}
      className="group flex h-full flex-col justify-between gap-10 rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-9"
    >
      <div>
        <span className="text-xs font-semibold tracking-[0.22em] text-primary">
          {service.number}
        </span>
        <h3 className="mt-6 text-2xl font-bold md:text-3xl">{service.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          {service.blurb}
        </p>
      </div>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
        Explore Service <Arrow />
      </span>
    </Link>
  );
}

export function ProjectCard({
  project,
  size = "default",
}: {
  project: Project;
  size?: "default" | "wide";
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-primary/40",
        size === "wide" && "md:col-span-2",
      )}
    >
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="flex h-full flex-col"
        aria-label={`${project.name} — view project`}
      >
        <div className="overflow-hidden border-b border-border bg-background">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className={cn(
              project.imageFit === "contain"
                ? "w-full object-contain"
                : "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
              size === "wide" ? "aspect-[21/9]" : "aspect-[16/10]",
            )}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-7 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold md:text-2xl">{project.name}</h3>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {project.category}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.short}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold transition-colors group-hover:text-primary">
            View Project <Arrow />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function FeaturedCaseCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-surface">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center gap-8 p-7 md:p-12 lg:order-1">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-extrabold md:text-4xl">{project.name}</h3>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {project.category}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.short}
            </p>
          </div>

          <dl className="space-y-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What was the problem?
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground">{project.challenge}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What did we build?
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground">{project.approach}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What changed?
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground">{project.outcome}</dd>
            </div>
          </dl>

          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            View Case Study
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="order-1 flex items-center justify-center overflow-hidden border-b border-border lg:order-2 lg:border-b-0 lg:border-l">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className={cn(
              "block w-full",
              project.slug === "printblink" || project.imageFit === "contain"
                ? "h-auto object-contain"
                : "h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]",
            )}
          />
        </div>
      </div>
    </article>
  );
}

export function FounderCard({
  name,
  role,
  focus,
  initials,
}: {
  name: string;
  role: string;
  focus: string;
  initials: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-7 md:p-9">
      <div
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-lg font-extrabold text-primary"
      >
        {initials}
      </div>
      <h3 className="mt-6 text-2xl font-bold">{name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{focus}</p>
    </div>
  );
}

export function ProcessTimeline({
  steps,
  detailed = false,
}: {
  steps: { number: string; title: string; short: string; long: string }[];
  detailed?: boolean;
}) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
      {steps.map((step) => (
        <li key={step.number} className="bg-surface p-7 md:p-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.22em] text-primary">
              {step.number}
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>
          <h3 className="mt-5 text-xl font-bold md:text-2xl">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {detailed ? step.long : step.short}
          </p>
        </li>
      ))}
    </ol>
  );
}
