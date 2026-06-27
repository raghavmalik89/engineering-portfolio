import { CapabilityCard } from "@/components/cards/CapabilityCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { capabilities } from "@/data/home";

export function CapabilityOverview() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Capability overview"
          title="Engineering capability across device, radio, product, and field constraints."
          description="The work spans technical implementation and system-level judgment: what should be built, how it should interface, and what it must survive after deployment."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              description={capability.description}
              icon={capability.icon}
              title={capability.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
