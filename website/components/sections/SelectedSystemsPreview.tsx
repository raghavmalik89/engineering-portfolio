import { ProjectCard } from "@/components/cards/ProjectCard";
import { ButtonLink } from "@/components/common/ButtonLink";
import { SectionHeader } from "@/components/common/SectionHeader";
import { selectedSystems } from "@/data/home";
import { routes } from "@/lib/routes";

export function SelectedSystemsPreview() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Selected systems"
          title="Proof organized as engineering systems, not job entries."
          description="Each preview stays public-safe and focuses on system type, constraints, capability area, and deployment-aware engineering context."
        />
        <ButtonLink
          className="w-fit shrink-0"
          href={routes.selectedSystems}
          variant="secondary"
        >
          View all systems
        </ButtonLink>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {selectedSystems.map((system) => (
          <ProjectCard
            key={system.title}
            context={system.context}
            title={system.title}
            type={system.type}
          />
        ))}
      </div>
    </section>
  );
}
