import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Let's build what's next.",
  body = "Tell us what you're trying to build, improve or solve. If you're not sure yet, that's fine — we'll figure it out together.",
  secondary,
}: {
  title?: string;
  body?: string;
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-[3.2rem]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{body}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink to="/start-a-project">Start a Project</ButtonLink>
              {secondary ? (
                <ButtonLink to={secondary.to} variant="secondary">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
