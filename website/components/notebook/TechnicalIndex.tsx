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
};

export function TechnicalIndex({
  items,
  entries,
  activeTechnology,
  activeEntrySlug,
  onTechnologyToggle,
  onTechnologyHover,
  onClearHover,
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
    : activeEntry
      ? [activeEntry]
      : [];

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <section className="rounded-lg border border-border-subtle/70 bg-surface/70 p-5 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
        <p className="font-mono text-xs tracking-[0.18em] text-accent-copper uppercase">
          Technical Index
        </p>
        <h2 className="mt-3 text-xl leading-tight font-semibold text-foreground">
          Technologies and methods
        </h2>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Technologies, tools and engineering methods represented across the
          Notebook.
        </p>

        <div className="mt-5 grid gap-2">
          {items.map((item) => {
            const isActive =
              item.name === activeTechnology ||
              Boolean(activeEntry && activeEntry.technologies.includes(item.name));
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
                    ? "border-accent-copper/75 bg-surface-elevated/80"
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

        {detailEntries.length ? (
          <div className="mt-6 rounded-md border border-border-subtle/70 bg-background/20 p-4">
            <p className="font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-accent-copper uppercase">
              Active context
            </p>
            <div className="mt-3 grid gap-3">
              {detailEntries.map((entry) => (
                <div key={entry.slug}>
                  <p className="text-sm font-semibold text-foreground">
                    {entry.shortTitle}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-text-muted">
                    {entry.entryType}
                    {entry.period ? ` · ${entry.period}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </aside>
  );
}
