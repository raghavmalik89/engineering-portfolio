import type { Metadata } from "next";
import { ButtonLink } from "@/components/common/ButtonLink";
import { PageShell } from "@/components/layout/PageShell";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Stories | Raghav Malik",
  description:
    "Engineering stories, field lessons, and product development reflections from Raghav Malik.",
};

export default function StoriesPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-[960px] px-6 py-20 sm:px-8 lg:py-28">
        <section className="rounded-lg border border-border-subtle/70 bg-surface/65 p-8 sm:p-10">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Stories
          </p>
          <h1 className="mt-5 text-4xl leading-tight font-semibold text-accent-copper sm:text-5xl">
            Stories
          </h1>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-text-secondary">
            Engineering stories, field lessons, product decisions, and
            reflections from building complex systems across mining technology,
            aerospace electronics, robotics, RF communications, and medical
            accelerator environments.
          </p>
          <p className="mt-5 text-text-muted">
            Full stories are being prepared.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={routes.resume}>View Resume</ButtonLink>
            <ButtonLink href={routes.contact} variant="secondary">
              Contact Raghav
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
