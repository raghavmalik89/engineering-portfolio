import Image from "next/image";
import Link from "next/link";
import { StoryStatusBadge } from "@/components/stories/StoryStatusBadge";
import { routes } from "@/lib/routes";
import type { Story } from "@/types/story";

type StoryCardProps = {
  story: Story;
  isActive: boolean;
  isSubdued: boolean;
  canLink: boolean;
  onActivate: (slug: string) => void;
  onSelect: (slug: string) => void;
  onClear: () => void;
};

export function StoryCard({
  story,
  isActive,
  isSubdued,
  canLink,
  onActivate,
  onSelect,
  onClear,
}: StoryCardProps) {
  const isPublished = story.status === "published";
  const visibleDomains = story.domains.slice(0, 3);
  const hiddenDomainCount = Math.max(
    story.domains.length - visibleDomains.length,
    0,
  );
  const className = [
    "group relative block w-full overflow-hidden rounded-lg border text-left transition duration-200 motion-reduce:transition-none",
    isActive
      ? "border-accent-copper/85 bg-surface-elevated/80 shadow-[0_0_0_1px_rgba(216,184,106,0.18)]"
      : "border-border-subtle/70 bg-surface/65",
    isSubdued ? "opacity-55" : "opacity-100",
    canLink
      ? "cursor-pointer hover:border-accent-copper/70 hover:bg-surface-elevated/70"
      : "cursor-default",
  ].join(" ");

  return (
    <article
      className={className}
      onMouseEnter={() => onActivate(story.slug)}
      onMouseLeave={onClear}
      data-story-card={story.slug}
      aria-label={`${story.cardTitle ?? story.title} story card`}
    >
      <div
        className={
          story.cardImage
            ? "grid min-h-[220px] lg:grid-cols-[minmax(0,1fr)_minmax(240px,38%)]"
            : "grid min-h-[200px]"
        }
      >
        <div className="flex min-w-0 flex-col p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-accent-copper uppercase">
                {story.company}
              </p>
              <span className="mt-2 block text-xl leading-snug font-semibold text-foreground sm:text-2xl">
                {story.cardTitle ?? story.title}
              </span>
            </div>
            <StoryStatusBadge status={story.status} />
          </div>

          <p className="readable-copy mt-4 max-w-[680px] overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] lg:[-webkit-line-clamp:3]">
            {story.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {visibleDomains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-border-subtle/70 px-3 py-1 text-xs text-text-secondary"
              >
                {domain}
              </span>
            ))}
            {hiddenDomainCount > 0 ? (
              <span
                aria-label={`${hiddenDomainCount} additional domains: ${story.domains
                  .slice(3)
                  .join(", ")}`}
                className="rounded-full border border-border-subtle/70 px-3 py-1 text-xs font-semibold text-text-secondary"
              >
                +{hiddenDomainCount}
              </span>
            ) : null}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-5">
            {canLink ? (
              <>
                <button
                  type="button"
                  onClick={() => onSelect(story.slug)}
                  className="relative z-20 text-sm font-semibold text-text-secondary underline decoration-accent-copper/35 underline-offset-4 transition-colors duration-200 hover:text-accent-beige hover:decoration-accent-copper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper motion-reduce:transition-none"
                  aria-pressed={isActive}
                >
                  Explore footprint
                </button>
                <Link
                  href={routes.story(story.slug)}
                  aria-label={`${isPublished ? "Open" : "Preview"} ${story.cardTitle ?? story.title}`}
                  className="group/link inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent-copper/35 underline-offset-4 transition-colors duration-200 after:absolute after:inset-0 after:z-10 after:content-[''] hover:text-accent-beige hover:decoration-accent-copper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper focus-visible:after:rounded-lg focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-[-2px] focus-visible:after:outline-accent-copper motion-reduce:transition-none"
                >
                  {isPublished ? "Open story" : "Preview story"}
                  <span
                    aria-hidden="true"
                    className="text-accent-copper transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0"
                  >
                    -&gt;
                  </span>
                </Link>
              </>
            ) : (
              <span className="text-sm font-semibold text-text-secondary">
                Story in development - preview only
              </span>
            )}
          </div>
        </div>

        {story.cardImage ? (
          <div className="relative aspect-[16/10] min-h-[190px] border-t border-border-subtle/70 bg-background/40 lg:aspect-auto lg:border-t-0 lg:border-l">
            <Image
              src={story.cardImage.src}
              alt={story.cardImage.alt}
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className={
                story.cardImage.objectFit === "contain"
                  ? "object-contain p-4"
                  : "object-cover"
              }
              style={
                story.cardImage.objectPosition
                  ? { objectPosition: story.cardImage.objectPosition }
                  : undefined
              }
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
