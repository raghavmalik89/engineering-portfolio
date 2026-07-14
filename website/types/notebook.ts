export type NotebookStatus = "planned" | "draft" | "review" | "published";

export type NotebookEntryType =
  | "Build Log"
  | "Architecture Note"
  | "Engineering Experiment"
  | "Research Note"
  | "Test Report"
  | "Development Workflow"
  | "Lessons Learned";

export type NotebookImage = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "landscape" | "portrait" | "wide" | "tall";
  objectPosition?: string;
  objectFit?: "cover" | "contain";
};

export type NotebookCodeSnippet = {
  label?: string;
  language?: string;
  code: string;
};

export type NotebookObservation = {
  label: string;
  value: string;
};

export type NotebookDecision = {
  title: string;
  body: string;
};

export type NotebookCallout = {
  label: string;
  body: string;
};

export type NotebookSection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
  observations?: NotebookObservation[];
  decisions?: NotebookDecision[];
  codeSnippets?: NotebookCodeSnippet[];
  callout?: NotebookCallout;
  table?: {
    caption?: string;
    columns: string[];
    rows: string[][];
  };
  images?: NotebookImage[];
};

export type NotebookSnapshotItem = {
  label: string;
  value: string;
};

export type NotebookSourceLink = {
  label: string;
  href: string;
  kind?: "github" | "repository" | "documentation" | "external";
};

export type NotebookTechnologyGroup = {
  category: string;
  items: Array<{
    name: string;
    purpose: string;
  }>;
};

export type NotebookApplicationProfile = {
  title: string;
  body: string;
};

export type NotebookSeo = {
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphImage?: NotebookImage;
  canonicalPath?: string;
  keywords?: string[];
};

export type NotebookEntry = {
  title: string;
  shortTitle: string;
  slug: string;
  cardEyebrow?: string;
  summary: string;
  status: NotebookStatus;
  visibleStatus?: string;
  displayOrder: number;
  entryType: NotebookEntryType;
  organisation?: string;
  heroProposition?: string;
  heroSummary?: string;
  actionLabel?: string;
  period?: string;
  lastUpdatedLabel?: string;
  technologies: string[];
  methods?: string[];
  technologyGroups?: NotebookTechnologyGroup[];
  applicationProfiles?: NotebookApplicationProfile[];
  cardImage?: NotebookImage;
  heroImage?: NotebookImage;
  snapshot?: NotebookSnapshotItem[];
  sections: NotebookSection[];
  limitations?: string[];
  nextSteps?: string[];
  relatedNotebookSlugs?: string[];
  relatedStorySlugs?: string[];
  sourceLinks?: NotebookSourceLink[];
  seo?: NotebookSeo;
};
