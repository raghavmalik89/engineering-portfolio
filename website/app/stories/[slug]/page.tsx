import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedStories } from "@/components/stories/RelatedStories";
import { StoryGallery } from "@/components/stories/StoryGallery";
import { StoryBackLink } from "@/components/stories/StoryBackLink";
import { StoryHero } from "@/components/stories/StoryHero";
import { StoryMetadata } from "@/components/stories/StoryMetadata";
import { StorySection } from "@/components/stories/StorySection";
import { footprintLocations } from "@/data/locations";
import {
  canExposeStoryPage,
  getStories,
  getStoriesForStaticParams,
  getStoryBySlug,
} from "@/data/stories";
import type { Story } from "@/types/story";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getStoriesForStaticParams().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story || !canExposeStoryPage(story)) {
    return {};
  }

  const isPublished = story.status === "published";

  return {
    title: story.seo?.title ?? `${story.title} | Stories | Raghav Malik`,
    description: story.seo?.description ?? story.summary,
    keywords: story.seo?.keywords,
    alternates: story.seo?.canonicalPath
      ? { canonical: story.seo.canonicalPath }
      : undefined,
    openGraph: {
      title: story.seo?.openGraphTitle ?? story.seo?.title ?? story.title,
      description:
        story.seo?.openGraphDescription ??
        story.seo?.description ??
        story.summary,
      url: story.seo?.canonicalPath,
      images: story.heroImage
        ? [
            {
              url: story.heroImage.src,
              alt: story.heroImage.alt,
            },
          ]
        : undefined,
    },
    robots: isPublished ? undefined : { index: false, follow: false },
  };
}

export default async function StoryDetailPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story || !canExposeStoryPage(story)) {
    notFound();
  }

  const countryNames = footprintLocations
    .filter((location) => story.countries.includes(location.code))
    .map((location) =>
      [location.countryName, location.stateOrRegion, location.city]
        .filter(Boolean)
        .join(" — "),
    );

  const allStories = getStories();
  const relatedStories = story.relatedProjectSlugs
    .map((relatedSlug) =>
      allStories.find((candidate) => candidate.slug === relatedSlug),
    )
    .filter((candidate): candidate is Story => Boolean(candidate));

  return (
    <PageShell>
      <main className="mx-auto max-w-[1120px] px-6 py-16 sm:px-8 lg:py-24">
        <StoryBackLink />

        <div className="grid gap-12">
          <StoryHero story={story} />
          <StoryMetadata story={story} countryNames={countryNames} />

          {story.sections.length ? (
            <article className="mx-auto grid w-full max-w-[900px] gap-10">
              {story.sections.map((section) => (
                <StorySection key={section.id} section={section} />
              ))}
              <StoryGallery images={story.gallery} />
            </article>
          ) : (
            <section className="mx-auto max-w-[900px] rounded-lg border border-border-subtle/70 bg-surface/55 p-6">
              <p className="font-mono text-xs tracking-[0.16em] text-accent-copper uppercase">
                Story in development
              </p>
              <p className="readable-copy mt-4">
                This page is available locally for progressive content drafting.
                Public production builds will not expose unpublished story pages.
              </p>
            </section>
          )}

          <div className="mx-auto w-full max-w-[900px]">
            <RelatedStories
              stories={relatedStories}
              canLinkStories={process.env.NODE_ENV !== "production"}
            />
          </div>
        </div>
      </main>
    </PageShell>
  );
}
