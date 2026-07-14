# Notebook Design System and Template Contract

## Purpose

The Notebook is the technical record layer of the portfolio. It preserves
engineering investigations, build records, architecture notes, experiments,
test observations, development workflows and lessons from practical systems
work.

Stories explain what was delivered, why it mattered and how a project evolved.
Notebook entries explain how engineering problems were investigated, built,
tested, constrained and documented.

The Notebook should visually belong to the same website as Stories while using
its own presentation system. It must not become a generic blog, chronological
diary, skills-cloud page or duplicate story archive.

## Canonical Reference

- Notebook index route: `/notebook`
- Dynamic Notebook entry route: `/notebook/[slug]`
- Initial canonical Notebook entry: `/notebook/sub-ghz-industrial-iot-sensor`

SmartRoller remains the canonical Stories reference, but it is not the Notebook
template. Notebook pages should use the same dark engineering aesthetic,
copper-accent language, accessibility standards and publication safety while
remaining more technical, compact and evidence-oriented.

## Required Future-Agent Workflow

For every new Notebook entry:

1. Read the normal repository and website governance documents.
2. Read `docs/StoriesDesignSystem.md` for shared site conventions.
3. Read `docs/NotebookDesignSystem.md`.
4. Inspect `/notebook`.
5. Inspect `/notebook/sub-ghz-industrial-iot-sensor`.
6. Inspect `website/app/notebook/[slug]/page.tsx`.
7. Inspect reusable components under `website/components/notebook/`.
8. Inspect `website/data/notebookEntries.ts` and
   `website/types/notebook.ts`.
9. Preserve the shared Notebook template before adding project-specific
   content.
10. Run `npm.cmd run lint` and `npm.cmd run build` from `website/`.
11. Review the new entry beside the Sub-GHz Industrial IoT Sensor entry at the
    same breakpoints.

## Content Model

Notebook content is typed in `website/types/notebook.ts` and stored separately
from presentation in `website/data/notebookEntries.ts`.

The model supports:

- title, short title and slug
- summary
- status
- display order
- entry type
- period or last-updated label
- technologies
- engineering methods
- optional card and hero images
- snapshot rows
- narrative sections
- observations
- architecture decisions
- code snippets
- callouts
- limitations
- next steps
- related Notebook entries
- related Stories
- approved links
- SEO metadata

Do not introduce MDX, a CMS or additional content dependencies without a
separate approved architecture decision.

## Entry Types

Current supported entry types are:

- Build Log
- Architecture Note
- Engineering Experiment
- Product Development
- Research Note
- Test Report
- Development Workflow
- Lessons Learned

Choose the entry type that best describes the evidence, not the most impressive
label.

## Publication Safety

Notebook statuses use the same values as Stories:

- `planned`
- `draft`
- `review`
- `published`

Local development may preview planned, draft and review entries. Production
must expose full nested Notebook pages only for `published` entries. Unpublished
entry routes return `notFound()` in production and use no-index metadata when
locally previewed.

The Notebook index may show unpublished entries as in-development records, but
it must not expose full unpublished entry narratives in production links.
Index data should stay lightweight and avoid shipping full unpublished content
to client components where avoidable.

## Landing Page

The Notebook index uses a two-column editorial layout related to Stories:

- Main column: Notebook introduction and vertical entry-card grid
- Supporting column: sticky Technical Index

The main cards are vertical. They should not reuse the horizontal flagship
Stories card layout.

Current index introduction:

- Eyebrow: Notebook
- Title: Engineering Notebook
- Supporting copy: technical investigations, architecture notes, experiments
  and development records from electronics, RF, sensing, software and
  product-system work

## Vertical Card System

Notebook cards use:

- optional image or technical visual at the top
- entry-type eyebrow
- title
- concise summary
- technology tags
- status label
- restrained action text such as "Read notebook entry"

On desktop the cards use a two-column grid in the main content area. On mobile
they stack to one column. Missing images use an intentional technical no-image
treatment, not a broken or stock placeholder.

Card media may use a separate approved image from entry hero media. Card images
should use the established vertical-card aspect region, avoid priority loading
and remain secondary to the entry title, summary and technology tags.

## Technical Index

`TechnicalIndex` lists technologies and engineering methods represented across
visible Notebook cards. It is about technical evidence, not geography, and does
not use flags.

Desktop interaction:

- hovering or focusing a technology highlights related cards
- hovering or focusing a card highlights related technologies
- unrelated cards may become subdued but remain readable

Touch and mobile interaction:

- tapping a technology selects it
- tapping it again clears it
- tapping another technology changes the selection
- tapping outside the selected index clears it

The panel is sticky below the global header on desktop and returns to normal
document flow on smaller screens.

## Entry Page Hierarchy

The current Notebook entry page hierarchy is:

