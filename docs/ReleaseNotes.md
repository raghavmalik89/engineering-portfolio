# Engineering Portfolio v1.1 Release Notes

## Release Identity

- Release name: Engineering Portfolio v1.1
- Release branch: `release/v1.1`
- Release status: validated release candidate, pending production deployment and owner acceptance
- Primary release record: v1.1

## Source And Branch Information

- Source development branch: `phase/5-post-launch`
- Approved source checkpoint: `4a1ae6c chore(content): publish approved stories and notebook entry`
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
- Building an Engineering Portfolio as a Product Notebook entry.
- Homepage capability cards linked to SmartRoller and GET Vision evidence.
- Story hero-media presentation refinement.
- Governance and AI-agent documentation.
- Existing Netlify deployment and production visual fixes preserved.

## Published Routes

The following routes were confirmed in production mode:

- `/`
- `/resume`
- `/stories`
- `/stories/smartroller`
- `/stories/get-vision`
- `/notebook`
- `/notebook/engineering-portfolio-development`
- `/contact`

## Intentionally Gated And Deferred Content

- `/notebook/sub-ghz-industrial-iot-sensor` remains review-gated and unpublished.
- Expected production result for `/notebook/sub-ghz-industrial-iot-sensor`: `404` while status remains `review`.
- Selected Work / Selected Systems remain deferred from primary navigation.
- Additional Stories and Notebook entries remain future work.
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
10. Confirm `/notebook/sub-ghz-industrial-iot-sensor` remains gated with the expected production `404`.

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
- `/notebook/engineering-portfolio-development` smoke-tested.
- `/contact` smoke-tested.
- `www` redirect verified.
- Images and media verified.
- `/notebook/sub-ghz-industrial-iot-sensor` confirmed gated.
- Raghav accepts production.

## Tagging Status

- Tag `v1.1.0` has not been created.
- Create `v1.1.0` only after Raghav accepts production.
