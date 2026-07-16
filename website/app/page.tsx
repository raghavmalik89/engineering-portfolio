import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CapabilityOverview } from "@/components/sections/CapabilityOverview";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeCallToAction } from "@/components/sections/HomeCallToAction";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: site.defaultTitle,
  },
  description:
    "Product systems architecture, technical leadership and end-to-end engineering delivery across Industrial IoT, RF communications, electronics, mechatronics, mining technology, aerospace and complex physical products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.defaultTitle,
    description: site.description,
    url: "/",
    images: [
      {
        url: site.defaultSocialImage.src,
        alt: site.defaultSocialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.description,
    images: [site.defaultSocialImage.src],
  },
};

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <CapabilityOverview />
      <EngineeringPhilosophy />
      <HomeCallToAction />
    </PageShell>
  );
}
