import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { NotebookBackLink } from "@/components/notebook/NotebookBackLink";
import { NotebookSection } from "@/components/notebook/NotebookSection";
import { NotebookStatusBadge } from "@/components/notebook/NotebookStatusBadge";
import { RelatedNotebookEntries } from "@/components/notebook/RelatedNotebookEntries";
import { RelatedStoryLinks } from "@/components/notebook/RelatedStoryLinks";
import { notebookLabelClassName } from "@/components/notebook/notebookTypography";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/data/site";
import {
  canExposeNotebookEntry,
  getNotebookEntries,
  getNotebookEntriesForStaticParams,
  getNotebookEntryBySlug,
} from "@/data/notebookEntries";
import {
  canExposeStoryPage,
  getStories,
} from "@/data/stories";
import type { NotebookEntry } from "@/types/notebook";
import type { Story } from "@/types/story";

const notebookHeroAspectClassNames = {
  landscape: "relative aspect-[4/3]",
  portrait: "relative aspect-[3/4]",
  wide: "relative aspect-[16/9]",
  tall: "relative aspect-[9/16]",
} as const;

type NotebookEntryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getNotebookEntriesForStaticParams().map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: NotebookEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getNotebookEntryBySlug(slug);

  if (!entry || !canExposeNotebookEntry(entry)) {
    return {};
  }

  const isPublished = entry.status === "published";
  const canonicalPath = entry.seo?.canonicalPath ?? `/notebook/${entry.slug}`;
  const entrySocialImage =
    entry.seo?.openGraphImage ??
    entry.cardImage ??
    entry.heroImage;
  const socialImage =
    entrySocialImage && !entrySocialImage.src.endsWith(".svg")
      ? entrySocialImage
      : site.defaultSocialImage;
  const entryTitle =
    entry.seo?.title ??
    `${entry.title} | Engineering Notebook | Raghav Malik`;
  const pageTitle = entryTitle.includes("Raghav Malik")
    ? entryTitle
    : `${entryTitle} | Raghav Malik`;

  return {
    title: {
      absolute: pageTitle,
    },
    description: entry.seo?.description ?? entry.summary,
    keywords: entry.seo?.keywords,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "article",
      siteName: site.name,
      title: entry.seo?.openGraphTitle ?? entry.seo?.title ?? entry.title,
      description:
        entry.seo?.openGraphDescription ??
        entry.seo?.description ??
        entry.summary,
      url: canonicalPath,
      images: socialImage
        ? [
            {
              url: socialImage.src,
              alt: socialImage.alt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.seo?.openGraphTitle ?? entry.seo?.title ?? entry.title,
      description:
        entry.seo?.openGraphDescription ??
        entry.seo?.description ??
        entry.summary,
      images: socialImage ? [socialImage.src] : undefined,
    },
    robots: isPublished ? undefined : { index: false, follow: false },
  };
}

function relatedNotebookEntries(entry: NotebookEntry) {
  const allEntries = getNotebookEntries();

  return (entry.relatedNotebookSlugs ?? [])
    .map((slug) => allEntries.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is NotebookEntry => Boolean(candidate));
}

function relatedStories(entry: NotebookEntry) {
  const allStories = getStories();

  return (entry.relatedStorySlugs ?? [])
    .map((slug) => allStories.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is Story => Boolean(candidate))
    .filter((story) => process.env.NODE_ENV !== "production" || canExposeStoryPage(story));
}

