import type { NotebookStatus } from "@/types/notebook";
import { notebookCompactLabelClassName } from "@/components/notebook/notebookTypography";

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
  return (
    <span
      className={`inline-flex w-fit rounded-full border border-accent-copper/35 bg-background/20 px-3 py-1 ${notebookCompactLabelClassName}`}
    >
      {label ?? statusLabels[status]}
    </span>
  );
}
