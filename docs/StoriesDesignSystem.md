# Stories Design System and Template Contract

## Purpose

The Stories section is a long-term engineering project archive. It presents
project-level narratives that can span different companies, industries and
technical domains while preserving one consistent visual and structural system.

Stories should demonstrate systems thinking, technical leadership, validation,
field deployment reality and product delivery. Project-specific content may
vary, but the shared story template should remain consistent unless Raghav
explicitly approves a template-level change.

This document describes the current design contract. It is not a lifetime
changelog; Git history remains the source for historical changes.

## Canonical Reference

- Canonical route: `/stories/smartroller`
- Dynamic template route: `/stories/[slug]`
- Canonical implementation: SmartRoller

SmartRoller is the current visual and structural baseline for future engineering
stories. Future agents must inspect the live/current SmartRoller route and the
reusable components before changing or creating story pages. Do not rely only on
old prompts, screenshots or copied markup.

## Required Future-Agent Workflow

For every new story:

1. Read the normal repository and website governance documents.
2. Read `docs/StoriesDesignSystem.md`.
3. Inspect `/stories/smartroller`.
4. Inspect `website/app/stories/[slug]/page.tsx`.
5. Inspect reusable components under `website/components/stories/`.
6. Inspect `website/data/stories.ts`, `website/data/locations.ts` and
   `website/types/story.ts`.
7. Preserve the shared template before adding project-specific content.
8. Run `npm.cmd run lint` and `npm.cmd run build` from `website/`.
9. Review the new story beside SmartRoller at the same breakpoints.

## Page Hierarchy

The current nested story page hierarchy is:

1. `StoryBackLink` returning to `/stories`
2. `StoryHero`
3. Company eyebrow
4. Story title
5. Hero proposition when present
6. Hero summary
7. Hero image and caption when present
8. `StoryMetadata`
9. Metadata grid
10. Project at a glance
11. Official company or product link card when present
12. Narrative article
13. Story sections
14. Inline figures and captions
15. Gallery when present
16. Related stories
17. Global `BackToTop`

Only populated sections render. Empty narrative headings, placeholder copy and
empty image frames are not part of the template.

## Container and Width System

The current nested story page width system is:

- Outer nested story page: `max-w-[1120px]`
- Hero and summary area: full width of the outer nested story page
- Hero proposition and summary text: `max-w-[760px]`
- Narrative article: `max-w-[900px]`
- Empty-story fallback: `max-w-[900px]`
- Related stories wrapper: `max-w-[900px]`

Design principle:

- Project context and summary blocks may use the wider page container.
- Narrative content uses a controlled reading width.
- The reading column must not become unnecessarily narrow on large desktop
  displays.
- Story-specific implementations must not introduce arbitrary competing widths.
- Do not widen the outer page beyond the current `max-w-[1120px]` story page
  container without a deliberate template-level decision.

On mobile and tablet, these width caps collapse naturally through `w-full` and
page padding.

## Visual Hierarchy

Stories use the existing dark premium engineering aesthetic:

- Dark background and restrained elevated surfaces
- Copper/gold accent from the existing `accent-copper` token
- Foreground colour for major headings
- Copper for small uppercase labels, eyebrows and key metadata labels
- Muted secondary text for supporting copy and long-form body text
- Subtle borders and surfaces
- No excessive gradients, glow effects or marketing-style decoration

The page should feel like an engineering archive, not a blog template, travel
page, dashboard or marketing landing page.

## Hero System

The current hero uses a responsive two-column grid on large screens:

- Left column: company eyebrow, title, proposition and summary
- Right column: hero figure when an approved image exists
- Hero image container: bordered surface with `aspect-[4/3]`
- Hero image uses `next/image`, `fill`, `object-cover` and a responsive
  `sizes` value
- Hero image captions sit below the image inside the same bordered figure
- Missing images render a restrained "Images pending" surface

On smaller screens the hero stacks. Every story image must have meaningful alt
text. The story title remains the strongest visual element, with the
proposition below it and summary text below the proposition.

## Metadata and Project at a Glance

The metadata system renders:

- Company
- Role
- Period
- Footprint
- Domains
- Technologies

The Project at a glance panel renders snapshot rows from story data. Current
SmartRoller rows include my role, hands-on scope, technical domains, product
value and commercial status.

Metadata labels use compact uppercase copper styling through shared story
typography utilities. Borders, spacing and alignment should remain consistent
across future stories.

## Official Company/Product Links

Official links render as text-based external-link cards through
`StoryExternalLinks`.

Current placement:

- Inside `StoryMetadata`
- After Project at a glance
- Before the narrative article
- Full width of the project-summary container

External links open in a new tab with safe `rel="noopener noreferrer"` behavior
and include accessible new-tab text. Use these cards only when an official
public company or product page exists. Do not scrape, hotlink or embed company
imagery.

## Narrative System

