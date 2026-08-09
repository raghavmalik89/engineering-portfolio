import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CapabilityOverview } from "@/components/sections/CapabilityOverview";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeCallToAction } from "@/components/sections/HomeCallToAction";
import { site } from "@/data/site";

const homeDescription =
  "Engineering leadership across complex physical products, industrial IoT, aerospace electronics and medical systems, from architecture and technical recovery through supplier delivery, customer deployment, validation and handover.";

export const metadata: Metadata = {
  title: {
    absolute: "Raghav Malik | Product Systems Architect & Technical Lead",
  },
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raghav Malik | Product Systems Architect & Technical Lead",
    description: homeDescription,
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
    title: "Raghav Malik | Product Systems Architect & Technical Lead",
    description: homeDescription,
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
