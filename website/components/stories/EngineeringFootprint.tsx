import Image from "next/image";
import type { FootprintLocation, Story } from "@/types/story";

type EngineeringFootprintProps = {
  locations: FootprintLocation[];
  stories: Story[];
  activeLocationCode?: string;
  activeStorySlug?: string;
  onLocationToggle: (code: string) => void;
  onLocationHover: (code: string) => void;
  onClearHover: () => void;
};

function formatLocation(location: FootprintLocation) {
  const details = [location.stateOrRegion, location.city].filter(Boolean);
  return details.length
    ? `${location.countryName} — ${details.join(", ")}`
    : location.countryName;
}

export function EngineeringFootprint({
  locations,
  stories,
  activeLocationCode,
  activeStorySlug,
  onLocationToggle,
  onLocationHover,
  onClearHover,
}: EngineeringFootprintProps) {
  const activeLocation = locations.find(
    (location) => location.code === activeLocationCode,
  );
  const visibleStorySlugs = new Set(stories.map((story) => story.slug));

  const hasActiveStory = Boolean(activeStorySlug);

  return (
    <aside className="self-start lg:sticky lg:top-10">
      <section className="rounded-lg border border-border-subtle/70 bg-surface/65 p-5 sm:p-6 lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto">
        <p className="font-mono text-xs tracking-[0.18em] text-accent-copper uppercase">
          Engineering Footprint
        </p>
        <h2 className="mt-4 text-2xl leading-tight font-semibold text-foreground">
          Field, training and deployment contexts
        </h2>
        <p className="mt-4 leading-7 text-text-secondary">
          Country relationships are shown with their names and activity context.
          Provisional items are kept separate from confirmed project claims.
        </p>

        <div className="mt-6 grid gap-2">
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
                    <span className="block truncate font-semibold">
                      {formatLocation(location)}
                    </span>
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

        <div className="mt-6 rounded-lg border border-border-subtle/70 bg-background/25 p-4">
          {activeLocation ? (
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {formatLocation(activeLocation)}
              </h3>
              {activeLocation.relatedCompanyNames.length ? (
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  Company context: {activeLocation.relatedCompanyNames.join(", ")}
                </p>
              ) : null}
              {activeLocation.relatedProjectSlugs.some((slug) =>
                visibleStorySlugs.has(slug),
              ) ? (
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  Related projects:{" "}
                  {activeLocation.relatedProjectSlugs
                    .filter((slug) => visibleStorySlugs.has(slug))
                    .map(
                      (slug) =>
                        stories.find((story) => story.slug === slug)?.shortTitle ??
                        slug,
                    )
                    .join(", ")}
                </p>
              ) : null}
              {activeLocation.contextTypes.length ? (
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  Context: {activeLocation.contextTypes.join(", ")}
                </p>
              ) : null}
              {activeLocation.engagementMode ? (
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  Engagement: {activeLocation.engagementMode}
                </p>
              ) : null}
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-text-muted">
                {activeLocation.activityLabels.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
              {activeLocation.note ? (
                <p className="mt-3 text-xs leading-5 text-text-muted">
                  {activeLocation.note}
                </p>
              ) : null}
            </div>
          ) : (
            <p className="text-sm leading-6 text-text-muted">
              Select a country or project to show related activity. Project
              cards remain readable when unrelated.
            </p>
          )}
        </div>
      </section>
    </aside>
  );
}
