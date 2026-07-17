"use client";

import { useEffect, useMemo, useState } from "react";
import { NotebookCard } from "@/components/notebook/NotebookCard";
import { TechnicalIndex } from "@/components/notebook/TechnicalIndex";
import type { NotebookEntry } from "@/types/notebook";

type ActiveState =
  | { kind: "none" }
  | { kind: "entry"; slug: string; sticky: boolean }
  | { kind: "technology"; name: string; sticky: boolean };

type NotebookExperienceProps = {
  entries: NotebookEntry[];
  canLinkEntries: boolean;
};

export function NotebookExperience({
  entries,
  canLinkEntries,
}: NotebookExperienceProps) {
  const [active, setActive] = useState<ActiveState>({ kind: "none" });

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        (active.kind !== "technology" && active.kind !== "entry") ||
        !active.sticky
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      if (
        !target.closest("[data-technical-index-root]") &&
        !target.closest("[data-notebook-card]")
      ) {
        setActive({ kind: "none" });
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [active]);

  const activeEntry =
    active.kind === "entry"
      ? entries.find((entry) => entry.slug === active.slug)
      : undefined;
  const activeTechnology =
    active.kind === "technology" ? active.name : undefined;
  const inspectableEntries = useMemo(
    () =>
      entries.filter(
        (entry) => canLinkEntries || entry.status === "published",
      ),
    [entries, canLinkEntries],
  );

  const indexItems = useMemo(() => {
    const map = new Map<string, string[]>();

    for (const entry of inspectableEntries) {
      for (const technology of entry.technologies) {
        const slugs = map.get(technology) ?? [];
        slugs.push(entry.slug);
        map.set(technology, slugs);
      }
    }

    return [...map.entries()]
      .map(([name, entrySlugs]) => ({ name, entrySlugs }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [inspectableEntries]);

  const activeEntrySlugs = useMemo(() => {
    if (!activeTechnology) {
      return [];
    }

    return (
      indexItems.find((item) => item.name === activeTechnology)?.entrySlugs ?? []
    );
  }, [activeTechnology, indexItems]);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,70%)_minmax(280px,1fr)] lg:items-start">
      <section aria-label="Notebook entries">
        <div className="grid gap-5 sm:grid-cols-2">
          {entries.map((entry) => {
            const isActive =
              activeEntry?.slug === entry.slug ||
              activeEntrySlugs.includes(entry.slug);
            const isSubdued =
              Boolean(activeTechnology || activeEntry) && !isActive;
            const canLink =
              canLinkEntries || entry.status === "published";

            return (
              <NotebookCard
                key={entry.slug}
                entry={entry}
                isActive={isActive}
                isSubdued={isSubdued}
                canLink={canLink}
                onActivate={(slug) => {
                  if (canLink) {
                    setActive((current) =>
                      (current.kind === "technology" && current.sticky) ||
                      (current.kind === "entry" && current.sticky)
                        ? current
                        : { kind: "entry", slug, sticky: false },
                    );
                  }
                }}
                onSelect={(slug) => {
                  if (canLink) {
                    setActive({ kind: "entry", slug, sticky: true });
                  }
                }}
                onClear={() => {
                  if (
                    (active.kind !== "technology" && active.kind !== "entry") ||
                    !active.sticky
                  ) {
                    setActive({ kind: "none" });
                  }
                }}
              />
            );
          })}
        </div>
      </section>

      <div data-technical-index-root>
        <TechnicalIndex
          items={indexItems}
          entries={inspectableEntries}
          activeTechnology={activeTechnology}
          activeEntrySlug={activeEntry?.slug}
          onTechnologyToggle={(name) => {
            setActive((current) =>
              current.kind === "technology" &&
              current.name === name &&
              current.sticky
                ? { kind: "none" }
                : { kind: "technology", name, sticky: true },
            );
          }}
          onTechnologyHover={(name) =>
            setActive((current) =>
              current.kind === "technology" && current.sticky
                ? current
                : { kind: "technology", name, sticky: false },
            )
          }
          onClearHover={() => {
            setActive((current) =>
              current.kind === "technology" && !current.sticky
                ? { kind: "none" }
                : current,
            );
          }}
          onClearSelection={() => setActive({ kind: "none" })}
        />
      </div>
    </div>
  );
}
