"use client";

import Image from "next/image";
import { useState } from "react";

const philosophyImage = "/images/philosophy/selected.svg";

export function PhilosophyImagePanel() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative mt-14 aspect-[40/17] min-h-[220px] overflow-hidden rounded-lg border border-border-subtle/50 bg-surface/20 sm:min-h-[300px] lg:mt-16 lg:min-h-[520px] lg:max-h-[680px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(216,184,106,0.08),transparent_42%),linear-gradient(135deg,rgba(230,215,190,0.025),transparent_48%),linear-gradient(180deg,rgba(8,19,33,0.08),rgba(8,19,33,0.46))]"
      />

      {!imageFailed ? (
        <Image
          src={philosophyImage}
          alt="Engineering architecture decision loop blueprint"
          fill
          sizes="(min-width: 1024px) 1120px, calc(100vw - 48px)"
          className={`object-contain p-2 transition-opacity duration-300 sm:p-3 lg:p-4 ${
            imageLoaded ? "opacity-90" : "opacity-0"
          }`}
          onError={() => setImageFailed(true)}
          onLoad={() => setImageLoaded(true)}
        />
      ) : null}

      {!imageLoaded || imageFailed ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-end justify-between gap-4 p-6"
        >
          <span className="font-mono text-[10px] tracking-[0.18em] text-accent-copper/70 uppercase">
            Architecture Blueprint
          </span>
          <span className="h-px flex-1 bg-accent-copper/20" />
        </div>
      ) : null}
    </div>
  );
}
