import { useState } from "react";

export const CONTACT_EMAIL = "scaletruofficial@gmail.com";
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`;

export function EmailContact({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <span className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
      <a
        href={GMAIL_COMPOSE_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="underline underline-offset-4 transition-colors hover:text-foreground"
      >
        {CONTACT_EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded border border-border px-2 py-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        aria-live="polite"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
