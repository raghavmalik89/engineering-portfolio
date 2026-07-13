import type { Story } from "@/types/story";
import { storyCompactLabelClassName } from "@/components/stories/storyTypography";

type StoryMetadataProps = {
  story: Story;
  countryNames: string[];
};

export function StoryMetadata({ story, countryNames }: StoryMetadataProps) {
  const metadata = [
    ["Company", story.company],
    ["Role", story.role],
    ["Period", story.period],
    ["Footprint", countryNames.length ? countryNames.join(", ") : undefined],
    ["Domains", story.domains.join(", ")],
    [
      "Technologies",
      story.technologies?.length ? story.technologies.join(", ") : undefined,
    ],
  ].filter((item): item is [string, string] => Boolean(item[1]));
  const snapshot = story.snapshot ?? [];

  return (
    <section aria-label="Project summary" className="grid gap-6">
      <div className="grid gap-px overflow-hidden rounded-lg border border-border-subtle/70 bg-border-subtle/70 sm:grid-cols-2 lg:grid-cols-3">
        {metadata.map(([label, value]) => (
          <div key={label} className="bg-surface/80 p-4">
            <p className={storyCompactLabelClassName}>
              {label}
            </p>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{value}</p>
          </div>
        ))}
      </div>

      {snapshot.length ? (
        <div className="rounded-lg border border-border-subtle/70 bg-surface/60 p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-foreground">
            Project at a glance
          </h2>
          <dl className="mt-5 grid gap-4">
            {snapshot.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 border-t border-border-subtle/70 pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[180px_minmax(0,1fr)]"
              >
                <dt className={storyCompactLabelClassName}>
                  {item.label}
                </dt>
                <dd className="text-sm leading-6 text-text-secondary">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </section>
  );
}
