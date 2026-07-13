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

  const activeProjectSlugs = useMemo(() => {
    if (activeLocation) {
      return activeLocation.relatedProjectSlugs;
    }

    return [];
  }, [activeLocation]);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,70%)_minmax(280px,1fr)] lg:items-start">
      <section aria-label="Story projects">
        <StoriesGrid
          stories={stories}
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
      </section>

      <div data-footprint-root>
        <EngineeringFootprint
          locations={locations}
          stories={stories}
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
