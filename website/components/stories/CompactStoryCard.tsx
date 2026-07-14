import Link from "next/link";
import { StoryStatusBadge } from "@/components/stories/StoryStatusBadge";
import { routes } from "@/lib/routes";
import type { Story } from "@/types/story";

type CompactStoryCardProps = {
  story: Story;
  isActive: boolean;
  isSubdued: boolean;
  canLink: boolean;
  onActivate: (slug: string) => void;
  onClear: () => void;
};

export function CompactStoryCard({
  story,
  isActive,
  isSubdued,
  canLink,
  onActivate,
  onClear,
}: CompactStoryCardProps) {
  const className = [
    "group block h-full rounded-lg border p-5 text-left transition duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper",
    isActive
      ? "border-accent-copper/80 bg-surface-elevated/80"
      : "border-border-subtle/70 bg-surface/55",
    isSubdued ? "opacity-55" : "opacity-100",
    canLink ? "hover:border-accent-copper/70" : "",
  ].join(" ");

  const content = (
    <div className="flex h-full min-w-0 flex-col">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs tracking-[0.16em] text-accent-copper uppercase">
          {story.company}
        </p>
        <StoryStatusBadge status={story.status} />
      </div>
      <h3 className="mt-4 text-lg leading-snug font-semibold text-foreground">
        {story.cardTitle ?? story.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-text-secondary">
        {story.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {story.domains.slice(0, 4).map((domain) => (
          <span
            key={domain}
            className="rounded-full border border-border-subtle/70 px-2.5 py-1 text-xs text-text-muted"
          >
            {domain}
          </span>
        ))}
      </div>
      {canLink ? (
        <span className="mt-auto pt-5 text-sm font-semibold text-accent-beige">
          Open story
        </span>
      ) : (
        <span className="mt-auto pt-5 text-sm font-semibold text-text-muted">
          Story in development
        </span>
      )}
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
    <button
      type="button"
      className={className}
      aria-label={`${story.title} story relationships`}
      onMouseEnter={() => onActivate(story.slug)}
      onMouseLeave={onClear}
      onFocus={() => onActivate(story.slug)}
      onBlur={onClear}
      data-story-card={story.slug}
    >
      {content}
    </button>
  );
}
