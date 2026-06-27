import { ButtonLink } from "@/components/common/ButtonLink";
import { heroContent } from "@/data/home";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-32">
      <div className="lg:col-span-6">
        <p className="font-mono text-xs tracking-[0.22em] text-accent-copper uppercase">
          {heroContent.eyebrow}
        </p>
        <h1 className="mt-8 max-w-[760px] text-5xl leading-[1.04] font-medium text-foreground sm:text-6xl lg:text-7xl">
          {heroContent.headline}
        </h1>
        <p className="mt-8 max-w-[740px] text-lg leading-8 text-text-secondary">
          {heroContent.body}
        </p>
        <p className="mt-6 max-w-[640px] border-l border-accent-copper/60 pl-4 text-sm leading-7 text-text-muted">
          {heroContent.context}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={heroContent.secondaryCta.href} variant="secondary">
            {heroContent.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="relative rounded-lg border border-border-subtle/80 bg-surface/45 p-4 shadow-[0_18px_56px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg bg-[radial-gradient(circle_at_78%_18%,rgba(200,179,138,0.14),transparent_40%),linear-gradient(135deg,rgba(230,215,190,0.04),transparent_48%)]"
          />
          <div className="flex items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <p className="font-mono text-xs tracking-[0.16em] text-text-muted uppercase">
              Future engineering image
            </p>
            <p className="font-mono text-xs text-accent-copper">
              PCB / Field / Diagram
            </p>
          </div>

          <div
            aria-label="Placeholder panel reserved for future real engineering photography or architecture diagrams."
            className="relative mt-8 aspect-[16/11] overflow-hidden rounded-lg border border-border-subtle/80 bg-background"
            role="img"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(200,179,138,0.16),transparent_34%),radial-gradient(circle_at_24%_82%,rgba(230,215,190,0.07),transparent_32%),linear-gradient(145deg,rgba(22,35,56,0.86),rgba(8,19,33,0.92)_52%,rgba(5,12,22,0.98))]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(2,8,16,0.38)_100%)]" />
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-accent-copper"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 420 315"
            >
              <path
                d="M246 78h58l28-22h36M282 196h46l24 22h34M214 250h56l26-24h32"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
              <path
                d="M318 104l24 20h28M236 156l30-26h40"
                stroke="currentColor"
                strokeOpacity="0.1"
                strokeWidth="1"
              />
              <g fill="currentColor">
                <circle cx="218" cy="58" fillOpacity="0.16" r="1.2" />
                <circle cx="248" cy="78" fillOpacity="0.36" r="2.1" />
                <circle cx="288" cy="118" fillOpacity="0.2" r="1.4" />
                <circle cx="306" cy="56" fillOpacity="0.28" r="1.8" />
                <circle cx="344" cy="124" fillOpacity="0.18" r="1.3" />
                <circle cx="366" cy="56" fillOpacity="0.22" r="1.5" />
                <circle cx="388" cy="170" fillOpacity="0.16" r="1.2" />
                <circle cx="282" cy="196" fillOpacity="0.32" r="2" />
                <circle cx="328" cy="218" fillOpacity="0.22" r="1.5" />
                <circle cx="214" cy="250" fillOpacity="0.18" r="1.3" />
                <circle cx="296" cy="226" fillOpacity="0.26" r="1.7" />
                <circle cx="72" cy="72" fillOpacity="0.08" r="1.1" />
                <circle cx="106" cy="138" fillOpacity="0.1" r="1.2" />
                <circle cx="138" cy="224" fillOpacity="0.08" r="1" />
                <circle cx="172" cy="106" fillOpacity="0.1" r="1.1" />
              </g>
            </svg>
            <div className="absolute right-4 top-4 rounded border border-accent-copper/30 bg-background/70 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-accent-copper uppercase">
              Verified asset pending
            </div>
            <div className="absolute left-[10%] top-[16%] h-16 w-28 rounded-lg border border-accent-copper/70 bg-surface-elevated/95 p-3">
              <p className="font-mono text-[10px] text-accent-copper uppercase">
                Sensor node
              </p>
              <p className="mt-2 h-1.5 w-14 bg-text-muted/50" />
            </div>
            <div className="absolute right-[9%] top-[28%] h-20 w-32 rounded-lg border border-border-subtle bg-surface/95 p-3">
              <p className="font-mono text-[10px] text-text-muted uppercase">
                RF link
              </p>
              <p className="mt-3 h-1.5 w-20 bg-accent-copper/60" />
              <p className="mt-2 h-1.5 w-12 bg-text-muted/40" />
            </div>
            <div className="absolute bottom-[14%] left-[27%] h-20 w-36 rounded-lg border border-border-subtle bg-surface/95 p-3">
              <p className="font-mono text-[10px] text-text-muted uppercase">
                Gateway
              </p>
              <p className="mt-3 h-1.5 w-24 bg-text-muted/50" />
              <p className="mt-2 h-1.5 w-16 bg-accent-copper/50" />
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-text-muted">Primary lens</dt>
              <dd className="mt-1 text-foreground">Architecture</dd>
            </div>
            <div>
              <dt className="text-text-muted">Operating context</dt>
              <dd className="mt-1 text-foreground">Field systems</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
