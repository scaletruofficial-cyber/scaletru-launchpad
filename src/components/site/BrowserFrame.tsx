import { cn } from "@/lib/utils";

export function BrowserFrame({
  src,
  alt,
  label,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-2.5">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border-strong" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border-strong" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border-strong" />
        {label ? (
          <span className="ml-3 truncate text-[0.7rem] font-medium tracking-wide text-muted-foreground">
            {label}
          </span>
        ) : null}
      </div>
      <img
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        className={cn("block h-full w-full object-cover", imgClassName)}
      />
    </figure>
  );
}
