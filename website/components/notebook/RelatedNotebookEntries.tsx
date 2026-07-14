import Link from "next/link";
import { NotebookStatusBadge } from "@/components/notebook/NotebookStatusBadge";
import { routes } from "@/lib/routes";
import type { NotebookEntry } from "@/types/notebook";

type RelatedNotebookEntriesProps = {
  entries: NotebookEntry[];
  canLinkEntries: boolean;
};

export function RelatedNotebookEntries({
  entries,
  canLinkEntries,
}: RelatedNotebookEntriesProps) {
  if (!entries.length) {
    return null;
  }

  return (
    <section className="border-t border-border-subtle/70 pt-9">
      <h2 className="text-2xl leading-tight font-semibold text-foreground">
        Related notebook entries
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {entries.map((entry) => {
          const canLink = canLinkEntries || entry.status === "published";
          const className =
            "rounded-lg border border-border-subtle/70 bg-surface/65 p-5 transition-colors duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper";
          const content = (
            <>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <p className="font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-accent-copper uppercase">
                  {entry.entryType}
                </p>
                <NotebookStatusBadge status={entry.status} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {entry.shortTitle}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {entry.summary}
              </p>
            </>
          );

          return canLink ? (
            <Link
              key={entry.slug}
              href={routes.notebookEntry(entry.slug)}
              className={`${className} hover:border-accent-copper/70`}
            >
              {content}
            </Link>
          ) : (
            <article key={entry.slug} className={className}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
