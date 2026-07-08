import type { Metadata } from "next";
import { ButtonLink } from "@/components/common/ButtonLink";
import { PageShell } from "@/components/layout/PageShell";
import { routes } from "@/lib/routes";
import { resumeContact } from "@/data/resume";

export const metadata: Metadata = {
  title: "Contact | Raghav Malik",
  description:
    "Contact Raghav Malik for engineering leadership, systems architecture, Industrial IoT, RF, electronics, and consulting opportunities.",
};

const contactLink =
  "text-accent-beige underline decoration-accent-copper/40 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper";

export default function ContactPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-[960px] px-6 py-20 sm:px-8 lg:py-28">
        <section className="rounded-lg border border-border-subtle/70 bg-surface/65 p-8 sm:p-10">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Contact
          </p>
          <h1 className="mt-5 text-4xl leading-tight font-semibold text-accent-copper sm:text-5xl">
            Contact Raghav Malik
          </h1>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-text-secondary">
            For engineering leadership, systems architecture, Industrial IoT,
            RF, electronics, mechatronic product development, or consulting
            conversations.
          </p>

          <dl className="mt-8 grid gap-5 rounded-lg border border-border-subtle/70 bg-surface-elevated/55 p-5 text-sm text-text-secondary sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${resumeContact.email}`}
                  className={contactLink}
                >
                  {resumeContact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Residence
              </dt>
              <dd className="mt-1 text-foreground">{resumeContact.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Japan phone
              </dt>
              <dd className="mt-1">
                <a href="tel:+817024772310" className={contactLink}>
                  {resumeContact.japanPhone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Australia phone
              </dt>
              <dd className="mt-1">
                <a href="tel:+61449204552" className={contactLink}>
                  {resumeContact.australiaPhone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Citizenship
              </dt>
              <dd className="mt-1 text-foreground">
                {resumeContact.citizenship}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Consulting details
              </dt>
              <dd className="mt-1 text-foreground">
                Australian ABN {resumeContact.abn}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={routes.resume}>View Resume</ButtonLink>
            <ButtonLink href={`mailto:${resumeContact.email}`} variant="secondary">
              Email Raghav
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
