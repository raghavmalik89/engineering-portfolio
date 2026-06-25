# Codex Prompt — Project Foundation

You are working inside the `engineering-portfolio` repository.

Create and verify the project foundation for Raghav Malik's engineering portfolio and consulting-style website.

## Goal
Set up the repository so it behaves like a professional engineering project, not just a Next.js app.

## Required Top-Level Structure

```text
engineering-portfolio/
│
├── website/                  # Next.js application; leave empty for now
├── docs/
│   ├── architecture/
│   ├── branding/
│   ├── roadmap/
│   ├── decision-log/
│   ├── meeting-notes/
│   ├── WebsiteRoadmap.md
│   ├── DevelopmentTracker.md
│   ├── DecisionLog.md
│   ├── BrandGuide.md
│   ├── Architecture.md
│   └── ContentChecklist.md
├── assets/
│   ├── illustrator/
│   ├── figma/
│   ├── photoshop/
│   ├── diagrams/
│   ├── photos/
│   └── videos/
├── scripts/
├── .codex/
│   ├── agents/
│   ├── prompts/
│   └── skills/
├── README.md
├── LICENSE
└── .gitignore
```

## Required Codex Files

Agents:

```text
.codex/agents/website-pm-agent.md
.codex/agents/frontend-engineer-agent.md
.codex/agents/content-editor-agent.md
```

Skills:

```text
.codex/skills/portfolio-website-skill.md
.codex/skills/nextjs-tailwind-skill.md
.codex/skills/engineering-content-skill.md
```

Prompts:

```text
.codex/prompts/00_project_foundation.md
```

## Rules
- Do not initialize Next.js yet.
- Keep `website/` empty.
- Do not add dependencies yet.
- Do not create `package.json` at repository root.
- Do not create `node_modules`.
- Update `docs/DevelopmentTracker.md` after changes.
- Update `docs/Architecture.md` if structure differs.
- Add decisions to `docs/DecisionLog.md` if you make any structural choices.

## Verification
After creating files:

1. Print the final tree.
2. Confirm that `website/` is empty.
3. Confirm all required docs exist.
4. Confirm all required agents and skills exist.
5. Summarize what changed.
6. Stop and wait for the next instruction.
