# Decision Log

## Format

Use this format for each decision:

```text
## D-XXX - Decision Title

Date:
Status:

Context:

Decision:

Reasoning:

Consequences:
```

---

## D-001 - Repository Root as Project Container

Date: 2026-06-25
Status: Accepted

Context:
The project is more than a website. It includes documentation, raw assets, Codex
agents, design files, engineering case studies, and future consulting material.

Decision:
Use the repository root as the engineering portfolio project container. Place
the Next.js app inside `website/`.

Reasoning:
This keeps the web application separate from project documentation, raw assets,
and future tools. It mirrors professional engineering repositories where
application code is one deliverable inside a larger project.

Consequences:
Next.js commands must be run from `website/`, not the repository root.

---

## D-002 - Build Content-First, Polish Second

Date: 2026-06-25
Status: Accepted

Context:
The primary value of the website is credibility, not visual effects.

Decision:
Prioritize page structure, case studies, copy, and engineering evidence before
animation or advanced visual polish.

Reasoning:
Hiring managers and technical directors need to understand capability quickly.
Strong content creates more value than decorative UI.

Consequences:
Early MVP may be visually simple, but it must be clear and professional.

---

## D-003 - First Flagship Case Study is CC1310 Sensor

Date: 2026-06-25
Status: Accepted

Context:
The CC1310 custom industrial IoT sensor is current, demonstrable, and suitable
for GitHub and website integration.

Decision:
Use the CC1310 custom industrial IoT sensor as the first complete case study.

Reasoning:
It shows embedded hardware, firmware, RF, sensing, low-power design, packet
design, testing, architecture, and ongoing development discipline.

Consequences:
Other case studies can initially be shorter summaries until this one is
complete.

---

## D-004 - Public Engineering Notebook from Launch

Date: 2026-06-25
Status: Accepted

Context:
The site needs to show ongoing technical thinking, not only finished case
studies.

Decision:
Include `/engineering-notebook` and `/engineering-notebook/[slug]` in the launch
architecture.

Reasoning:
Notebook entries can capture technical observations, build logs, and engineering
learning without requiring full case study polish.

Consequences:
Notebook content must still pass confidentiality review before publication.

---

## D-005 - Delay Consulting Pages

Date: 2026-06-25
Status: Accepted

Context:
The site has consulting-style positioning, but the consulting offer is not yet
clear enough to publish as a dedicated section.

Decision:
Do not create consulting routes during Phase 1.

Reasoning:
The architecture should support professional credibility first and avoid vague
service pages.

Consequences:
Consulting pages can be added later when the offer, audience, and calls to
action are defined.

---

## D-006 - Resume Page plus Future PDF

Date: 2026-06-25
Status: Accepted

Context:
The resume needs to work as both a browsable web page and a traditional
downloadable document.

Decision:
Create `/resume` as an interactive route and reserve `website/public/pdf/` for a
future downloadable resume or CV.

Reasoning:
This supports recruiters, hiring managers, and technical reviewers using
different workflows.

Consequences:
The PDF is deferred; Phase 1 only creates the route and asset boundary.

---

## D-007 - Use System Fonts During Phase 1

Date: 2026-06-25
Status: Accepted

Context:
`next/font/google` required external font fetching and failed under restricted
network conditions.

Decision:
Use system fonts during Phase 1.

Reasoning:
System fonts provide deterministic local builds and a reliable architecture
foundation without external font fetching.

Consequences:
Typography is temporary and must be revisited before launch during
visual/design-system work. Future options include continuing with system fonts,
using `next/font/google` if the build environment is reliable, or using
local/self-hosted fonts for deterministic production builds.

---

## D-008 - Freeze Design System v1.0

Date: 2026-06-26
Status: Accepted

Context:
Phase 2 needed to close the visual direction before page implementation begins.
The site must avoid generic portfolio patterns and preserve a technical,
industrial, calm, premium direction.

Decision:
Freeze Design System v1.0 in `docs/DesignSystem.md` and record the Phase 2
closeout in `docs/Phase2-DesignFreeze.md`.

Reasoning:
A documented design contract lets future implementation work proceed without
inventing visual rules, component scope, color usage, motion behavior, or
imagery strategy page by page.

Consequences:
Future UI work must follow the frozen design system. New components or visual
patterns require justification and should be reflected in the project records.

---

## D-009 - Use Copper as Engineering Material Accent

Date: 2026-06-26
Status: Accepted

Context:
The approved palette uses a copper/khaki accent against dark navy. This could be
misread as luxury gold if used carelessly.

Decision:
Use copper as an engineering material accent, representing PCB copper, brass
connectors, SMA connectors, drafting material, and precision machined
components.

Reasoning:
The accent should support the engineering identity of the site, not create a
luxury-brand or decorative tone.

Consequences:
Accent usage should stay restrained, targeting roughly 90% navy/neutral and 10%
copper accent.

---

## D-010 - Engineering Atmosphere Layer is Optional

Date: 2026-06-26
Status: Accepted

Context:
A subtle technical background layer may support atmosphere, but decorative
particle effects would conflict with the project's calm engineering direction.

Decision:
Allow an optional Engineering Atmosphere Layer using low-contrast signal nodes,
topology lines, or ambient engineering texture.

Reasoning:
The layer can support the industrial engineering atmosphere when used as
environmental texture, but it must not become decorative animation.

Consequences:
The layer must never reduce readability, compete with typography, or be treated
as a generic particle system. Any animation must be extremely slow and almost
imperceptible.

---

## D-011 - Use No-Dependency Home Visual Fallbacks

Date: 2026-06-27
Status: Accepted

Context:
Phase 3 Home Page required Lucide-style outline icons and an Engineering
Atmosphere Layer, but `lucide-react` is not installed and final engineering
photography is not yet available. Early CSS/SVG/radial-gradient atmosphere
attempts appeared static, sparse, and right-heavy; the movement existed
technically but was not visually verifiable because distribution and opacity
were too subtle.

Decision:
Use small inline outline SVG icons and a lightweight original canvas-based
Engineering Atmosphere Layer for the Home page. Do not add icon, animation, or
imagery dependencies in Phase 3.

Reasoning:
This preserves the no-new-dependencies guardrail while giving the atmosphere
visible motion, tunable density/size, and reduced-motion handling. It leaves
clear space for future real hardware, field, or diagram imagery.

Consequences:
Icons should be replaced with the approved Lucide strategy if the dependency is
adopted later. The atmosphere remains a visual placeholder until final
engineering imagery and any material direction are locked. The Home hero visual
remains a clearly labeled placeholder until production-ready engineering imagery
is available.
