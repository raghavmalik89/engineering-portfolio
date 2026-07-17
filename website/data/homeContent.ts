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

export type SelectedWork = {
  label: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  href?: string;
};

export const capabilityOverview = {
  eyebrow: "Evidence in practice",
  title: "Engineering leadership in practice",
  description:
    "Four projects showing product architecture, field delivery, programme recovery and multidisciplinary systems integration.",
} as const;

export const capabilities: Capability[] = [
  {
    title: "Product Strategy & Commercialisation",
    body: "Turning an unresolved field problem into a connected industrial product through architecture decisions, iterative validation, deployment and commercial handover.",
    icon: "diagram",
    evidenceLink: {
      storySlug: "smartroller",
      destinationLabel:
        "the SmartRoller product strategy and commercialisation story",
      ctaLabel: "See SmartRoller",
    },
  },
  {
    title: "AI-Enabled Field Product Delivery",
    body: "Leading supplier integration, hardware-system delivery and customer deployment as an early vision concept became a rugged monitoring product for mining operations.",
    icon: "field",
    evidenceLink: {
      storySlug: "get-vision",
      destinationLabel: "the GET Vision field product delivery story",
      ctaLabel: "See GET Vision",
    },
  },
  {
    title: "Technical Programme Recovery & Team Leadership",
    body: "Recovering a blocked aerospace-electronics workstream through evidence-led diagnosis, architecture judgement, small-team leadership and sustained vacuum testing.",
    icon: "signal",
    evidenceLink: {
      storySlug: "neumann-space-plasma-thruster-electronics",
      destinationLabel: "the Neumann Space electronics recovery story",
      ctaLabel: "See Neumann Space",
    },
  },
  {
    title: "Multidisciplinary Systems Delivery",
    body: "Delivering electromechanical integration, quality correction, commissioning, verification and technical handover for a complex proton-therapy accelerator system.",
    icon: "chip",
    evidenceLink: {
      storySlug: "iba-proteusone-toyohashi-commissioning",
      destinationLabel: "the IBA ProteusONE systems delivery story",
      ctaLabel: "See IBA ProteusONE",
    },
  },
];

export const selectedWorkOverview = {
  eyebrow: "Selected Work",
  title: "From Technical Judgment to Working Systems",
  description:
    "Public-safe examples of systems shaped through product architecture, embedded electronics, field constraints, automation, and practical delivery judgment.",
} as const;

export const selectedWork: SelectedWork[] = [
  {
    label: "RF Validation / Wireless Nodes",
    title: "Wireless Sensing Systems",
    body: "Low-power wireless nodes, sensor interfaces, and RF validation for field-connected monitoring applications.",
    image: "/work/wireless-sensing-systems/selected.webp",
    imageAlt:
      "RF validation and wireless sensor node hardware on a lab bench.",
  },
  {
    label: "SmartRoller / Mining IoT",
    title: "Rugged IoT Monitoring",
    body: "Rugged monitoring systems shaped around industrial machines, operating constraints, and remote field conditions.",
    image: "/work/rugged-iot-monitoring/selected.webp",
    imageAlt:
      "Mining equipment in a harsh field environment used as public-safe rugged IoT context.",
  },
  {
    label: "GET Vision / Field AI",
    title: "AI-Enabled Field Vision",
    body: "Vision systems evolving from classical monitoring toward AI-assisted field intelligence and product-scale deployment.",
    image: "/work/ai-enabled-field-vision/selected.webp",
    imageAlt:
      "Industrial mining equipment context for field vision and AI-enabled monitoring systems.",
  },
  {
    label: "Industrial Robotics / Precision Motion",
    title: "Robotic Automation Systems",
    body: "Robotic and electromechanical systems connecting automation, controls, motion, and industrial process reliability.",
    image: "/work/robotic-automation-systems/selected.webp",
    imageAlt:
      "Industrial robotic automation system used for mechatronic and precision motion engineering.",
  },
];

export const philosophyPoints = [
  "Architect for the operating environment.",
  "Keep interfaces clear, robust, and maintainable.",
  "Validate assumptions before they become costly.",
  "Balance technical depth with product reality.",
];
