import type { NotebookEntry, NotebookStatus } from "@/types/notebook";

export const notebookEntries: NotebookEntry[] = [
  {
    title: "Sub-GHz Industrial IoT Sensor Platform",
    shortTitle: "920 MHz Industrial IoT Sensor",
    slug: "sub-ghz-industrial-iot-sensor",
    cardEyebrow: "Engineering Notebook · Active R&D",
    summary:
      "A custom 920 MHz sensor node and reusable codebase for low-power industrial and logistics monitoring. The working prototype integrates motion, shock, temperature and humidity sensing, compact RF packets, receiver decoding and measurement-led battery modelling before deep-sleep optimisation.",
    status: "review",
    visibleStatus: "Functional prototype · Active development",
    displayOrder: 1,
    entryType: "Build Log",
    organisation: "Independent engineering R&D",
    heroProposition:
      "A reusable 920 MHz sensing platform built from custom hardware, measurable event logic and a test-driven low-power architecture.",
    heroSummary:
      "This independent proof of concept demonstrates how a custom sensor node can detect meaningful local events, preserve environmental context and transmit compact summaries over Sub-GHz RF. It is designed as a reusable starting point for future logistics, food-monitoring and heavy-industrial programmes rather than a fixed single-product design.",
    actionLabel: "Read the engineering notebook",
    period: "April 2026 to present",
    technologies: [
      "920 MHz ISM",
      "Sub-GHz RF",
      "Industrial IoT",
      "Event-Driven Sensing",
      "Low-Power Design",
      "CC1310",
      "Embedded Electronics",
      "PCB Bring-Up",
      "Environmental Sensing",
      "Motion Detection",
      "Packet Architecture",
      "RF Validation",
      "Spectrum Analysis",
      "AI-Assisted Engineering",
    ],
    methods: [
      "Custom PCB bring-up",
      "Interrupt-driven observation",
      "RF measurement",
      "Power modelling",
      "Receiver decoding",
      "Instrument-verified workflow",
    ],
    cardImage: {
      src: "/images/notebook/sub-ghz-industrial-iot-sensor/card.webp",
      alt: "Custom Sub-GHz sensor platform under development on an electronics test bench.",
      aspect: "wide",
      objectPosition: "center",
    },
    heroImage: {
      src: "/images/notebook/sub-ghz-industrial-iot-sensor/hero.png",
      alt: "Custom circular CC1310 Sub-GHz sensor PCB with environmental and motion sensors and a helical antenna.",
      aspect: "landscape",
      objectFit: "contain",
      objectPosition: "center",
    },
    snapshot: [
      {
        label: "Role",
        value: "Product Systems Architect and hands-on development lead",
      },
      {
        label: "Objective",
        value:
          "Build a reusable custom sensor, RF and firmware base for future Industrial IoT proof-of-concept programmes.",
      },
      {
        label: "Core platform",
        value: "Custom TI CC1310 sensor node and CC1352P1 receiver.",
      },
      {
        label: "RF",
        value: "920 MHz Sub-GHz.",
      },
      {
        label: "Sensors",
        value:
          "LIS2DW12 accelerometer and AHT20 temperature/humidity sensor.",
      },
      {
        label: "Event processing",
        value:
          "Interrupt-driven motion detection with bounded observation windows.",
      },
      {
        label: "Packet",
        value: "28-byte versioned observation summary.",
      },
      {
        label: "Validation",
        value:
          "UART, I2C identity, interrupts, spectrum analysis, receiver decoding and Otii power measurement.",
      },
      {
        label: "Current state",
        value:
          "Functional prototype; final deep sleep, enclosure, security and extended field-style testing remain incomplete.",
      },
      {
        label: "Repository",
        value: "GitHub source link supplied below.",
      },
    ],
    technologyGroups: [
      {
        category: "Core platform",
        items: [
          {
            name: "TI CC1310",
            purpose:
              "Custom low-power 920 MHz sensor node platform and first complete reference path.",
          },
          {
            name: "TI CC1352P1",
            purpose:
              "Receiver/reference gateway path for packet reception and human-readable UART decode.",
          },
        ],
      },
      {
        category: "Sensors and interfaces",
        items: [
          {
            name: "LIS2DW12",
            purpose:
              "Low-power three-axis accelerometer for activity interrupts and motion/event observation.",
          },
          {
            name: "AHT20",
            purpose:
              "Scheduled temperature and humidity sensing with cached environmental context.",
          },
          {
            name: "I2C, GPIO interrupt and UART",
            purpose:
              "Sensor bus, activity wake path and bring-up/diagnostic visibility.",
          },
        ],
      },
      {
        category: "Communications",
        items: [
          {
            name: "920 MHz Sub-GHz",
            purpose:
              "Low-data-rate industrial telemetry where small event summaries matter more than high throughput.",
          },
          {
            name: "TI EasyLink",
            purpose:
              "RF service foundation for compact observation-summary packet transmission.",
          },
          {
            name: "28-byte observation-summary packet",
            purpose:
              "Versioned event record carrying motion state, flags, peak acceleration and cached environmental data.",
          },
        ],
      },
      {
        category: "Power and event architecture",
        items: [
          {
            name: "Interrupt-driven wake path",
            purpose:
              "Motion starts local observation rather than requiring continuous host polling.",
          },
          {
            name: "Bounded observation window",
            purpose:
              "Captures useful state while avoiding raw accelerometer streaming.",
          },
          {
            name: "Deep sleep planned",
            purpose:
              "Final deep-sleep architecture is still in progress and not claimed as complete.",
          },
        ],
      },
      {
        category: "Development and validation",
        items: [
          {
            name: "Code Composer Studio, TI-RTOS and Altium Designer",
            purpose:
              "Firmware build/debug, scheduling and custom schematic/PCB development.",
          },
          {
            name: "Advantest R3267 and Otii Arc",
            purpose:
              "Spectrum verification and current measurement for scenario-based power modelling.",
          },
          {
            name: "Logic analysis, Git and GitHub",
            purpose:
              "Digital-interface investigation, milestone control and public source review.",
          },
        ],
      },
      {
        category: "AI-assisted workflow",
        items: [
          {
            name: "ChatGPT",
            purpose:
              "Architecture discussion, debugging hypotheses, calculations, documentation and prompt scoping.",
          },
          {
            name: "OpenAI Codex",
            purpose:
              "Bounded repository implementation under explicit instructions and acceptance checks.",
          },
        ],
      },
    ],
    applicationProfiles: [
      {
        title: "Warehouse and food logistics",
        body:
          "Periodic temperature and humidity with movement start/end, shock and drop events for reusable trays, crates or handled loads with sparse movement duty cycles. No customer adoption is claimed.",
      },
      {
        title: "Mining and heavy industry",
        body:
          "Temperature, vibration, shock and high-G monitoring, with humidity removal, larger battery and rugged enclosure treated as application decisions. This independent board has not been deployed at a mine.",
      },
      {
        title: "Rapid proof-of-concept platform",
        body:
          "Reusable drivers, event logic, packet services and receiver tooling that can accelerate future Industrial IoT demonstrators without starting from an empty codebase.",
      },
    ],
    sections: [
      {
        id: "building-a-reusable-starting-point",
        title: "Building a reusable starting point, not a one-off sensor demo",
        body: [
          "Many Industrial IoT ideas begin with an apparently simple request: measure temperature, detect movement and send the result wirelessly. The difficulty appears later. The sensor has to run from a practical battery, survive a credible environment, report useful events rather than noise, communicate through a defined protocol and provide enough diagnostics to understand failures.",
          "This project was created to establish that foundation before a specific customer programme demanded it. The goal was a reusable Sub-GHz sensing platform that could be adapted to future warehouse, food-logistics or heavy-industrial applications without starting from a blank schematic and empty repository.",
          "The first complete implementation uses a custom Texas Instruments CC1310 board operating in the 920 MHz ISM band. It combines a low-power accelerometer, temperature and humidity sensing, local event processing and a compact RF packet. A CC1352P1 LaunchPad receives and decodes the packet, creating a working end-to-end path rather than an isolated transmitter demonstration.",
        ],
      },
      {
        id: "why-sub-ghz-and-why-custom",
        title: "Why Sub-GHz and why a custom board",
        body: [
          "Sub-GHz RF is valuable when range, penetration and low node power matter more than high data throughput. The project does not attempt to move large data streams. It is designed to report small pieces of operational information: movement state, shock or high-G events, observation duration, maximum measured acceleration and the latest environmental conditions.",
          "A custom board was essential to the learning and portfolio value. It required decisions about power decoupling, crystal implementation, RF configuration, sensor interfaces, interrupt routing, programming/debug access and physical bring-up. It also exposed the difference between a vendor example and a system that has to work on personally designed hardware.",
          "The board uses an AHT20 temperature and humidity sensor and a LIS2DW12 low-power three-axis accelerometer. The environmental sensor is read on a schedule. The accelerometer provides an activity interrupt to the CC1310, allowing motion to initiate a bounded observation period.",
        ],
        images: [
          {
            src: "/images/notebook/sub-ghz-industrial-iot-sensor/board-detail.webp",
            alt: "Close-up of the custom CC1310 sensor PCB with temporary test wiring and a helical antenna.",
            caption:
              "The custom CC1310 board during hands-on bring-up, before enclosure integration and final mechanical packaging.",
            aspect: "wide",
            objectFit: "contain",
            objectPosition: "center",
          },
        ],
      },
      {
        id: "architecture-at-a-glance",
        title: "Architecture at a glance",
        body: [
          "The system starts with a custom CC1310 sensor node. AHT20 environmental sensing and LIS2DW12 motion sensing feed a local observation path. A GPIO activity interrupt flags that movement may be meaningful, after which the firmware performs bounded local observation and event classification.",
          "The node combines the resulting motion state and event flags with cached environmental context and encodes a 28-byte versioned summary. That summary is transmitted over a 920 MHz RF link to a CC1352P1 receiver, which prints a human-readable UART decode.",
          "Future BLE, gateway, MQTT, LTE or cloud paths are roadmap options. They are not presented as completed capability in the current prototype.",
        ],
        bullets: [
          "Custom CC1310 sensor node.",
          "AHT20 environmental sensing.",
          "LIS2DW12 motion and event sensing.",
          "GPIO activity interrupt.",
          "Bounded local observation and event classification.",
          "Cached environmental context.",
          "28-byte versioned observation summary.",
          "920 MHz RF link.",
          "CC1352P1 receiver.",
          "Human-readable UART decode.",
        ],
      },
      {
        id: "turning-movement-into-a-useful-event",
        title: "Turning movement into a useful event",
        body: [
          "A common low-power design mistake is to choose between two extremes: poll continuously or transmit every threshold crossing. Neither produces a good reusable product architecture.",
          "The current platform uses a state-based observation approach. The accelerometer interrupt signals that something meaningful may be happening. The firmware then samples for a bounded period, tracks movement state and maximum acceleration, and sets event flags for conditions such as shock, drop or high-G behaviour. It combines that result with the most recent temperature and humidity values.",
          "The result is not a raw sensor dump. It is a compact observation summary designed to answer practical questions: Did the asset move? For how long? Was there an unusual impact? What was the environmental context? How old is that environmental reading?",
        ],
      },
      {
        id: "packet-that-can-be-understood-and-evolved",
        title: "A packet that can be understood and evolved",
        body: [
          "The initial RF examples were cleaned of demo behaviour and replaced with a small transmit service and a defined 28-byte message. The message includes protocol identity, version, type, sequence, observation duration, sample count, motion state, flags, maximum acceleration and environmental data.",
          "A CC1352P1 receiver prints the decoded message in human-readable form. This is important because a sensor platform is not complete when radio energy leaves the antenna. The receiving system must identify the packet, interpret the fields and expose enough context to validate the end-to-end behaviour.",
          "The CC1352P1 also leaves a future path toward a demonstration gateway using BLE or a wider bridge. Those features are deliberately kept as roadmap items rather than described as finished functionality.",
        ],
      },
      {
        id: "bench-rf-path-validation",
        title: "Bench RF-path and receiver validation",
        body: [
          "RF transmission was verified as a bench development result, not as regulatory, EMC or certification testing. The important evidence is that the custom node was transmitting at the intended 920 MHz configuration and that the receiver path could turn the packet into readable diagnostic output.",
          "This keeps the validation claim appropriately bounded: the RF path and frequency behaviour were checked on the bench, while range, antenna behaviour after enclosure integration and product-level compliance remain future work.",
        ],
        images: [
          {
            src: "/images/notebook/sub-ghz-industrial-iot-sensor/spectrum-920mhz.webp",
            alt: "Spectrum analyser showing a measured RF transmission centred at 920 MHz.",
            caption:
              "Spectrum-analyser verification of the custom node transmitting at 920 MHz during bench development.",
            aspect: "wide",
            objectFit: "contain",
            objectPosition: "center",
          },
        ],
      },
      {
        id: "using-battery-estimates-honestly",
        title: "Using battery estimates honestly before final deep sleep",
        body: [
          "The current firmware has not yet implemented its final deep-sleep architecture. It still contains development diagnostics, frequent environmental measurement and more rest-state activity than the intended deployment configuration. That makes the present measurements a conservative baseline.",
          "The working model uses approximately 20 µA for the current idle baseline and approximately 2 mA during active observation. With a nominal 620 mAh CR2450, the calculated result depends strongly on how much time the application spends actively observing movement.",
        ],
        table: {
          caption:
            "Calculated engineering scenarios only. These are not measured field-life guarantees and do not fully include final deep-sleep measurement, battery derating, temperature, self-discharge, RF event energy or real event distribution.",
          columns: [
            "Active observation",
            "Average current",
            "Nominal calculated life",
            "Interpretation",
          ],
          rows: [
            [
              "20%",
              "416 µA",
              "Approximately 62 nominal days",
              "Demanding movement scenario",
            ],
            [
              "10%",
              "218 µA",
              "Approximately 119 days / 3.9 months",
              "Regularly handled reusable logistics assets",
            ],
            [
              "5%",
              "119 µA",
              "Approximately 217 days / 7.1 months",
              "Assets stationary for most of their life",
            ],
            [
              "2%",
              "59.6 µA",
              "Approximately 433 days / 14.2 months",
              "Illustrative low-movement case before real-world derating",
            ],
          ],
        },
        callout: {
          label: "Battery claim boundary",
          body: "The illustrative 2% active-observation scenario exceeds one nominal year before real-world derating and final deep-sleep measurements. It is not a field-life guarantee.",
        },
      },
      {
        id: "different-applications-different-configurations",
        title: "Different applications should produce different configurations",
        body: [
          "A reusable warehouse tray or food container may spend almost all of its time stationary. Temperature and humidity matter; movement start/end and drop events may be more valuable than frequent motion packets. A small coin cell can be appropriate if the RF and observation policy remains sparse.",
          "A mining or heavy-industrial sensor has a different profile. Humidity may provide little value and can be disabled. Temperature, vibration, shock and high-G behaviour may dominate. The enclosure and battery can be larger, and thresholds need to reflect the machine rather than a handled tray.",
          "The project therefore separates the platform from the product configuration. The CC1310 board, drivers, event logic and packet services provide a reusable base. Sensor selection, battery, enclosure, thresholds and reporting intervals remain programme-level decisions.",
        ],
      },
      {
        id: "home-lab-validation",
        title: "A home lab capable of closing the loop",
        body: [
          "The project was supported by more than a development board and serial terminal. RF output was checked on an Advantest R3267 spectrum analyser. Current behaviour was examined with an Otii Arc. Digital interfaces and UART paths were investigated using logic-analysis tools.",
          "XDS110 debug and application UART supported flashing, break/debug work and serial diagnostics. CC1310 and CC1352P1 LaunchPads supported reference hardware, receiver development and comparative bring-up. Rework and inspection tools supported custom-board assembly correction and bench work.",
          "The wider bench includes oscilloscope, RF-network, component-measurement, programmable-load, fine-rework and macro-photography capability. The engineering message is that the design loop was closed through physical measurement rather than compilation or simulation alone.",
        ],
      },
      {
        id: "ai-assisted-instrument-verified-engineering",
        title: "AI-assisted, instrument-verified engineering",
        body: [
          "This project was developed in 2026 with deliberate use of generative AI. ChatGPT supported architecture discussion, debugging hypotheses, test planning, calculations, documentation and bounded prompt creation. Codex performed scoped repository implementation under explicit instructions.",
          "The human responsibility boundary remained clear. Raghav defined the objective and architecture, designed the custom hardware, built and flashed firmware, operated instruments, interpreted evidence and accepted or rejected changes.",
          "Generated changes were validated using builds, UART logs, spectrum analysis, RF reception and current measurements. The current product does not contain AI or machine learning; AI was part of the engineering workflow, not the device function.",
        ],
        images: [
          {
            src: "/images/notebook/sub-ghz-industrial-iot-sensor/development-workflow.webp",
            alt: "Custom sensor hardware and development boards connected beside a laptop displaying embedded firmware source code.",
            caption:
              "Repository implementation, firmware development and physical hardware validation were performed as one iterative engineering loop.",
            aspect: "wide",
            objectPosition: "center",
          },
        ],
      },
      {
        id: "failures-turning-points-and-limitations",
        title: "Failures, turning points and limitations",
        body: [
          "The project includes useful failures and design turns. Early I2C behaviour included timing and data-readiness issues. The receiver initially had UART visibility problems, which reinforced that a radio demo without observable receive-side evidence is not an end-to-end system test.",
          "Vendor demo RF behaviour was removed rather than allowed to become the product architecture. The initial transmit-after-observation approach also exposed a communication-policy gap for long-lived motion, shifting the design direction toward movement start/end, significant event reporting and optional bounded heartbeats.",
          "Active observation dominates the high-movement power scenario, so environmental interval tuning alone is not enough. Deep sleep, enclosure, security, provisioning, multi-device behaviour, regulatory work and production hardening remain incomplete.",
        ],
      },
      {
        id: "current-status-and-next-steps",
        title: "Current status and next steps",
        body: [
          "The platform is a functional development prototype and active proof of concept. Completed work includes custom CC1310 PCB bring-up, UART, AHT20, LIS2DW12, interrupt path, bounded observation, the 28-byte summary packet, 920 MHz transmission, CC1352P1 reception and decode, early power modelling and Git milestones.",
          "In-progress work includes the deep-sleep state manager, event-only reporting policy, configurable environmental interval, 14 dBm versus 10 dBm comparison and representative duty-cycle measurements.",
          "Planned work includes a 3D-printed enclosure, range and endurance testing, antenna review after enclosure integration, security and provisioning, a polished end-to-end demonstrator, and future Nordic Semiconductor and Silicon Labs reference work. These roadmap items are not presented as implemented.",
        ],
      },
    ],
    limitations: [
      "Final deep sleep is not implemented.",
      "The enclosure is not complete.",
      "Security, provisioning and production hardening are not complete.",
      "Battery figures are calculated scenarios, not field-life guarantees.",
      "No customer, mine, logistics deployment or commercial adoption is claimed.",
      "Nordic Semiconductor and Silicon Labs reference work remains future roadmap work.",
    ],
    nextSteps: [
      "Measure true deep-sleep current with RF and unused peripherals disabled.",
      "Record energy for environmental wake, movement events and RF packets.",
      "Compare 14 dBm and 10 dBm RF behaviour using the actual packet and wake profile.",
      "Complete event-only reporting policy and representative duty-cycle measurements.",
      "Design and validate a 3D-printed enclosure with antenna, battery, sensor and service-access constraints.",
      "Review security, provisioning, range, endurance and demonstrator readiness before publication.",
    ],
    relatedNotebookSlugs: ["engineering-portfolio-development"],
    sourceLinks: [
      {
        label: "View the development repository on GitHub",
        href: "https://github.com/raghavmalik89/cc1310-custom-iot-sensor",
        kind: "github",
      },
    ],
    seo: {
      title: "Sub-GHz Industrial IoT Sensor Platform | Raghav Malik",
      description:
        "Custom 920 MHz CC1310 sensor platform integrating motion, shock, temperature and humidity sensing, compact RF packets, receiver decoding, power measurement and an AI-assisted engineering workflow.",
      openGraphTitle:
        "Building a Reusable Sub-GHz Industrial IoT Sensor Platform",
      openGraphDescription:
        "A custom CC1310 node, CC1352P1 receiver and measurement-led low-power architecture for logistics, food-monitoring and heavy-industrial proof-of-concept development.",
      openGraphImage: {
        src: "/images/notebook/sub-ghz-industrial-iot-sensor/card.webp",
        alt: "Custom Sub-GHz sensor platform under development on an electronics test bench.",
        aspect: "wide",
      },
      canonicalPath: "/notebook/sub-ghz-industrial-iot-sensor",
      keywords: [
        "Sub-GHz Industrial IoT",
        "920 MHz sensor",
        "TI CC1310",
        "CC1352P1 receiver",
        "low-power wireless sensor",
        "custom IoT PCB",
        "LIS2DW12",
        "AHT20",
        "event-driven sensing",
        "embedded RF engineering",
        "AI-assisted engineering",
        "industrial sensor prototype",
      ],
    },
  },
  {
    title: "Building an Engineering Portfolio as a Product",
    shortTitle: "Engineering Portfolio Product",
    slug: "engineering-portfolio-development",
    cardEyebrow: "Engineering Notebook · Product Development",
    summary:
      "A purpose-built system for communicating a multidisciplinary engineering career through stakeholder-led UX, original visual design, reusable software architecture and evidence-controlled technical storytelling.",
    status: "review",
    visibleStatus: "Active development",
    displayOrder: 2,
    entryType: "Product Development",
    organisation: "Independent engineering portfolio",
    actionLabel: "Read the design decisions",
    period: "Active development",
    heroProposition:
      "A purpose-built system for communicating complex engineering work to recruiters, technical leaders and senior engineers, using different levels of depth for each reader.",
    heroSummary:
      "This is not a template website. Its information architecture, user experience, interface design, visual language, editorial system, software architecture and implementation were developed specifically for this portfolio. The project treats communication as a systems problem: identify the stakeholders, define what each reader must understand, select the simplest maintainable architecture and preserve evidence behind every major claim.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Information Architecture",
      "UX/UI Design",
      "Content Architecture",
      "Publication Safety",
      "Repository Governance",
      "Progressive Disclosure",
      "Static Editorial Content",
      "AI-Assisted Development",
    ],
    methods: [
      "Stakeholder-led requirements",
      "Decision-led architecture",
      "Evidence-controlled editorial workflow",
      "Responsive validation",
    ],
    cardImage: {
      src: "/images/notebook/engineering-portfolio-development/engineering-portfolio-development_decision-flow.svg",
      alt: "Decision flow linking portfolio stakeholders, communication requirements, architecture, technology, design, validation and operation.",
      aspect: "wide",
      objectFit: "contain",
      objectPosition: "center",
    },
    featureVisual: {
      eyebrow: "System development flow",
      title: "From stakeholder needs to an operating product",
      body:
        "The portfolio architecture followed the same sequence used in an engineering programme: identify the stakeholders, define the problem, derive requirements, select the architecture, validate the system and continue operating it.",
      image: {
        src: "/images/notebook/engineering-portfolio-development/engineering-portfolio-development_decision-flow.svg",
        alt: "Decision flow showing the engineering portfolio's progression from stakeholders and problem definition through requirements, architecture, technology selection, design, validation and ongoing operation.",
        aspect: "wide",
        objectFit: "contain",
        objectPosition: "center",
      },
    },
    snapshot: [
      {
        label: "My role",
        value:
          "Product architect, UX/UI designer, editorial architect, developer and technical author.",
      },
      {
        label: "Project objective",
        value:
          "Create a credible, maintainable and public-safe system for communicating multidisciplinary engineering work.",
      },
      {
        label: "Core stack",
        value: "Next.js, React, TypeScript and Tailwind CSS.",
      },
      {
        label: "Content architecture",
        value:
          "Engineering Stories, Engineering Notebook and structured portfolio data.",
      },
      {
        label: "Design approach",
        value: "Original UX, UI and visual system.",
      },
      {
        label: "Editorial approach",
        value:
          "Evidence-controlled engineering narratives with contribution and IP boundaries.",
      },
      {
        label: "Delivery approach",
        value: "Branch-controlled, tested and incrementally released.",
      },
      {
        label: "Infrastructure cost",
        value:
          "Approximately US$8 per year under current usage and hosting limits.",
      },
    ],
    technologyGroups: [
      {
        category: "Core application",
        items: [
          {
            name: "Next.js",
            purpose:
              "Routing, rendering, metadata and reusable page architecture for current and future editorial systems.",
          },
          {
            name: "React",
            purpose:
              "Repeated interface patterns for media, metadata, navigation, related content and interactive controls.",
          },
          {
            name: "TypeScript",
            purpose:
              "Typed content records for statuses, technologies, images, links, sections and metadata.",
          },
          {
            name: "Tailwind CSS",
            purpose:
              "Responsive states, spacing and design-token usage kept close to the reusable components.",
          },
        ],
      },
      {
        category: "Content and operation",
        items: [
          {
            name: "Static and server-rendered editorial content",
            purpose:
              "Fast delivery without a runtime database or application backend for the current publishing model.",
          },
          {
            name: "Structured repository content",
            purpose:
              "Version-controlled review of evidence, claims, source links, media and publication state.",
          },
          {
            name: "Git workflow",
            purpose:
              "Branch-controlled development with lint, build and diff review before accepted commits.",
          },
          {
            name: "ChatGPT and Codex",
            purpose:
              "Retrospective research, evidence reconciliation, editing, implementation assistance and review under human ownership.",
          },
        ],
      },
    ],
    sections: [
      {
        id: "stakeholders-and-reading-depths",
        title: "Stakeholders came first",
        body: [
          "The portfolio was designed around reader needs rather than around a website template. Recruiters need role fit, seniority and career scope quickly. Engineering managers need judgement, ownership and delivery evidence. Senior engineers need architecture, trade-offs, testing and lessons. Hiring leaders need commercial impact, leadership breadth and credibility. I also need an accurate, maintainable and public-safe technical record.",
          "A single resume-style page could not serve all of those readers well. The design therefore uses progressive disclosure: a 30-second skim for role fit, a 3-minute technical overview for architecture and decisions, and deeper narratives for readers who want evidence.",
        ],
        callout: {
          label: "Design principle",
          body: "Read less, understand more, but provide evidence when the reader wants to go deeper.",
        },
        observations: [
          {
            label: "Recruiters",
            value: "Role fit, seniority and career scope within seconds.",
          },
          {
            label: "Engineering managers",
            value: "Judgement, ownership, delivery evidence and communication style.",
          },
          {
            label: "Senior engineers",
            value: "Architecture, trade-offs, validation and lessons learned.",
          },
          {
            label: "Hiring leaders",
            value: "Leadership breadth, commercial relevance and credibility.",
          },
        ],
      },
      {
        id: "the-real-problem",
        title: "The real problem was not building a website",
        body: [
          "The real problem was communicating multidisciplinary engineering work without reducing it to resume bullets, overwhelming non-specialist readers or publishing confidential implementation details.",
          "Traditional resumes are effective for linear career histories, but this career spans product architecture, electronics, RF, mechatronics, software, field validation, programme delivery and technical leadership. Compressing that breadth into short claims removes the evidence and reasoning that make the work credible.",
        ],
        bullets: [
          "Communicate professional positioning within seconds.",
          "Show leadership and hands-on engineering without confusing contribution boundaries.",
          "Separate commercial product stories from ongoing technical investigations.",
          "Support rapid scanning and deep reading from the same system.",
          "Preserve evidence without exposing customer, company or IP-sensitive material.",
          "Remain inexpensive to operate and maintainable by one person.",
        ],
      },
      {
        id: "why-not-a-template",
        title: "Why a template was not enough",
        body: [
          "Templates were rejected because the content model and reader journeys were custom, not because custom code is inherently superior.",
          "Generic portfolio systems can produce polished pages quickly, but they rarely model contribution boundaries, publication states, evidence-controlled project narratives, related technical notes and reader-specific depth. Those requirements shaped the architecture.",
        ],
        table: {
          columns: ["Option", "Advantages", "Limitations", "Decision"],
          rows: [
            [
              "Hosted portfolio builder",
              "Fast initial setup and low initial development effort.",
              "Recurring platform cost, limited information architecture, vendor constraints and weak support for deep engineering narratives.",
              "Rejected.",
            ],
            [
              "Purchased theme",
              "Reduced front-end effort and prebuilt layouts.",
              "Generic structure, difficult long-term adaptation and likely mismatch with Stories and Notebook systems.",
              "Rejected.",
            ],
            [
              "Custom application",
              "Full control of information architecture, reusable content systems, visual identity and publication workflow.",
              "Greater initial design and implementation effort, plus responsibility for maintenance.",
              "Selected.",
            ],
          ],
        },
        callout: {
          label: "Decision",
          body: "The custom site was not chosen because custom code is inherently better. It was chosen because the content model itself was custom.",
        },
      },
      {
        id: "major-engineering-decisions",
        title: "Major engineering and technology decisions",
        body: [
          "The central decisions were treated as product-system choices: each one had to support the communication requirements, reduce maintenance load or preserve publication control.",
        ],
        table: {
          columns: ["Decision", "Why", "Result"],
          rows: [
            [
              "Next.js",
              "Static and server-rendered editorial content, structured routing, metadata control and future expansion without manually maintaining unrelated pages.",
              "Shared dynamic routes and reusable systems for Stories and Notebook entries.",
            ],
            [
              "React",
              "Repeated interface patterns for media blocks, metadata, navigation, related content and interaction behaviour.",
              "Design refinements can propagate through reusable components instead of being repeated by hand.",
            ],
            [
              "TypeScript",
              "Structured metadata, publication states, technologies, images, links and narrative sections become harder to misuse as the project count grows.",
              "More predictable interfaces and fewer content-shape errors.",
            ],
            [
              "Tailwind CSS",
              "Rapid iteration for a one-person project, responsive states beside components and controlled spacing/design tokens.",
              "Fast design iteration without a large disconnected stylesheet architecture.",
            ],
            [
              "Static/server-rendered editorial model",
              "No current requirement for a database, accounts or runtime application backend.",
              "Fast delivery and very low infrastructure cost.",
            ],
            [
              "Repository content rather than CMS",
              "One principal publisher and every project requires evidence, contribution and IP review.",
              "Content remains version-controlled, reviewable and aligned with the design system.",
            ],
            [
              "Separate Stories and Notebook systems",
              "Commercial project narratives and ongoing technical investigations need different structures.",
              "Stories demonstrate architecture, ownership and delivery; Notebook entries show investigation, experiments and evolving technical work.",
            ],
            [
              "Progressive disclosure",
              "Different readers have radically different available attention.",
              "Fast skim, structured overview and optional deep dive coexist on the same site.",
            ],
          ],
        },
      },
      {
        id: "operating-cost-discipline",
        title: "Operating-cost discipline",
        body: [
          "Operating cost was treated as a design constraint. The goal was not to avoid all tools, but to avoid infrastructure complexity that did not improve reader comprehension, editorial control or long-term maintainability.",
          "Current direct website infrastructure cost is approximately US$8 per year under existing usage and hosting limits. Hosting currently remains within a no-cost tier. Paid theme, CMS subscription and database costs are zero for the current architecture.",
          "ChatGPT is a broader research, editorial and development tool, approximately US$20 per month, and is not counted as pure website infrastructure cost. Free-tier conditions can change, so the cost statement is a current operating-state snapshot rather than a permanent guarantee.",
        ],
      },
      {
        id: "design-principles",
        title: "Design principles",
        observations: [
          {
            label: "Read less, understand more",
            value:
              "Each page should answer the first question quickly before asking the reader for deeper attention.",
          },
          {
            label: "Evidence before promotion",
            value:
              "Claims are supported through project structure, decisions, images, source links or controlled narrative depth.",
          },
          {
            label: "Multiple reading depths",
            value:
              "One system supports skim, overview and deep technical inspection without duplicating content.",
          },
          {
            label: "Responsive by default",
            value:
              "Mobile, tablet and desktop layouts are treated as normal use cases, not a final cleanup pass.",
          },
          {
            label: "Reusable implementation",
            value:
              "Custom information architecture is implemented through shared routes, typed data and reusable components.",
          },
          {
            label: "Public-safe technical depth",
            value:
              "The site preserves technical credibility without publishing confidential implementation details.",
          },
        ],
      },
      {
        id: "art-and-engineering-workflow",
        title: "Art and engineering developed together",
        body: [
          "The visual system was not applied after the engineering was complete. Content architecture, interface behaviour, imagery, typography and software structure were developed together as parts of the same product.",
        ],
        table: {
          columns: ["Artistic and editorial workflow", "Engineering and delivery workflow"],
          rows: [
            ["Visual references", "Requirements and constraints"],
            ["Story hierarchy", "Information architecture"],
            ["Typography and colour", "Design tokens and reusable components"],
            ["Image and media treatment", "Responsive asset handling"],
            ["Narrative rhythm", "Structured content schema"],
            ["Interaction concepts", "Component behaviour"],
            ["Diagram composition", "Technical accuracy"],
            ["Editorial review", "Lint, build and regression checks"],
          ],
        },
      },
      {
        id: "compact-evolution-timeline",
        title: "Compact evolution timeline",
        milestones: [
          {
            title: "Positioning",
            body: "Defined the portfolio around product systems architecture, technical leadership and end-to-end product delivery.",
          },
          {
            title: "Information architecture",
            body: "Separated fast career navigation, flagship Engineering Stories and technical Notebook entries.",
          },
          {
            title: "Visual system",
            body: "Developed the dark industrial interface, typography, copper hierarchy, motion and media language.",
          },
          {
            title: "Application architecture",
            body: "Built the portfolio with Next.js, React, TypeScript and Tailwind using reusable dynamic routes.",
          },
          {
            title: "Canonical Story",
            body: "Published SmartRoller and used it to establish the reusable Engineering Stories design system.",
          },
          {
            title: "Engineering Notebook",
            body: "Created a separate architecture for technical investigations, hardware development and engineering records.",
          },
          {
            title: "Editorial governance",
            body: "Introduced evidence control, contribution boundaries, publication gating and IP-review workflows.",
          },
          {
            title: "Current phase",
            body: "Expanding project content, diagrams and related-content connections while preserving the established system.",
          },
        ],
      },
      {
        id: "current-state-and-pending-work",
        title: "Current state and pending work",
        body: [
          "Features remain deferred unless they improve reader comprehension, editorial control or long-term maintainability.",
        ],
        observations: [
          {
            label: "Completed",
            value:
              "Professional positioning, custom visual and interaction system, reusable website architecture, dynamic Engineering Stories, SmartRoller canonical story, Engineering Notebook architecture, evidence workflow and responsive layouts.",
          },
          {
            label: "In progress",
            value:
              "Additional flagship stories, deeper Notebook entries, original technical diagrams, related-content connections, accessibility refinement and performance refinement.",
          },
          {
            label: "Intentionally deferred",
            value:
              "Paid CMS, database-backed content, user accounts, unnecessary analytics complexity, high-maintenance effects, paid hosting infrastructure and features without a demonstrated reader or maintenance benefit.",
          },
        ],
      },
      {
        id: "ai-assisted-governance",
        title: "AI-assisted, human-owned workflow",
        body: [
          "Generative AI supports historical reconstruction, editorial organisation, implementation assistance and review. It does not originate the engineering projects, professional experience, design judgement or product direction.",
          "Raghav remains the product owner, design authority, technical decision-maker, evidence controller and final reviewer. AI-assisted changes are kept inside repository governance: scoped prompts, diff review, lint, build and human acceptance.",
        ],
      },
    ],
    limitations: [
      "Cost figures describe the current operating state and hosting limits, not a permanent guarantee.",
      "The entry publishes public-safe summaries rather than raw evidence records or internal review material.",
      "Additional screenshots are intentionally omitted; the live website is the artefact.",
    ],
    nextSteps: [
      "Continue expanding flagship Engineering Stories and deeper Notebook records.",
      "Add only diagrams or media that improve reader comprehension or evidence quality.",
      "Keep publication status, contribution boundaries and IP review visible in the editorial workflow.",
      "Review accessibility, performance and content relationships as the archive grows.",
    ],
    relatedStorySlugs: ["smartroller", "get-vision"],
    relatedNotebookSlugs: ["sub-ghz-industrial-iot-sensor"],
    sourceLinks: [
      {
        label: "View source repository",
        href: "https://github.com/raghavmalik89/engineering-portfolio",
        kind: "github",
      },
    ],
    seo: {
      title: "Building an Engineering Portfolio as a Product | Raghav Malik",
      description:
        "How Raghav Malik designed and built a custom engineering portfolio around stakeholder needs, evidence, progressive disclosure, low operating cost and reusable web architecture.",
      openGraphTitle: "Building an Engineering Portfolio as a Product",
      openGraphDescription:
        "A purpose-built engineering portfolio system shaped by stakeholder needs, evidence-controlled narratives, reusable Notebook and Stories architecture, and low operating cost.",
      canonicalPath: "/notebook/engineering-portfolio-development",
      keywords: [
        "engineering portfolio",
        "product development",
        "Next.js",
        "TypeScript",
        "content architecture",
        "progressive disclosure",
        "publication safety",
        "repository governance",
        "AI-assisted development",
      ],
    },
  },
  {
    title: "nRF BLE Paraglider Collapse Detection",
    shortTitle: "Paraglider Collapse Detection",
    slug: "nrf-paraglider-collapse-detection",
    summary:
      "Developing a wearable BLE sensing concept intended to recognise abnormal paraglider motion or collapse-related events while clearly separating an engineering prototype from certified aviation safety equipment.",
    status: "planned",
    displayOrder: 3,
    entryType: "Engineering Experiment",
    period: "In development",
    technologies: [
      "BLE",
      "nRF",
      "Wearable Systems",
      "Motion Detection",
      "Low-Power Design",
      "Safety Monitoring",
    ],
    methods: [
      "Concept scoping",
      "Risk boundary definition",
      "Prototype planning",
    ],
    snapshot: [
      {
        label: "Status",
        value: "In development as an experimental engineering prototype.",
      },
      {
        label: "Safety boundary",
        value:
          "Not certified aviation safety equipment and not a replacement for pilot training, judgement or approved flight instrumentation.",
      },
      {
        label: "Detection maturity",
        value:
          "Detection performance is not yet established; false positives and false negatives remain development risks.",
      },
    ],
    sections: [
      {
        id: "current-development-status",
        title: "Current development status",
        body: [
          "This planned Notebook entry records an in-development wearable BLE sensing concept for recognising abnormal paraglider motion or collapse-related events. It is intentionally framed as an engineering experiment rather than a safety product.",
        ],
        callout: {
          label: "Safety boundary",
          body: "This is an experimental engineering prototype. It is not certified aviation safety equipment, must not be represented as a replacement for pilot training, judgement or approved flight instrumentation, and has not yet established detection performance. False positives and false negatives remain development risks.",
        },
      },
    ],
    limitations: [
      "Exact nRF chipset is not specified.",
      "Sensor model, algorithm and alert mechanism are not claimed.",
      "No classification accuracy, response time, battery life or flight-test result is claimed.",
      "No certification path is claimed.",
    ],
    seo: {
      title: "nRF BLE Paraglider Collapse Detection | Engineering Notebook",
      description:
        "A planned safety-boundary engineering note for a wearable BLE paraglider collapse-detection concept, clearly identified as an uncertified experimental prototype.",
      canonicalPath: "/notebook/nrf-paraglider-collapse-detection",
    },
  },
];

