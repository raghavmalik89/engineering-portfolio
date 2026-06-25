# Architecture

## Project Name

Engineering Portfolio / Consulting Website

## Architectural Principle

The repository is the engineering portfolio project. The website is one
application inside the project.

The root repository contains project management, assets, documentation, Codex
configuration, and future supporting material. The Next.js application lives
inside `website/`.

## Top-Level Repository Architecture

```text
engineering-portfolio/
|-- website/              # Next.js application
|-- docs/                 # Project management, architecture, roadmap, branding
|-- assets/               # Raw design assets and source media
|-- scripts/              # Utility scripts
|-- .codex/               # Codex agents, skills, and prompts
|-- README.md
|-- LICENSE
`-- .gitignore
```

## Why This Structure

This separates the engineering project from the web application.

Benefits:

- The repository can hold more than the website.
- Raw assets are not mixed with production website files.
- Documentation is independent of the app framework.
- The website can be rebuilt later without losing content strategy and project history.
- The structure mirrors professional engineering repositories where firmware, hardware, docs, and tools are separated.

## Website Application Boundary

The Next.js app lives here:

```text
website/
```

The app owns its own dependencies, routes, components, content boundaries, data,
helpers, types, and static deployed assets.

## Website Architecture Skeleton

```text
website/
|-- app/
|   |-- about/page.tsx
|   |-- contact/page.tsx
|   |-- engineering-decisions/page.tsx
|   |-- engineering-decisions/[slug]/page.tsx
|   |-- engineering-notebook/page.tsx
|   |-- engineering-notebook/[slug]/page.tsx
|   |-- resume/page.tsx
|   |-- selected-systems/page.tsx
|   |-- selected-systems/[slug]/page.tsx
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- layout/
|   |-- navigation/
|   |-- sections/
|   |-- cards/
|   |-- mdx/
|   `-- common/
|-- content/
|   |-- selected-systems/
|   |-- engineering-notebook/
|   |-- engineering-decisions/
|   `-- pages/
|-- data/
|-- lib/
|-- public/
|   |-- images/
|   |-- diagrams/
|   `-- pdf/
`-- types/
```

The current files are architecture placeholders only. Final page content,
component implementation, MDX tooling, consulting pages, and polished visual
design are deferred.

## Content Architecture

### Selected Systems

Selected Systems is the main case study and system portfolio area.

Each future system entry should include public-safe information about:

- Problem
- Constraints
- Architecture
- Key decisions
- Validation
- Deployment reality
- Outcome
- Lessons learned

### Engineering Decisions

Engineering Decisions shows how Raghav thinks through trade-offs.

Each future article should include:

- Context
- Options considered
- Decision
- Trade-offs
- Result
- What this demonstrates

### Engineering Notebook

Engineering Notebook is public from launch. It is for shorter technical notes,
build logs, test observations, RF experiments, firmware learnings, and product
architecture reflections.

## Routing Strategy

Use simple, durable routes:

```text
/                              Home
/about                         About
/selected-systems              Case study index
/selected-systems/[slug]       Individual case study
/engineering-decisions         Engineering decision articles
/engineering-decisions/[slug]  Individual decision article
/engineering-notebook          Notebook entries
/engineering-notebook/[slug]   Individual notebook entry
/resume                        Interactive resume
/contact                       Contact
```

Consulting pages are delayed until the consulting offer is clearer. The resume
will be both an interactive `/resume` page and, later, a downloadable PDF under
`website/public/pdf/`.

## Technical Stack

Initial stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- npm

Potential later additions:

- MDX for content
- shadcn/ui for selected components
- Framer Motion for subtle motion
- Plausible analytics
- Vercel deployment

No optional dependency should be added until there is a clear need.

### Font Strategy

Phase 1 uses system fonts to keep local and CI builds deterministic under
restricted network conditions. Typography and font strategy will be revisited
before launch during visual/design-system work.

Future options include:

- Continuing with system fonts.
- Using `next/font/google` if the build environment is reliable.
- Using local/self-hosted fonts for deterministic production builds.

## Deployment Strategy

Initial deployment target: Vercel.

Reason:

- Good Next.js support
- Simple GitHub integration
- Low maintenance
- Fast preview deployments

Deployment can be revisited later if needed.

## Architecture Decisions

| ID | Decision | Reason |
|---|---|---|
| A-001 | Use root as project container | Keeps website, assets, docs, and Codex config separate. |
| A-002 | Place Next.js inside `website/` | Avoids framework owning entire repository. |
| A-003 | Start with simple content files | Avoids early CMS complexity. |
| A-004 | Target a dark professional visual direction | Final visual system is deferred to Phase 2, but the intended brand direction is industrial, premium, and professional. |
| A-005 | Prioritize case studies over biography | Projects prove capability better than resume-style pages. |
| A-006 | Keep Engineering Notebook public from launch | Shows technical thinking and keeps the site active. |
| A-007 | Delay consulting pages | Avoids publishing an unclear offer. |
| A-008 | Use interactive resume plus future PDF | Supports browser reading and traditional download workflows. |
| A-009 | Use system fonts during Phase 1 | Avoids build failures caused by restricted network font fetching; font strategy will be revisited before launch. |

## Update Rule

Codex must update this file when:

- Folder structure changes.
- New routes are added.
- Content model changes.
- Deployment approach changes.
- Major dependencies are added.
- Important architectural decisions are made.
