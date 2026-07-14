"use client";

import { useEffect, useMemo, useState } from "react";
import { EngineeringFootprint } from "@/components/stories/EngineeringFootprint";
import { StoriesGrid } from "@/components/stories/StoriesGrid";
import type { FootprintLocation, Story } from "@/types/story";

type ActiveState =
  | { kind: "none" }
  | { kind: "story"; slug: string }
  | { kind: "location"; code: string; sticky: boolean };

type StoriesExperienceProps = {
  stories: Story[];
  locations: FootprintLocation[];
  canLinkStories: boolean;
};

export function StoriesExperience({
  stories,
  locations,
  canLinkStories,
}: StoriesExperienceProps) {
  const [active, setActive] = useState<ActiveState>({ kind: "none" });

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (active.kind !== "location" || !active.sticky) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      if (!target.closest("[data-footprint-root]")) {
        setActive({ kind: "none" });
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [active]);

  const activeLocation =
    active.kind === "location"
      ? locations.find((location) => location.code === active.code)
      : undefined;

  const activeStory =
    active.kind === "story"
      ? stories.find((story) => story.slug === active.slug)
      : undefined;
  const visibleStories = useMemo(
    () =>
      stories.filter(
        (story) => story.presentation?.showOnStoriesIndex !== false,
      ),
    [stories],
  );
  const visibleStorySlugs = useMemo(
    () => new Set(visibleStories.map((story) => story.slug)),
    [visibleStories],
  );
  const flagshipStories = visibleStories.filter(
    (story) => story.presentation?.indexGroup === "flagship",
  );
  const bradkenProgrammeStories = visibleStories.filter(
    (story) => story.presentation?.indexGroup === "bradken-programmes",
  );

  const activeProjectSlugs = useMemo(() => {
    if (activeLocation) {
      return activeLocation.relatedProjectSlugs.filter((slug) =>
        visibleStorySlugs.has(slug),
      );
    }

    return [];
  }, [activeLocation, visibleStorySlugs]);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,70%)_minmax(280px,1fr)] lg:items-start">
      <section aria-label="Story projects" className="grid gap-10">
        <div>
          <h2 className="text-2xl leading-tight font-semibold text-foreground">
            Flagship Engineering Stories
          </h2>
          <div className="mt-5">
            <StoriesGrid
              stories={flagshipStories}
              activeProjectSlugs={activeProjectSlugs}
              activeStorySlug={activeStory?.slug}
              canLinkStories={canLinkStories}
              onStoryActivate={(slug) => setActive({ kind: "story", slug })}
              onClear={() => {
                if (active.kind !== "location" || !active.sticky) {
                  setActive({ kind: "none" });
                }
              }}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl leading-tight font-semibold text-foreground">
            Additional Bradken R&D and Product Programmes
          </h2>
          <p className="mt-3 max-w-[760px] leading-7 text-text-secondary">
            Selected research, prototype and product-improvement programmes that
            contributed to Bradken&apos;s wider mining-technology portfolio.
          </p>
          <div className="mt-5">
            <StoriesGrid
              stories={bradkenProgrammeStories}
              activeProjectSlugs={activeProjectSlugs}
              activeStorySlug={activeStory?.slug}
              canLinkStories={canLinkStories}
              variant="compact"
              onStoryActivate={(slug) => setActive({ kind: "story", slug })}
              onClear={() => {
                if (active.kind !== "location" || !active.sticky) {
                  setActive({ kind: "none" });
                }
              }}
            />
          </div>
        </div>
      </section>

      <div data-footprint-root>
        <EngineeringFootprint
          locations={locations}
          stories={visibleStories}
          activeLocationCode={activeLocation?.code}
          activeStorySlug={activeStory?.slug}
          onLocationToggle={(code) => {
            setActive((current) =>
              current.kind === "location" &&
              current.code === code &&
              current.sticky
                ? { kind: "none" }
                : { kind: "location", code, sticky: true },
            );
          }}
          onLocationHover={(code) =>
            setActive((current) =>
              current.kind === "location" && current.sticky
                ? current
                : { kind: "location", code, sticky: false },
            )
          }
          onClearHover={() => {
            setActive((current) =>
              current.kind === "location" && !current.sticky
                ? { kind: "none" }
                : current,
            );
          }}
        />
      </div>
    </div>
  );
}