1. Back to Notebook control
2. Entry-type eyebrow
3. Entry title
4. Summary
5. Status badge
6. Optional hero image, or a text-led hero when no hero media is supplied
7. Metadata grid
8. Optional wide feature visual after metadata when a diagram supports the
   entry structure
9. At-a-glance snapshot
10. Optional approved links
11. Narrative sections
12. Observations, decisions, callouts, code snippets and images when present
13. Limitations
14. Next steps
15. Related Notebook entries
16. Related Stories
17. Global Back to Top control

Only populated content renders. Do not add empty headings, placeholder copy,
fake diagrams or unsupported claims.

Entry metadata keeps the primary cards such as Type, Status, Organisation and
Period in the first responsive grid rows. Technologies render as a full-width
metadata panel below those cards, using semantic list markup and a responsive
four/three/two-column matrix rather than a narrow tag list.

Notebook entries may use compact milestone timelines when the project history
helps explain the engineering process. Timeline text must remain real semantic
HTML, not flattened into an image, and should stay lightweight enough that it
does not dominate the entry.

Decision-led entries should favour concise Decision / Why / Result structures
when explaining technology, architecture or operating-model choices.

## Container and Width System

The current Notebook entry width system is:

- Outer Notebook entry page: `max-w-[1120px]`
- Hero and summary area: full width of the outer entry page
- Entry summary text: `max-w-[760px]`
- Narrative article: `max-w-[900px]`

Notebook narrative content should remain readable and more compact than a
long-form project story. Do not create arbitrary competing widths for
individual entries.

Transparent PNG hero media is allowed when the approved asset benefits from the
dark hero surface. In that case the entry data should request a contained image
treatment so the asset is not cropped, clipped or placed on a white rectangle.
Transparent SVG diagrams may also render as wide, unframed feature visuals when
they are public-safe, accessible and support the entry structure after the
metadata. These diagrams should sit directly on the Notebook background,
preserve transparency and use the established site accent colour.

## Visual Hierarchy

Notebook pages use the shared site language:

- dark premium engineering background
- copper/gold accent via `accent-copper`
- foreground colour for major headings
- copper for labels, entry-type eyebrows and metadata
- muted secondary text for body copy
- restrained borders and surfaces
- no heavy glow effects, marketing decoration or oversized hero theatrics

The Notebook should feel like an engineering lab record and architecture
archive, not a blog feed.

## Technical Content

Code snippets may be rendered with semantic `pre` and `code` markup. Code
blocks must allow horizontal scrolling inside the block and must not widen the
mobile page. Do not add syntax-highlighting dependencies in this phase.

Only publish short public-safe excerpts. Do not publish proprietary code,
credentials, local machine details or large source files.

## Image Contract

Notebook images must live under:

```text
website/public/images/notebook/<entry-slug>/
```

Do not reference missing image files. Do not use stock or generated documentary
imagery as a substitute for real approved engineering media. If approved images
are absent, use the no-image treatment.

Current image roles are:

- card image: vertical Notebook index card only
- hero image: nested entry hero media
- feature visual: wide unframed diagram or visual chapter break after metadata
- narrative figures: section-specific evidence images with figure captions
- Open Graph image: static approved card/social image when supplied

Do not display all images consecutively as a gallery unless the template is
explicitly changed. Narrative figures should support the section they appear in.

## Accessibility Contract

Notebook pages must preserve:

- semantic headings
- meaningful alt text when images exist
- visible keyboard focus states
- semantic links and buttons
- no nested interactive elements
- status not represented by colour alone
- reduced-motion-safe transitions
- readable content without hover
- accessible external-link behaviour
- code blocks that do not break mobile width

## Responsive Contract

Review at approximately:

- 390 px
- 768 px
- standard desktop

Expected behavior:

- cards stack on mobile
- desktop index grid uses two columns where practical
- Technical Index is sticky only on desktop
- touch selection works without hover
- entry hero stacks cleanly
- metadata wraps without cramped text
- code blocks scroll internally
- no horizontal overflow

## Allowed Project-Specific Variation

Notebook entries may vary:

- entry type
- title and summary
- technologies and methods
- snapshot rows
- section count and order
- code snippets
- observations and decisions
- limitations and next steps
- images and captions
- source links

Entries should not independently change:

- dynamic routing
- publication gating
- landing-page card system
- Technical Index behaviour
- main width system
- metadata treatment
- image hierarchy
- shared navigation controls

Template-level changes require explicit approval and should update this
document.

## Initial Entry QA Checklist

- Compare the entry with `/notebook/sub-ghz-industrial-iot-sensor`.
- Confirm the status is correct.
- Confirm unsupported claims are omitted.
- Confirm any safety boundary is visible.
- Confirm images exist before referencing them.
- Confirm no private source material is copied into the public repository.
- Confirm tags appear in the Technical Index.
- Confirm desktop, tablet and mobile layouts.
- Confirm keyboard and touch interaction.
- Run `npm.cmd run lint`.
- Run `npm.cmd run build`.
