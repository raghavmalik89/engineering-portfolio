# AI Agent Guide

## Purpose

This guide defines how AI coding agents must work in this repository. It exists
to prevent accidental redesigns, production drift, unsupported claims, and
unreviewed Git operations.

## Mandatory Reading Order

Before editing, read:

1. `README.md`
2. `docs/AIAgentGuide.md`
3. `docs/RepositoryWorkflow.md`
4. `docs/BranchStrategy.md`
5. `docs/ReleaseWorkflow.md`
6. `docs/ReleaseNotes.md` when performing release work
7. `docs/Architecture.md`
8. `docs/BrandGuide.md`
9. `docs/DesignSystem.md` for visual or UI work
10. `docs/DevelopmentTracker.md` and `docs/DecisionLog.md` when planning scope

## Project Purpose

This project is a professional engineering portfolio and consulting-style
website for Raghav Malik.

Preserve this positioning:

```text
Product Systems Architect | Technical Lead | Product Delivery Specialist
```

The site should communicate systems architecture, technical leadership, product
delivery, industrial IoT, RF systems, electronics, mechatronics, validation, and
field deployment judgment.

Firmware is an enabling capability, not the primary professional identity.

## Current Launch Navigation

The current launch navigation is:

- Home
- Resume
- Stories
- Notebook
- Contact

Selected Work / Selected Systems remain deferred and hidden from launch
navigation and the Home page preview.

## Scope Control

For release, synchronization, and governance tasks:

- Do not redesign.
- Do not add features.
- Do not add routes.
- Do not change website content, styling, navigation, images, metadata, or
  deployment configuration unless explicitly required.
- Do not expose unfinished case studies.
- Do not expose confidential client, employer, site, or product details.
- Do not convert deferred scope into launch scope.

## Truth-Source Hierarchy

Use this hierarchy when information conflicts:

1. Current Git state and inspected files.
2. Current release notes and governance documents.
3. Architecture, branch, repository, and release workflow docs.
4. Brand, design system, decision log, and development tracker.
5. Agent prompts, generated docs, scaffold defaults, and memory.

Never invent project facts, release status, customer names, metrics, deployment
details, or case-study claims.

## Inspect Before Editing

Start with:

```powershell
git status
git branch --show-current
git log -8 --oneline --decorate
git worktree list
git remote -v
rg --files
```

Read relevant files before changing them. Prefer `rg` for search.

Before committing or handing off, show:

```powershell
git status
git diff --stat
git diff
```

For documentation-only tasks, inspect the documentation diff. For release tasks,
confirm runtime website files changed only through approved commits.

## Validation Requirements

For website-affecting work, run from `website/`:

```powershell
npm.cmd run lint
npm.cmd run build
```

For documentation-only work, still run:

```powershell
git diff --check
```

When requested by the task, run lint and build even if only docs changed,
because the repository state may include synchronized runtime commits.

Report validation results clearly.

## Documentation Requirements

Update documentation when changing:

- Repository structure.
- Branch strategy.
- Release workflow.
- Deployment source.
- Launch scope.
- Professional positioning.
- Agent rules.
- Major architecture, routing, content, or design decisions.

Do not duplicate full governance content inside `AGENTS.md`; use concise entry
points that link to the canonical docs.

## Git Rules

Allowed with normal care:

- `git status`
- `git branch --show-current`
- `git log`
- `git diff`
- `git show`
- `git worktree list`
- `git branch --contains`
- `git cherry-pick <commit>` when explicitly requested
- `git commit` when explicitly requested and validation passes

Require explicit approval:

- `git push`
- Deployment commands or hosting-provider actions
- Force-push
- Rebase
- Branch deletion
- Worktree removal
- File deletion outside the requested scope
- Destructive commands
- Dependency installation that requires network access

Never use without explicit approval:

- `git reset --hard`
- `git clean`
- Runtime-code conflict resolution during a release cherry-pick
- Manual copying between worktrees

If a cherry-pick conflict, merge conflict, or ambiguous production state occurs,
stop and report the exact files and Git state. Do not guess.

## Commit Rules

- Commit only requested, scoped changes.
- Use a clear conventional message when requested.
- Do not include unrelated files.
- Do not commit generated dependency or build output.
- Run required validation before committing.
- Show final status and commit hash after committing.

## Content and Positioning Rules

Preserve the professional identity:

```text
Product Systems Architect | Technical Lead | Product Delivery Specialist
```

Use grounded, evidence-based language. Avoid unsupported claims, inflated
metrics, generic resume phrasing, or invented project facts.

Do not expose confidential or unfinished case studies. Do not imply that
deferred Selected Work / Selected Systems content is live.

Engineering details should support the broader positioning: durable product
systems, technical leadership, validation, and real-world deployment.
