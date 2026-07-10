# Repository Workflow

## Purpose

This document explains how this repository, its worktrees, and its branches are
used. It is a working guide for human engineers and AI coding agents.

The repository root is the engineering portfolio project container. The Next.js
application lives inside `website/`.

## Current Worktrees

Active development worktree:

```text
C:/Users/ragha/Documents/Engineering Project Directory/Web_dev/engineering-portfolio
```

Current role:

- Active development location.
- Uses `phase/4-contact-page` for current development history.
- May be dirty during normal development.
- Must not be modified by agents working in a clean integration worktree.

Release-candidate worktree:

```text
C:/Users/ragha/Documents/GITHUB Repo/Publish/Websites/engineering-portfolio-launch-rc
```

Current role:

- Release and production branch location.
- Uses `release/v1-launch`.
- Represents the validated launch source published by Netlify.
- Must remain narrow and release-focused.

Integration and synchronization worktree:

```text
C:/Users/ragha/Documents/GITHUB Repo/Publish/Websites/engineering-portfolio-dev-sync
```

Current role:

- Clean integration location.
- Uses `sync/phase4-rc1`.
- Used to synchronize release fixes and add governance documentation without
  touching the dirty active development worktree.

## Local Folders, Git Branches, and Remote Branches

A local folder is only a checkout location. A Git branch is the version history
checked out in that folder. A remote branch is the copy stored on GitHub under
`origin`.

Do not assume a folder name, local branch name, and remote branch name are the
same thing. Always inspect:

```powershell
git status
git branch --show-current
git worktree list
git remote -v
```

## Why Files Must Not Be Copied Manually

Manual copying between worktrees bypasses Git history and makes it difficult to
answer what changed, why it changed, and whether it was validated. It can also
overwrite uncommitted work in another worktree.

Move changes through Git:

- Commit on the source branch.
- Cherry-pick reviewed commits when a narrow synchronization is needed.
- Use pull requests when a branch should be reviewed before merge.
- Use revert commits for auditable rollback when appropriate.

## Source of Truth Rules

- Runtime website source lives in `website/`.
- Production launch source is `release/v1-launch`.
- Active development source currently lives on `phase/4-contact-page`.
- Integration work for post-release synchronization currently lives on
  `sync/phase4-rc1`.
- Governance documentation lives in `docs/` and root agent entry files.
- Raw reference material lives in `assets/`.
- Generated dependency and build output must not be treated as source.

When sources disagree, prefer this order:

1. Current Git history and branch state.
2. Release notes and governance documents.
3. Architecture and design documents.
4. Agent prompts and local notes.
5. Generated outputs and stale scaffold readmes.

## Repository Directory Overview

```text
engineering-portfolio/
|-- website/      # Next.js application and deployable web source
|-- docs/         # Architecture, design, release, repository, and agent docs
|-- assets/       # Raw design references and source media
|-- .codex/       # Codex agents, prompts, and skills
|-- README.md     # Project overview
|-- AGENTS.md     # Root AI-agent entry point
|-- LICENSE
`-- .gitignore
```

The `website/` directory owns application dependencies, routes, components,
data, public assets, and framework configuration.

## Documentation Ownership

- `docs/Architecture.md`: structure, route model, major technical decisions.
- `docs/DesignSystem.md`: visual and component design contract.
- `docs/BrandGuide.md`: positioning, tone, visual identity.
- `docs/DevelopmentTracker.md`: phase and task history.
- `docs/DecisionLog.md`: accepted decisions.
- `docs/ReleaseNotes.md`: release-specific notes and validation.
- `docs/ReleaseWorkflow.md`: release procedure and production controls.
- `docs/RepositoryWorkflow.md`: worktree, branch, and repository practices.
- `docs/BranchStrategy.md`: branch model and lifecycle.
- `docs/AIAgentGuide.md`: mandatory rules for AI coding agents.

Update the relevant document when changing structure, branch practices,
deployment assumptions, positioning, release rules, or agent behavior.

## Generated, Local-Only, and Ignored Files

Ignored files include dependencies, build output, environment files, logs,
editor files, OS files, temporary files, and local Aider files.

Examples:

- `node_modules/`
- `.next/`
- `out/`
- `dist/`
- `build/`
- `.env`
- `.env*.local`
- `*.tmp`
- `.aider*`

Do not commit local secrets, generated build output, dependency folders, or
editor state.

## Safe Inspection Commands

Use these commands before editing:

```powershell
git status
git branch --show-current
git log -8 --oneline --decorate
git worktree list
git remote -v
git diff --stat
rg --files
```

Use these commands before committing:

```powershell
git diff --check
git status
git diff --stat
```

From `website/`:

```powershell
npm.cmd run lint
npm.cmd run build
```

## Editing Rules

- Inspect before editing.
- Keep release tasks scoped to release and documentation work.
- Do not touch unrelated runtime files.
- Do not modify another worktree to solve a problem in this worktree.
- Stop on cherry-pick conflicts unless explicitly authorized to resolve them.
- Preserve professional positioning and launch scope.

## Removing a Temporary Worktree

Only remove a temporary worktree after its work is committed, synchronized, or
explicitly abandoned by the repository owner.

Procedure:

1. In the temporary worktree, confirm state:

   ```powershell
   git status
   git branch --show-current
   ```

2. From any repository worktree, list worktrees:

   ```powershell
   git worktree list
   ```

3. Remove the temporary worktree with an explicit path:

   ```powershell
   git worktree remove <path-to-temporary-worktree>
   ```

4. Prune stale worktree metadata only if needed:

   ```powershell
   git worktree prune
   ```

Do not remove an active development or production worktree unless the owner
explicitly requests it.
