import { philosophyPoints } from "@/data/home";

export function EngineeringPhilosophy() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
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
            Good engineering is not only about building a working prototype. It
            is about choosing architectures, interfaces, constraints, and
            trade-offs that can survive manufacturing, deployment, maintenance,
            and business reality.
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
    </section>
  );
}