export function getNotebookEntries() {
  return [...notebookEntries].sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getNotebookEntriesForIndex() {
  return getNotebookEntries().map((entry) => ({
    title: entry.title,
    shortTitle: entry.shortTitle,
    slug: entry.slug,
    cardEyebrow: entry.cardEyebrow,
    summary: entry.summary,
    status: entry.status,
    visibleStatus: entry.visibleStatus,
    displayOrder: entry.displayOrder,
    entryType: entry.entryType,
    organisation: entry.organisation,
    actionLabel: entry.actionLabel,
    period: entry.period,
    lastUpdatedLabel: entry.lastUpdatedLabel,
    technologies: entry.technologies,
    methods: entry.methods,
    cardImage: entry.cardImage,
    heroImage: undefined,
    snapshot: undefined,
    sections: [],
    relatedNotebookSlugs: [],
    relatedStorySlugs: [],
    sourceLinks: [],
    seo: undefined,
  }));
}

export function getNotebookEntryBySlug(slug: string) {
  return notebookEntries.find((entry) => entry.slug === slug);
}

export function isPublishedNotebookStatus(status: NotebookStatus) {
  return status === "published";
}

export function canExposeNotebookEntry(entry: NotebookEntry) {
  return (
    process.env.NODE_ENV !== "production" ||
    isPublishedNotebookStatus(entry.status)
  );
}

export function getNotebookEntriesForStaticParams() {
  return getNotebookEntries().filter((entry) => canExposeNotebookEntry(entry));
}
