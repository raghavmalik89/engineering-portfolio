import type { Story, StoryStatus } from "@/types/story";

export const stories: Story[] = [
  {
    title: "SmartRoller",
    shortTitle: "SmartRoller",
    slug: "smartroller",
    company: "Bradken",
    summary:
      "Led from the original field problem through commercial deployment, progressing SmartRoller from early feasibility into a rugged connected monitoring product for large mining excavators.",
    heroProposition:
      "From a hazardous field problem to a commercially deployed IIoT product",
    heroSummary:
      "SmartRoller transformed manual load-roller temperature checks on large mining excavators into a rugged connected monitoring system designed for severe heat, shock, vibration, water, steel-obstructed radio paths and remote deployment.",
    status: "review",
    displayOrder: 1,
    role: "Product Systems Architect | Technical Lead | Product Delivery Specialist",
    period: "Early 2021 to 2026",
    domains: [
      "Industrial IoT",
      "Mining technology",
      "Field sensing",
      "RF integration",
      "Product delivery",
    ],
    technologies: [
      "Industrial IoT",
      "Sensing",
      "RF integration",
      "Power",
      "Rugged electronics",
      "Mechanical integration",
      "Gateway and operator interface",
    ],
    countries: ["AU", "ZM", "US-AK"],
    snapshot: [
      {
        label: "My role",
        value:
          "Bradken-side product architecture, technical leadership and delivery continuity",
      },
      {
        label: "Hands-on scope",
        value:
          "Early prototyping, lab and RF testing, vendor reviews, FAT, SAT, installation, field diagnosis and deployment",
      },
      {
        label: "Technical domains",
        value:
          "Industrial IoT, sensing, RF integration, power, rugged electronics, mechanical integration, gateway and operator interface",
      },
      {
        label: "Product value",
        value:
          "Safer continuous monitoring, rate-of-change visibility, earlier investigation and maintenance-planning support",
      },
      {
        label: "Commercial status",
        value:
          "Commercially deployed and included in Bradken's product offering",
      },
    ],
    cardImage: {
      src: "/images/stories/smartroller/image1_sr.webp",
      alt: "Large tracked mining excavator in an open-cut mine, showing the scale and harsh environment SmartRoller was designed for.",
      caption:
        "A large tracked mining excavator in its operating environment — the scale of machine SmartRoller was designed around.",
      aspect: "landscape",
    },
    heroImage: {
      src: "/images/stories/smartroller/image1_sr.webp",
      alt: "Large tracked mining excavator in an open-cut mine, showing the scale and harsh environment SmartRoller was designed for.",
      caption:
        "A large tracked mining excavator in its operating environment — the scale of machine SmartRoller was designed around.",
      aspect: "landscape",
    },
    sections: [
      {
        id: "problem",
        title: "The field problem",
        body: [
          "Large mining excavators rely on load rollers that operate beneath enormous tracked machines. When a roller showed signs of overheating, the established process involved personnel taking manual infrared readings near the undercarriage. That placed people close to moving tracks and within an area where compressed rock could be ejected without warning.",
          "Bradken wanted a safer way to monitor roller temperature and build a history of how the rollers behaved during machine propulsion. Temperature was a useful indicator, but it was not a proven root cause. A seal failure could lead to grease loss, friction and heat; equally, excessive heat could damage the seal. The first engineering task was therefore not to pretend the failure mechanism was already known, but to create a system capable of gathering reliable evidence in the field.",
        ],
      },
      {
        id: "feasibility",
        title: "Proving that the idea could work",
        body: [
          "When I began active SmartRoller work in early 2021, Bradken did not have a mining excavator permanently available for development. I started from machine CAD, researched the likely operating-temperature range and worked a temperature sensor into a protected enclosure that could be mounted without interfering with the undercarriage.",
          "The first field arrangement used adapted hardware and a temporary battery-powered gateway housed in a modified Pelican case. While the excavator was operating, the sensors continued measuring and transmitting. The limiting factor was the temporary gateway and its power arrangement, not the core sensing concept. That result was strong enough to unlock further development funding and keep the programme moving.",
        ],
      },
      {
        id: "custom-system",
        title: "Creating a path to a custom system",
        body: [
          "A dedicated custom platform was not approved in a single step. I identified overlap with another Bradken rugged-sensing programme that faced many of the same challenges: severe vibration and shock, high-temperature operation, RF drift, protected antennas and enclosure design. I proposed using the emerging platform across both applications so the investment could solve more than one product problem.",
          "The related programme was later discontinued, but the shared technology gave SmartRoller a new development path. The sensor platform had demonstrated survival in a harsh mining environment, while the SmartRoller installation was returning temperature data more reliably than the earlier adapted solution. That evidence allowed the project to progress toward a purpose-developed, more rugged product.",
        ],
      },
      {
        id: "architecture",
        title: "Completing the product architecture",
        body: [
          "I led the Bradken-side product architecture and coordinated cross-functional internal specialists and external engineering partners. The system evolved beyond an isolated sensor into a modular product set: rugged battery-powered sensor nodes, industrial wireless receivers, a gateway, GPS and motion context, an in-cab operator display and remote data capability.",
          "I also identified and procured the industrial display, advised on mounting and integration, and carried the operator interface through factory acceptance, site acceptance and the first installation. Excavator cabins are already crowded with screens and controls, so the design principle was deliberately simple: keep the display small and unobtrusive, and demand the operator's attention only when a condition required action.",
          "Across development, the wireless implementation used ISM-band technologies in sub-GHz and 2.4 GHz ranges.",
        ],
      },
      {
        id: "validation",
        title: "Engineering for the real environment",
        body: [
          "SmartRoller was a system-level harsh-environment problem. RF performance depended on machine geometry, large steel structures, antenna protection and placement. Sensor reliability depended on thermal coupling, battery behaviour, internal restraint, sealing and resistance to severe impact, vibration and rock strike. The wider installation depended on cables, connectors, gateway power, local storage, remote connectivity, diagnostics and clear field documentation.",
          "Testing and field learning took place across Western Australia and Australia's east coast, with additional RF validation during mining work in Zambia. Australian conditions exposed heat, humidity, rain, retained water and corrosion risks. The latest major chapter was an Alaska deployment at approximately -32 C, where cables stiffened, climate-specific component choices became critical and the cellular gateway could not establish the expected remote connection.",
          "That failure did not reduce the deployment to a service call. It tested the architecture itself. With limited time, spares and procurement options, I isolated what was working, diagnosed the connectivity path and confirmed the local system behaviour. The experience reinforced that remote mining products must remain commissionable and useful even when cloud connectivity is unavailable.",
        ],
        images: [
          {
            src: "/images/stories/smartroller/image2_sr.webp",
            alt: "Close frontal view of a large mining excavator and bucket in an open-cut mine, illustrating machine scale and field conditions.",
            caption:
              "The undercarriage environment combines heat, impact, vibration, water and difficult radio propagation around massive steel structures.",
            aspect: "portrait",
            objectPosition: "center center",
          },
        ],
      },
      {
        id: "deployment",
        title: "From prototype to commercial deployment",
        body: [
          "By mid-2024 I had resumed direct technical ownership as SmartRoller moved into its commercialisation phase. The work shifted from proving the sensing concept toward closing the complete product: ruggedisation, display and alarm behaviour, receiver and gateway integration, FAT, SAT, deployment readiness and customer-facing implementation.",
          "The system became a complete product when the rugged sensing network, machine receivers, gateway, GPS context and operator display were installed together on the excavator. The Alaska deployment completed the latest chapter of that productisation cycle, after which SmartRoller moved into Bradken's commercial offering. I continued providing technical input as the system entered commercial use and ongoing product support.",
        ],
      },
      {
        id: "outcome",
        title: "What SmartRoller delivers",
        body: [
          "SmartRoller removed the need for routine manual infrared temperature measurements beside moving tracks. It provides continuous temperature visibility, temperature rate-of-change information and alarms that can support earlier inspection, safer intervention and better maintenance planning.",
          "The system enables condition-based and predictive-maintenance decisions. I am not claiming that it has conclusively predicted a specific roller failure, quantified life extension or delivered a verified maintenance saving, because the long operating cycle and post-deployment evidence have not been available to me for long enough to support those claims.",
        ],
      },
      {
        id: "demonstrates",
        title: "What the project demonstrates",
        body: [
          "SmartRoller demonstrates how I work as a Product Systems Architect and Technical Lead: question the original assumption, identify what evidence is missing, translate a field problem into an architecture, preserve technical continuity through organisational change, coordinate specialist contributors and stay hands-on through validation and deployment.",
          "The work was not a field-service assignment. Installation and troubleshooting were the final stages of engineering ownership - opportunities to test architectural assumptions on real machines, close the loop between design and field behaviour, and convert a prototype into a commercially deployable product.",
        ],
      },
    ],
    externalLinks: [
      {
        label: "Official Bradken product page",
        description:
          "View Bradken's public SmartRoller product information and commercial positioning.",
        cta: "View SmartRoller on Bradken",
        href: "https://www.bradken.com/products-and-services/digital-solutions/bradken-smartroller",
      },
    ],
    seo: {
      title: "SmartRoller | Industrial IoT Product Architecture | Raghav Malik",
      description:
        "How Raghav Malik led SmartRoller from a hazardous mining field problem through rugged Industrial IoT architecture, validation, international deployment and commercial productisation.",
      openGraphTitle:
        "SmartRoller — From Field Problem to Commercial IIoT Product",
      openGraphDescription:
        "A harsh-environment product story spanning sensing, RF, rugged electronics, operator interfaces, FAT, SAT and deployment across Australia, Zambia and Alaska.",
      canonicalPath: "/stories/smartroller",
      keywords: [
        "SmartRoller",
        "Industrial IoT",
        "mining technology",
        "systems architecture",
        "RF communications",
        "condition monitoring",
        "harsh-environment electronics",
        "product development",
        "field validation",
      ],
    },
    relatedProjectSlugs: ["mining-iot-gateway", "smartmill"],
  },
  {
    title: "GET Tracker / Tooth Fairy",
    shortTitle: "GET Tracker",
    slug: "get-tracker",
    company: "Bradken",
    summary:
      "Wear-monitoring product developed from an original field/customer problem through deployment.",
    status: "draft",
    displayOrder: 2,
    role: "Product systems and technical lead",
    period: "To be confirmed",
    domains: ["Mining technology", "Wear monitoring", "Industrial IoT"],
    technologies: ["Wear monitoring", "Field sensing"],
    countries: [],
    sections: [],
    relatedProjectSlugs: ["get-vision", "mining-iot-gateway"],
  },
  {
    title: "GET Vision",
    shortTitle: "GET Vision",
    slug: "get-vision",
    company: "Bradken",
    summary:
      "AI-enabled mining vision system developed from prototype to commercial/customer-ready deployment.",
    status: "draft",
    displayOrder: 3,
    role: "Product systems and technical lead",
    period: "To be confirmed",
    domains: ["Mining technology", "AI-enabled vision", "Field validation"],
    technologies: ["AI-enabled vision", "Field validation"],
    countries: ["AU", "FI", "ZM"],
    sections: [],
    relatedProjectSlugs: ["get-tracker", "mining-iot-gateway"],
  },
  {
    title: "Mining IoT Gateway",
    shortTitle: "Mining IoT Gateway",
    slug: "mining-iot-gateway",
    company: "Bradken",
    summary:
      "Connected field gateway integrating sensing, communications and remote-monitoring functions.",
    status: "draft",
    displayOrder: 4,
    role: "Product systems and technical lead",
    period: "To be confirmed",
    domains: ["Industrial IoT", "Communications", "Remote monitoring"],
    technologies: ["Sensing integration", "Communications", "Remote monitoring"],
    countries: [],
    sections: [],
    relatedProjectSlugs: ["smartroller", "get-vision", "get-tracker"],
  },
  {
    title: "SmartMill",
    shortTitle: "SmartMill",
    slug: "smartmill",
    company: "Bradken",
    summary: "Early-stage sensing prototype and validation programme.",
    status: "planned",
    displayOrder: 5,
    role: "Prototype and validation contribution",
    period: "To be confirmed",
    domains: ["Mining technology", "Sensing prototype", "Validation"],
    technologies: ["Sensing prototype", "Validation"],
    countries: [],
    sections: [],
    relatedProjectSlugs: ["smartroller", "mining-iot-gateway"],
  },
  {
    title: "SmartLiner",
    shortTitle: "SmartLiner",
    slug: "smartliner",
    company: "Bradken",
    summary: "Product upgrade and systems contribution.",
    status: "planned",
    displayOrder: 6,
    role: "Product upgrade and systems contribution",
    period: "To be confirmed",
    domains: ["Mining technology", "Product upgrade", "Systems engineering"],
    technologies: ["Product upgrade", "Systems engineering"],
    countries: [],
    sections: [],
    relatedProjectSlugs: ["smartmill", "smartroller"],
  },
];

export function getStories() {
  return [...stories].sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function isPublishedStatus(status: StoryStatus) {
  return status === "published";
}

export function canExposeStoryPage(story: Story) {
  return process.env.NODE_ENV !== "production" || isPublishedStatus(story.status);
}

export function getStoriesForStaticParams() {
  return getStories().filter((story) => canExposeStoryPage(story));
}
