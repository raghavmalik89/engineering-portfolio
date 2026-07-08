import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/common/ButtonLink";
import { PageShell } from "@/components/layout/PageShell";
import { routes } from "@/lib/routes";
import {
  careerHighlights,
  education,
  employmentHistory,
  personalInterests,
  resumeContact,
  resumePdfPath,
  resumePortraitPath,
  resumeProfile,
  skillGroups,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Raghav Malik",
  description:
    "Resume for Raghav Malik, Product Systems Architect and Technical Lead across Industrial IoT, RF systems, electronics, mechatronics, AI vision, and harsh-environment product development.",
};

const sectionHeading =
  "font-mono text-xs tracking-[0.2em] text-accent-copper uppercase";
const sectionTitle =
  "mt-3 text-2xl font-semibold text-accent-copper sm:text-3xl";
const subtleLink =
  "text-accent-beige underline decoration-accent-copper/40 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-copper";

function ResumeSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-border-subtle/70 pt-12"
    >
      <p className={sectionHeading}>{eyebrow}</p>
      <h2 id={`${id}-title`} className={sectionTitle}>
        {title}
      </h2>
      <div className="mt-8">{children}</div>
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

function CompanyName({
  name,
  url,
}: {
  name: string;
  url?: string;
}) {
  if (!url) {
    return <>{name}</>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={subtleLink}
    >
      {name}
    </a>
  );
}

