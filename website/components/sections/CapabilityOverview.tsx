import { CapabilityCard } from "@/components/cards/CapabilityCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductArchitectureImagePanel } from "@/components/visual/ProductArchitectureImagePanel";
import { capabilities, capabilityOverview } from "@/data/homeContent";
import { canExposeStoryPage, getStoryBySlug } from "@/data/stories";
import { routes } from "@/lib/routes";

export function CapabilityOverview() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
          <div>
            <SectionHeader
              eyebrow={capabilityOverview.eyebrow}
              title={capabilityOverview.title}
              description={capabilityOverview.description}
            />
          </div>

          <div>
            <ProductArchitectureImagePanel />
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => {
            const linkedStory = capability.evidenceLink
              ? getStoryBySlug(capability.evidenceLink.storySlug)
              : undefined;
            const href =
              linkedStory &&
              capability.evidenceLink &&
              canExposeStoryPage(linkedStory)
                ? routes.story(capability.evidenceLink.storySlug)
                : routes.stories;

            return (
              <CapabilityCard
                key={capability.title}
                {...capability}
                href={href}
                linkLabel={
                  capability.evidenceLink
                    ? `See ${capability.title} in ${capability.evidenceLink.destinationLabel}`
                    : `See ${capability.title} in the Stories archive`
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
