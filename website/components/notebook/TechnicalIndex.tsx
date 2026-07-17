import type { ReactNode } from "react";
import type { NotebookEntry } from "@/types/notebook";

type TechnicalIndexItem = {
  name: string;
  entrySlugs: string[];
};

type TechnicalIndexProps = {
  items: TechnicalIndexItem[];
  entries: NotebookEntry[];
  activeTechnology?: string;
  activeEntrySlug?: string;
  onTechnologyToggle: (technology: string) => void;
  onTechnologyHover: (technology: string) => void;
  onClearHover: () => void;
  onClearSelection: () => void;
};

type GroupedItem = TechnicalIndexItem & {
  purpose?: string;
};

function primaryItems(items: string[], limit = 3) {
  const visible = items.slice(0, limit);
  const hiddenCount = Math.max(items.length - visible.length, 0);

  return { visible, hiddenCount };
}

function itemPurpose(entries: NotebookEntry[], technology: string) {
  for (const entry of entries) {
    for (const group of entry.technologyGroups ?? []) {
      const item = group.items.find((candidate) => candidate.name === technology);

      if (item?.purpose) {
        return item.purpose;
      }
    }
  }

  return undefined;
}

function groupedItems(items: TechnicalIndexItem[], entries: NotebookEntry[]) {
  const byName = new Map(items.map((item) => [item.name, item]));
  const used = new Set<string>();
  const groups: Array<{ category: string; items: GroupedItem[] }> = [];

  for (const entry of entries) {
    for (const group of entry.technologyGroups ?? []) {
      const groupItems = group.items
        .map((item): GroupedItem | undefined => {
          const indexItem = byName.get(item.name);

          if (!indexItem) {
            return undefined;
          }

          used.add(item.name);
          return { ...indexItem, purpose: item.purpose };
        })
        .filter((item): item is GroupedItem => Boolean(item));

      if (!groupItems.length) {
        continue;
      }

      const existing = groups.find(
        (candidate) => candidate.category === group.category,
      );

      if (existing) {
        existing.items.push(
          ...groupItems.filter(
            (item) =>
              !existing.items.some((candidate) => candidate.name === item.name),
          ),
        );
      } else {
        groups.push({ category: group.category, items: groupItems });
      }
    }
  }

  const uncategorised = items.filter((item) => !used.has(item.name));

  if (uncategorised.length) {
    groups.push({
      category: "Additional technologies",
      items: uncategorised,
    });
  }

  return groups.map((group) => ({
    ...group,
    items: [...group.items].sort((a, b) => a.name.localeCompare(b.name)),
  }));
}

