# Engineering Portfolio

Professional engineering portfolio and consulting-style website for Raghav Malik.

Core message:

> I design engineering systems that survive the real world.

## Repository Architecture

```text
engineering-portfolio/
|-- website/      # Next.js application
|-- docs/         # Project documentation, architecture, roadmap, tracker
|-- assets/       # Raw design and media assets
|-- scripts/      # Utility scripts
`-- .codex/       # Codex agents, skills, and prompts
```

The repository root is the project container. The Next.js application lives only
inside `website/`.

## Asset Structure

The `assets/` directory separates reference material from production-ready
website assets.

- `assets/design-references/` stores concept images, AI-generated mockups, wireframes, and visual references. These are not production assets.
- `assets/design-references/phase2-design-system/` stores approved Phase 2 visual references.
- `assets/design-system/` stores production-ready design system assets that may be used by the website.
- `assets/branding/` stores logo, icon, and brand-related assets.
- `assets/diagrams/` stores engineering diagrams and architecture visuals.
- `assets/photos/` stores general photography.
- `assets/projects/` stores project-specific assets.

## Status

Phase 0 foundation is complete.

Phase 1 website architecture foundation is in progress. The app is initialized
and currently contains route placeholders, architecture folders, and minimal
type/data/lib contracts.

## Next Step

Review the Phase 1 architecture skeleton before building final page content,
components, or visual design.
