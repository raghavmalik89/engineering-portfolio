import Image from "next/image";
import type { StorySection as StorySectionType } from "@/types/story";

export function StorySection({ section }: { section: StorySectionType }) {
  const hasBody = section.body && section.body.length > 0;
  const hasImages = section.images && section.images.length > 0;
  const imageGridClass =
    section.images && section.images.length > 1
      ? "mt-8 grid gap-4 sm:grid-cols-2"
      : "mt-8 grid gap-4";

  if (!hasBody && !hasImages) {
    return null;
  }

  return (
    <section className="border-t border-border-subtle/70 pt-10">
      <h2 className="text-2xl leading-tight font-semibold text-foreground">
        {section.title}
      </h2>

      {hasBody ? (
        <div className="mt-5 grid gap-5 text-base leading-8 text-text-secondary">
          {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
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
                  image.aspect === "portrait"
                    ? "relative aspect-[3/4]"
                    : "relative aspect-[4/3]"
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
