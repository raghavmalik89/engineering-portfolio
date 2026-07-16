import type { Metadata } from "next";
import { NotebookExperience } from "@/components/notebook/NotebookExperience";
import { PageShell } from "@/components/layout/PageShell";
import { getNotebookEntriesForIndex } from "@/data/notebookEntries";

export const metadata: Metadata = {
  title: "Engineering Notebook | Raghav Malik",
  description:
    "Technical investigations, architecture notes, experiments and development records from electronics, RF, sensing, software and product-system work.",
};

export default function NotebookPage() {
  const entries = getNotebookEntriesForIndex();
  const canLinkEntries = process.env.NODE_ENV !== "production";

  return (
    <PageShell>
      <main className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 lg:py-24">
        <section className="mb-10 max-w-[780px]">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Notebook
          </p>
          <h1 className="mt-5 text-4xl leading-tight font-semibold text-accent-copper sm:text-5xl lg:text-6xl">
            Engineering Notebook
          </h1>
          <p className="readable-copy mt-6 text-lg">
            Technical investigations, architecture notes, experiments and
            development records from electronics, RF, sensing, software and
            product-system work.
          </p>
        </section>

        <NotebookExperience
          entries={entries}
          canLinkEntries={canLinkEntries}
        />
      </main>
    </PageShell>
  );
}
