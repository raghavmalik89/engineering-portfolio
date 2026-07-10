# v1-launch RC1 Release Notes

## Release

- Release name: v1-launch RC1
- Branch: release/v1-launch
- Base branch: origin/phase/4-contact-page
- Date: 2026-07-10

## Latest Commits Included

- f541737 fix: disable deferred selected systems preview for launch

## What Changed In RC1

- Preserved the launch navigation scope: Home, Resume, Stories, Notebook, Contact.
- Kept Selected Work / Selected Systems deferred and hidden from Home and primary navigation.
- Confirmed the improved hero image is referenced by `components/sections/HeroSection.tsx` at `/images/hero/hero-pcb-enclosure-concept.png`.
- Confirmed the engineering philosophy visual is referenced by `components/visual/PhilosophyImagePanel.tsx` at `/images/philosophy/selected.svg`.
- Included launch media updates:
  - `website/app/favicon.ico`
  - `website/public/images/hero/hero-pcb-enclosure-concept.png`
  - `website/public/images/philosophy/selected.svg`

## Validation

- `npm.cmd run lint`
- `npm.cmd run build`

Validation result: passed.

## Known Deferred Items

- Selected Work / Selected Systems
- Full case studies
- Advanced SEO/analytics
- Future Notebook/Stories expansion

## Launch Blockers Remaining

- None identified in RC1 validation.

## Next Steps

- Push `release/v1-launch`
- Deploy Netlify preview
- QA routes
- Connect domain after preview passes
