import type { StoryStatus } from "@/types/story";

const statusLabels: Record<StoryStatus, string> = {
  planned: "Story in development",
  draft: "Story in development",
  review: "Story in development",
  published: "Published",
};

export function StoryStatusBadge({ status }: { status: StoryStatus }) {
  const isPublished = status === "published";

  return (
    <span
      className={[
        "inline-flex w-fit rounded-full border bg-background/20 px-3 py-1",
        "font-mono text-[0.68rem] font-semibold tracking-[0.16em] uppercase",
        isPublished
          ? "border-accent-copper/45 text-accent-copper"
          : "border-border-subtle/70 text-text-secondary",
      ].join(" ")}
    >
      {statusLabels[status]}
    </span>
  );
}
