import Image from "next/image";
import type { NotebookSection as NotebookSectionType } from "@/types/notebook";

const imageAspectClassNames = {
  landscape: "relative aspect-[4/3]",
  portrait: "relative aspect-[3/4]",
  wide: "relative aspect-[16/9]",
  tall: "relative aspect-[9/16]",
} as const;

export function NotebookSection({ section }: { section: NotebookSectionType }) {
  const hasBody = section.body && section.body.length > 0;
  const hasBullets = section.bullets && section.bullets.length > 0;
  const hasObservations =
    section.observations && section.observations.length > 0;
  const hasDecisions = section.decisions && section.decisions.length > 0;
  const hasMilestones = section.milestones && section.milestones.length > 0;
  const hasCodeSnippets =
    section.codeSnippets && section.codeSnippets.length > 0;
  const hasImages = section.images && section.images.length > 0;
  const hasCallout = Boolean(section.callout);
  const hasTable = Boolean(section.table);

  if (
    !hasBody &&
    !hasBullets &&
    !hasObservations &&
    !hasDecisions &&
    !hasMilestones &&
    !hasCodeSnippets &&
    !hasImages &&
    !hasCallout &&
    !hasTable
  ) {
    return null;
  }

  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-border-subtle/70 pt-9 sm:scroll-mt-32"
    >
      <h2 className="text-2xl leading-tight font-semibold text-foreground">
        {section.title}
      </h2>

      {hasBody ? (
        <div className="mt-5 grid gap-5 text-base leading-8 text-text-secondary">
          {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      ) : null}

      {hasBullets ? (
        <ul className="mt-5 grid list-disc gap-3 pl-6 text-base leading-8 text-text-secondary marker:text-accent-copper">
          {section.bullets?.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}

      {hasObservations ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.observations?.map((observation) => (
            <div
              key={observation.label}
              className="rounded-lg border border-border-subtle/70 bg-surface/55 p-4"
            >
              <p className="font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-accent-copper uppercase">
                {observation.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {observation.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {hasDecisions ? (
        <div className="mt-6 grid gap-4">
          {section.decisions?.map((decision) => (
            <article
              key={decision.title}
              className="rounded-lg border border-border-subtle/70 bg-background/20 p-5"
            >
              <h3 className="text-base font-semibold text-foreground">
                {decision.title}
              </h3>
              <p className="mt-3 leading-7 text-text-secondary">
                {decision.body}
              </p>
            </article>
          ))}
        </div>
      ) : null}

      {hasMilestones ? (
        <ol className="mt-6 grid gap-4 border-l border-border-subtle/70 pl-5">
          {section.milestones?.map((milestone) => (
            <li key={milestone.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full border border-accent-copper bg-background"
              />
              <h3 className="text-base font-semibold text-foreground">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {milestone.body}
              </p>
            </li>
          ))}
        </ol>
      ) : null}

      {hasCallout ? (
        <aside className="mt-6 rounded-lg border border-accent-copper/40 bg-surface-elevated/65 p-5">
          <p className="font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-accent-copper uppercase">
            {section.callout?.label}
          </p>
          <p className="mt-3 leading-7 text-text-secondary">
            {section.callout?.body}
          </p>
        </aside>
      ) : null}

      {hasTable ? (
        <div className="mt-6 overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/55">
          {section.table?.caption ? (
            <p className="border-b border-border-subtle/70 px-4 py-3 text-sm leading-6 text-text-muted">
              {section.table.caption}
            </p>
          ) : null}
          <div className="overflow-x-auto">
            <table className="min-w-[680px] text-left text-sm">
              <thead className="bg-background/35 text-accent-copper">
                <tr>
                  {section.table?.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3 font-mono text-[0.68rem] font-semibold tracking-[0.14em] uppercase"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle/70">
                {section.table?.rows.map((row) => (
                  <tr key={row.join("|")}>
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="px-4 py-3 leading-6 text-text-secondary"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {hasCodeSnippets ? (
        <div className="mt-6 grid gap-4">
          {section.codeSnippets?.map((snippet) => (
            <figure
              key={`${snippet.label ?? snippet.language ?? "code"}-${snippet.code}`}
              className="overflow-hidden rounded-lg border border-border-subtle/70 bg-background/65"
            >
              {snippet.label ? (
                <figcaption className="border-b border-border-subtle/70 px-4 py-3 font-mono text-xs tracking-[0.12em] text-accent-copper uppercase">
                  {snippet.label}
                </figcaption>
              ) : null}
              <pre className="overflow-x-auto p-4 text-sm leading-6 text-accent-beige">
                <code>{snippet.code}</code>
              </pre>
            </figure>
          ))}
        </div>
      ) : null}

      {hasImages ? (
        <div
          className={
            section.images && section.images.length > 1
              ? "mt-8 grid gap-4 sm:grid-cols-2"
              : "mt-8 grid gap-4"
          }
        >
          {section.images?.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/65"
            >
              <div
                className={imageAspectClassNames[image.aspect ?? "landscape"]}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized={image.src.endsWith(".svg")}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={
                    image.objectFit === "contain"
                      ? "object-contain"
                      : "object-cover"
                  }
                  style={
                    image.objectPosition
                      ? { objectPosition: image.objectPosition }
                      : undefined
                  }
                />
              </div>
              {image.caption ? (
                <figcaption className="border-t border-border-subtle/70 px-4 py-3 text-sm leading-6 text-text-muted">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : null}
    </section>
  );
}
