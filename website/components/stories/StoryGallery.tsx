import Image from "next/image";
import type { StoryImage } from "@/types/story";

export function StoryGallery({ images }: { images?: StoryImage[] }) {
  if (!images?.length) {
    return null;
  }

  return (
    <section className="border-t border-border-subtle/70 pt-10">
      <h2 className="text-2xl leading-tight font-semibold text-foreground">
        Gallery
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/65"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
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
    </section>
  );
}
