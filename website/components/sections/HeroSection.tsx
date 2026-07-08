import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { heroContent } from "@/data/home";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-32">
      <div className="lg:col-span-6">
        <p className="font-mono text-xs tracking-[0.22em] text-accent-copper uppercase">
          {heroContent.eyebrow}
        </p>
        <h1 className="mt-8 max-w-[760px] text-[52px] leading-[1.04] font-medium text-foreground sm:text-[64px] lg:text-[76px]">
          {heroContent.headline}
        </h1>
        <p className="mt-8 max-w-[740px] text-lg leading-8 text-text-secondary">
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

      <div className="lg:col-span-6 hidden lg:block">
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
        </div>
      </div>

      <div className="lg:hidden mt-12">
        <div className="relative aspect-[3/2] min-h-[200px] max-w-full">
          <Image
            src="/images/hero/hero-pcb-enclosure-concept.png"
            alt="Concept visual of a PCB and rugged enclosure representing embedded, RF, and industrial IoT systems."
            fill
            priority
            sizes="(min-width: 1024px) 640px, calc(100vw - 48px)"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
