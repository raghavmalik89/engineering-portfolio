import Image from "next/image";
import Link from "next/link";
import { IconGlyph } from "@/components/common/IconGlyph";
import type { IconGlyphName } from "@/components/common/IconGlyph";

type CapabilityCardProps = {
  title: string;
  body: string;
  icon: IconGlyphName;
  image?: string;
  imageAlt?: string;
  evidenceLabel?: string;
  evidenceCaption?: string;
  href?: string;
  linkLabel?: string;
  ctaLabel?: string;
};

export function CapabilityCard({
  title,
  body,
  icon,
  image,
  imageAlt,
  evidenceLabel,
  evidenceCaption,
  href,
  linkLabel,
  ctaLabel = "See this in practice",
}: CapabilityCardProps) {
  const hasEvidence = image || evidenceLabel || evidenceCaption;

  const content = (
    <article className="group flex h-full flex-col rounded-lg border border-border-subtle/60 bg-surface/45 p-6 transition-colors duration-200 group-hover:border-accent-copper/35 group-hover:bg-surface/60 group-focus-visible:border-accent-copper/45">
      <div className="flex items-start justify-between gap-6">
        <div className="rounded-md border border-border-subtle/50 bg-background/30 p-3.5">
          <IconGlyph name={icon} />
        </div>
        {hasEvidence ? (
          <span className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
            Evidence
          </span>
        ) : null}
      </div>

      <div className="mt-8">
        <h3 className="text-xl leading-snug font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-4 leading-7 text-text-secondary">{body}</p>
      </div>

      {hasEvidence ? (
        <div className="mt-8 border-t border-border-subtle/60 pt-5">
          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-background/60">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, calc(100vw - 48px)"
                className="object-cover"
              />
            </div>
          ) : null}
          {evidenceLabel ? (
            <p className="mt-4 font-mono text-[10px] tracking-[0.16em] text-accent-copper/80 uppercase">
              {evidenceLabel}
            </p>
          ) : null}
          {evidenceCaption ? (
            <p className="mt-2 text-sm leading-6 text-text-muted">
              {evidenceCaption}
            </p>
          ) : null}
        </div>
      ) : null}

      {href ? (
        <span className="mt-auto pt-6 text-sm font-semibold text-accent-beige transition-colors duration-200 motion-reduce:transition-none group-hover:text-accent-copper group-focus-visible:text-accent-copper">
          {ctaLabel}{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0"
          >
            -&gt;
          </span>
        </span>
      ) : null}
    </article>
  );

  return href ? (
    <Link
      href={href}
      aria-label={linkLabel ?? title}
      className="group block h-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
