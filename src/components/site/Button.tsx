import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5",
  secondary:
    "border border-border-strong bg-surface/60 text-foreground hover:border-primary/60 hover:bg-surface hover:-translate-y-0.5",
  ghost: "px-0 text-foreground hover:text-primary",
} as const;

export type ButtonVariant = keyof typeof variants;

export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("transition-transform duration-300 group-hover:translate-x-1", className)}
    >
      →
    </span>
  );
}

export function ButtonLink({
  to,
  variant = "primary",
  className,
  children,
  withArrow = true,
  ...rest
}: {
  to: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
} & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} {...rest}>
      {children}
      {withArrow ? <Arrow /> : null}
    </Link>
  );
}

export function ActionButton({
  variant = "primary",
  className,
  children,
  withArrow = true,
  ...rest
}: {
  variant?: ButtonVariant;
  withArrow?: boolean;
} & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
      {withArrow ? <Arrow /> : null}
    </button>
  );
}
