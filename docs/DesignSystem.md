# Design System

## Status

Design System v1.0 is frozen for Phase 2. This document defines the approved
visual direction, design principles, tokens, component scope, and implementation
guardrails for later phases.

This is a documentation freeze only. It does not implement UI.

## Visual Identity

Approved direction:

- Vercel-like refinement
- Braun-like structure and navigation discipline
- Japanese minimalism / Ikebana-inspired placement
- Engineering documentation clarity
- Premium industrial product feel
- Dark navy + khaki / copper engineering palette

The site should feel:

- Professional
- Industrial
- Technical
- Calm
- Minimal
- Confident
- Premium
- Intentional
- Timeless

Avoid:

- Startup hype
- Gamer/cyberpunk visuals
- Excessive animation
- Decorative UI
- Generic personal blog style
- Resume-template appearance

## Seven Design Principles

1. Function Before Decoration
2. Calm Confidence
3. Information Density Without Clutter
4. Consistency Over Creativity
5. Modular Construction
6. Ma / Meaningful Empty Space
7. Invisible Design

## Color Tokens

Design System v1.0 tokens:

| Token | Value |
|---|---|
| Background Primary | `#081321` |
| Surface | `#101C2E` |
| Surface Elevated | `#162338` |
| Primary Text | `#F3F2EE` |
| Secondary Text | `#C4C8D0` |
| Muted Text | `#8E97A3` |
| Copper Accent | `#C8B38A` |
| Soft Beige | `#E6D7BE` |
| Border | `#273347` |
| Success | muted olive |
| Warning | muted amber |
| Error | muted brick red |

The accent is not luxury gold. It represents engineering materials:

- PCB copper
- Brass connectors
- SMA connectors
- Drafting material
- Precision machined components

Target usage:

```text
90% navy / neutral
10% copper accent
```

## Typography

Primary UI font:

```text
Geist
```

Fallback:

```text
Inter
```

Technical / code font:

```text
JetBrains Mono
```

Fallback:

```text
IBM Plex Mono
```

Phase 1 currently uses system fonts for deterministic builds under restricted
network conditions. Font implementation must be revisited before launch.

Typography hierarchy:

- H1: one per page
- H2: major sections
- H3: component titles/subsections
- Body: 16-18px
- Caption: muted metadata
- Mono: code, protocols, registers, filenames, packet formats, terminal text

## Spacing

Use an 8px base system.

Allowed values:

```text
4
8
12
16
24
32
48
64
96
128
```

No arbitrary spacing unless technically required.

## Layout

```text
Max content width: 1200px
Reading width: 700-760px, target 740px
Desktop grid: 12 columns
Tablet grid: 8 columns
Mobile grid: 4 columns
Border radius: 8px
Border: 1px subtle low-contrast
Shadows: minimal
```

Layout should feel centered, deliberate, and composed.

## Component Library

Reusable component list frozen for Phase 2:

- Navigation
- Footer
- Hero
- Section wrapper
- Section heading
- Primary button
- Secondary button
- Text link
- Base card
- Project card
- Case study card
- Timeline
- Technology badge
- Quote block
- Image gallery
- Diagram block
- Callout
- Metric card
- Resume section
- Notebook article card
- Decision card
- Contact panel
- Code block
- Breadcrumb

No new component should be introduced in future phases without justification.

## Quote Component

Approved as a static reusable component.

Rules:

- Fixed visual footprint
- One quote at a time
- Manual content updates only
- No randomization
- No automatic rotation
- No animation required
- Content can be updated monthly, quarterly, or manually as desired

## Icon Strategy

Use:

```text
Lucide
```

Rules:

- Outline icons only
- Consistent stroke width
- Minimal technical style
- No colorful icons
- No emoji style
- No cartoon style

Recommended concepts:

- Antenna
- PCB
- Microchip
- Satellite dish
- Cloud
- Factory
- Gear
- Signal
- Oscilloscope waveform
- Check circle
- Document
- Timeline node

## Imagery Strategy

Design reference images belong in
`assets/design-references/phase2-design-system/`. Production-ready design assets
belong in `assets/design-system/` or the relevant project, photo, or diagram
folder.

Prioritize:

1. Real hardware
2. Architecture diagrams
3. PCB photography
4. Field deployment
5. Test equipment
6. Mining systems
7. Engineering notebook sketches

Avoid:

- Generic office stock photos
- Corporate handshake imagery
- Decorative AI engineering scenes
- Fake futuristic visuals

## Motion

Motion must explain state, not entertain.

Allowed:

- Button hover
- Card hover
- Navigation underline transition
- Soft fade-in
- Accordion expansion
- Image zoom on click
- Timeline reveal
- Educational diagram motion where useful

Avoid:

- Parallax
- Scroll hijacking
- Animated gradients
- Particle effects as decoration
- Large page transitions
- Floating gimmicks

## Engineering Atmosphere Layer

Approved as optional.

Definition:

A subtle background layer of copper-toned signal nodes, topology lines, or
steel-grain atmosphere.

Rules:

- Extremely low contrast
- Engineering-inspired, not decorative
- Optional
- Must never reduce readability
- Must never compete with typography
- If animated, motion must be extremely slow and almost imperceptible
- Should feel like environmental lighting or engineering texture, not a JavaScript particle gimmick

Use terms like:

```text
Engineering Atmosphere Layer
Signal Nodes
Ambient engineering texture
```

Avoid calling it a generic particle system.

## Accessibility

Minimum:

- WCAG AA
- Keyboard navigation
- Visible focus states
- Strong contrast
- Large tap targets
- Semantic HTML
- Alt text for meaningful images
- Reduced motion support
- Do not rely only on color

## Responsive Design

Desktop is primary. Tablet should feel like a presentation surface. Mobile
should stack and simplify, but not hide important content.

## Future Scalability

Design system must support:

- Home page
- About page
- Work overview
- Project pages
- Case studies
- Resume page
- Contact page
- Engineering Notebook
- Future blog
- Future consulting/services pages
- Technical articles
- Downloads
