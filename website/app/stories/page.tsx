import type { Metadata } from "next";
import { StoriesExperience } from "@/components/stories/StoriesExperience";
import { PageShell } from "@/components/layout/PageShell";
import { getStoriesForIndex } from "@/data/stories";
import { footprintLocations } from "@/data/locations";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Engineering Stories - Industrial IoT, Mining Technology and Product Delivery",
  description:
    "Engineering projects, decisions and field experience from problem definition through validation and deployment.",
  alternates: {
    canonical: "/stories",
  },
  openGraph: {
    title: "Engineering Stories - Industrial IoT, Mining Technology and Product Delivery",
    description:
      "Engineering project stories covering Industrial IoT, mining technology, field validation, product architecture and deployment.",
    url: "/stories",
    images: [
      {
        url: site.defaultSocialImage.src,
        alt: site.defaultSocialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Stories",
    description:
      "Engineering projects, decisions and field experience from problem definition through validation and deployment.",
    images: [site.defaultSocialImage.src],
  },
};

export default function StoriesPage() {
  const stories = getStoriesForIndex();
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
          <p className="readable-copy mt-6 text-lg">
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
