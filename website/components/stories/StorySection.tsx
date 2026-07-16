import Image from "next/image";
import type { StorySection as StorySectionType } from "@/types/story";

const imageAspectClassNames = {
  landscape: "relative aspect-[4/3]",
  portrait: "relative aspect-[3/4]",
  wide: "relative aspect-[16/9]",
  tall: "relative aspect-[9/16]",
} as const;

export function StorySection({ section }: { section: StorySectionType }) {
  const hasBody = section.body && section.body.length > 0;
  const hasOrderedItems = section.orderedItems && section.orderedItems.length > 0;
  const hasBullets = section.bullets && section.bullets.length > 0;
  const hasClosingBody = section.closingBody && section.closingBody.length > 0;
  const hasQuote = Boolean(section.quote);
  const hasImages = section.images && section.images.length > 0;
  const imageGridClass =
    section.images && section.images.length > 1
      ? "mt-8 grid gap-4 sm:grid-cols-2"
      : "mt-8 grid gap-4";

  if (
    !hasBody &&
    !hasOrderedItems &&
    !hasBullets &&
    !hasClosingBody &&
    !hasQuote &&
    !hasImages
  ) {
    return null;
  }

  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-border-subtle/70 pt-10 sm:scroll-mt-32"
    >
      <h2 className="text-2xl leading-tight font-semibold text-foreground">
        {section.title}
      </h2>

      {hasBody ? (
        <div className="readable-copy mt-5 grid gap-5 text-base">
          {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      ) : null}

      {hasOrderedItems ? (
        <ol className="readable-copy mt-5 grid list-decimal gap-3 pl-6 text-base marker:text-accent-copper">
          {section.orderedItems?.map((item) => <li key={item}>{item}</li>)}
        </ol>
      ) : null}

      {hasBullets ? (
        <ul className="readable-copy mt-5 grid list-disc gap-3 pl-6 text-base marker:text-accent-copper">
          {section.bullets?.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}

      {hasClosingBody ? (
        <div className="readable-copy mt-5 grid gap-5 text-base">
          {section.closingBody?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {hasQuote ? (
        <blockquote className="mt-6 border-l-2 border-accent-copper/80 pl-5 text-base leading-8 text-foreground">
          <p>{section.quote}</p>
        </blockquote>
      ) : null}

      {hasImages ? (
        <div className={imageGridClass}>
          {section.images?.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/65"
            >
              <div
                className={
                  imageAspectClassNames[image.aspect ?? "landscape"]
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
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
