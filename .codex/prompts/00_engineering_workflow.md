# Engineering Workflow Standard

## Purpose

This document defines the mandatory workflow every implementation thread must
follow before making changes in the Engineering Portfolio repository.

Future prompts should reference this document instead of repeating the full
process. The audience is both AI agents and human engineers.

This repository is treated as an engineering product, not a simple website
project. Work should follow disciplined product-development habits similar to
embedded systems, firmware, and field-deployed engineering programs.

## 1. Philosophy

Follow these principles:

- Understand before changing.
- Architect before implementing.
- Reuse before creating.
- Question before assuming.
- Explain before committing.
- Documentation before implementation.
- Small, logical commits.
- Maintainability over cleverness.

Engineering quality matters more than immediate output. Implementation should be
deliberate, reviewable, and consistent with the project record.

Do not treat AI as an autonomous code generator. Treat AI as a senior engineer
joining an existing product team: read the project, respect prior decisions,
identify conflicts, explain trade-offs, and keep changes scoped.

## 2. Project Authority

Authority flows from project-level decisions to implementation details.

Hierarchy:

1. Master PM
2. Architecture
3. Design System
4. Specialist Thread
5. Codex Implementation

Implementation threads must not override higher-level project decisions.

Authoritative records include:

- `docs/Architecture.md`
- `docs/DecisionLog.md`
- `docs/DesignSystem.md`
- `docs/DevelopmentTracker.md`
- `docs/WebsiteRoadmap.md`
- Relevant `.codex/agents/` files
- Relevant `.codex/skills/` files

If implementation reveals a conflict:

1. Identify the issue.
2. Explain the conflict.
3. Recommend options.
4. Wait for approval before changing the higher-level direction.

## 3. Engineering Workflow

### Phase A - Repository Review

Before modifying anything:

- Read relevant documentation.
- Read relevant Codex agents.
- Read relevant Codex skills.
- Review architecture and decision log.
- Review the design system if UI, layout, component, styling, imagery, or motion
  is involved.
- Inspect the current implementation.
- Check `git status --short`.

Do not modify files during Phase A.

### Phase B - Understanding

Explain the current understanding of:

- The task.
- The objective.
- Assumptions.
- Architectural constraints.
- Design constraints.
- Risks.
- Relevant existing files and patterns.

Identify ambiguities before implementation. If assumptions would materially
change architecture, scope, content safety, or design direction, stop and ask for
clarification.

### Phase C - Implementation Plan

Produce a concise plan covering:

- Implementation strategy.
- Files to modify.
- Files to create.
- Existing components, types, data, routes, docs, or assets to reuse.
- Risks.
- Expected technical debt, if any.
- Validation steps.

If major architectural changes are required, stop and request approval before
implementing.

### Phase D - Implementation

Implement only the approved scope.

Rules:

- Avoid unnecessary refactoring.
- Keep components reusable.
- Prefer existing patterns.
- Avoid scope creep.
- Do not add dependencies unless explicitly approved.
- Do not move application boundaries.
- Do not expose confidential project details.
- Keep changes small enough to review.

### Phase E - Engineering Review

Self-review against:

- Architecture.
- Decision log.
- Design system.
- Accessibility.
- Responsiveness.
- Maintainability.
- Scope compliance.
- Code quality.
- Content safety.
- Build and lint expectations.

Fix only issues directly related to the task. Do not chase unrelated refactors.

### Phase F - Final Report

Always provide:

- Files created.
- Files modified.
- Components created.
- Documentation updated.
- Validation results.
- Git status summary.
- Recommended commit message.
- Summary for Master PM.
- Recommended Memory Keeper update.

If validation was not run, explain why.

## 4. Protected Files

Implementation threads should not modify higher-level project documents unless
explicitly instructed.

Protected examples:

- `README.md`
- `docs/Architecture.md`
- `docs/WebsiteRoadmap.md`
- `docs/DecisionLog.md`
- `docs/DevelopmentTracker.md`
- `docs/DesignSystem.md`
- `docs/Phase2-DesignFreeze.md`
- `.codex/agents/*`
- `.codex/skills/*`
- `.codex/prompts/*`

These files define project authority and governance. Update them only when the
task explicitly requires project-record changes, or when an approved
implementation changes architecture, routing, content model, design system,
workflow, or roadmap.

## 5. Definition of Done

Every implementation task should finish with:

- Scope completed.
- Documentation updated where required.
- Reusable implementation.
- No unnecessary files modified.
- Project still builds, where build validation is applicable.
- Lint/type checks run, where applicable.
- Git status reviewed.
- Ready for human review and commit.

For documentation-only tasks, validation may be limited to file review and git
status.

## 6. Engineering Mindset

This repository follows engineering discipline similar to embedded systems and
product development.

Good implementation behavior:

- Read before editing.
- Preserve boundaries.
- Prefer boring, maintainable structure.
- Keep evidence in docs.
- Make reversible decisions.
- Record meaningful decisions.
- Optimize for future engineers and future AI threads.

Poor implementation behavior:

- Generating code before understanding the repository.
- Inventing components without checking the design system.
- Overriding architecture from inside an implementation task.
- Adding dependencies casually.
- Mixing content, design, architecture, and implementation changes without need.
- Treating placeholder copy as final content.

AI agents and human engineers should behave like senior engineers joining an
existing product team: understand the system, respect the record, make scoped
changes, and leave the repository easier to continue.
