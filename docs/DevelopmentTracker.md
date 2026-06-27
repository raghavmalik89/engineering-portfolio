# Development Tracker

## Project

Engineering Portfolio / Consulting Website

## Owner

Raghav Malik

## Project Purpose

Build a professional engineering portfolio and consulting-style website that
communicates systems architecture, product engineering, industrial IoT,
embedded/RF systems, field deployment experience, and technical leadership.

Core message:

> I design engineering systems that survive the real world.

## Current Phase

### Phase 3 - Home Page

Status: Complete

Goal:
Implement the Home page using the frozen Phase 2 design system while keeping the
scope limited to the Home page entry experience.

Phase 0 project foundation is complete. Git and the Next.js app are initialized.
Phase 1 website architecture foundation is complete. Phase 2 design system is
closed as documentation only. Phase 3 Home Page implementation is complete with
modular Home sections, reusable card/common components, scoped navigation, and a
static Engineering Atmosphere Layer.

## MVP Objective

The MVP should allow a hiring manager, technical director, recruiter, or
potential consulting client to understand Raghav's engineering capability within
3-5 minutes.

The MVP must answer:

1. Who is Raghav?
2. What type of engineering problems does he solve?
3. What systems has he built?
4. How does he think technically?
5. What evidence supports his capability?
6. How can someone contact him?

## MVP Scope

### Included

- Home page
- About page
- Selected Systems / Case Studies page
- One complete flagship case study: CC1310 custom industrial IoT sensor
- Engineering Notebook public from launch
- Engineering Decisions
- Interactive Resume page
- Future Resume / CV PDF download under `website/public/pdf/`
- Contact page
- Dark professional visual style
- Basic responsive layout
- Initial deployment-ready build

### Deferred

- Dedicated consulting pages until the consulting offer is clearer
- Long-form blog system
- Newsletter
- Analytics
- CMS
- Complex animations
- Interactive demos
- Multi-language support
- Heavy 3D visuals

## Repository Setup Tasks

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| T-000 | Decide repository architecture | Raghav + ChatGPT | Done | Repository root is project container; `website/` contains Next.js app. |
| T-001 | Create top-level folder structure | Codex | Done | Root project folders exist. |
| T-002 | Add Codex agents | Codex | Done | PM, frontend, content editor agents present. |
| T-003 | Add Codex skills | Codex | Done | Portfolio, Next.js, engineering content skills present. |
| T-004 | Add development tracker | Codex | Done | This file exists and is current. |
| T-005 | Add architecture document | Codex | Done | `docs/Architecture.md` exists. |
| T-006 | Add Codex prompts | Codex | Done | Foundation and Next.js initialization prompts present. |
| T-007 | Initialize Next.js inside `website/` | Raghav / Codex | Done | Next.js scaffold exists inside `website/`. |
| T-008 | Run first dev server | Raghav | Done | Local Next.js generated `.next/` output exists. |
| T-009 | Initialize Git repository | Raghav | Done | Git repository exists on `main`. |
| T-010 | First commit | Raghav | Done | `3656a1d Initial project foundation`. |
| T-011 | Create website architecture skeleton | Codex | Done | Route placeholders, module folders, route constants, data, and types created. |

## Website Build Tasks

| ID | Task | Status | Priority |
|---|---|---|---|
| W-001 | Create base layout | Pending | High |
| W-002 | Create navigation | Pending | High |
| W-003 | Create footer | Pending | High |
| W-004 | Define visual theme | Done | High |
| W-005 | Build Home page | Done | High |
| W-006 | Build About page | Pending | High |
| W-007 | Build Selected Systems index | Pending | High |
| W-008 | Build CC1310 case study | Pending | High |
| W-009 | Build Resume page | Pending | Medium |
| W-010 | Build Contact page | Pending | Medium |
| W-011 | Add Engineering Decisions page | Pending | Medium |
| W-012 | Add Engineering Notebook page | Pending | Medium |
| W-013 | Add architecture route placeholders | Done | High |
| W-014 | Add minimal route/data/type contracts | Done | High |
| W-015 | Freeze Design System v1.0 | Done | High |
| W-016 | Document Phase 2 design freeze | Done | High |

## Content Tasks

| ID | Task | Status | Notes |
|---|---|---|---|
| C-001 | Draft Home hero copy | Done | Uses real-world systems positioning. |
| C-002 | Draft 100-word positioning summary | Done | Uses systems architect and product engineer framing. |
| C-003 | Draft CC1310 case study | Pending | First flagship project. |
| C-004 | Collect CC1310 photos | Pending | PCB, test setup, RF evidence. |
| C-005 | Create CC1310 architecture diagram | Pending | Sensor node architecture. |
| C-006 | Draft About page career story | Pending | Not chronological resume. |
| C-007 | Prepare resume PDF | Pending | Store in `website/public/pdf/`. |
| C-008 | Select profile photo | Pending | Store in `website/public/images/profile/`. |

## Decision Log Summary

| ID | Decision | Status |
|---|---|---|
| D-001 | Repository root is project container, not Next.js root | Accepted |
| D-002 | Build content-first, polish second | Accepted |
| D-003 | First flagship case study is CC1310 sensor | Accepted |
| D-004 | Engineering Notebook is public from launch | Accepted |
| D-005 | Consulting pages are delayed | Accepted |
| D-006 | Resume is interactive page plus future PDF | Accepted |
| D-007 | System fonts used during Phase 1 for deterministic builds | Accepted |
| D-008 | Design System v1.0 frozen in Phase 2 | Accepted |
| D-009 | Copper is an engineering material accent | Accepted |
| D-010 | Engineering Atmosphere Layer is optional | Accepted |
| D-011 | Use static Home visual fallbacks without new dependencies | Accepted |

Detailed decisions are tracked in `docs/DecisionLog.md`.

## Current Sprint

### Sprint 3 - Home Page

Goal:
Implement the Home page only using the frozen design system.

Tasks:

- Replace the Home page placeholder with the Phase 3 page.
- Create reusable Home page sections, cards, and common components.
- Apply frozen design tokens in `website/app/globals.css`.
- Use public-safe copy for capabilities and selected systems.
- Validate with `npm run lint` and `npm run build`.

Definition of done:

- Required Home page sections exist.
- Home page is responsive and accessible.
- No unrelated route pages are modified.
- No optional dependencies are added.
- Lint and build pass.

Validation:

- `npm run lint`: Passed.
- `npm run build`: Passed.

## Backlog

- Consulting services page
- Downloadable capability statement
- PDF case study exports
- Interactive system diagrams
- GitHub integration
- Engineering notebook RSS feed
- LinkedIn content reuse workflow
- Testimonials or references section
- Product demo video embeds
- SEO content pass

## Notes

This website should not become a decorative portfolio. It should operate like a
technical credibility platform.
