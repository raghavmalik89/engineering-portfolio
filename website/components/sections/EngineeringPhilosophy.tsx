import { PhilosophyImagePanel } from "@/components/visual/PhilosophyImagePanel";

const philosophyPoints = [
  "Architect for the operating environment.",
  "Keep interfaces clear, robust, and maintainable.",
  "Validate assumptions before they become costly.",
  "Balance technical depth with product reality.",
];

export function EngineeringPhilosophy() {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-20 sm:px-8 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
              Engineering philosophy
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-foreground sm:text-4xl">
              Good engineering survives the handoff from prototype to reality.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg leading-8 text-text-secondary">
              A prototype proves that something can work. Product architecture
              proves whether it can keep working across manufacturing,
              deployment, maintenance, and real operating conditions.
            </p>
            <ul className="mt-8 grid gap-3">
              {philosophyPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-lg border border-border-subtle/60 bg-surface/50 p-4 text-text-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-copper" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PhilosophyImagePanel />
      </div>
    </section>
  );
}
