export type StoryStatus = "planned" | "draft" | "review" | "published";

export type StoryImage = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "landscape" | "portrait";
  objectPosition?: string;
};

export type StorySectionId =
  | "problem"
  | "feasibility"
  | "custom-system"
  | "constraints"
  | "architecture"
  | "validation"
  | "deployment"
  | "outcome"
  | "lessons"
  | "demonstrates";

export type StorySection = {
  id: StorySectionId;
  title: string;
  body?: string[];
  images?: StoryImage[];
};

export type StorySnapshotItem = {
  label: string;
  value: string;
};

export type StoryExternalLink = {
  label: string;
  description: string;
  cta: string;
  href: string;
};

export type StorySeo = {
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  canonicalPath?: string;
  keywords?: string[];
};

export type Story = {
  title: string;
  shortTitle: string;
  slug: string;
  company: string;
  summary: string;
  heroProposition?: string;
  heroSummary?: string;
  status: StoryStatus;
  displayOrder: number;
  role?: string;
  period?: string;
  domains: string[];
  technologies?: string[];
  countries: string[];
  snapshot?: StorySnapshotItem[];
  cardImage?: StoryImage;
  heroImage?: StoryImage;
  sections: StorySection[];
  gallery?: StoryImage[];
  externalLinks?: StoryExternalLink[];
  seo?: StorySeo;
  relatedProjectSlugs: string[];
};

export type FootprintLocation = {
  code: string;
  countryName: string;
  flagPath: string;
  flagAlt: string;
  city?: string;
  stateOrRegion?: string;
  relatedProjectSlugs: string[];
  relatedCompanyNames: string[];
  activityLabels: string[];
  contextTypes: Array<
    | "project-specific"
    | "company-only"
    | "training"
    | "development"
    | "testing"
    | "deployment"
    | "remote-work"
    | "broader-career"
  >;
  isProvisional?: boolean;
  note?: string;
};
