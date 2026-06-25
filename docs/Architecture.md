# Architecture

## Project Name
Engineering Portfolio / Consulting Website

## Architectural Principle
The repository is the engineering portfolio project. The website is one application inside the project.

This means the root repository contains project management, assets, documentation, Codex configuration, and future supporting material. The Next.js application lives inside `website/`.

---

## Top-Level Repository Architecture

```text
engineering-portfolio/
│
├── website/              # Next.js application
├── docs/                 # Project management, architecture, roadmap, branding
├── assets/               # Raw design assets and source media
├── scripts/              # Utility scripts
├── .codex/               # Codex agents, skills, and prompts
├── README.md
├── LICENSE
└── .gitignore
```

## Why This Structure
This separates the engineering project from the web application.

Benefits:

- The repository can hold more than the website.
- Raw assets are not mixed with production website files.
- Documentation is independent of the app framework.
- The website can be rebuilt later without losing content strategy and project history.
- The structure mirrors professional engineering repositories where firmware, hardware, docs, and tools are separated.

---

## Website Application Boundary

The Next.js app lives here:

```text
website/
```

The app should contain its own:

- `package.json`
- `node_modules/`
- `app/`
- `components/`
- `public/`
- `content/`
- `lib/`
- `styles/`
- `types/`

This keeps Node/Next.js dependencies scoped to the website application.

---

## Planned Website Structure

```text
website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── engineering-decisions/
│   │   └── page.tsx
│   ├── engineering-notebook/
│   │   └── page.tsx
│   ├── resume/
│   │   └── page.tsx
│   ├── selected-systems/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── cards/
│   └── ui/
│
├── content/
│   ├── projects/
│   ├── decisions/
│   └── notebook/
│
├── lib/
├── public/
│   ├── images/
│   ├── diagrams/
│   ├── pdf/
│   └── videos/
├── styles/
└── types/
```

---

## Site Map

```text
Home
├── About
├── Selected Systems
│   ├── CC1310 Custom Industrial IoT Sensor
│   ├── SmartRoller / Mining Sensor System
│   ├── GET Vision / AI Mining Camera System
│   ├── Proton Therapy Commissioning
│   ├── Space Propulsion Electronics
│   └── Robotics / WAAM Automation
├── Engineering Decisions
├── Engineering Notebook
├── Resume / CV
└── Contact
```

---

## Content Architecture

### Projects
Projects are the main proof layer.

Each project should include:

- Title
- Short summary
- Domain
- Role
- Technologies
- Problem
- Constraints
- Architecture
- Key decisions
- Validation
- Deployment reality
- Outcome
- Lessons learned
- Images and diagrams

### Engineering Decisions
Decision articles show how Raghav thinks.

Each decision should include:

- Title
- Context
- Options considered
- Decision
- Trade-offs
- Result
- What this demonstrates

### Engineering Notebook
Notebook entries are shorter technical updates.

Each entry should include:

- Title
- Date
- Topic
- Observation
- What was learned
- Next step, if relevant

---

## Visual Architecture

### Theme
Dark professional industrial style.

### Visual Direction
- Premium engineering consultancy
- Clean technical product page
- High readability
- Minimal animation
- Strong typography
- Real engineering imagery
- Simple system diagrams

### Avoid
- Generic resume templates
- Excessive motion
- Neon hacker aesthetic
- Fake startup hype
- Overuse of icons instead of real content

---

## Technical Stack

Initial stack:

- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- npm

Potential later additions:

- MDX for content
- shadcn/ui for selected components
- Framer Motion for subtle motion
- Plausible analytics
- Vercel deployment

No optional dependency should be added until there is a clear need.

---

## Routing Strategy
Use simple, durable routes:

```text
/                         Home
/about                    About
/selected-systems          Case study index
/selected-systems/[slug]   Individual case study
/engineering-decisions     Engineering decision articles
/engineering-notebook      Notebook entries
/resume                    Resume / CV download
/contact                   Contact
```

---

## Deployment Strategy
Initial deployment target: Vercel.

Reason:

- Good Next.js support
- Simple GitHub integration
- Low maintenance
- Fast preview deployments

Deployment can be revisited later if needed.

---

## Architecture Decisions

| ID | Decision | Reason |
|---|---|---|
| A-001 | Use root as project container | Keeps website, assets, docs, and Codex config separate. |
| A-002 | Place Next.js inside `website/` | Avoids framework owning entire repository. |
| A-003 | Start with simple content files | Avoids early CMS complexity. |
| A-004 | Build with dark professional theme | Matches industrial engineering and premium consulting positioning. |
| A-005 | Prioritize case studies over biography | Projects prove capability better than resume-style pages. |

---

## Update Rule
Codex must update this file when:

- Folder structure changes.
- New routes are added.
- Content model changes.
- Deployment approach changes.
- Major dependencies are added.
- Important architectural decisions are made.
