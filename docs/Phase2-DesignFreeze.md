# Phase 2 - Design Freeze

## Status

Phase 2 is closed as a documentation and decision freeze.

No UI implementation was performed as part of this closeout. The purpose of
Phase 2 was to define the design system direction before building pages.

## Frozen Decisions

- Visual identity: Vercel-like refinement, Braun-like structure, Japanese
  minimalism, engineering documentation clarity, premium industrial product
  feel, and dark navy + khaki / copper palette.
- Design principles: Function Before Decoration, Calm Confidence, Information
  Density Without Clutter, Consistency Over Creativity, Modular Construction,
  Ma / Meaningful Empty Space, and Invisible Design.
- Color tokens: documented in `docs/DesignSystem.md`.
- Typography direction: Geist / Inter for UI and JetBrains Mono / IBM Plex Mono
  for technical text, with implementation deferred until reliable build strategy
  is selected.
- Spacing: 8px base system with approved values only.
- Layout: 1200px max content width, 740px target reading width, 12/8/4 column
  desktop/tablet/mobile grids, 8px radius, subtle borders, minimal shadows.
- Component list: frozen in `docs/DesignSystem.md`; additions require
  justification.
- Quote component: static, manual, one quote at a time.
- Icons: Lucide outline icon strategy.
- Imagery: real hardware, architecture diagrams, PCB photos, field deployment,
  test equipment, mining systems, and notebook sketches.
- Motion: state-explaining only, no entertainment motion.
- Engineering Atmosphere Layer: optional, subtle, low-contrast, engineering
  texture only.
- Accessibility: WCAG AA minimum.

## Implementation Guardrails

- Do not add new components outside the frozen component list without
  justification.
- Do not introduce decorative animation or startup-style visuals.
- Do not use generic stock imagery as a substitute for engineering evidence.
- Do not reintroduce remote font fetching without revisiting the font strategy
  decision.
- Do not hide important content on mobile.

## Next Phase

Phase 3 may begin implementing MVP pages using this frozen design system.
