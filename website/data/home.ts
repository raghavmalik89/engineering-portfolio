import { routes } from "@/lib/routes";

export const heroContent = {
  eyebrow: "Systems architect / product engineer",
  headline: "Engineering systems that survive the real world.",
  body: "Systems architecture, embedded electronics, RF communications, industrial IoT, and field-deployed product engineering across mining, aerospace, robotics, and medical accelerator environments.",
  context:
    "A focused view of architecture, constraints, trade-offs, validation, and deployment reality.",
  primaryCta: {
    label: "View Selected Systems",
    href: routes.selectedSystems,
  },
  secondaryCta: {
    label: "Contact",
    href: routes.contact,
  },
} as const;

export const capabilities = [
  {
    title: "Industrial IoT",
    description:
      "Sensor networks, gateway interfaces, telemetry paths, and system boundaries designed around harsh operating contexts.",
    icon: "signal",
  },
  {
    title: "Embedded Systems",
    description:
      "Low-power firmware, sensor integration, board-level constraints, and maintainable device behavior beyond prototype demos.",
    icon: "chip",
  },
  {
    title: "RF Communications",
    description:
      "Sub-GHz links, payload design, packet discipline, antenna-aware decisions, and reliability trade-offs for deployed products.",
    icon: "antenna",
  },
  {
    title: "Product Architecture",
    description:
      "System decomposition, interface choices, validation strategy, and technical decisions that connect engineering work to product reality.",
    icon: "diagram",
  },
  {
    title: "Field Deployment",
    description:
      "Engineering choices shaped by installation, serviceability, environmental stress, failure modes, and maintenance workflows.",
    icon: "field",
  },
  {
    title: "Technical Leadership",
    description:
      "Clear engineering judgment through ambiguity, practical trade-offs, documentation, and cross-discipline coordination.",
    icon: "check",
  },
] as const;

export const selectedSystems = [
  {
    title: "CC1310 Industrial IoT Sensor",
    type: "Embedded RF sensor node",
    context:
      "Custom low-power sensing system with RF communication, firmware architecture, sensor selection, and validation discipline.",
  },
  {
    title: "SmartRoller",
    type: "Mining sensor system",
    context:
      "Industrial sensing context shaped by harsh deployment conditions, telemetry needs, and product reliability constraints.",
  },
  {
    title: "GET Vision",
    type: "AI mining camera system",
    context:
      "Vision-oriented mining system work focused on product architecture, field use, and operational engineering constraints.",
  },
  {
    title: "Proton Therapy",
    type: "Medical accelerator commissioning",
    context:
      "High-discipline technical environment where validation, commissioning rigor, and system-level thinking matter.",
  },
  {
    title: "Space Propulsion Electronics",
    type: "Aerospace electronics",
    context:
      "Electronics context requiring careful interfaces, reliability awareness, and engineering decisions under demanding constraints.",
  },
  {
    title: "Robotics / WAAM",
    type: "Automation and manufacturing",
    context:
      "Robotics and wire-arc additive manufacturing context connecting control, process reality, and production-aware engineering.",
  },
] as const;

export const philosophyPoints = [
  "A working prototype is only the first proof point.",
  "Architecture must account for interfaces, constraints, manufacturing, deployment, maintenance, and business reality.",
  "Good systems are designed so future engineers can understand, validate, service, and extend them.",
] as const;