export function TechnicalIndex({
  items,
  entries,
  activeTechnology,
  activeEntrySlug,
  onTechnologyToggle,
  onTechnologyHover,
  onClearHover,
  onClearSelection,
}: TechnicalIndexProps) {
  const activeEntry = activeEntrySlug
    ? entries.find((entry) => entry.slug === activeEntrySlug)
    : undefined;

  const activeItem = activeTechnology
    ? items.find((item) => item.name === activeTechnology)
    : undefined;

  const detailEntries = activeItem
    ? activeItem.entrySlugs
        .map((slug) => entries.find((entry) => entry.slug === slug))
        .filter((entry): entry is NotebookEntry => Boolean(entry))
    : [];
  const groups = groupedItems(items, entries);

  return (
    <aside className="technical-index-sidebar">
      <section className="portfolio-scrollbar rounded-lg border border-border-subtle/70 bg-surface/70 p-5 [@media_(min-width:1024px)_and_(min-height:860px)]:max-h-[calc(100vh-7rem)] [@media_(min-width:1024px)_and_(min-height:860px)]:overflow-y-auto">
        <p className="font-mono text-xs tracking-[0.18em] text-accent-copper uppercase">
          Technical Index
        </p>

        {activeItem ? (
          <TechnologyInspector
            technology={activeItem.name}
            purpose={itemPurpose(entries, activeItem.name)}
            entries={detailEntries}
            onClearSelection={onClearSelection}
          />
        ) : activeEntry ? (
          <EntryInspector
            entry={activeEntry}
            onClearSelection={onClearSelection}
          />
        ) : (
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Select a technology or Notebook project to explore its engineering
            context.
          </p>
        )}

        <div className="mt-5 grid gap-5">
          {groups.map((group) => (
            <div key={group.category}>
              <h2 className="font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-text-muted uppercase">
                {group.category}
              </h2>
              <div className="mt-2 grid gap-2">
                {group.items.map((item) => {
                  const isActive =
                    item.name === activeTechnology ||
                    Boolean(
                      activeEntry && activeEntry.technologies.includes(item.name),
                    );
                  const isSubdued =
                    Boolean(activeTechnology || activeEntry) && !isActive;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      aria-pressed={item.name === activeTechnology}
                      onClick={() => onTechnologyToggle(item.name)}
                      onMouseEnter={() => onTechnologyHover(item.name)}
                      onMouseLeave={onClearHover}
                      onFocus={() => onTechnologyHover(item.name)}
                      onBlur={onClearHover}
                      className={[
                        "flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-left transition duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-copper",
                        isActive
                          ? "border-accent-copper/75 bg-surface-elevated/80 shadow-[inset_0_0_0_1px_rgba(216,184,106,0.12)]"
                          : "border-border-subtle/70 bg-background/15 hover:border-accent-copper/55",
                        isSubdued ? "opacity-60" : "opacity-100",
                      ].join(" ")}
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="font-mono text-xs text-accent-copper">
                        {item.entrySlugs.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

function TechnologyInspector({
  technology,
  purpose,
  entries,
  onClearSelection,
}: {
  technology: string;
  purpose?: string;
  entries: NotebookEntry[];
  onClearSelection: () => void;
}) {
  const relatedTechnologies = primaryItems(
    [
      ...new Set(
        entries
          .flatMap((entry) => entry.technologies)
          .filter((item) => item !== technology),
      ),
    ],
  );
  const evidence = entries
    .map((entry) => entry.inspector?.technologyEvidence?.[technology])
    .find((item): item is string => Boolean(item));

  return (
    <div className="mt-4 rounded-lg border border-accent-copper/55 bg-surface-elevated/80 p-4">
      <InspectorHeader
        title={technology}
        onClearSelection={onClearSelection}
      />

      <InspectorBlock label="Engineering use">
        <p className="text-sm leading-6 text-text-secondary">
          {purpose ??
            "A practical engineering technology represented in the published Notebook archive."}
        </p>
      </InspectorBlock>

      <InspectorBlock label="Proven in">
        {entries.length ? (
          <div className="grid gap-2">
            {entries.map((entry) => (
              <div
                key={entry.slug}
                className="rounded-md border border-border-subtle/70 bg-background/20 px-3 py-2 text-sm text-foreground"
              >
                <span className="font-semibold">{entry.shortTitle}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm leading-6 text-text-muted">
            No published Notebook entry is currently linked to this context.
          </p>
        )}
      </InspectorBlock>

      {evidence ? (
        <InspectorBlock label="Evidence">
          <p className="text-sm leading-6 text-text-secondary">{evidence}</p>
        </InspectorBlock>
      ) : null}

      {relatedTechnologies.visible.length ? (
        <InspectorPills
          label="Related technologies"
          items={relatedTechnologies}
        />
      ) : null}

    </div>
  );
}

function EntryInspector({
  entry,
  onClearSelection,
}: {
  entry: NotebookEntry;
  onClearSelection: () => void;
}) {
  const inspector = entry.inspector;

  return (
    <div className="mt-4 rounded-lg border border-accent-copper/55 bg-surface-elevated/80 p-4">
      <InspectorHeader
        eyebrow={entry.entryType}
        title={inspector?.title ?? entry.shortTitle}
        onClearSelection={onClearSelection}
      />

      <InspectorBlock label={inspector?.evidenceLabel ?? "Demonstrated"}>
        {inspector?.evidence.length ? (
          <EvidenceRows items={inspector.evidence.slice(0, 3)} />
        ) : (
          <EvidenceRows items={entry.methods?.slice(0, 3) ?? []} />
        )}
      </InspectorBlock>

      <InspectorBlock label={inspector?.currentLabel ?? "Current state"}>
        <p className="text-sm leading-6 text-text-secondary">
          {inspector?.currentFocus ??
            "See the full Notebook entry for the current engineering state."}
        </p>
      </InspectorBlock>
    </div>
  );
}

function InspectorHeader({
  eyebrow,
  title,
  onClearSelection,
}: {
  eyebrow?: string;
  title: string;
  onClearSelection: () => void;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
      <div className="min-w-0">
        {eyebrow ? (
          <p className="font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-accent-copper uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={[
            "text-lg leading-snug font-semibold text-foreground",
            eyebrow ? "mt-2" : "",
          ].join(" ")}
        >
          {title}
        </h2>
      </div>
      <button
        type="button"
        onClick={onClearSelection}
        aria-label="Clear Technical Index selection"
        className="shrink-0 text-sm font-semibold text-text-secondary underline decoration-accent-copper/35 underline-offset-4 transition-colors duration-200 hover:text-accent-beige hover:decoration-accent-copper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
      >
        Clear
      </button>
    </div>
  );
}

function EvidenceRows({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-6 text-text-secondary">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-copper shadow-[0_0_0_3px_rgba(216,184,106,0.12)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InspectorBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-4">
      <p className="font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-accent-copper uppercase">
        {label}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function InspectorPills({
  label,
  items,
}: {
  label: string;
  items: { visible: string[]; hiddenCount: number };
}) {
  return (
    <InspectorBlock label={label}>
      <div className="flex flex-wrap gap-2">
        {items.visible.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border-subtle/70 px-2.5 py-1 text-xs text-text-secondary"
          >
            {item}
          </span>
        ))}
        {items.hiddenCount > 0 ? (
          <span className="rounded-full border border-border-subtle/70 px-2.5 py-1 text-xs font-semibold text-text-secondary">
            +{items.hiddenCount}
          </span>
        ) : null}
      </div>
    </InspectorBlock>
  );
}
