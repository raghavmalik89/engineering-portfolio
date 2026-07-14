# Website Agent Entry Point

Before editing the website, read the root governance documents:

1. `../README.md`
2. `../docs/AIAgentGuide.md`
3. `../docs/RepositoryWorkflow.md`
4. `../docs/BranchStrategy.md`
5. `../docs/ReleaseWorkflow.md`
6. `../docs/ReleaseNotes.md` when performing release work

Run Next.js commands from `website/`. Use `npm.cmd run lint` and
`npm.cmd run build` for validation on Windows.

This project uses a current Next.js version. Inspect local files and installed
documentation before assuming framework conventions.

Before creating or materially changing any story page, read
`../docs/StoriesDesignSystem.md`, inspect `/stories/smartroller`, inspect the
current reusable story components, and preserve the established Stories template
unless a template-level change is explicitly authorised.

Before creating or materially changing any Notebook entry or Notebook template,
read `../docs/NotebookDesignSystem.md`, inspect `/notebook`, inspect the current
reusable Notebook components, and preserve the established Notebook system unless
a template-level change is explicitly authorised.
