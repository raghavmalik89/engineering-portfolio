import type { StoryStatus } from "@/types/story";
import { storyCompactLabelClassName } from "@/components/stories/storyTypography";

const statusLabels: Record<StoryStatus, string> = {
  planned: "Story in development",
  draft: "Story in development",
  review: "Story in development",
  published: "Published",
};

export function StoryStatusBadge({ status }: { status: StoryStatus }) {
  return (
    <span
      className={`inline-flex w-fit rounded-full border border-accent-copper/35 bg-background/20 px-3 py-1 ${storyCompactLabelClassName}`}
    >
      {statusLabels[status]}
    </span>
  );
}
