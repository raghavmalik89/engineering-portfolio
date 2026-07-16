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
  onClear: () => void;
};

export function StoryCard({
  story,
  isActive,
  isSubdued,
  canLink,
  onActivate,
  onClear,
}: StoryCardProps) {
  const isPublished = story.status === "published";
  const className = [
    "group block w-full overflow-hidden rounded-lg border text-left transition duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper",
    isActive
      ? "border-accent-copper/80 bg-surface-elevated/80"
      : "border-border-subtle/70 bg-surface/65",
    isSubdued ? "opacity-55" : "opacity-100",
    canLink ? "cursor-pointer hover:border-accent-copper/70" : "cursor-default",
  ].join(" ");

  const content = (
    <div
      className={
        story.cardImage
          ? "grid min-h-[260px] lg:grid-cols-[minmax(0,1fr)_minmax(260px,36%)]"
          : "grid min-h-[220px]"
      }
    >
      <div className="flex min-w-0 flex-col p-5 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-accent-copper uppercase">
              {story.company}
            </p>
            <span className="mt-3 block text-2xl leading-snug font-semibold text-foreground">
              {story.cardTitle ?? story.title}
            </span>
          </div>
          <StoryStatusBadge status={story.status} />
        </div>

        <p className="mt-5 max-w-[680px] leading-7 text-text-secondary">
          {story.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {story.domains.map((domain) => (
            <span
              key={domain}
              className="rounded-full border border-border-subtle/70 px-3 py-1 text-xs text-text-secondary"
            >
              {domain}
            </span>
          ))}
        </div>

        {canLink ? (
          <span className="mt-auto pt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent-copper/35 underline-offset-4 transition-colors duration-200 motion-reduce:transition-none group-hover:text-accent-beige group-hover:decoration-accent-copper/80 group-focus-visible:text-accent-beige group-focus-visible:decoration-accent-copper/80">
            {isPublished ? "Open story" : "Preview story"}
            <span
              aria-hidden="true"
              className="text-accent-copper transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
            >
              -&gt;
            </span>
          </span>
        ) : (
          <span className="mt-auto pt-6 text-sm font-semibold text-text-secondary">
            Story in development — preview only
          </span>
        )}
      </div>

      {story.cardImage ? (
        <div className="relative aspect-[16/10] min-h-[220px] border-t border-border-subtle/70 bg-background/40 lg:aspect-auto lg:border-t-0 lg:border-l">
          <Image
            src={story.cardImage.src}
            alt={story.cardImage.alt}
            fill
            sizes="(min-width: 1024px) 28vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}
    </div>
  );

  if (canLink) {
    return (
      <Link
        href={routes.story(story.slug)}
        className={className}
        onMouseEnter={() => onActivate(story.slug)}
        onMouseLeave={onClear}
        onFocus={() => onActivate(story.slug)}
        onBlur={onClear}
        data-story-card={story.slug}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={className}
      onMouseEnter={() => onActivate(story.slug)}
      onMouseLeave={onClear}
      data-story-card={story.slug}
    >
      {content}
    </article>
  );
}
