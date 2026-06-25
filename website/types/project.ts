import type { ContentMetadata } from "./content";

export type ProjectDomain =
  | "industrial-iot"
  | "embedded-systems"
  | "rf-communications"
  | "robotics"
  | "aerospace"
  | "medical-systems";

export type ProjectStatus = "planned" | "draft" | "published";

export type ProjectSummary = ContentMetadata & {
  domain: ProjectDomain;
  status: ProjectStatus;
};