export default function ResumePage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-[1120px] px-6 py-14 sm:px-8 lg:py-20">
        <header className="overflow-hidden rounded-lg border border-border-subtle/70 bg-surface/70 p-6 sm:p-7 lg:p-8">
          <div className="grid gap-5">
            <div className="grid gap-7 lg:grid-cols-[minmax(220px,340px)_minmax(0,1fr)] lg:items-start lg:gap-10">
              <div className="relative order-2 mx-auto w-full max-w-[240px] sm:order-none sm:max-w-[280px] lg:mx-0 lg:max-w-[330px] lg:self-start">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 bottom-5 h-20 rounded-full bg-accent-copper/10 blur-3xl"
                />
                <Image
                  src={resumePortraitPath}
                  alt="Portrait of Raghav Malik"
                  width={360}
                  height={318}
                  priority
                  className="relative h-auto w-full object-contain"
                />
              </div>

              <div className="order-1 sm:order-none">
                <p className={sectionHeading}>Online CV</p>
                <h1 className="mt-4 text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
                  {resumeContact.name}
                </h1>
                <p className="mt-5 max-w-[820px] text-xl leading-8 text-accent-beige">
                  {resumeProfile.title}
                </p>
                <p className="mt-3 max-w-[860px] font-mono text-sm leading-7 tracking-[0.06em] text-text-muted uppercase">
                  {resumeProfile.domains}
                </p>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href={resumePdfPath} download>
                    Download PDF Resume
                  </ButtonLink>
                  <ButtonLink href={routes.contact} variant="secondary">
                    Contact Raghav
                  </ButtonLink>
                </div>
              </div>
            </div>

            <dl className="grid gap-x-4 gap-y-3 rounded-lg border border-border-subtle/70 bg-surface-elevated/45 px-4 py-3 text-sm text-text-secondary sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  Residence
                </dt>
                <dd className="mt-1 text-foreground">
                  {resumeContact.location}
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
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${resumeContact.email}`}
                    className={subtleLink}
                  >
                    {resumeContact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  Japan phone
                </dt>
                <dd className="mt-1">
                  <a href="tel:+817024772310" className={subtleLink}>
                    {resumeContact.japanPhone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  Australia phone
                </dt>
                <dd className="mt-1">
                  <a href="tel:+61449204552" className={subtleLink}>
                    {resumeContact.australiaPhone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="mt-12 grid gap-12">
          <ResumeSection id="summary" eyebrow="Summary" title="Professional Summary">
            <div className="grid gap-5 text-lg leading-8 text-text-secondary">
              {resumeProfile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection
            id="career-highlights"
            eyebrow="Career Highlights"
            title="Selected Career Highlights"
          >
            <BulletList items={careerHighlights} />
          </ResumeSection>

          <ResumeSection
            id="skills"
            eyebrow="Acquired Skills and Key Competencies"
            title="Technical Domains"
          >
            <div className="hidden overflow-hidden rounded-lg border border-border-subtle/70 md:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Acquired skills and key competencies grouped by technical
                  domain
                </caption>
                <tbody className="divide-y divide-border-subtle/70">
                  {skillGroups.map((group) =>
                    group.skills.map((skill, index) => (
                      <tr
                        key={`${group.category}-${skill.label}`}
                        className="bg-surface/45 align-top"
                      >
                        {index === 0 ? (
                          <th
                            scope="rowgroup"
                            rowSpan={group.skills.length}
                            className="w-[30%] border-r border-border-subtle/70 bg-surface-elevated/70 p-5 text-sm font-semibold leading-6 text-accent-beige"
                          >
                            {group.category}
                          </th>
                        ) : null}
                        <th
                          scope="row"
                          className="w-[22%] border-r border-border-subtle/50 p-5 text-sm font-semibold leading-6 text-foreground"
                        >
                          {skill.label}
                        </th>
                        <td className="p-5 leading-7 text-text-secondary">
                          {skill.details}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>

            <div className="grid gap-5 md:hidden">
              {skillGroups.map((group) => (
                <section
                  key={group.category}
                  aria-labelledby={`skill-${group.category}`}
                  className="rounded-lg border border-border-subtle/70 bg-surface/55 p-5"
                >
                  <h3
                    id={`skill-${group.category}`}
                    className="text-base font-semibold text-accent-beige"
                  >
                    {group.category}
                  </h3>
                  <dl className="mt-5 grid gap-4">
                    {group.skills.map((skill) => (
                      <div key={skill.label}>
                        <dt className="font-semibold text-foreground">
                          {skill.label}
                        </dt>
                        <dd className="mt-1 leading-7 text-text-secondary">
                          {skill.details}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection
            id="employment"
            eyebrow="Employment History"
            title="Professional Experience"
          >
            <div className="grid gap-8">
              {employmentHistory.map((role, index) => (
                <section
                  key={`${role.dates}-${role.company}`}
                  aria-labelledby={`role-${index}-title`}
                  className="rounded-lg border border-border-subtle/70 bg-surface/50 p-6 sm:p-7"
                >
                  <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                    <p className="font-mono text-sm leading-6 tracking-[0.12em] text-text-muted uppercase">
                      {role.dates}
                    </p>
                    <div>
                      <h3
                        id={`role-${index}-title`}
                        className="text-xl leading-snug font-semibold text-foreground"
                      >
                        {role.title}
                      </h3>
                      <p className="mt-2 text-accent-beige">
                        <CompanyName
                          name={role.company}
                          url={"companyUrl" in role ? role.companyUrl : undefined}
                        />{" "}
                        / {role.location}
                      </p>
                      <p className="mt-5 leading-8 text-text-secondary">
                        {role.summary}
                      </p>

                      {"responsibilities" in role ? (
                        <div className="mt-7">
                          <h4 className="font-mono text-[11px] tracking-[0.16em] text-accent-copper uppercase">
                            Key Responsibilities
                          </h4>
                          <div className="mt-4">
                            <BulletList items={role.responsibilities} />
                          </div>
                        </div>
                      ) : null}

                      {"achievements" in role ? (
                        <div className="mt-7">
                          <h4 className="font-mono text-[11px] tracking-[0.16em] text-accent-copper uppercase">
                            Achievements
                          </h4>
                          <div className="mt-4">
                            <BulletList items={role.achievements} />
                          </div>
                        </div>
                      ) : null}

                      {"projects" in role ? (
                        <div className="mt-7">
                          <h4 className="font-mono text-[11px] tracking-[0.16em] text-accent-copper uppercase">
                            Projects
                          </h4>
                          <div className="mt-4">
                            <BulletList items={role.projects} />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection id="education" eyebrow="Education" title="Education">
            <div className="grid gap-4">
              {education.map((item) => (
                <div
                  key={`${item.dates}-${item.qualification}`}
                  className="grid gap-3 rounded-lg border border-border-subtle/70 bg-surface/45 p-5 sm:grid-cols-[160px_minmax(0,1fr)]"
                >
                  <p className="font-mono text-sm tracking-[0.12em] text-text-muted uppercase">
                    {item.dates}
                  </p>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.qualification}
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      {item.institution}, {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection
            id="personal-interests"
            eyebrow="Personal Interests"
            title="Interests"
          >
            <dl className="grid gap-4 md:grid-cols-2">
              {personalInterests.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border-subtle/70 bg-surface/45 p-5"
                >
                  <dt className="font-semibold text-accent-beige">
                    {item.label}
                  </dt>
                  <dd className="mt-3 leading-7 text-text-secondary">
                    {item.details}
                  </dd>
                </div>
              ))}
            </dl>
          </ResumeSection>

          <section
            aria-labelledby="referees-title"
            className="rounded-lg border border-border-subtle/70 bg-surface-elevated/70 p-6 sm:p-8"
          >
            <p className={sectionHeading}>Referees</p>
            <h2 id="referees-title" className={sectionTitle}>
              Referees available on request
            </h2>
            <p className="mt-5 max-w-[760px] leading-8 text-text-secondary">
              The downloadable PDF remains the formal CV record. For role
              discussions, technical leadership enquiries, or product
              architecture conversations, contact Raghav directly.
            </p>
            <div className="mt-6 rounded-lg border border-border-subtle/70 bg-surface/55 p-5">
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent-copper uppercase">
                Consulting & work rights
              </p>
              <p className="mt-3 leading-7 text-text-secondary">
                Australian citizen. Consulting details: Australian ABN{" "}
                {resumeContact.abn}.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={resumePdfPath} download>
                Download PDF Resume
              </ButtonLink>
              <ButtonLink href={routes.contact} variant="secondary">
                Contact Raghav
              </ButtonLink>
            </div>
          </section>

          <p className="text-sm text-text-muted">
            This online CV is adapted from the formal CV for readable web use.{" "}
            <Link
              href={resumePdfPath}
              className={subtleLink}
            >
              Download the PDF version
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
