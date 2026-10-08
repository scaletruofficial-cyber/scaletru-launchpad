import { createFileRoute, Link } from "@tanstack/react-router";
import { ButtonLink, Arrow } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { BrowserFrame } from "@/components/site/BrowserFrame";
import {
  ServiceCard,
  ProjectCard,
  FeaturedCaseCard,
  FounderCard,
  ProcessTimeline,
} from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import {
  services,
  processSteps,
  pillars,
  founders,
  clientProjects,
  showcaseProjects,
  getProject,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scaletru — Digital Products That Scale Your Business" },
      {
        name: "description",
        content:
          "Scaletru designs and builds digital products, websites, web apps and digital systems that help businesses grow, save time and scale.",
      },
      { property: "og:title", content: "Scaletru — Digital Products That Scale Your Business" },
      {
        property: "og:description",
        content:
          "A digital product studio combining business thinking, design and development to build products that scale.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const valueStrip = ["Digital Presence", "Digital Products", "Digital Systems", "Product Design"];

const outcomes = [
  {
    title: "Get More Customers",
    body: "Build digital experiences that help people discover, understand and trust your business.",
  },
  {
    title: "Save Time",
    body: "Replace repetitive manual processes with useful digital systems.",
  },
  {
    title: "Grow Without Limits",
    body: "Build digital infrastructure that can evolve as the business grows.",
  },
];

function Home() {
  const tradesphere = getProject("tradesphere")!;
  const tracleads = getProject("tracleads")!;
  const emberly = getProject("emberly")!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Digital Product Studio</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-4xl font-extrabold leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                We Build Digital Products That{" "}
                <span className="text-primary">Scale Your Business</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Scaletru designs and builds the right digital product for your business — so you can
                get more customers, save time, and grow without limits.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink to="/start-a-project">Start a Project</ButtonLink>
                <ButtonLink to="/work" variant="secondary">
                  View Our Work
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative">
              <BrowserFrame
                src={tracleads.image}
                alt="Tracleads landing page on a laptop with dashboard, sign-in and leads windows, built by Scaletru"
                label="scaletru — tracleads"
                priority
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <BrowserFrame
                  src={tradesphere.image}
                  alt="TradeSphere marketplace interface built by Scaletru"
                  label="tradesphere"
                  imgClassName="aspect-[16/11]"
                />
                <BrowserFrame
                  src={emberly.image}
                  alt="Emberly habit tracking app landing page on a laptop, built by Scaletru"
                  label="emberly"
                  imgClassName="aspect-[16/11]"
                  chrome={false}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value strip */}
      <section aria-label="What we do" className="border-y border-border bg-surface/40">
        <ul className="container-page grid gap-y-4 py-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-2 md:flex md:items-center md:justify-between">
          {valueStrip.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Business problem */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="The gap"
              title={
                <>
                  Your business is growing. Your digital presence should too.
                </>
              }
              body="Most businesses outgrow their first website long before they replace it. Manual processes pile up, tools stop talking to each other, and customers meet an experience that no longer reflects the quality of the work. We turn those gaps into digital products and systems that carry the business forward."
            />
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {outcomes.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="bg-surface p-8 md:p-10">
                <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section-y border-t border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="The right digital product for the job."
              body="Four ways we help businesses move from where they are to where they're trying to get."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <ButtonLink to="/services" variant="secondary">
              Explore Services
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section className="section-y border-t border-border">
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

          <div className="mt-24">
            <Reveal>
              <SectionHeading
                eyebrow="Showcase"
                title="What We Can Build"
                body="A selection of digital products and systems we've designed and built to explore real-world business problems."
              />
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {showcaseProjects.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 2) * 70}>
                  <ProjectCard project={project} size={i === 0 ? "wide" : "default"} />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
              >
                See all work <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Scaletru */}
      <section className="section-y border-t border-border">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Scaletru"
              title="More than pixels. More than code."
              body="Great digital products sit at the intersection of business, design and technology. We bring all three together to build solutions that aren't just visually impressive — but actually useful."
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

      {/* Process */}
      <section className="section-y border-t border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="From idea to impact."
              body="A clear path from the first conversation to a product your business can keep growing with."
            />
          </Reveal>
          <Reveal className="mt-14">
            <ProcessTimeline steps={processSteps} />
          </Reveal>
          <Reveal className="mt-12">
            <ButtonLink to="/process" variant="secondary">
              See how we work
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="section-y border-t border-border">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Small team. Serious builds."
              body="Scaletru is a digital product studio founded by two student-builders combining design, development, strategy and modern technology to help growing businesses build better digital products and systems."
            />
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We may be a small team, but great digital products don't require a massive agency.
              They require the right thinking, the right skills and the commitment to build things
              properly.
            </p>
            <div className="mt-10">
              <ButtonLink to="/about" variant="secondary">
                More about us
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {founders.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 80}>
                <FounderCard {...founder} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border">
        <CTASection secondary={{ to: "/work", label: "View Our Work" }} />
      </div>
    </>
  );
}
