# Decision Log

## Format

Use this format for each decision:

```text
## D-XXX — Decision Title

Date:
Status:

Context:

Decision:

Reasoning:

Consequences:
```

---

## D-001 — Repository Root as Project Container

Date: 2026-06-25
Status: Accepted

Context:
The project is more than a website. It includes documentation, raw assets, Codex agents, design files, engineering case studies, and future consulting material.

Decision:
Use the repository root as the engineering portfolio project container. Place the Next.js app inside `website/`.

Reasoning:
This keeps the web application separate from project documentation, raw assets, and future tools. It mirrors professional engineering repositories where application code is one deliverable inside a larger project.

Consequences:
Next.js commands must be run from `website/`, not the repository root.

---

## D-002 — Build Content-First, Polish Second

Date: 2026-06-25
Status: Accepted

Context:
The primary value of the website is credibility, not visual effects.

Decision:
Prioritize page structure, case studies, copy, and engineering evidence before animation or advanced visual polish.

Reasoning:
Hiring managers and technical directors need to understand capability quickly. Strong content creates more value than decorative UI.

Consequences:
Early MVP may be visually simple, but it must be clear and professional.

---

## D-003 — First Flagship Case Study is CC1310 Sensor

Date: 2026-06-25
Status: Accepted

Context:
The CC1310 custom industrial IoT sensor is current, demonstrable, and suitable for GitHub + website integration.

Decision:
Use the CC1310 custom industrial IoT sensor as the first complete case study.

Reasoning:
It shows embedded hardware, firmware, RF, sensing, low-power design, packet design, testing, architecture, and ongoing development discipline.

Consequences:
Other case studies can initially be shorter summaries until this one is complete.
