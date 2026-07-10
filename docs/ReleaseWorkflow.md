# Release Workflow

## Purpose

This document defines the release process for the engineering portfolio website.
It is intended for human engineers and AI coding agents working on launch,
hotfix, and post-release synchronization tasks.

The release process protects production by keeping development work, release
candidate work, and production deployment branches separate.

## Release Principles

- Production changes must come from reviewed Git commits, not manual file copy.
- Release branches must stay narrow, validated, and easy to roll back.
- Netlify publishes from `release/v1-launch`.
- The custom domain is `raghavmalik.com.au`.
- Do not deploy from a dirty working tree.
- Do not develop directly on a frozen release branch.
- Selected Work / Selected Systems remain deferred and hidden for the current
  launch scope.

## Current Production Source

- Hosting provider: Netlify
- Production branch: `release/v1-launch`
- Production commit at launch: `856712d`
- Release fix commit: `f541737`
- Custom domain: `raghavmalik.com.au`

Netlify is configured to publish the Next.js application from the repository
using the production branch above. Do not change deployment configuration during
release governance or synchronization work.

## Release Flow

1. Development happens on an active `phase/*` branch.
2. A clean release-candidate worktree is created for release validation.
3. Approved changes are moved into the release candidate through Git commits,
   cherry-picks, or pull requests.
4. The release candidate is validated locally with install, lint, build, and
   route checks.
5. The release branch is published by Netlify after it is pushed by an approved
   human operator.
6. The production custom domain and HTTPS certificate are checked after deploy.
7. Release commits are synchronized back into the active development or
   integration branch so future work does not regress production fixes.

## Safe Git Commands

Inspection commands:

```powershell
git status
git branch --show-current
git log -8 --oneline --decorate
git worktree list
git remote -v
git diff --stat
git diff --check
git diff -- docs AGENTS.md website/AGENTS.md website/CLAUDE.md
```

Containment and history checks:

```powershell
git branch --contains <commit>
git merge-base --is-ancestor <commit> HEAD
git show --stat --oneline <commit>
```

Moving reviewed commits:

```powershell
git cherry-pick <commit>
```

Creating a release branch from a validated source:

```powershell
git switch <validated-source-branch>
git switch -c release/v1-launch
```

Creating a clean release candidate worktree:

```powershell
git worktree add <path-to-release-worktree> release/v1-launch
```

Do not use `git reset --hard`, `git clean`, force-push, rebase, or destructive
file deletion during release work unless the repository owner explicitly
approves the exact action.

## Local Validation

Run from `website/` unless stated otherwise:

```powershell
npm install
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
```

Use `npm install` to restore dependencies when `node_modules/` is absent or
stale. Use `npm.cmd` on Windows for scripted validation.

Before validation, confirm the repository is not dirty except for the intended
release changes:

```powershell
git status
```

## QA Checklist

Validate these routes for the launch scope:

- `/`
- `/resume`
- `/stories`
- `/notebook`
- `/contact`

Confirm these deferred areas stay hidden from primary launch navigation and the
Home page:

- Selected Work
- Selected Systems
- Full case studies

Asset checks:

- Hero image renders.
- Philosophy visual renders.
- Favicon renders.
- Resume PDF link resolves to `/resume/Raghav_Malik_CV.pdf`.
- No missing production images or broken public asset paths.

Contact checks:

- Contact page renders without layout breakage.
- Email and external links are correct.
- Professional positioning is preserved.

Mobile checks:

- Header and navigation fit on narrow screens.
- Home, Resume, Stories, Notebook, and Contact remain readable.
- No text overlaps, clipped controls, or hidden primary content.

## Netlify Deployment Configuration

Netlify automatically publishes the configured production branch:

```text
release/v1-launch
```

Release work must not alter Netlify configuration unless the task explicitly
requires deployment configuration work. Validate the build locally before any
human-approved push to the production branch.

## Domain and HTTPS QA

After Netlify publishes a validated production commit, check:

- `https://raghavmalik.com.au` resolves.
- HTTPS certificate is valid.
- The apex domain and any configured `www` behavior are correct.
- Published pages match the expected commit.
- No stale preview deployment is being treated as production.

## Production Branch Controls

- `release/v1-launch` is the production source branch for the current launch.
- Only validated release commits or urgent hotfixes belong on it.
- Do not add features directly to the release branch.
- Do not use the release branch as an active development branch.
- Do not push from an AI agent unless the repository owner explicitly approves
  that exact push.

Recommended controls:

- Require pull request review for production branches.
- Require passing lint and build before merge.
- Disable force pushes.
- Restrict who can push to `release/*`.
- Require signed or clearly attributable commits if the repository owner adopts
  that policy.

## Release Freeze Rules

During a release freeze, only these changes are allowed:

- Launch-blocking fixes.
- Validation fixes required for build, route, asset, contact, resume, or mobile
  correctness.
- Documentation that records the release state.
- Post-release synchronization commits that prevent regressions.

Do not add redesigns, new routes, new content areas, analytics, case studies,
SEO experiments, visual experiments, or dependency changes during a freeze
unless they are explicitly classified as launch blockers.

## Launch Blockers and Non-Blockers

Launch blockers:

- Build failure.
- Lint failure.
- Broken launch route.
- Broken primary navigation.
- Broken resume PDF link.
- Broken contact path or incorrect contact information.
- Missing required production asset.
- Mobile layout failure on launch routes.
- Exposure of confidential, unfinished, or deferred case-study content.
- Selected Work / Selected Systems visible in launch navigation or Home preview.
- Wrong production branch or wrong deployed commit.
- Custom domain or HTTPS failure.

Non-blockers unless explicitly escalated:

- Future case-study expansion.
- Advanced SEO and analytics.
- Consulting page expansion.
- Newsletter, CMS, RSS, or blog-system enhancements.
- Cosmetic refinements that do not affect launch credibility or usability.

## Rollback Procedure

Rollback must use a previously validated Git commit or a previously validated
Netlify deploy.

Preferred Git rollback path:

1. Identify the last known-good production commit.
2. Confirm it was validated and deployed successfully.
3. Move `release/v1-launch` back only through an approved revert or branch update
   procedure.
4. Re-run lint, build, and critical route QA.
5. Let Netlify publish the approved production branch state.
6. Verify the custom domain and HTTPS after deployment.

Netlify rollback path:

1. Select the previously validated deploy in Netlify.
2. Confirm the deploy commit and branch.
3. Restore that deploy only with owner approval.
4. Record the rollback reason and follow-up Git correction in release notes.

Do not invent a new emergency fix directly on production if a known-good deploy
can restore service faster and more safely.

## Post-Release Synchronization

After production acceptance:

- Record the release in `docs/ReleaseNotes.md`.
- Synchronize release-only fixes back into the active development or sync branch.
- Confirm the active development branch contains production fixes.
- Update governance docs if the branch model or deployment source changes.
- Consider creating a tag such as `v1.0.0` after owner acceptance.

Post-release synchronization must use Git commits, cherry-picks, or reviewed
pull requests. Do not copy files manually between worktrees.
