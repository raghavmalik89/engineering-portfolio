"use client";

import Image from "next/image";
import { useState } from "react";

const productArchitectureImage =
  "/images/home/product-architecture/selected.webp";

export function ProductArchitectureImagePanel() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border-subtle/70 bg-background shadow-[0_18px_56px_rgba(0,0,0,0.14)] sm:aspect-video lg:min-h-[380px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(216,184,106,0.14),transparent_34%),linear-gradient(135deg,rgba(230,215,190,0.04),transparent_42%),linear-gradient(180deg,rgba(8,19,33,0.2),rgba(8,19,33,0.84))]"
      />

      {!imageFailed ? (
        <Image
          src={productArchitectureImage}
          alt="Engineering field, lab, or product architecture visual for Industrial IoT and mechatronic system work."
          fill
          priority={false}
          sizes="(min-width: 1024px) 600px, calc(100vw - 48px)"
          className={`object-cover saturate-[0.76] contrast-[0.94] transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onError={() => setImageFailed(true)}
          onLoad={() => setImageLoaded(true)}
        />
      ) : null}

      {imageLoaded && !imageFailed ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,33,0.05),rgba(8,19,33,0.4)),radial-gradient(circle_at_84%_18%,rgba(216,184,106,0.14),transparent_34%)]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-end justify-between gap-4 p-6"
        >
          <span className="font-mono text-[10px] tracking-[0.18em] text-accent-copper/75 uppercase">
            Field / Lab / Product Image
          </span>
          <span className="h-px flex-1 bg-accent-copper/20" />
        </div>
      )}
    </div>
  );
}