Narrative sections use approved story copy and may be first-person when the
story source supports it.

Current narrative treatment:

- Narrative article width: `max-w-[900px]`
- Section separators: subtle top border and top padding
- Section headings: foreground, semibold, `text-2xl`
- Paragraphs: muted secondary text, comfortable line height and vertical gaps
- Inline figures: bordered surface with captions
- Portrait inline images use `aspect-[3/4]`
- Landscape inline images use `aspect-[4/3]`
- Gallery images use a two-column grid from the small breakpoint when present

Do not render empty sections, lorem ipsum, unsupported technical claims,
unsupported commercial outcomes, confidential details or placeholder media.

## Navigation Controls

### Back to Stories

Nested story pages use the reusable `StoryBackLink` component. It renders a
compact link to `/stories` with:

- Visible label: "Back to Stories"
- Inline left-arrow SVG
- Copper-accent arrow
- Subtle surface and border treatment
- Hover and keyboard-focus states
- Reduced-motion-safe icon movement

### Back to Top

`BackToTop` is global and mounted from the root layout. It:

- Appears after meaningful scroll depth (`window.scrollY > 520`)
- Uses an accessible `aria-label="Back to top"`
- Scrolls smoothly unless reduced motion is preferred
- Uses immediate scrolling for reduced-motion users
- Uses a fixed lower-right placement
- Uses a restrained rounded-square dark surface
- Uses a double upward-chevron inline SVG

### Global Navigation

Primary navigation is handled by `PrimaryNavigationLinks`.

Current behavior:

- Normal links are muted via `text-text-secondary`
- Hover, focus and active states use `accent-copper`
- Hover and focus scale links to `scale-[1.06]`
- Touch/active feedback uses `active:scale-[1.03]`
- Current route uses `aria-current="page"`
- Current route remains copper, semibold and underlined
- Underlines are thin copper lines positioned out of normal layout flow
- Invisible semibold labels reserve width to avoid layout shift
- Motion uses `duration-200` and `motion-reduce:transition-none`

## Responsive Contract

Review future story pages at approximately:

- 390 px
- 768 px
- Standard desktop
- Large desktop

Expected behavior:

- Hero stacks below large desktop sizes and uses the two-column hero on large
  screens.
- Metadata grid uses one column on mobile, two columns from the small
  breakpoint and three columns on large screens.
- Project cards on the Stories landing page stack on mobile and use text plus
  right-side image on large screens when a card image exists.
- Engineering Footprint sits in normal document flow on smaller screens and is
  sticky in the supporting desktop column.
- Narrative content remains full-width within mobile padding and capped at
  `max-w-[900px]` on wider screens.
- Primary navigation wraps when needed without horizontal overflow.
- Touch interactions do not depend on hover-only behavior.
- No story page should introduce horizontal overflow.

## Accessibility Contract

Stories must preserve:

- Semantic headings
- Meaningful image alt text
- Visible keyboard focus states
- No hover-only essential information
- Reduced-motion support
- Accessible external links
- Accessible Back to Top name
- Sufficient text contrast
- Flags accompanied by written country or location names

Interactive project and country relationship controls must remain keyboard
operable and readable when inactive or subdued.

## Publication and Content Safety

Story statuses are:

- `planned`
- `draft`
- `review`
- `published`

Production must expose full nested story pages only for `published` stories.
Unpublished nested story URLs return `notFound()` in production. Local
development may expose unpublished story pages for drafting and review.

SmartRoller currently remains `review` unless separately approved. Company/IP
review is a content workflow and must not be bypassed through visual-template
changes.

## Allowed Project-Specific Variation

Future stories may vary:

- Title
- Company
- Period
- Role
- Summary
- Countries
- Domains and technologies
- Narrative sections
- Number and orientation of photographs
- Captions
- Official external link
- Related stories

Future stories should not independently change:

- Global story layout
- Primary width system
- Typography hierarchy
- Metadata treatment
- Navigation-control design
- Publication gating
- Image conventions
- Shared component behavior

Any such change requires explicit approval as a template-level change.

## Template Change Control

SmartRoller establishes the current baseline. Template-wide changes must be
tested against SmartRoller and at least one additional story when another
complete story is available.

A new story must not silently redefine the shared template. Deliberate template
changes should update `docs/StoriesDesignSystem.md`. Minor copy changes and
project-data changes do not require design-document updates.

## Future Story QA Checklist

- Compare the page with `/stories/smartroller`.
- Confirm widths match the established template.
- Confirm labels use copper correctly.
- Confirm images and captions are correct.
- Review mobile, tablet, standard desktop and large desktop.
- Confirm publication status is correct.
- Confirm official external links are safe and public.
- Confirm narrative sections are populated and ordered.
- Confirm no accidental IP or confidential detail disclosure.
- Run `npm.cmd run lint`.
- Run `npm.cmd run build`.
