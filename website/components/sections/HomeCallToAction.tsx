import { ButtonLink } from "@/components/common/ButtonLink";
import { routes } from "@/lib/routes";

export function HomeCallToAction() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8 lg:py-24">
      <div className="rounded-lg border border-border-subtle/70 bg-surface-elevated/70 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-[740px]">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Continue
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold text-foreground">
            Discuss a product architecture or engineering delivery challenge
          </h2>
          <p className="mt-5 leading-8 text-text-secondary">
            For Industrial IoT, embedded hardware, mechatronic systems, field
            deployment, or product architecture conversations.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
          <ButtonLink href={routes.contact}>Contact Raghav</ButtonLink>
          <ButtonLink href={routes.resume} variant="secondary">
            View Resume
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
