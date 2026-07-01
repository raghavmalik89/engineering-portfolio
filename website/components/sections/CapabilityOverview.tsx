import { CapabilityCard } from "@/components/cards/CapabilityCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { capabilities, capabilityOverview } from "@/data/homeContent";

export function CapabilityOverview() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 lg:py-24">
        <SectionHeader
          eyebrow={capabilityOverview.eyebrow}
          title={capabilityOverview.title}
          description={capabilityOverview.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              {...capability}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