export default async function NotebookEntryPage({
  params,
}: NotebookEntryPageProps) {
  const { slug } = await params;
  const entry = getNotebookEntryBySlug(slug);

  if (!entry || !canExposeNotebookEntry(entry)) {
    notFound();
  }

  const relatedEntries = relatedNotebookEntries(entry);
  const storyLinks = relatedStories(entry);
  const canLinkNotebookEntries = process.env.NODE_ENV !== "production";
  const canLinkStories = process.env.NODE_ENV !== "production";

  return (
    <PageShell>
      <main className="mx-auto w-full min-w-0 max-w-[1120px] px-6 py-16 sm:px-8 lg:py-24">
        <NotebookBackLink />

        <div className="grid min-w-0 gap-10">
          <section
            className={
              entry.heroImage
                ? "grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,38%)] lg:items-start"
                : "min-w-0 max-w-[900px]"
            }
          >
            <div className="min-w-0">
              <p className={notebookLabelClassName}>
                {entry.cardEyebrow ?? entry.entryType}
              </p>
              <h1 className="mt-5 max-w-[820px] break-words text-4xl leading-tight font-semibold text-foreground [overflow-wrap:anywhere] sm:text-5xl">
                {entry.title}
              </h1>
              {entry.heroProposition ? (
                <p className="mt-5 max-w-[760px] break-words text-xl leading-8 font-semibold text-accent-beige [overflow-wrap:anywhere]">
                  {entry.heroProposition}
                </p>
              ) : null}
              <p className="readable-copy mt-6 max-w-[760px] break-words text-lg [overflow-wrap:anywhere]">
                {entry.heroSummary ?? entry.summary}
              </p>
              <div className="mt-6">
                <NotebookStatusBadge
                  status={entry.status}
                  label={entry.visibleStatus}
                />
              </div>
            </div>

            {entry.heroImage ? (
              <figure className="min-w-0 max-w-full overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/65">
                <div
                  className={
                    notebookHeroAspectClassNames[
                      entry.heroImage.aspect ?? "landscape"
                    ]
                  }
                >
                  <Image
                    src={entry.heroImage.src}
                    alt={entry.heroImage.alt}
                    fill
                    priority
                    unoptimized={entry.heroImage.src.endsWith(".svg")}
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className={
                      entry.heroImage.objectFit === "contain"
                        ? "object-contain p-5 sm:p-8"
                        : "object-cover"
                    }
                    style={
                      entry.heroImage.objectPosition
                        ? { objectPosition: entry.heroImage.objectPosition }
                        : undefined
                    }
                  />
                </div>
                {entry.heroImage.caption ? (
                  <figcaption className="break-words border-t border-border-subtle/70 px-4 py-3 text-sm leading-6 text-text-muted [overflow-wrap:anywhere]">
                    {entry.heroImage.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </section>

          <section className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
              <p className={notebookLabelClassName}>Type</p>
              <p className="mt-3 break-words leading-7 text-text-secondary [overflow-wrap:anywhere]">
                {entry.entryType}
              </p>
            </div>
            <div className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
              <p className={notebookLabelClassName}>Status</p>
              <p className="mt-3 break-words leading-7 text-text-secondary [overflow-wrap:anywhere]">
                {entry.visibleStatus ??
                  (entry.status === "published" ? "Published" : "In development")}
              </p>
            </div>
            {entry.organisation ? (
              <div className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
                <p className={notebookLabelClassName}>Organisation</p>
                <p className="mt-3 break-words leading-7 text-text-secondary [overflow-wrap:anywhere]">
                  {entry.organisation}
                </p>
              </div>
            ) : null}
            {entry.period ? (
              <div className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
                <p className={notebookLabelClassName}>Period</p>
                <p className="mt-3 break-words leading-7 text-text-secondary [overflow-wrap:anywhere]">
                  {entry.period}
                </p>
              </div>
            ) : null}
            {entry.lastUpdatedLabel ? (
              <div className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
                <p className={notebookLabelClassName}>Updated</p>
                <p className="mt-3 break-words leading-7 text-text-secondary [overflow-wrap:anywhere]">
                  {entry.lastUpdatedLabel}
                </p>
              </div>
            ) : null}
            {entry.technologies.length ? (
              <div className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/55 p-5 sm:col-span-2 lg:col-span-4">
                <p className={notebookLabelClassName}>Technologies</p>
                <ul className="mt-3 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {entry.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="flex min-h-11 min-w-0 items-center break-words rounded-md border border-border-subtle/70 bg-background/20 px-3 py-2 text-sm leading-5 text-text-muted [overflow-wrap:anywhere]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          {entry.featureVisual ? (
            <section className="grid min-w-0 gap-5">
              {entry.featureVisual.eyebrow ||
              entry.featureVisual.title ||
              entry.featureVisual.body ? (
                <div className="min-w-0 max-w-[780px]">
                  {entry.featureVisual.eyebrow ? (
                    <p className={notebookLabelClassName}>
                      {entry.featureVisual.eyebrow}
                    </p>
                  ) : null}
                  {entry.featureVisual.title ? (
                    <h2 className="mt-3 break-words text-2xl leading-tight font-semibold text-foreground [overflow-wrap:anywhere]">
                      {entry.featureVisual.title}
                    </h2>
                  ) : null}
                  {entry.featureVisual.body ? (
                    <p className="readable-copy mt-3">
                      {entry.featureVisual.body}
                    </p>
                  ) : null}
                </div>
              ) : null}
              <figure className="mx-auto w-full min-w-0 max-w-[1080px]">
                <div
                  className={
                    notebookHeroAspectClassNames[
                      entry.featureVisual.image.aspect ?? "wide"
                    ]
                  }
                >
                  <Image
                    src={entry.featureVisual.image.src}
                    alt={entry.featureVisual.image.alt}
                    fill
                    unoptimized={entry.featureVisual.image.src.endsWith(".svg")}
                    sizes="(min-width: 1120px) 1080px, calc(100vw - 3rem)"
                    className={
                      entry.featureVisual.image.objectFit === "cover"
                        ? "object-cover"
                        : "object-contain"
                    }
                    style={
                      entry.featureVisual.image.objectPosition
                        ? {
                            objectPosition:
                              entry.featureVisual.image.objectPosition,
                          }
                        : undefined
                    }
                  />
                </div>
                {entry.featureVisual.image.caption ? (
                  <figcaption className="mt-3 break-words text-sm leading-6 text-text-muted [overflow-wrap:anywhere]">
                    {entry.featureVisual.image.caption}
                  </figcaption>
                ) : null}
              </figure>
            </section>
          ) : null}

          {entry.methods?.length ? (
            <section className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
              <p className={notebookLabelClassName}>Methods</p>
              <div className="mt-3 flex min-w-0 flex-wrap gap-2">
                {entry.methods.map((method) => (
                  <span
                    key={method}
                    className="max-w-full break-words rounded-full border border-border-subtle/70 px-3 py-1 text-xs text-text-muted [overflow-wrap:anywhere]"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          {entry.snapshot?.length ? (
            <section className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/60 p-6 sm:p-7">
              <p className={notebookLabelClassName}>At a glance</p>
              <div className="mt-5 grid min-w-0 gap-4 md:grid-cols-2">
                {entry.snapshot.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className={notebookLabelClassName}>{item.label}</p>
                    <p className="readable-copy mt-2 break-words [overflow-wrap:anywhere]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {entry.sourceLinks?.length ? (
            <section className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/60 p-6 sm:p-7">
              <p className={notebookLabelClassName}>Source links</p>
              <div className="mt-5 grid min-w-0 gap-4 sm:grid-cols-2">
                {entry.sourceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group min-w-0 rounded-lg border border-border-subtle/70 bg-background/20 p-5 transition-colors duration-200 motion-reduce:transition-none hover:border-accent-copper/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
                  >
                    <span className="break-words text-base font-semibold text-foreground [overflow-wrap:anywhere]">
                      {link.label}
                    </span>
                    <span className="mt-3 block break-words text-sm leading-6 text-text-secondary [overflow-wrap:anywhere]">
                      {link.kind === "github"
                        ? "Public GitHub repository for the approved source material."
                        : "Approved external source material."}
                    </span>
                    <span className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent-copper/35 underline-offset-4 transition-colors duration-200 motion-reduce:transition-none group-hover:text-accent-beige group-hover:decoration-accent-copper/80 group-focus-visible:text-accent-beige group-focus-visible:decoration-accent-copper/80">
                      Open source
                      <span
                        aria-hidden="true"
                        className="text-accent-copper transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                      >
                        -&gt;
                      </span>
                      <span className="sr-only">
                        Opens in a new tab
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {entry.technologyGroups?.length ? (
            <section className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/60 p-6 sm:p-7">
              <p className={notebookLabelClassName}>Technology stack</p>
              <div className="mt-5 grid min-w-0 gap-4 md:grid-cols-2">
                {entry.technologyGroups.map((group) => (
                  <article
                    key={group.category}
                    className="min-w-0 rounded-lg border border-border-subtle/70 bg-background/20 p-5"
                  >
                    <h2 className="break-words text-lg font-semibold text-foreground [overflow-wrap:anywhere]">
                      {group.category}
                    </h2>
                    <div className="mt-4 grid min-w-0 gap-3">
                      {group.items.map((item) => (
                        <div key={item.name} className="min-w-0">
                          <p className="break-words text-sm font-semibold text-accent-beige [overflow-wrap:anywhere]">
                            {item.name}
                          </p>
                          <p className="readable-copy mt-1 break-words text-sm [overflow-wrap:anywhere]">
                            {item.purpose}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {entry.applicationProfiles?.length ? (
            <section className="min-w-0 rounded-lg border border-border-subtle/70 bg-surface/60 p-6 sm:p-7">
              <p className={notebookLabelClassName}>Application profiles</p>
              <div className="mt-5 grid min-w-0 gap-4 md:grid-cols-3">
                {entry.applicationProfiles.map((profile) => (
                  <article
                    key={profile.title}
                    className="min-w-0 rounded-lg border border-border-subtle/70 bg-background/20 p-5"
                  >
                    <h2 className="break-words text-lg font-semibold text-foreground [overflow-wrap:anywhere]">
                      {profile.title}
                    </h2>
                    <p className="readable-copy mt-3 break-words text-sm [overflow-wrap:anywhere]">
                      {profile.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {entry.sections.length ? (
            <article className="mx-auto grid w-full min-w-0 max-w-[900px] gap-9">
              {entry.sections.map((section) => (
                <NotebookSection key={section.id} section={section} />
              ))}

              {entry.limitations?.length ? (
                <section className="border-t border-border-subtle/70 pt-9">
                  <h2 className="break-words text-2xl leading-tight font-semibold text-foreground [overflow-wrap:anywhere]">
                    Limitations
                  </h2>
                  <ul className="readable-copy mt-5 grid min-w-0 list-disc gap-3 pl-6 text-base marker:text-accent-copper">
                    {entry.limitations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {entry.nextSteps?.length ? (
                <section className="border-t border-border-subtle/70 pt-9">
                  <h2 className="break-words text-2xl leading-tight font-semibold text-foreground [overflow-wrap:anywhere]">
                    Next steps
                  </h2>
                  <ul className="readable-copy mt-5 grid min-w-0 list-disc gap-3 pl-6 text-base marker:text-accent-copper">
                    {entry.nextSteps.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <RelatedNotebookEntries
                entries={relatedEntries}
                canLinkEntries={canLinkNotebookEntries}
              />
              <RelatedStoryLinks
                stories={storyLinks}
                canLinkStories={canLinkStories}
              />
            </article>
          ) : (
            <section className="mx-auto max-w-[900px] rounded-lg border border-border-subtle/70 bg-surface/55 p-6">
              <p className={notebookLabelClassName}>In development</p>
              <p className="readable-copy mt-4">
                This Notebook entry is available locally for progressive
                drafting. Public production builds will not expose unpublished
                Notebook pages.
              </p>
            </section>
          )}
        </div>
      </main>
    </PageShell>
  );
}
