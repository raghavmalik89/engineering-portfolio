import type { NotebookStatus } from "@/types/notebook";

const statusLabels: Record<NotebookStatus, string> = {
  planned: "In development",
  draft: "In development",
  review: "Review draft",
  published: "Published",
};

export function NotebookStatusBadge({
  status,
  label,
}: {
  status: NotebookStatus;
  label?: string;
}) {
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
      {label ?? statusLabels[status]}
    </span>
  );
}
