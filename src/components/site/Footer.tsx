import { Link } from "@tanstack/react-router";
import { ButtonLink } from "./Button";

const explore = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
];

const connect = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://x.com", label: "X" },
  { href: "mailto:scaletruofficial@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page grid gap-14 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <p className="text-sm font-extrabold tracking-[0.28em]">SCALETRU</p>
          <p className="mt-2 text-sm text-muted-foreground">Digital Product Studio</p>
          <p className="mt-6 text-xl font-bold leading-snug">
            We Build Digital Products That Scale Your Business.
          </p>
          <div className="mt-8">
            <ButtonLink to="/start-a-project">Start a Project</ButtonLink>
          </div>
        </div>

        <nav aria-label="Explore">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {explore.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Connect
          </h2>
          <ul className="mt-5 space-y-3">
            {connect.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Scaletru</p>
          <p>Designed and built in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
