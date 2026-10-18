import type { IconGlyphName } from "@/components/common/IconGlyph";

export type Capability = {
  title: string;
  body: string;
  icon: IconGlyphName;
  image?: string;
  imageAlt?: string;
  evidenceLabel?: string;
  evidenceCaption?: string;
  href?: string;
  evidenceLink?: {
    storySlug: string;
    destinationLabel: string;
    ctaLabel: string;
  };
};

export const capabilityOverview = {
  eyebrow: "Evidence in practice",
  title: "Engineering leadership in practice",
  description:
    "Four projects showing how I lead across architecture, engineering teams, specialist suppliers, customers and field delivery.",
} as const;

export const capabilities: Capability[] = [
  {
    title: "Product Strategy & Commercialisation",
    body: "Turning an unresolved field problem into a connected industrial product through architecture decisions, supplier delivery, iterative validation, deployment and commercial handover.",
    icon: "diagram",
    evidenceLink: {
      storySlug: "smartroller",
      destinationLabel:
        "the SmartRoller product strategy and commercialisation story",
      ctaLabel: "See SmartRoller",
    },
  },
  {
    title: "Supplier, Customer & Field Leadership",
    body: "Leading specialist supplier integration, customer engagement, hardware-system delivery and international field deployment as an early vision concept became a rugged monitoring product for mining operations.",
    icon: "field",
    evidenceLink: {
      storySlug: "get-vision",
      destinationLabel: "the GET Vision field product delivery story",
      ctaLabel: "See GET Vision",
    },
  },
  {
    title: "Technical Programme Recovery & Team Development",
    body: "Recovering a blocked aerospace-electronics workstream through evidence-led diagnosis, architecture judgement, mentoring less-experienced engineers and sustained vacuum testing.",
    icon: "signal",
    evidenceLink: {
      storySlug: "neumann-space-plasma-thruster-electronics",
      destinationLabel: "the Neumann Space electronics recovery story",
      ctaLabel: "See Neumann Space",
    },
  },
  {
    title: "Multidisciplinary Systems Delivery",
    body: "Coordinating multidisciplinary installation, specialist suppliers, site execution and operational stakeholders while commissioning and handing over a complex proton-therapy accelerator system.",
    icon: "chip",
    evidenceLink: {
      storySlug: "iba-proteusone-toyohashi-commissioning",
      destinationLabel: "the IBA ProteusONE systems delivery story",
      ctaLabel: "See IBA ProteusONE",
    },
  },
];

export const philosophyPoints = [
  "Architect for the operating environment.",
  "Keep interfaces clear, robust, and maintainable.",
  "Validate assumptions before they become costly.",
  "Use automation and AI to accelerate engineering, not to outsource engineering judgement.",
  "Develop engineers by teaching the reasoning behind decisions, not simply the answer.",
  "Balance technical depth with product reality.",
];
