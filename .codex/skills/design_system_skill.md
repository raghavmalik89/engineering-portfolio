# Design System Skill

## Purpose

Use this skill when implementing or reviewing visual, layout, component, or
interaction work for Raghav Malik's engineering portfolio website.

The authoritative design system record is `docs/DesignSystem.md`.

## Core Direction

Build a calm, premium, industrial, technical interface with:

- Vercel-like refinement
- Braun-like structure and navigation discipline
- Japanese minimalism / Ikebana-inspired placement
- Engineering documentation clarity
- Dark navy + khaki / copper engineering palette

Avoid startup hype, gamer/cyberpunk visuals, decorative UI, excessive animation,
generic personal blog patterns, and resume-template appearance.

## Principles

Follow the seven design principles:

1. Function Before Decoration
2. Calm Confidence
3. Information Density Without Clutter
4. Consistency Over Creativity
5. Modular Construction
6. Ma / Meaningful Empty Space
7. Invisible Design

## Tokens

Use Design System v1.0 tokens from `docs/DesignSystem.md`.

Key palette:

- Background Primary: `#081321`
- Surface: `#101C2E`
- Surface Elevated: `#162338`
- Primary Text: `#F3F2EE`
- Secondary Text: `#C4C8D0`
- Muted Text: `#8E97A3`
- Copper Accent: `#C8B38A`
- Soft Beige: `#E6D7BE`
- Border: `#273347`

Use copper as an engineering material accent, not luxury gold. Target 90%
navy/neutral and 10% copper accent.

## Component Scope

Use the frozen component list in `docs/DesignSystem.md`. Do not introduce new
components without justification.

## Typography

Planned direction:

- UI: Geist, fallback Inter
- Technical/code: JetBrains Mono, fallback IBM Plex Mono

Implementation must account for the current deterministic-build font decision.
Do not reintroduce remote font fetching without revisiting the decision log.

## Motion

Motion must explain state, not entertain. Avoid parallax, scroll hijacking,
animated gradients, decorative particle systems, large page transitions, and
floating gimmicks.

## Accessibility

Meet WCAG AA minimums, support keyboard navigation, visible focus states,
semantic HTML, meaningful alt text, reduced motion, and large tap targets.
