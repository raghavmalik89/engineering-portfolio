import Image from "next/image";
import Link from "next/link";
import { NotebookStatusBadge } from "@/components/notebook/NotebookStatusBadge";
import { routes } from "@/lib/routes";
import type { NotebookEntry } from "@/types/notebook";

type NotebookCardProps = {
  entry: NotebookEntry;
  isActive: boolean;
  isSubdued: boolean;
  canLink: boolean;
  onActivate: (slug: string) => void;
  onClear: () => void;
};

export function NotebookCard({
  entry,
  isActive,
  isSubdued,
  canLink,
  onActivate,
  onClear,
}: NotebookCardProps) {
  const className = [
    "group flex h-full min-h-[420px] w-full flex-col overflow-hidden rounded-lg border text-left transition duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper",
    isActive
      ? "border-accent-copper/80 bg-surface-elevated/80"
      : "border-border-subtle/70 bg-surface/65",
    isSubdued ? "opacity-55" : "opacity-100",
    canLink ? "hover:border-accent-copper/70" : "",
  ].join(" ");

  const content = (
    <>
      {entry.cardImage ? (
        <div className="relative aspect-[16/9] border-b border-border-subtle/70 bg-background/40">
          <Image
            src={entry.cardImage.src}
            alt={entry.cardImage.alt}
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className={
              entry.cardImage.objectFit === "contain"
                ? "object-contain"
                : "object-cover"
            }
            style={
              entry.cardImage.objectPosition
                ? { objectPosition: entry.cardImage.objectPosition }
                : undefined
            }
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="relative aspect-[16/9] overflow-hidden border-b border-border-subtle/70 bg-background/50"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(216,184,106,0.13)_0,rgba(216,184,106,0.03)_28%,transparent_28%),linear-gradient(90deg,rgba(216,184,106,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(216,184,106,0.05)_1px,transparent_1px)] bg-[length:100%_100%,24px_24px,24px_24px]" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
            <span className="font-mono text-xs tracking-[0.18em] text-accent-copper uppercase">
              Technical record
            </span>
            <span className="h-px flex-1 bg-accent-copper/35" />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-accent-copper uppercase">
              {entry.cardEyebrow ?? entry.entryType}
            </p>
            <span className="mt-3 block text-xl leading-snug font-semibold text-foreground">
              {entry.title}
            </span>
          </div>
          <NotebookStatusBadge
            status={entry.status}
            label={entry.visibleStatus}
          />
        </div>

        <p className="mt-5 leading-7 text-text-secondary">{entry.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {entry.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border-subtle/70 px-3 py-1 text-xs text-text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        {canLink ? (
          <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-beige">
            {entry.actionLabel ?? "Read notebook entry"}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
            >
              -&gt;
            </span>
          </span>
        ) : (
          <span className="mt-auto pt-6 text-sm font-semibold text-text-muted">
            In development
          </span>
        )}
      </div>
    </>
  );

  if (canLink) {
    return (
      <Link
        href={routes.notebookEntry(entry.slug)}
        className={className}
        aria-label={`Read ${entry.title} in the engineering notebook`}
        onMouseEnter={() => onActivate(entry.slug)}
        onMouseLeave={onClear}
        onFocus={() => onActivate(entry.slug)}
        onBlur={onClear}
        data-notebook-card={entry.slug}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      aria-label={`${entry.title} technical index relationships`}
      onMouseEnter={() => onActivate(entry.slug)}
      onMouseLeave={onClear}
      onFocus={() => onActivate(entry.slug)}
      onBlur={onClear}
      data-notebook-card={entry.slug}
    >
      {content}
    </button>
  );
}
