import type { Metadata } from "next";
import { ButtonLink } from "@/components/common/ButtonLink";
import { PageShell } from "@/components/layout/PageShell";
import { routes } from "@/lib/routes";
import { site } from "@/data/site";
import { resumeContact } from "@/data/resume";

export const metadata: Metadata = {
  title: "Contact - Engineering Leadership, Product Architecture and Consulting",
  description:
    "Contact Raghav Malik for systems architecture, product architecture, Industrial IoT, RF, electronics, mechatronics, technical leadership, and consulting opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - Engineering Leadership, Product Architecture and Consulting",
    description:
      "Contact Raghav Malik for product systems architecture, Industrial IoT, RF, electronics, mechatronics, technical leadership and consulting discussions.",
    url: "/contact",
    images: [
      {
        url: site.defaultSocialImage.src,
        alt: site.defaultSocialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Raghav Malik",
    description:
      "Contact Raghav Malik for engineering leadership, product architecture and consulting discussions.",
    images: [site.defaultSocialImage.src],
  },
};

const linkedInUrl = "https://www.linkedin.com/in/malikraghav/";
const emailHref = `mailto:${resumeContact.email}`;

const textLink =
  "text-base leading-7 text-accent-beige underline decoration-accent-copper/40 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper";

const detailLabel =
  "font-mono text-xs tracking-[0.1em] text-text-secondary uppercase";

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
    note: "070 2477 2310 within Japan",
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
  {
    title: "Senior engineering roles",
    body: "Technical leadership and product delivery roles where systems judgment matters.",
  },
  {
    title: "Product/system architecture",
    body: "Product direction, architecture choices, interfaces, and development roadmaps.",
  },
  {
    title: "Industrial IoT and connected products",
    body: "Connected hardware, sensing, field data, RF links, and deployment realities.",
  },
  {
    title: "RF, electronics, and mechatronics",
    body: "Electronics, communications, motion, automation, and embedded product constraints.",
  },
  {
    title: "Consulting / architecture review",
    body: "Independent review of technical direction, delivery risk, validation, or architecture.",
  },
  {
    title: "Product recovery, validation, and field deployment",
    body: "Support when a complex product is stalled between prototype, validation, and field use.",
  },
] as const;

const recruiterDetails = [
  "Role title and seniority level",
  "Company or client context",
  "Location or remote expectations",
  "Technical scope and product domain",
  "Employment or contract arrangement",
  "Expected timeline",
] as const;

const consultingDetails = [
  "Product or system context",
  "Current development stage",
  "Architecture, validation, or field issue",
  "Key technical, field, manufacturing, or business constraints",
  "Expected timeline",
  "Whether an NDA is required",
] as const;

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="readable-copy flex gap-3 text-base"
        >
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
        <section className="grid gap-8 rounded-lg border border-border-subtle/70 bg-surface/70 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start lg:p-10">
          <div>
            <h1 className="text-4xl leading-tight font-semibold text-accent-copper sm:text-5xl">
              Contact
            </h1>
            <p className="mt-5 max-w-[760px] text-xl leading-8 text-accent-beige">
              Product Systems Architect | Technical Lead | Product Delivery
              Specialist
            </p>
            <p className="mt-3 max-w-[780px] font-mono text-sm leading-7 tracking-[0.06em] text-text-muted uppercase">
              Electronics | RF Communications | Mechatronics | Industrial IoT |
              AI Vision | Harsh-Environment Products
            </p>
            <p className="readable-copy mt-7 max-w-[720px] text-lg">
              For senior systems and product architecture, Industrial IoT,
              RF/electronics, mechatronics, harsh-environment product delivery,
              and focused consulting discussions where the technical scope is
              substantial.
            </p>
            <p className="readable-copy mt-4 max-w-[700px] text-base">
              Currently based in Tokyo as an Australian citizen, open to
              selected senior engineering, product architecture, and consulting
              conversations where the engineering problem is well defined.
            </p>
          </div>

          <aside className="rounded-lg border border-border-subtle/70 bg-surface-elevated/55 p-5 sm:p-6">
            <h2 className="text-2xl font-semibold text-accent-beige">
              Best first contact
            </h2>
            <p className="readable-copy mt-3 text-base">
              For role, architecture, consulting, or technical leadership
              discussions, send the context, expected scope, location, and
              timing.
            </p>

            <div className="mt-6 grid gap-3">
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

            <dl className="mt-5 grid gap-3.5 border-t border-border-subtle/70 pt-5">
              {contactMethods.map((method) => (
                <div key={method.label}>
                  <dt className={detailLabel}>{method.label}</dt>
                  <dd className="mt-1.5">
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className={textLink}
                    >
                      {method.value}
                    </a>
                    {"note" in method ? (
                      <p className="mt-1 text-sm leading-6 text-text-secondary">
                        {method.note}
                      </p>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section
          aria-labelledby="opportunities-title"
          className="mt-10 rounded-lg border border-border-subtle/70 bg-surface/55 p-6 sm:p-8"
        >
          <h2
            id="opportunities-title"
            className="text-2xl font-semibold text-accent-copper sm:text-3xl"
          >
            What to contact me about
          </h2>
          <p className="readable-copy mt-4 max-w-[760px]">
            The best fit is work where product direction, architecture,
            electronics, RF, field constraints, and delivery risk need to be
            considered together.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {opportunityAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-border-subtle/70 bg-surface-elevated/45 p-4"
              >
                <h3 className="text-base font-semibold text-accent-beige">
                  {area.title}
                </h3>
                <p className="readable-copy mt-2 text-base">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-lg border border-border-subtle/70 bg-surface/55 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-accent-copper sm:text-3xl">
            What to include in your first message
          </h2>
          <p className="readable-copy mt-4 max-w-[760px] text-base">
            A useful first message should make the role, system, constraint,
            and timing clear.
          </p>

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-accent-beige">
                Recruiters and hiring managers
              </h3>
              <div className="mt-5">
                <BulletList items={recruiterDetails} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent-beige">
                Founders, CTOs, and consulting clients
              </h3>
              <div className="mt-5">
                <BulletList items={consultingDetails} />
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="logistics-title"
          className="mt-10 grid gap-7 rounded-lg border border-border-subtle/70 bg-surface-elevated/55 p-6 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)]"
        >
          <div>
            <h2
              id="logistics-title"
              className="text-2xl font-semibold text-accent-copper sm:text-3xl"
            >
              Practical details
            </h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className={detailLabel}>Residence</dt>
                <dd className="mt-1.5 text-base leading-7 text-foreground">
                  {resumeContact.location}
                </dd>
              </div>
              <div>
                <dt className={detailLabel}>Citizenship</dt>
                <dd className="mt-1.5 text-base leading-7 text-foreground">
                  {resumeContact.citizenship}
                </dd>
              </div>
              <div>
                <dt className={detailLabel}>Time zone</dt>
                <dd className="mt-1.5 text-base leading-7 text-foreground">
                  Japan Standard Time
                </dd>
              </div>
              <div>
                <dt className={detailLabel}>Consulting details</dt>
                <dd className="mt-1.5 text-base leading-7 text-foreground">
                  Australian ABN {resumeContact.abn}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-accent-copper sm:text-3xl">
              Start with the scope, timing, and decision context.
            </h2>
            <p className="readable-copy mt-4 text-base">
              For role, architecture, consulting, or technical leadership
              discussions, email me with the context, expected scope, and
              timing.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row lg:flex-col">
              <ButtonLink href={emailHref}>Email Raghav</ButtonLink>
              <ButtonLink href={routes.resume} variant="secondary">
                View Resume
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
