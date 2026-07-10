# Branch Strategy

## Purpose

This document records the current branch model for the engineering portfolio
repository. It reflects the real launch workflow in use now, not an ideal future
state.

## Current Branch Model

Active development branches:

```text
phase/*
```

Validated deployment branches:

```text
release/*
```

Temporary integration branches:

```text
sync/*
```

Urgent production fix branches:

```text
hotfix/*
```

`main` is not yet the current deployment source.

## Current Real Branches

- `phase/4-contact-page`: active development branch for the current launch-era
  site work.
- `release/v1-launch`: validated production deployment branch for Netlify.
- `sync/phase4-rc1`: clean integration branch used to synchronize RC1 release
  commits and add repository governance.

Current production release:

- Production branch: `release/v1-launch`
- Production commit: `856712d`
- Release fix commit: `f541737`

## Relationship Between phase/4-contact-page and release/v1-launch

`release/v1-launch` was created from the Phase 4 contact-page work and then
received release-candidate fixes for launch readiness.

The release branch is the production source. The phase branch is the ongoing
development source. Release-only fixes must be synchronized back into an
integration or development branch so future work does not reintroduce fixed
launch issues.

## phase/* Branches

Use `phase/*` branches for active development work by phase or feature area.

Rules:

- Development may happen here.
- Runtime changes should be reviewed and validated before release.
- Keep commits coherent and scoped.
- Do not assume a phase branch is production-ready.
- Do not let phase branches bypass release validation.

## release/* Branches

Use `release/*` branches for validated deployment states.

Rules:

- Netlify currently publishes `release/v1-launch`.
- Only release-ready commits and urgent production fixes belong here.
- Do not develop directly on a frozen release branch.
- Do not add new features after freeze unless explicitly approved as blockers.
- Do not force-push or rebase.
- Validate lint, build, routes, assets, contact, resume, mobile, custom domain,
  and HTTPS before and after production acceptance.

## sync/* Branches

Use `sync/*` branches for temporary integration and synchronization.

Rules:

- Use when release fixes must be brought back into development history.
- Use clean worktrees to avoid dirty active development folders.
- Move changes through cherry-picks, merges, or pull requests.
- Delete sync branches only after their work is merged or explicitly abandoned.

## hotfix/* Branches

Use `hotfix/*` branches for urgent production fixes when direct release branch
work would be too risky or needs review.

Recommended flow:

1. Branch from the current production commit.
2. Apply the smallest possible fix.
3. Validate lint, build, and affected routes.
4. Merge or cherry-pick into `release/v1-launch`.
5. Let Netlify publish after an approved push.
6. Synchronize the hotfix back into active development.
7. Record the fix in release notes.

## Branch Creation Rules

Create a branch from the correct source:

- New development phase: branch from the current accepted development branch.
- Release candidate: branch from the validated development commit.
- Hotfix: branch from the current production commit.
- Sync branch: branch from the target development or integration point.

Inspect before creating:

```powershell
git status
git branch --show-current
git log -8 --oneline --decorate
git worktree list
```

## Validation and Review Rules

Before a release branch is accepted:

- `git diff --check` passes.
- `npm.cmd run lint` passes from `website/`.
- `npm.cmd run build` passes from `website/`.
- Launch routes are manually checked.
- Assets, contact path, resume PDF, and mobile layouts are checked.
- Deferred Selected Work / Selected Systems scope remains hidden.
- The deployed branch and commit are confirmed.

Before a sync branch is merged or used as the new development baseline:

- Confirm release commits are present.
- Confirm no duplicate cherry-picks are introduced.
- Confirm runtime website files changed only through intended commits.
- Confirm governance documentation reflects the current branch model.

## Merge and Deletion Rules

- Prefer pull requests for branch review when using GitHub.
- Use cherry-picks for narrow release-to-development synchronization.
- Use merge commits only when preserving full branch context is valuable.
- Delete temporary `sync/*` and `hotfix/*` branches only after the owner confirms
  the work is complete and recoverable from Git history.
- Do not delete active `phase/*` or `release/*` branches without explicit owner
  approval.

## Branch Protection Recommendations

Recommended protections for `release/*`:

- Require pull request review.
- Require passing lint and build checks.
- Block force pushes.
- Restrict direct pushes to trusted maintainers.
- Require conversation resolution before merge.
- Require branch to be up to date if automated checks are added.

Recommended protections for future `main` production use:

- Require pull requests.
- Require status checks.
- Require signed or attributable commits if adopted.
- Block force pushes and branch deletion.

## Future main Migration

`main` may become the stable production branch later, but it is not the current
deployment source.

Before migrating production to `main`:

1. Decide the stable branch policy.
2. Update Netlify production branch settings.
3. Update release, repository, branch, and agent docs.
4. Protect `main`.
5. Validate a production deployment from `main`.
6. Tag the accepted production commit.

## Tagging Recommendations

After production acceptance, create an annotated release tag such as:

```text
v1.0.0
```

Only tag a commit after the owner accepts the production deployment. Record the
tag, branch, commit, and validation status in release notes.
