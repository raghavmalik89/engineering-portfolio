# Next.js + Tailwind Skill

## Purpose
This skill defines implementation standards for the website application inside `website/`.

## Stack
Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm

Optional later:

- MDX
- shadcn/ui
- Framer Motion
- Plausible analytics

Do not add optional dependencies before they are needed.

## Application Boundary
The repository root is the engineering portfolio project.

The Next.js application lives inside:

```text
website/
```

Do not place Next.js app files at the repository root.

## Initial Commands
From repository root:

```powershell
cd website
npx create-next-app@latest . --typescript --tailwind --eslint --app --import-alias "@/*"
```

Then:

```powershell
npm run dev
```

## Routing Model
Use App Router pages:

```text
app/page.tsx
app/about/page.tsx
app/selected-systems/page.tsx
app/selected-systems/[slug]/page.tsx
app/engineering-decisions/page.tsx
app/engineering-notebook/page.tsx
app/resume/page.tsx
app/contact/page.tsx
```

## Content Model
Start simple.

Use TypeScript data files or Markdown-like data inside `content/` before adding a full CMS.

Recommended:

```text
content/projects/
content/decisions/
content/notebook/
```

## Component Model
Use obvious components first:

```text
components/layout/SiteHeader.tsx
components/layout/SiteFooter.tsx
components/layout/PageShell.tsx
components/sections/HeroSection.tsx
components/cards/ProjectCard.tsx
components/cards/CapabilityCard.tsx
```

Avoid premature abstraction.

## Styling Rules
- Use Tailwind utilities.
- Keep CSS minimal.
- Prefer readable spacing and typography.
- Ensure mobile responsiveness from the beginning.
- Avoid animation-heavy UI until content is strong.

## Accessibility
- Use semantic HTML.
- Ensure good contrast.
- Use descriptive link text.
- Do not rely only on color to communicate meaning.
- Add alt text for meaningful images.

## SEO Basics
Each page should have:

- Descriptive title
- Meta description
- Clean URL
- Strong heading structure

## Build Discipline
Before reporting completion:

```powershell
npm run lint
npm run build
```

If commands fail, report the exact issue and propose the smallest fix.
