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
  eyebrow: "Product Architecture",
  title: "Where Engineering Strategy Meets Product Reality",
  description:
    "Translating complex engineering problems into product direction, system architecture, and practical development roadmaps for Industrial IoT and mechatronic systems in harsh environments — shaping reliable solutions for some of the most demanding operating conditions.",
} as const;

export const capabilities: Capability[] = [
  {
    title: "Engineering Product Strategy",
    body: "Turning complex engineering intent into product direction, architecture choices, and practical development paths before costly decisions are locked in.",
    icon: "diagram",
  },
  {
    title: "Industrial IoT Platforms",
    body: "Shaping connected industrial systems where sensors, RF communication, embedded hardware, and field data must work reliably as one.",
    icon: "antenna",
  },
  {
    title: "Harsh-Environment Product Design",
    body: "Shaping product decisions around harsh operating conditions, reliability demands, and the realities of field use.",
    icon: "field",
  },
  {
    title: "Integrated Engineering Systems",
    body: "Bringing cross-domain engineering decisions together so complex systems behave as one product, not separate parts.",
    icon: "chip",
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
  "Balance technical depth with product reality."
];
