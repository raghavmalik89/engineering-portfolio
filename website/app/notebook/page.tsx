import type { Metadata } from "next";
import { NotebookExperience } from "@/components/notebook/NotebookExperience";
import { PageShell } from "@/components/layout/PageShell";
import { getNotebookEntriesForIndex } from "@/data/notebookEntries";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Engineering Notebook - Embedded Systems, RF and Product Architecture",
  description:
    "Technical investigations, architecture notes, experiments and development records from electronics, RF, sensing, software and product-system work.",
  alternates: {
    canonical: "/notebook",
  },
  openGraph: {
    title: "Engineering Notebook - Embedded Systems, RF and Product Architecture",
    description:
      "Technical investigations, architecture notes and development records from embedded systems, RF, sensing, software and product-system work.",
    url: "/notebook",
    images: [
      {
        url: site.defaultSocialImage.src,
        alt: site.defaultSocialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Notebook",
    description:
      "Technical investigations, architecture notes and development records from embedded systems, RF and product architecture.",
    images: [site.defaultSocialImage.src],
  },
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
