import type { Metadata } from "next";
import { ButtonLink } from "@/components/common/ButtonLink";
import { PageShell } from "@/components/layout/PageShell";
import { routes } from "@/lib/routes";
import { resumeContact } from "@/data/resume";

export const metadata: Metadata = {
  title: "Contact | Raghav Malik",
  description:
    "Contact Raghav Malik for systems architecture, product architecture, Industrial IoT, RF, electronics, mechatronics, technical leadership, and consulting opportunities.",
};

const linkedInUrl = "https://www.linkedin.com/in/malikraghav/";
const emailHref = `mailto:${resumeContact.email}`;

const textLink =
  "text-accent-beige underline decoration-accent-copper/40 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper";

const contactMethods = [
  {
    label: "Email",
    value: resumeContact.email,
    href: emailHref,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/malikraghav",
    href: linkedInUrl,
    external: true,
  },
  {
    label: "Japan phone",
    value: resumeContact.japanPhone,
    href: "tel:+817024772310",
    external: false,
  },
  {
    label: "Australia phone",
    value: resumeContact.australiaPhone,
    href: "tel:+61449204552",
    external: false,
  },
] as const;

const opportunityAreas = [
  "Senior engineering roles",
  "Systems/product architecture",
  "Industrial IoT / connected products",
  "Electronics, RF, mechatronics",
  "Harsh-environment product delivery",
  "Consulting / architecture review",
  "Technical recovery of stalled product programmes",
] as const;

const recruiterDetails = [
  "Role title and seniority level",
  "Company or client context",
  "Location, relocation, or remote expectations",
  "Technical scope and product domain",
  "Employment or contract arrangement",
  "Hiring timeline and interview process",
] as const;

const consultingDetails = [
  "Product or system context",
  "Current development stage",
  "Architecture, validation, or field issue",
  "Expected timeline and decision urgency",
  "Whether an NDA is required",
] as const;

function DetailCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-border-subtle/70 bg-surface/55 p-6">
      <h2 className="text-xl font-semibold text-accent-copper">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-text-secondary">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-copper/75" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-[1120px] px-6 py-16 sm:px-8 lg:py-24">
        <section className="rounded-lg border border-border-subtle/70 bg-surface/70 p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Contact
          </p>
          <h1 className="mt-5 text-4xl leading-tight font-semibold text-accent-copper sm:text-5xl">
            Contact
          </h1>
          <p className="mt-5 max-w-[840px] text-xl leading-8 text-accent-beige">
            Product Systems Architect | Technical Lead | Product Delivery
            Specialist
          </p>
          <p className="mt-3 max-w-[900px] font-mono text-sm leading-7 tracking-[0.06em] text-text-muted uppercase">
            Electronics | RF Communications | Mechatronics | Industrial IoT |
            AI Vision | Harsh-Environment Products
          </p>
          <p className="mt-7 max-w-[820px] text-lg leading-8 text-text-secondary">
            Contact Raghav for senior engineering roles, systems and product
            architecture discussions, Industrial IoT and connected product work,
            electronics/RF/mechatronics leadership, or focused consulting
            around technical product delivery.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href={emailHref}>Email Raghav</ButtonLink>
            <ButtonLink href={routes.resume} variant="secondary">
              View Resume
            </ButtonLink>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border-subtle px-5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent-copper hover:text-accent-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section
          aria-labelledby="contact-methods-title"
          className="mt-10 rounded-lg border border-border-subtle/70 bg-surface-elevated/55 p-6 sm:p-8"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Contact methods
          </p>
          <h2
            id="contact-methods-title"
            className="mt-3 text-2xl font-semibold text-accent-copper sm:text-3xl"
          >
            Direct contact
          </h2>
          <dl className="mt-7 grid gap-5 text-sm text-text-secondary sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => (
              <div key={method.label}>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  {method.label}
                </dt>
                <dd className="mt-2">
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className={textLink}
                  >
                    {method.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-labelledby="opportunities-title"
          className="mt-10 rounded-lg border border-border-subtle/70 bg-surface/55 p-6 sm:p-8"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Opportunity routing
          </p>
          <h2
            id="opportunities-title"
            className="mt-3 text-2xl font-semibold text-accent-copper sm:text-3xl"
          >
            What to contact me about
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {opportunityAreas.map((area) => (
              <div
                key={area}
                className="rounded-lg border border-border-subtle/70 bg-surface-elevated/45 p-4 text-text-secondary"
              >
                {area}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <DetailCard title="For recruiters and hiring managers">
            <p className="leading-8 text-text-secondary">
              Useful first messages include enough context to judge role fit,
              operating model, technical scope, and timing.
            </p>
            <div className="mt-5">
              <BulletList items={recruiterDetails} />
            </div>
          </DetailCard>

          <DetailCard title="For consulting, founder, and CTO discussions">
            <p className="leading-8 text-text-secondary">
              For product architecture or technical recovery conversations, keep
              the first note practical and specific.
            </p>
            <div className="mt-5">
              <BulletList items={consultingDetails} />
            </div>
          </DetailCard>
        </div>

        <section
          aria-labelledby="logistics-title"
          className="mt-10 rounded-lg border border-border-subtle/70 bg-surface-elevated/55 p-6 sm:p-8"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Work rights and logistics
          </p>
          <h2
            id="logistics-title"
            className="mt-3 text-2xl font-semibold text-accent-copper sm:text-3xl"
          >
            Practical details
          </h2>
          <dl className="mt-7 grid gap-5 text-sm text-text-secondary sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Residence
              </dt>
              <dd className="mt-2 text-foreground">{resumeContact.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Citizenship
              </dt>
              <dd className="mt-2 text-foreground">
                {resumeContact.citizenship}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Time zone
              </dt>
              <dd className="mt-2 text-foreground">Japan Standard Time</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Consulting details
              </dt>
              <dd className="mt-2 text-foreground">
                Australian ABN {resumeContact.abn}
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-10 rounded-lg border border-border-subtle/70 bg-surface/65 p-6 sm:p-8">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
            Next step
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-accent-copper sm:text-3xl">
            Start with the scope, timing, and decision context.
          </h2>
          <p className="mt-5 max-w-[780px] leading-8 text-text-secondary">
            A concise email with the engineering problem, role or product
            context, location expectations, and timeline is the fastest way to
            determine fit.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={emailHref}>Email Raghav</ButtonLink>
            <ButtonLink href={routes.resume} variant="secondary">
              View Resume
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
