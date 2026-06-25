# Codex Prompt — Initialize Next.js Website

You are working inside the `engineering-portfolio` repository.

## Goal
Initialize the Next.js application inside the existing empty `website/` folder.

## Important Architecture Rule
The repository root is not the Next.js app. The Next.js app lives inside:

```text
website/
```

## Command
From repository root, run:

```powershell
cd website
npx create-next-app@latest . --typescript --tailwind --eslint --app --import-alias "@/*"
```

Use npm.

## Rules
- Do not move the app to repository root.
- Do not delete `docs/`, `assets/`, or `.codex/`.
- If create-next-app asks questions, choose the simplest stable defaults compatible with TypeScript, Tailwind, ESLint, and App Router.
- After installation, run the dev server or at least verify scripts exist in `website/package.json`.

## After Setup
Update:

- `docs/DevelopmentTracker.md`
- `docs/Architecture.md`
- `docs/DecisionLog.md` if a new decision was made

## Verification
Run from `website/`:

```powershell
npm run lint
npm run build
```

If build fails, report the exact issue and propose the smallest fix.
