# Engineering Portfolio v1.1 Release Notes

## Release Identity

- Release name: Engineering Portfolio v1.1
- Release branch: `release/v1.1`
- Release status: validated release candidate, pending production deployment and owner acceptance
- Primary release record: v1.1

## Source And Branch Information

- Source development branch: `phase/5-post-launch`
- Approved source checkpoint: `4a1ae6c chore(content): publish approved stories and notebook entry`
- Final blocker fix commit: `4b12d3e fix(content): publish Sub-GHz entry and replace unsafe media`
- Release branch: `release/v1.1`
- Current production rollback branch: `release/v1-launch`
- Current production rollback commit: `28411f8 fix: restore particle links and mouse repulsion`

Historical v1-launch references remain relevant for rollback and production
continuity. v1.1 is the current release candidate documented here.

## Included Changes

- Reusable Engineering Stories architecture.
- SmartRoller engineering story.
- GET Vision engineering story.
- Reusable Engineering Notebook architecture.
- Sub-GHz Industrial IoT Sensor Platform Notebook entry.
- Building an Engineering Portfolio as a Product Notebook entry.
- Homepage capability cards linked to SmartRoller and GET Vision evidence.
- Story hero-media presentation refinement.
- Governance and AI-agent documentation.
- Existing Netlify deployment and production visual fixes preserved.
- GET Vision media replacement at
  `website/public/images/stories/get-vision/image_3.webp` with a
  publication-safe version after branch-preview QA found a copyright/IP exposure
  concern.
- The GET Vision image replacement retained the same public asset path, so no
  Story data or layout change was required.

## Published Routes

The following routes were confirmed in production mode:

- `/`
- `/resume`
- `/stories`
- `/stories/smartroller`
- `/stories/get-vision`
- `/notebook`
- `/notebook/sub-ghz-industrial-iot-sensor`
- `/notebook/engineering-portfolio-development`
- `/contact`

Production build output includes `/notebook/sub-ghz-industrial-iot-sensor`.

## Deferred Content

- Selected Work / Selected Systems remain deferred from primary navigation.
- Additional unfinished Stories and Notebook entries remain future work.
- Advanced SEO and analytics remain deferred.
- `robots.txt` and sitemap implementation remain deferred.

## Validation Evidence

Validation completed in the clean release worktree:

- `npm install` completed.
- `npm.cmd run lint` passed.
- `npm.cmd run build` passed.
- `git diff --check` passed.
- Production-mode server started on port `3004`.
- Raghav manually tested all required routes and visual presentation.
- Working tree remained clean before release-note editing.
- Branch-preview QA found and resolved Sub-GHz production publication gating.
- Branch-preview QA found and resolved unsafe GET Vision media by replacing
  `website/public/images/stories/get-vision/image_3.webp`.

## Known Non-Blocking Limitations

- Two moderate `npm audit` findings.
- `npm install` script approval warnings for `sharp` and `unrs-resolver`.
- No `robots.txt` or sitemap implementation yet.
- Advanced SEO and analytics remain deferred.
- Selected Work / Selected Systems remain deferred from primary navigation.
- Additional Stories and Notebook entries remain future work.
- Exact mobile screenshot archive is not included in this release record.

## Deployment Procedure

1. Confirm the release branch is `release/v1.1`.
2. Confirm the release branch points at the accepted v1.1 commit.
3. Push only after Raghav explicitly approves deployment preparation.
4. Verify the Netlify deploy commit and branch.
5. Verify `raghavmalik.com.au`.
6. Verify HTTPS.
7. Smoke-test all published routes.
8. Verify `www` redirect behavior.
9. Verify images and media.
10. Confirm `/notebook/sub-ghz-industrial-iot-sensor` is published.

Do not deploy, push, or tag from an AI-agent session without explicit approval.

## Rollback Point

- Rollback branch: `release/v1-launch`
- Rollback commit: `28411f8 fix: restore particle links and mouse repulsion`

## Post-Production Acceptance Checklist

- Netlify deploy commit and branch verified.
- `raghavmalik.com.au` verified.
- HTTPS verified.
- `/` smoke-tested.
- `/resume` smoke-tested.
- `/stories` smoke-tested.
- `/stories/smartroller` smoke-tested.
- `/stories/get-vision` smoke-tested.
- `/notebook` smoke-tested.
- `/notebook/sub-ghz-industrial-iot-sensor` smoke-tested.
- `/notebook/engineering-portfolio-development` smoke-tested.
- `/contact` smoke-tested.
- `www` redirect verified.
- Images and media verified.
- GET Vision publication-safe media verified at the unchanged public asset path.
- Raghav accepts production.

## Tagging Status

- Tag `v1.1.0` has not been created.
- Create `v1.1.0` only after Raghav accepts production.
