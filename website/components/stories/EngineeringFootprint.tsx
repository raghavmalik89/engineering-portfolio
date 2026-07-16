import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";
import type { FootprintLocation, Story } from "@/types/story";

type EngineeringFootprintProps = {
  locations: FootprintLocation[];
  stories: Story[];
  activeLocationCode?: string;
  activeStorySlug?: string;
  canLinkStories: boolean;
  onLocationToggle: (code: string) => void;
  onLocationHover: (code: string) => void;
  onClearHover: () => void;
  onClearSelection: () => void;
};

function formatLocation(location: FootprintLocation) {
  const details = [location.stateOrRegion, location.city].filter(Boolean);
  return details.length
    ? `${location.countryName} — ${details.join(", ")}`
    : location.countryName;
}

function getInspectorSummary(story: Story) {
  const summary = story.heroProposition ?? story.heroSummary ?? story.summary;
  const [firstSentence] = summary.split(/(?<=[.!?])\s+/);

  return firstSentence.length > 170
    ? `${firstSentence.slice(0, 167).trim()}...`
    : firstSentence;
}

export function EngineeringFootprint({
  locations,
  stories,
  activeLocationCode,
  activeStorySlug,
  canLinkStories,
  onLocationToggle,
  onLocationHover,
  onClearHover,
  onClearSelection,
}: EngineeringFootprintProps) {
  const activeLocation = locations.find(
    (location) => location.code === activeLocationCode,
  );
  const activeStory = activeStorySlug
    ? stories.find((story) => story.slug === activeStorySlug)
    : undefined;
  const storyBySlug = new Map(stories.map((story) => [story.slug, story]));
  const canExposeStory = (story: Story | undefined) =>
    story ? canLinkStories || story.status === "published" : false;
  const visibleStorySlugs = new Set(
    stories.filter(canExposeStory).map((story) => story.slug),
  );
  const getRelatedStories = (slugs: string[]) =>
    slugs
      .map((slug) => storyBySlug.get(slug))
      .filter((story): story is Story => canExposeStory(story));
  const activeLocationStories = activeLocation
    ? getRelatedStories(activeLocation.relatedProjectSlugs)
    : [];
  const activeStoryLocations = activeStory
    ? locations.filter((location) =>
        location.relatedProjectSlugs.includes(activeStory.slug),
      )
    : [];
  const activeStoryDomains = activeStory?.domains.slice(0, 3) ?? [];
  const activeStoryHiddenDomainCount = activeStory
    ? Math.max(activeStory.domains.length - activeStoryDomains.length, 0)
    : 0;

  const hasActiveStory = Boolean(activeStorySlug);
  const hasProvisionalLocations = locations.some(
    (location) => location.isProvisional,
  );
  const hasConfirmedLocations = locations.some(
    (location) => !location.isProvisional,
  );

  return (
    <aside className="self-start [@media_(min-width:1024px)_and_(min-height:860px)]:sticky [@media_(min-width:1024px)_and_(min-height:860px)]:top-10">
      <section className="portfolio-scrollbar rounded-lg border border-border-subtle/70 bg-surface/65 p-5 sm:p-6 [@media_(min-width:1024px)_and_(min-height:860px)]:max-h-[calc(100vh-5rem)] [@media_(min-width:1024px)_and_(min-height:860px)]:overflow-y-auto">
        <p className="font-mono text-xs tracking-[0.18em] text-accent-copper uppercase">
          Engineering Footprint
        </p>

        {activeLocation || activeStory ? (
          <div className="mt-4 rounded-lg border border-accent-copper/65 bg-surface-elevated/85 p-4 shadow-[0_0_0_1px_rgba(216,184,106,0.12)]">
            {activeLocation ? (
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {formatLocation(activeLocation)}
                    </h3>
                    <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-accent-copper uppercase">
                      {activeLocation.isProvisional
                        ? "Provisional"
                        : "Confirmed"}{" "}
                      field context
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClearSelection}
                    className="shrink-0 text-xs font-semibold text-text-secondary underline decoration-accent-copper/35 underline-offset-4 transition-colors duration-200 hover:text-accent-beige hover:decoration-accent-copper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper motion-reduce:transition-none"
                  >
                    Clear
                  </button>
                </div>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {activeLocation.activityLabels[0]}
                </p>
                <p className="mt-3 text-xs leading-5 text-text-muted">
                  {activeLocationStories.length} published{" "}
                  {activeLocationStories.length === 1 ? "Story" : "Stories"}{" "}
                  linked
                </p>
                {activeLocationStories.length ? (
                  <ul className="mt-3 grid gap-2">
                    {activeLocationStories.map((story) => (
                      <li key={story.slug}>
                        <Link
                          href={routes.story(story.slug)}
                          className="group block rounded-md border border-border-subtle/70 bg-surface/55 px-3 py-2 transition-colors duration-200 hover:border-accent-copper/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper motion-reduce:transition-none"
                        >
                          <span className="block text-sm font-semibold text-foreground underline decoration-accent-copper/30 underline-offset-4 group-hover:text-accent-beige group-hover:decoration-accent-copper/80">
                            {story.shortTitle}
                          </span>
                          <span className="mt-1 block text-xs text-text-secondary">
                            {story.company}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-6 text-text-muted">
                    No published Story is currently linked to this context.
                  </p>
                )}
              </div>
            ) : activeStory ? (
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs tracking-[0.14em] text-accent-copper uppercase">
                      {activeStory.company}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-foreground">
                      {activeStory.shortTitle}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={onClearSelection}
                    className="shrink-0 text-xs font-semibold text-text-secondary underline decoration-accent-copper/35 underline-offset-4 transition-colors duration-200 hover:text-accent-beige hover:decoration-accent-copper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper motion-reduce:transition-none"
                  >
                    Clear
                  </button>
                </div>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {getInspectorSummary(activeStory)}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-semibold tracking-[0.12em] text-accent-copper uppercase">
                    Engineering footprint
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {activeStoryLocations.length
                      ? activeStoryLocations.map(formatLocation).join(" · ")
                      : "No location relationship recorded yet."}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeStoryDomains.map((domain) => (
                    <span
                      key={domain}
                      className="rounded-full border border-border-subtle/70 px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {domain}
                    </span>
                  ))}
                  {activeStoryHiddenDomainCount > 0 ? (
                    <span
                      aria-label={`${activeStoryHiddenDomainCount} additional domains: ${activeStory.domains
                        .slice(3)
                        .join(", ")}`}
                      className="rounded-full border border-border-subtle/70 px-2.5 py-1 text-xs font-semibold text-text-secondary"
                    >
                      +{activeStoryHiddenDomainCount}
                    </span>
                  ) : null}
                </div>

                {canExposeStory(activeStory) ? (
                  <Link
                    href={routes.story(activeStory.slug)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent-copper/35 underline-offset-4 transition-colors duration-200 hover:text-accent-beige hover:decoration-accent-copper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper motion-reduce:transition-none"
                  >
                    Open story
                    <span aria-hidden="true" className="text-accent-copper">
                      -&gt;
                    </span>
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : (
          <p className="mt-4 text-sm leading-6 text-text-muted">
            Select a Story or location to explore its engineering footprint.
          </p>
        )}

        {hasConfirmedLocations && hasProvisionalLocations ? (
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-text-secondary">
            <span className="rounded-full border border-border-subtle/70 px-2.5 py-1">
              Confirmed
            </span>
            <span className="rounded-full border border-border-subtle/70 px-2.5 py-1">
              Provisional
            </span>
          </div>
        ) : null}

        <div className="mt-5 grid gap-2">
          {locations.map((location) => {
            const visibleRelatedProjectSlugs =
              location.relatedProjectSlugs.filter((slug) =>
                visibleStorySlugs.has(slug),
              );
            const isProjectRelated = activeStorySlug
              ? location.relatedProjectSlugs.includes(activeStorySlug)
              : false;
            const isActive = activeLocationCode === location.code || isProjectRelated;
            const isSubdued = hasActiveStory && !isProjectRelated;

            return (
              <button
                key={location.code}
                type="button"
                aria-pressed={activeLocationCode === location.code}
                aria-label={`${formatLocation(location)} footprint details`}
                onClick={() => onLocationToggle(location.code)}
                onMouseEnter={() => onLocationHover(location.code)}
                onMouseLeave={onClearHover}
                onFocus={() => onLocationHover(location.code)}
                onBlur={onClearHover}
                className={[
                  "flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border px-3 py-2 text-left transition duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper",
                  isActive
                    ? "border-accent-copper/80 bg-surface-elevated/80 text-foreground"
                    : "border-border-subtle/70 bg-background/20 text-text-secondary hover:border-accent-copper/60",
                  isSubdued ? "opacity-60" : "opacity-100",
                ].join(" ")}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Image
                    src={location.flagPath}
                    alt={location.flagAlt}
                    width={32}
                    height={20}
                    unoptimized
                    className="h-5 w-auto shrink-0 rounded-[2px]"
                  />
                  <span className="min-w-0">
                    <span className="block whitespace-normal break-words font-semibold leading-snug">
                      {formatLocation(location)}
                    </span>
                    {activeLocationCode === location.code ? (
                      <span className="block font-mono text-[10px] tracking-[0.14em] text-accent-copper uppercase">
                        Selected
                      </span>
                    ) : null}
                    {location.isProvisional ? (
                      <span className="block text-xs text-text-muted">
                        Provisional
                      </span>
                    ) : null}
                  </span>
                </span>
                <span className="font-mono text-xs text-text-muted">
                  {visibleRelatedProjectSlugs.length}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
