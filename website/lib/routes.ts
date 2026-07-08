export const routes = {
  home: "/",
  about: "/about",
  stories: "/stories",
  notebook: "/notebook",
  selectedSystems: "/selected-systems",
  selectedSystem: (slug: string) => `/selected-systems/${slug}`,
  engineeringNotebook: "/engineering-notebook",
  engineeringNotebookEntry: (slug: string) => `/engineering-notebook/${slug}`,
  engineeringDecisions: "/engineering-decisions",
  engineeringDecision: (slug: string) => `/engineering-decisions/${slug}`,
  resume: "/resume",
  contact: "/contact",
} as const;
