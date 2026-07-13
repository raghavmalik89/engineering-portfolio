import type { Metadata } from "next";
import { StoriesExperience } from "@/components/stories/StoriesExperience";
import { PageShell } from "@/components/layout/PageShell";
import { getStories } from "@/data/stories";
import { footprintLocations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Stories | Raghav Malik",
  description:
    "Engineering projects, decisions and field experience from problem definition through validation and deployment.",
};

export default function StoriesPage() {
  const stories = getStories();
  const canLinkStories = process.env.NODE_ENV !== "production";

  return (
    <PageShell>
      <main className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 lg:py-24">
        <section className="mb-10 max-w-[760px]">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Stories
          </p>
          <h1 className="mt-5 text-4xl leading-tight font-semibold text-accent-copper sm:text-5xl lg:text-6xl">
            Stories
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Engineering projects, decisions and field experience - from problem
            definition through validation and deployment.
          </p>
        </section>

        <StoriesExperience
          stories={stories}
          locations={footprintLocations}
          canLinkStories={canLinkStories}
        />
      </main>
    </PageShell>
  );
}
