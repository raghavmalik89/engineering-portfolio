export type StoryStatus = "planned" | "draft" | "review" | "published";

export type StoryImage = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "landscape" | "portrait" | "wide" | "tall";
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

export type StoryVideoMedia = {
  type: "video";
  src: string;
  poster: string;
  fallbackImage: StoryImage;
  objectPosition?: string;
};

export type StoryIndexVariant = "flagship" | "compact";
export type StoryIndexGroup = "flagship" | "bradken-programmes";

export type StoryPresentation = {
  indexVariant: StoryIndexVariant;
  indexGroup: StoryIndexGroup;
  showOnStoriesIndex: boolean;
};

export type StorySectionId = string;

export type StorySection = {
  id: StorySectionId;
  title: string;
  body?: string[];
  orderedItems?: string[];
  bullets?: string[];
  closingBody?: string[];
  quote?: string;
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
  cardTitle?: string;
  shortTitle: string;
  slug: string;
  company: string;
  eyebrow?: string;
  summary: string;
  heroProposition?: string;
  heroSummary?: string;
  status: StoryStatus;
  displayOrder: number;
  presentation?: StoryPresentation;
  role?: string;
  period?: string;
  domains: string[];
  technologies?: string[];
  countries: string[];
  snapshot?: StorySnapshotItem[];
  cardImage?: StoryImage;
  heroImage?: StoryImage;
  heroMedia?: StoryVideoMedia;
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
    | "commissioning"
    | "remote-support"
    | "remote-work"
    | "broader-career"
  >;
  engagementMode?: "in-person" | "remote" | "mixed";
  isProvisional?: boolean;
  note?: string;
};
