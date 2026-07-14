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

  return {
    title:
      entry.seo?.title ?? `${entry.title} | Engineering Notebook | Raghav Malik`,
    description: entry.seo?.description ?? entry.summary,
    keywords: entry.seo?.keywords,
    alternates: entry.seo?.canonicalPath
      ? { canonical: entry.seo.canonicalPath }
      : undefined,
    openGraph: {
      title: entry.seo?.openGraphTitle ?? entry.seo?.title ?? entry.title,
      description:
        entry.seo?.openGraphDescription ??
        entry.seo?.description ??
        entry.summary,
      url: entry.seo?.canonicalPath,
      images: entry.seo?.openGraphImage
        ? [
            {
              url: entry.seo.openGraphImage.src,
              alt: entry.seo.openGraphImage.alt,
            },
          ]
        : entry.heroImage
        ? [
            {
              url: entry.heroImage.src,
              alt: entry.heroImage.alt,
            },
          ]
        : undefined,
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
      <main className="mx-auto max-w-[1120px] px-6 py-16 sm:px-8 lg:py-24">
        <NotebookBackLink />

        <div className="grid gap-10">
          <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,38%)] lg:items-start">
            <div>
              <p className={notebookLabelClassName}>
                {entry.cardEyebrow ?? entry.entryType}
              </p>
              <h1 className="mt-5 max-w-[820px] text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
                {entry.title}
              </h1>
              {entry.heroProposition ? (
                <p className="mt-5 max-w-[760px] text-xl leading-8 font-semibold text-accent-beige">
                  {entry.heroProposition}
                </p>
              ) : null}
              <p className="mt-6 max-w-[760px] text-lg leading-8 text-text-secondary">
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
              <figure className="overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/65">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={entry.heroImage.src}
                    alt={entry.heroImage.alt}
                    fill
                    priority
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
                  <figcaption className="border-t border-border-subtle/70 px-4 py-3 text-sm leading-6 text-text-muted">
                    {entry.heroImage.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : (
              <div
                aria-hidden="true"
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/55"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(216,184,106,0.12),transparent_34%),linear-gradient(90deg,rgba(216,184,106,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(216,184,106,0.05)_1px,transparent_1px)] bg-[length:100%_100%,28px_28px,28px_28px]" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="font-mono text-xs tracking-[0.18em] text-accent-copper uppercase">
                    Technical record
                  </p>
                  <p className="mt-2 max-w-[20rem] text-sm leading-6 text-text-muted">
                    Approved images or diagrams will be added only when they are
                    available and public-safe.
                  </p>
                </div>
              </div>
            )}
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
              <p className={notebookLabelClassName}>Type</p>
              <p className="mt-3 leading-7 text-text-secondary">
                {entry.entryType}
              </p>
            </div>
            <div className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
              <p className={notebookLabelClassName}>Status</p>
              <p className="mt-3 leading-7 text-text-secondary">
                {entry.visibleStatus ??
                  (entry.status === "published" ? "Published" : "In development")}
              </p>
            </div>
            {entry.organisation ? (
              <div className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
                <p className={notebookLabelClassName}>Organisation</p>
                <p className="mt-3 leading-7 text-text-secondary">
                  {entry.organisation}
                </p>
              </div>
            ) : null}
            {entry.period ? (
              <div className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
                <p className={notebookLabelClassName}>Period</p>
                <p className="mt-3 leading-7 text-text-secondary">
                  {entry.period}
                </p>
              </div>
            ) : null}
            {entry.lastUpdatedLabel ? (
              <div className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
                <p className={notebookLabelClassName}>Updated</p>
                <p className="mt-3 leading-7 text-text-secondary">
                  {entry.lastUpdatedLabel}
                </p>
              </div>
            ) : null}
            {entry.technologies.length ? (
              <div className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5 sm:col-span-2 lg:col-span-4">
                <p className={notebookLabelClassName}>Technologies</p>
                <ul className="mt-3 grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {entry.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="flex min-h-11 items-center rounded-md border border-border-subtle/70 bg-background/20 px-3 py-2 text-sm leading-5 text-text-muted"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {entry.methods?.length ? (
              <div className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5 sm:col-span-2 lg:col-span-4">
                <p className={notebookLabelClassName}>Methods</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.methods.map((method) => (
                    <span
                      key={method}
                      className="rounded-full border border-border-subtle/70 px-3 py-1 text-xs text-text-muted"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          {entry.snapshot?.length ? (
            <section className="rounded-lg border border-border-subtle/70 bg-surface/60 p-6 sm:p-7">
              <p className={notebookLabelClassName}>At a glance</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {entry.snapshot.map((item) => (
                  <div key={item.label}>
                    <p className={notebookLabelClassName}>{item.label}</p>
                    <p className="mt-2 leading-7 text-text-secondary">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {entry.sourceLinks?.length ? (
            <section className="rounded-lg border border-border-subtle/70 bg-surface/60 p-6 sm:p-7">
              <p className={notebookLabelClassName}>Source links</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {entry.sourceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border-subtle/70 bg-background/20 p-5 transition-colors duration-200 motion-reduce:transition-none hover:border-accent-copper/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
                  >
                    <span className="text-base font-semibold text-foreground">
                      {link.label}
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-text-secondary">
                      {link.kind === "github"
                        ? "Public GitHub repository for the approved source material."
                        : "Approved external source material."}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-beige">
                      Open source
                      <span aria-hidden="true">-&gt;</span>
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
            <section className="rounded-lg border border-border-subtle/70 bg-surface/60 p-6 sm:p-7">
              <p className={notebookLabelClassName}>Technology stack</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {entry.technologyGroups.map((group) => (
                  <article
                    key={group.category}
                    className="rounded-lg border border-border-subtle/70 bg-background/20 p-5"
                  >
                    <h2 className="text-lg font-semibold text-foreground">
                      {group.category}
                    </h2>
                    <div className="mt-4 grid gap-3">
                      {group.items.map((item) => (
                        <div key={item.name}>
                          <p className="text-sm font-semibold text-accent-beige">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-text-secondary">
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
            <section className="rounded-lg border border-border-subtle/70 bg-surface/60 p-6 sm:p-7">
              <p className={notebookLabelClassName}>Application profiles</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {entry.applicationProfiles.map((profile) => (
                  <article
                    key={profile.title}
                    className="rounded-lg border border-border-subtle/70 bg-background/20 p-5"
                  >
                    <h2 className="text-lg font-semibold text-foreground">
                      {profile.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {profile.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {entry.sections.length ? (
            <article className="mx-auto grid w-full max-w-[900px] gap-9">
              {entry.sections.map((section) => (
                <NotebookSection key={section.id} section={section} />
              ))}

              {entry.limitations?.length ? (
                <section className="border-t border-border-subtle/70 pt-9">
                  <h2 className="text-2xl leading-tight font-semibold text-foreground">
                    Limitations
                  </h2>
                  <ul className="mt-5 grid list-disc gap-3 pl-6 text-base leading-8 text-text-secondary marker:text-accent-copper">
                    {entry.limitations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {entry.nextSteps?.length ? (
                <section className="border-t border-border-subtle/70 pt-9">
                  <h2 className="text-2xl leading-tight font-semibold text-foreground">
                    Next steps
                  </h2>
                  <ul className="mt-5 grid list-disc gap-3 pl-6 text-base leading-8 text-text-secondary marker:text-accent-copper">
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
              <p className="mt-4 leading-7 text-text-secondary">
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
