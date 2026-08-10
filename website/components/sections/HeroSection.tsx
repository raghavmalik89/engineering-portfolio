import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { heroContent, leadershipExperience } from "@/data/home";

function LeadershipExperienceMetrics() {
  return (
    <section
      aria-labelledby="leadership-experience-title"
      className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5 pb-6 sm:p-6 sm:pb-7"
    >
      <p
        id="leadership-experience-title"
        className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-accent-copper uppercase"
      >
        Leadership experience
      </p>
      <dl className="mt-5 grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
        {leadershipExperience.map((metric) => (
          <div key={metric.value} className="min-w-0">
            <dt className="text-3xl leading-none font-semibold text-foreground sm:text-4xl">
              {metric.value.toUpperCase()}
            </dt>
            <dd className="mt-3">
              <p className="text-sm leading-6 font-semibold text-accent-beige">
                {metric.label}
              </p>
              <p className="mt-2 text-[0.72rem] leading-5 text-text-secondary">
                {metric.evidence}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8 lg:pt-12 lg:pb-20">
      <div className="lg:col-span-6">
        <p className="font-mono text-xs tracking-[0.22em] text-accent-copper uppercase">
          {heroContent.eyebrow}
        </p>
        <h1 className="mt-8 max-w-[760px] text-[52px] leading-[1.04] font-medium text-foreground sm:text-[64px] lg:text-[66px]">
          {heroContent.headline}
        </h1>
        <p className="readable-copy mt-8 max-w-[740px] text-lg">
          {heroContent.body}
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

      <figure className="lg:col-span-6">
        <div className="relative lg:-mr-8">
          <div className="relative aspect-[3/2] lg:min-h-[390px]">
            <Image
              src="/images/hero/hero-pcb-enclosure-concept.png"
              alt="Concept visual of a PCB and rugged enclosure representing embedded, RF, and industrial IoT systems."
              fill
              priority
              sizes="(min-width: 1024px) 640px, calc(100vw - 48px)"
              className="object-contain"
            />
          </div>
          <figcaption className="mt-3 px-1 text-right font-mono text-[10px] leading-5 tracking-[0.16em] text-text-secondary uppercase">
            Representative embedded and RF product-architecture concept
          </figcaption>
        </div>
      </figure>

      <section
        aria-labelledby="primary-focus-title"
        className="max-w-[760px] rounded-lg border border-border-subtle/70 bg-surface/50 p-5 sm:p-6 lg:col-span-6"
      >
        <p
          id="primary-focus-title"
          className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-accent-copper uppercase"
        >
          {heroContent.primaryFocus.label}
        </p>
        <ul className="mt-4 grid gap-x-5 gap-y-3 md:grid-cols-3">
          {heroContent.primaryFocus.items.map((item) => (
            <li
              key={item}
              className="text-base leading-6 font-semibold text-foreground sm:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-border-subtle/60 pt-4 text-sm leading-6 text-text-secondary">
          {heroContent.primaryFocus.secondary}
        </p>
      </section>

      <div className="lg:col-span-6">
        <LeadershipExperienceMetrics />
      </div>
    </section>
  );
}
