export const site = {
  name: "Raghav Malik - Product Systems Architect",
  shortName: "Raghav Malik",
  origin: "https://raghavmalik.com.au",
  defaultTitle: "Raghav Malik | Product Systems Architect and Technical Lead",
  titleTemplate: "%s | Raghav Malik",
  description:
    "Product systems architecture, technical leadership and end-to-end engineering delivery across Industrial IoT, RF communications, electronics, mechatronics, mining technology, aerospace and complex physical products.",
  coreMessage: "I design engineering systems that survive the real world.",
  defaultSocialImage: {
    src: "/images/hero/hero-pcb-enclosure-concept.png",
    alt: "Representative embedded and RF product-architecture concept for Raghav Malik's engineering portfolio.",
  },
  sameAs: ["https://www.linkedin.com/in/malikraghav/"],
  knowsAbout: [
    "Product systems architecture",
    "Technical leadership",
    "Industrial IoT",
    "RF communications",
    "Embedded electronics",
    "Mechatronics",
    "Mining technology",
    "Aerospace electronics",
    "Harsh-environment product development",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.origin).toString();
}
