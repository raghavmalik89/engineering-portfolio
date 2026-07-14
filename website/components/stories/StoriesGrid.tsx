import { CompactStoryCard } from "@/components/stories/CompactStoryCard";
import { StoryCard } from "@/components/stories/StoryCard";
import type { Story } from "@/types/story";

type StoriesGridProps = {
  stories: Story[];
  activeProjectSlugs: string[];
  activeStorySlug?: string;
  canLinkStories: boolean;
  variant?: "flagship" | "compact";
  onStoryActivate: (slug: string) => void;
  onClear: () => void;
};

export function StoriesGrid({
  stories,
  activeProjectSlugs,
  activeStorySlug,
  canLinkStories,
  variant = "flagship",
  onStoryActivate,
  onClear,
}: StoriesGridProps) {
  const hasActiveProjects = activeProjectSlugs.length > 0;
  const CardComponent = variant === "compact" ? CompactStoryCard : StoryCard;

  return (
    <div
      className={
        variant === "compact"
          ? "grid gap-4 md:grid-cols-2"
          : "grid gap-5"
      }
    >
      {stories.map((story) => {
        const isRelated = activeProjectSlugs.includes(story.slug);
        const isActive = isRelated || activeStorySlug === story.slug;

        return (
          <CardComponent
            key={story.slug}
            story={story}
            isActive={isActive}
            isSubdued={hasActiveProjects && !isRelated}
            canLink={canLinkStories || story.status === "published"}
            onActivate={onStoryActivate}
            onClear={onClear}
          />
        );
      })}
    </div>
  );
}
