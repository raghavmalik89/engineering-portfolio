import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CapabilityOverview } from "@/components/sections/CapabilityOverview";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeCallToAction } from "@/components/sections/HomeCallToAction";

export const metadata: Metadata = {
  title: "Raghav Malik - Systems Architect & Product Engineer",
  description:
    "Systems architecture, embedded electronics, RF communications, industrial IoT, and field-deployed product engineering across mining, aerospace, robotics, and medical accelerator environments.",
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
