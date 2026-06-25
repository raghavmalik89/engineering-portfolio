# Development Tracker

## Project
Engineering Portfolio / Consulting Website

## Owner
Raghav Malik

## Project Purpose
Build a professional engineering portfolio and consulting-style website that communicates systems architecture, product engineering, industrial IoT, embedded/RF systems, field deployment experience, and technical leadership.

Core message:

> I design engineering systems that survive the real world.

---

## Current Phase

### Phase 0 — Project Foundation

Status: In progress

Goal:
Establish the repository structure, Codex agents, skills, development tracker, architecture document, and initial project operating rules before creating the Next.js app.

---

## MVP Objective

The MVP should allow a hiring manager, technical director, recruiter, or potential consulting client to understand Raghav's engineering capability within 3-5 minutes.

The MVP must answer:

1. Who is Raghav?
2. What type of engineering problems does he solve?
3. What systems has he built?
4. How does he think technically?
5. What evidence supports his capability?
6. How can someone contact him?

---

## MVP Scope

### Included
- Home page
- About page
- Selected Systems / Case Studies page
- One complete flagship case study: CC1310 custom industrial IoT sensor
- Resume / CV download page
- Contact page
- Dark professional visual style
- Basic responsive layout
- Initial deployment-ready build

### Deferred
- Full consulting services page
- Long-form blog system
- Newsletter
- Analytics
- CMS
- Complex animations
- Interactive demos
- Multi-language support
- Heavy 3D visuals

---

## Repository Setup Tasks

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| T-000 | Decide repository architecture | Raghav + ChatGPT | Done | Repository root is project container; `website/` contains Next.js app. |
| T-001 | Create top-level folder structure | Codex | Done | Verified root folders and empty `website/`. |
| T-002 | Add Codex agents | Codex | Done | PM, frontend, content editor agents present. |
| T-003 | Add Codex skills | Codex | Done | Portfolio, Next.js, engineering content skills present. |
| T-004 | Add development tracker | Codex | Done | This file exists and is current. |
| T-005 | Add architecture document | Codex | Done | `docs/Architecture.md` exists. |
| T-006 | Add Codex prompts | Codex | Done | Foundation and Next.js initialization prompts present. |
| T-007 | Initialize Next.js inside `website/` | Raghav / Codex | Pending | Run create-next-app inside empty `website/`. |
| T-008 | Run first dev server | Raghav | Pending | Verify localhost after Next.js initialization. |
| T-009 | Initialize Git repository | Raghav | Pending | Empty `.git` directory exists, but `git status` does not recognize a repository. |
| T-010 | First commit | Raghav | Pending | `Initial project foundation`. |

---

## Website Build Tasks

| ID | Task | Status | Priority |
|---|---|---|---|
| W-001 | Create base layout | Pending | High |
| W-002 | Create navigation | Pending | High |
| W-003 | Create footer | Pending | High |
| W-004 | Define visual theme | Pending | High |
| W-005 | Build Home page | Pending | High |
| W-006 | Build About page | Pending | High |
| W-007 | Build Selected Systems index | Pending | High |
| W-008 | Build CC1310 case study | Pending | High |
| W-009 | Build Resume page | Pending | Medium |
| W-010 | Build Contact page | Pending | Medium |
| W-011 | Add Engineering Decisions page | Pending | Medium |
| W-012 | Add Engineering Notebook page | Pending | Medium |

---

## Content Tasks

| ID | Task | Status | Notes |
|---|---|---|---|
| C-001 | Draft Home hero copy | Pending | Must be strong and simple. |
| C-002 | Draft 100-word positioning summary | Pending | Use systems architect framing. |
| C-003 | Draft CC1310 case study | Pending | First flagship project. |
| C-004 | Collect CC1310 photos | Pending | PCB, test setup, RF evidence. |
| C-005 | Create CC1310 architecture diagram | Pending | Sensor node architecture. |
| C-006 | Draft About page career story | Pending | Not chronological resume. |
| C-007 | Prepare resume PDF | Pending | Store in `website/public/pdf/`. |
| C-008 | Select profile photo | Pending | Store in `website/public/images/profile/`. |

---

## Decision Log Summary

| ID | Decision | Status |
|---|---|---|
| D-001 | Repository root is project container, not Next.js root | Accepted |
| D-002 | Next.js app lives inside `website/` | Accepted |
| D-003 | Build content-first, polish second | Accepted |
| D-004 | Use dark professional industrial style | Accepted |
| D-005 | First flagship case study is CC1310 sensor | Accepted |

Detailed decisions are tracked in `docs/DecisionLog.md`.

---

## Current Sprint

### Sprint 0 — Foundation

Goal:
Create clean project structure and operating docs before implementation.

Tasks:

- Create repository structure.
- Add Codex agents.
- Add Codex skills.
- Add development tracker.
- Add architecture document.
- Add decision log.
- Initialize Next.js inside `website/`.

Definition of done:

- Folder structure is correct.
- `website/` is empty before Next.js initialization.
- Codex docs exist.
- Architecture and tracker exist.
- Next.js initializes successfully.
- Development server runs locally.

---

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

---

## Notes

This website should not become a decorative portfolio. It should operate like a technical credibility platform.
