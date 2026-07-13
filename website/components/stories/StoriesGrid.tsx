import { StoryCard } from "@/components/stories/StoryCard";
import type { Story } from "@/types/story";

type StoriesGridProps = {
  stories: Story[];
  activeProjectSlugs: string[];
  activeStorySlug?: string;
  canLinkStories: boolean;
  onStoryActivate: (slug: string) => void;
  onClear: () => void;
};

export function StoriesGrid({
  stories,
  activeProjectSlugs,
  activeStorySlug,
  canLinkStories,
  onStoryActivate,
  onClear,
}: StoriesGridProps) {
  const hasActiveProjects = activeProjectSlugs.length > 0;

  return (
    <div className="grid gap-5">
      {stories.map((story) => {
        const isRelated = activeProjectSlugs.includes(story.slug);
        const isActive = isRelated || activeStorySlug === story.slug;

        return (
          <StoryCard
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
