import { CapabilityCard } from "@/components/cards/CapabilityCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductArchitectureImagePanel } from "@/components/visual/ProductArchitectureImagePanel";
import { internationalDelivery } from "@/data/home";
import { capabilities, capabilityOverview } from "@/data/homeContent";
import { canExposeStoryPage, getStoryBySlug } from "@/data/stories";
import { routes } from "@/lib/routes";

export function CapabilityOverview() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:pt-24 lg:pb-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
          <div>
            <SectionHeader
              eyebrow={capabilityOverview.eyebrow}
              title={capabilityOverview.title}
              description={capabilityOverview.description}
            />
            <section
              aria-labelledby="international-delivery-title"
              className="mt-8 rounded-lg border border-border-subtle/70 bg-surface/50 p-5"
            >
              <p
                id="international-delivery-title"
                className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-accent-copper uppercase"
              >
                {internationalDelivery.eyebrow}
              </p>
              <p className="mt-3 text-lg leading-7 font-semibold text-foreground">
                {internationalDelivery.regions}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {internationalDelivery.context}
              </p>
            </section>
          </div>

          <div>
            <ProductArchitectureImagePanel />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
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
                ctaLabel={capability.evidenceLink?.ctaLabel}
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
