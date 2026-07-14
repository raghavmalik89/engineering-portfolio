"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { StoryVideoMedia } from "@/types/story";

type StoryHeroMediaProps = {
  media: StoryVideoMedia;
};

export function StoryHeroMedia({ media }: StoryHeroMediaProps) {
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);
  const objectPosition =
    media.objectPosition ?? media.fallbackImage.objectPosition ?? "center center";

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function updateVideoPreference() {
      setShouldRenderVideo(desktopQuery.matches && !reducedMotionQuery.matches);
    }

    updateVideoPreference();
    desktopQuery.addEventListener("change", updateVideoPreference);
    reducedMotionQuery.addEventListener("change", updateVideoPreference);

    return () => {
      desktopQuery.removeEventListener("change", updateVideoPreference);
      reducedMotionQuery.removeEventListener("change", updateVideoPreference);
    };
  }, []);

  return (
    <figure className="overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/65">
      <div className="relative aspect-[4/3]">
        {shouldRenderVideo ? (
          <video
            aria-hidden="true"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={media.poster}
            className="block h-full w-full object-cover"
            style={{ objectPosition }}
          >
            <source src={media.src} type="video/webm" />
          </video>
        ) : (
          <Image
            src={media.fallbackImage.src}
            alt={media.fallbackImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        )}
      </div>
      {media.fallbackImage.caption ? (
        <figcaption className="border-t border-border-subtle/70 px-4 py-3 text-sm leading-6 text-text-muted">
          {media.fallbackImage.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
