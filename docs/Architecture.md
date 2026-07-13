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
|   |-- stories/page.tsx
|   |-- stories/[slug]/page.tsx
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
|   |-- stories.ts
|   `-- locations.ts
|-- lib/
|-- public/
|   |-- images/
|   |   |-- stories/
|   |   `-- flags/
|   |-- diagrams/
|   `-- pdf/
`-- types/
```

The current files are architecture placeholders only. Final page content,
component implementation, MDX tooling, consulting pages, and polished visual
design are deferred.

## Design System

Phase 2 froze Design System v1.0 in `docs/DesignSystem.md`.

Approved visual direction:

- Vercel-like refinement
- Braun-like structure and navigation discipline
- Japanese minimalism / Ikebana-inspired placement
- Engineering documentation clarity
- Premium industrial product feel
- Dark navy + khaki / copper engineering palette

The design system is documentation-only until implementation begins. Future UI
work must follow the frozen component list, color tokens, spacing rules, motion
rules, accessibility requirements, and imagery strategy in `docs/DesignSystem.md`.

No new component should be introduced without justification.

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

### Stories

Stories is the long-term engineering project archive. The public index lives at
`/stories` and individual story scaffolds use the dynamic route
`/stories/[slug]`.

Story content is typed in `website/types/story.ts` and stored separately from
presentation in `website/data/stories.ts`. Engineering footprint data is stored
in `website/data/locations.ts` so countries can represent project-specific,
company-only, training, remote-work, or future deployment context without
inventing project relationships.

Story image assets use the `website/public/images/stories/<slug>/` hierarchy.
The story model supports card, hero, inline, and gallery images, but image
fields should only reference files that exist and have meaningful alt text.
Engineering Footprint flag images use the local `website/public/images/flags/`
asset set and must be displayed with written country or location names.

The story publication model supports `planned`, `draft`, `review`, and
`published`. Local development may open unpublished nested story pages for
progressive drafting. Production must expose full nested pages only for
`published` stories; unpublished story URLs return `notFound()` and unpublished
cards remain labelled as in development.

The Stories landing page uses a two-column editorial archive layout on desktop:
vertical project cards in the main column and a sticky Engineering Footprint
panel in the supporting column. A small client component owns the
project-country cross-highlighting state; static content remains server-rendered
where possible.

Global shell behaviour includes a small Back to Top control mounted through the
root layout. It appears only after meaningful scroll depth and respects reduced
motion preferences.

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
/stories                       Stories index
/stories/[slug]                Individual story page
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
| A-010 | Freeze Design System v1.0 in Phase 2 | Creates a stable visual, component, motion, accessibility, and imagery contract before page implementation. |
| A-011 | Treat copper as engineering material accent | Copper represents PCB copper, brass/SMA connectors, drafting material, and machined components, not luxury gold. |
| A-012 | Keep Engineering Atmosphere Layer optional | Ambient signal nodes/topology texture may support atmosphere only if it stays low contrast and never competes with readability. |
| A-013 | Use typed data files for Stories | Keeps long-term project archive content separate from presentation while avoiding MDX or CMS dependencies during the first production architecture. |
| A-014 | Keep story and flag assets under `public/images` | Avoids competing public asset hierarchies and keeps deployed media paths predictable. |

## Update Rule

Codex must update this file when:

- Folder structure changes.
- New routes are added.
- Content model changes.
- Deployment approach changes.
- Major dependencies are added.
- Important architectural decisions are made.
