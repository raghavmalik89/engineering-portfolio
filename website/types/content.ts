export type ContentStatus = "planned" | "draft" | "review" | "published";

export type ContentMetadata = {
  title: string;
  slug: string;
  description: string;
  status: ContentStatus;
};
