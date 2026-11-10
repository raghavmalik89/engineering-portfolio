import type { NotebookEntry, NotebookStatus } from "@/types/notebook";

export const notebookEntries: NotebookEntry[] = [
  {
    title: "Sub-GHz Industrial IoT Sensor Platform",
    shortTitle: "920 MHz Industrial IoT Sensor",
    slug: "sub-ghz-industrial-iot-sensor",
    cardEyebrow: "Engineering Notebook · Active R&D",
    summary:
      "A custom 920 MHz sensor node and reusable codebase for low-power industrial and logistics monitoring. The working prototype integrates motion, shock, temperature and humidity sensing, compact RF packets, receiver decoding and measurement-led battery modelling before deep-sleep optimisation.",
    status: "published",
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
    inspector: {
      evidenceLabel: "Demonstrated",
      evidence: [
        "Custom PCB assembled and brought up",
        "Motion and environmental sensing integrated",
        "End-to-end 920 MHz packet path verified",
      ],
      currentLabel: "Current engineering focus",
      currentFocus:
        "Low-power sleep architecture and measurement-led battery optimisation.",
      technologyEvidence: {
        "920 MHz ISM":
          "End-to-end transmit and receiver packet path validated on custom hardware.",
        "Sub-GHz RF":
          "Compact observation packets were transmitted and decoded through the receiver path.",
        CC1310:
          "The custom CC1310 sensor board was assembled, brought up and used as the first complete node.",
        "Embedded Electronics":
          "Board bring-up connected the RF, sensing and diagnostic paths into a working prototype.",
        "PCB Bring-Up":
          "Custom hardware reached functional bring-up with sensor and RF paths active.",
        "Environmental Sensing":
          "Temperature and humidity readings were integrated into the transmitted observation summary.",
        "Motion Detection":
          "Motion events drive bounded observation instead of continuous accelerometer streaming.",
        "Packet Architecture":
          "A compact versioned observation packet carried motion state and environmental context.",
        "RF Validation":
          "Transmit and receiver behavior was checked through measured RF and decode workflows.",
      },
    },
    cardImage: {
      src: "/images/notebook/sub-ghz-industrial-iot-sensor/card.webp",
      alt: "Custom Sub-GHz sensor platform under development on an electronics test bench.",
      aspect: "wide",
      objectPosition: "center",
    },
    heroImage: {
      src: "/images/notebook/sub-ghz-industrial-iot-sensor/hero.webp",
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
    status: "published",
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
    inspector: {
      evidenceLabel: "Demonstrated",
      evidence: [
        "Reusable Story and Notebook publishing architecture",
        "Production metadata, route gating and sitemap controls",
        "Documented low-cost build and release workflow",
      ],
      currentLabel: "Current state",
      currentFocus:
        "Live platform with continued evidence-led editorial expansion.",
      technologyEvidence: {
        "Next.js":
          "Published routes, metadata and static editorial pages run through the same app architecture.",
        TypeScript:
          "Typed content records constrain statuses, routes, media, links and metadata before build.",
        "Information Architecture":
          "Stories, Notebook records and homepage evidence mapping give different readers controlled levels of depth.",
        "Content Architecture":
          "Structured data separates public evidence, presentation metadata and route exposure.",
        "Publication Safety":
          "Status-aware route gating and sitemap controls keep unpublished work out of production routes.",
        "Repository Governance":
          "Documented branch, release and validation rules keep publication work auditable.",
        "Static Editorial Content":
          "Public pages are generated from version-controlled content without a runtime CMS dependency.",
      },
    },
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
  {
    title: "A Flying Breadboard — Turning a Guess into a Flight Measurement",
    shortTitle: "A Flying Breadboard",
    slug: "flying-breadboard-vario-logger",
    cardEyebrow: "Engineering Notebook · Product Development",
    summary:
      "How a US$13 display board, a BMP581 barometric breakout and four days of AI-assisted integration built a temporary flight data logger that replaced weeks of bench extrapolation with one real paragliding flight recording — 761.65 s of pressure data at 40 Hz with zero integrity defects.",
    status: "published",
    visibleStatus: "Flight-validated · Analysis published",
    displayOrder: 4,
    entryType: "Product Development",
    organisation: "Independent engineering R&D",
    heroProposition:
      "A disposable breadboard logger flown on a real paragliding flight turned the programme's largest open uncertainty — how the variometer behaves in real air — into a measurement.",
    heroSummary:
      "The bench rig could imitate motion, vibration and static conditions, but it could not reproduce a paraglider climbing in a turbulent thermal. This entry records why a temporary logger was the right tool, how it was built to be verifiable rather than assumed, and what one afternoon of real air taught that weeks of proxy testing could not.",
    actionLabel: "Read the engineering notebook",
    period: "November 2026",
    technologies: [
      "ESP32-S3",
      "BMP581",
      "Barometric Sensing",
      "I2C",
      "microSD",
      "Data Logging",
      "Filter Validation",
      "Audio (LEDC PWM)",
      "AI-Assisted Engineering",
      "Verification Discipline",
    ],
    methods: [
      "Uncertainty-driven tooling selection",
      "Probe-mode hardware verification",
      "Frozen-configuration reuse",
      "Host-verified porting (worst error 2.6e-6 m/s)",
      "Rough-handling vibration checks",
      "Flight measurement",
    ],
    cardImage: {
      src: "/images/notebook/flying-breadboard/flight-display.webp",
      alt: "The temporary breadboard logger's LCD display in flight, mounted under the paragliding harness.",
      aspect: "wide",
      objectPosition: "center",
    },
    heroImage: {
      src: "/images/notebook/flying-breadboard/hero-inflight.webp",
      alt: "Paragliding flight over mountain fields with the temporary breadboard logger recording under the harness.",
      aspect: "landscape",
    },
    snapshot: [
      {
        label: "Objective",
        value:
          "Record the raw 40 Hz pressure stream the variometer senses during a real paragliding flight, with the frozen filter bank replayed offline on the result.",
      },
      {
        label: "Logger",
        value:
          "Temporary breadboard assembly: Waveshare ESP32-S3-LCD-1.9, BMP581 breakout, passive piezo buzzer, microSD. Supporting tooling, not a product.",
      },
      {
        label: "Flight recording",
        value:
          "761.65 s device time, 30,467 barometer samples at 40.0 Hz, zero sequence gaps, duplicates, malformed lines or timestamp discontinuities.",
      },
      {
        label: "Investment",
        value:
          "Approx. US$13 board plus a breakout, jumpers and about four days of AI-assisted integration on previously verified foundations.",
      },
      {
        label: "Companion article",
        value:
          "From Flight Data to Filter Decisions — the full quantitative flight analysis, in this Notebook.",
      },
    ],
    sections: [
      {
        id: "question-the-bench-could-not-answer",
        title: "The question the bench could not answer",
        body: [
          "The product under development is a small pressure-sensor variometer for paragliding: read a barometric sensor, estimate vertical speed in real time, and tell the pilot acoustically when the wing is climbing in lift or sinking out. The engineering requirement sounds simple — report vertical speed as early as possible, without false alarms and without chattering at the pilot when the air is neutral — and every design decision flows from that sentence.",
          "By the time this story begins, the programme already had a working bench infrastructure: an ESP32-S3 test rig with two barometers and an IMU, a causal-replay filter benchmark, frozen configurations for a bank of candidate estimators, an audio policy, and a defect register that documents how earlier conclusions were corrected when the evidence changed. The bench told us a lot. It could not tell us the one thing that mattered next: how does the system behave in real air?",
          "All of the motion evidence was proxy evidence. Elevator rides imitate slow, clean altitude changes; hand shakes imitate vibration; static sessions imitate standing on launch. None of them reproduce a paraglider climbing in a turbulent thermal at +2 m/s, slicing through sink, flying in air that changes character every few seconds. Filter tuning, audio-threshold selection and sensor validation carried an open risk of being optimized for the bench rather than for the sky. Closing that gap required real flight measurements — raw pressure from the actual sensor, recorded on an actual flight, at the full sample rate the algorithms run at.",
        ],
      },
      {
        id: "why-a-temporary-logger",
        title: "Why a temporary logger, and not the bench rig or a bought logger",
        body: [
          "The bench rig streams over USB at 921 600 baud and is powered from a USB port. None of that works under a paraglider. The alternatives were weighed on one criterion: which option removes the flight-data uncertainty fastest and cheapest.",
        ],
        table: {
          caption: "Options considered for capturing real flight pressure data.",
          columns: ["Option", "Verdict"],
          rows: [
            [
              "Fly the bench rig with a laptop",
              "Rejected — no practical way to host a laptop in flight; USB link and power both fail.",
            ],
            [
              "Buy a consumer GPS/barometer logger",
              "Rejected — low-rate position/altitude logging; no synchronized 40 Hz raw pressure stream and no estimator state to validate.",
            ],
            [
              "Phone barometer apps",
              "Rejected for the same reason: no raw-stream access, no integrity guarantees, no alignment with the processing chain.",
            ],
            [
              "Build a small temporary logger",
              "Selected — same BMP581 sensor already validated on the bench, same estimator bank, battery-powered, logging to SD card, cheap and fast.",
            ],
          ],
        },
        callout: {
          label: "Tooling, not product",
          body: "The logger was explicitly a supporting development tool. Its job was to reduce one specific uncertainty: what does the pressure stream actually look like in flight, and what do the frozen algorithms do with it? Everything about its design follows from treating it as disposable tooling.",
        },
      },
      {
        id: "hardware-selection",
        title: "Hardware selection: the cheapest thing that removes the uncertainty",
        body: [
          "The selection logic was deliberately inverted from product design. Instead of asking what the final hardware should be, the question was: what is the cheapest, fastest assembly that records the same pressure stream the product senses, at the same rate, with verifiable integrity?",
        ],
        table: {
          caption:
            "Bill of materials for the temporary flight logger.",
          columns: ["Item", "Choice", "Rationale"],
          rows: [
            [
              "MCU + display",
              "Waveshare ESP32-S3-LCD-1.9 (approx. US$13)",
              "Integrated ESP32-S3, LCD for field status, USB for bench streaming — nothing else to integrate at board level.",
            ],
            [
              "Barometer",
              "BMP581 breakout (I2C 0x47)",
              "The exact sensor validated in the bench programme, at the same 40 Hz cadence — flight data directly comparable with every earlier capture.",
            ],
            [
              "IMU",
              "Onboard QMI8658C + LSM6DSV16X breakout (kept, not fitted)",
              "Motion context if needed; barometer path never blocked on IMU integration.",
            ],
            [
              "Audio",
              "Passive piezo buzzer (GPIO16, LEDC PWM)",
              "In-flight acoustic behaviour identical in kind to the product's virtual audio.",
            ],
            [
              "Storage",
              "microSD via the board's SDMMC slot",
              "Self-contained recording independent of any host link.",
            ],
            [
              "Assembly",
              "Breadboard and jumper wiring",
              "Fast, fully re-wirable, inspectable. The flight would last minutes; the tooling did not need to survive a season.",
            ],
          ],
        },
        images: [
          {
            src: "/images/notebook/flying-breadboard/system-diagram.webp",
            alt: "System diagram of the temporary flight logger: ESP32-S3 display board, BMP581 barometer on I2C, buzzer and microSD storage.",
            caption: "Logger architecture assembled from a validated sensor, an off-the-shelf display board and SD storage — the minimum that records the flight stream.",
            aspect: "landscape",
            objectFit: "contain",
          },
        ],
      },
      {
        id: "deliberate-omissions",
        title: "What was deliberately not built",
        bullets: [
          "No custom PCB — a PCB is an investment in a design freeze, and at this stage the flight requirements were not yet established. Spending weeks on layout, fabrication and rework would have added cost and latency without reducing the uncertainty the flight was meant to resolve.",
          "No enclosure — the logger needed to survive one experiment on a cushioned harness, not a production lifetime. A 3D-printed shell is a product decision; tooling needs zip ties and foam.",
          "No more powerful processor — measurement, not computation, was the bottleneck. Earlier phases measured on-target CPU cost for the full estimator bank at well under 3% of the real-time tick; a bigger processor adds board cost and power draw for nothing.",
        ],
      },
      {
        id: "assembly-and-verifiability",
        title: "Assembly: trusting nothing that has not been poked",
        body: [
          "The system was assembled on a breadboard — board, BMP581 breakout and buzzer on a shared I2C bus, SD card in the onboard slot. Breadboard construction under vibration is exactly as fragile as it sounds, so verifiability was designed in rather than assumed.",
        ],
        bullets: [
          "A probe-mode firmware build is the first-class diagnostic: on demand it runs an I2C scan with WHO_AM_I / CHIP_ID disambiguation (the BMP581 answers with chip ID 0x50), draws a labelled-corner LCD diagnostic frame, and sweeps the buzzer.",
          "Connection testing was repeated, not assumed — after assembly changes and before flight, the scan/ID path re-verified every device on the bus.",
          "Rough-handling checks stood in for flight vibration: the assembled unit was shaken and tapped while the stream ran, watching for dropouts, I2C wedges or SD write stalls — the failure modes that would silently corrupt a flight recording.",
          "The honest-status convention from the bench programme carried over: every feature is labelled verified on hardware, implemented but unverified, or deferred. The buzzer tone shipped as implemented, not acoustically verified, until it was heard working.",
        ],
        images: [
          {
            src: "/images/notebook/flying-breadboard/bench-breadboard.webp",
            alt: "The breadboard logger on the bench before flight: ESP32-S3 display board, BMP581 breakout, buzzer and wiring.",
            caption:
              "The temporary breadboard logger before flight — Waveshare ESP32-S3-LCD-1.9, BMP581 breakout, buzzer and microSD, assembled for inspectability. Photograph: R. Malik.",
            aspect: "landscape",
          },
          {
            src: "/images/notebook/flying-breadboard/breadboard-mosaic.webp",
            alt: "Photo mosaic of the temporary flight logger: breadboard assembly, display board, BMP581 breakout and cabling details.",
            caption:
              "The logger in detail — temporary breadboard construction, chosen for inspectability and fast rewiring rather than durability. Photograph: R. Malik.",
            aspect: "landscape",
          },
        ],
      },
      {
        id: "ai-assisted-integration",
        title: "Four days of AI-assisted integration — on verified foundations",
        body: [
          "The full logger firmware — 40 Hz timestamped acquisition, the four-estimator filter bank, three-screen GUI, audio state machine, USB streaming protocol and SD recording path — came together in approximately four days of AI-assisted development. The speed is real, but the sentence needs its second half: it was fast because it was almost entirely recombination of previously verified engineering work.",
        ],
        bullets: [
          "The filter bank (C03, D01, S4, S5) was not rewritten. The frozen, benchmark-validated Python references were ported to C and host-verified against the Python originals to a worst error of 2.6 × 10⁻⁶ m/s before any flight.",
          "The BMP581 driver came from the workbook's validated bring-up (I2C 0x47, cadence read at 40 Hz, on-chip compensation).",
          "The USB streaming protocol (sequence counters, handshake, meta frames) was lifted from the bench capture toolchain, so the flight recorder spoke exactly the language the existing analysis pipeline parsed.",
          "The earlier programme's discipline — frozen configurations, defect register, replay verification — meant the new tool inherited a test culture, not just code.",
        ],
        callout: {
          label: "AI makes the first draft cheap; verification makes it true",
          body: "AI compressed implementation dramatically. It did not compress verification, and it did not make engineering judgement optional. When the LCD refused to render through several rounds of obvious fixes, the root causes — a missing pixel-format command, inverted backlight polarity, LSB-first font bit order — were found by instrumented diagnosis, not by accepting the first plausible patch. When the onboard IMU appeared dead, the investigation walked driver, bus speed, bit-banged access and reset sequences before attributing the fault at hardware level. The logger flew barometer-only, and the decision was evidence-based.",
        },
      },
      {
        id: "the-flight",
        title: "The flight",
        body: [
          "The assembled breadboard logger flew on a real paragliding flight, recording under the harness. The recording it brought back exceeded what the bench could ever provide: 761.65 seconds of device time spanning launch, sustained thermalling between 900 and 990 m, and landing rollout; 30,467 barometric samples at 40.0 Hz with zero sequence gaps, duplicates, malformed lines or timestamp discontinuities; and a coherent flight profile — climb-out from ~927 m, repeated thermal climbs and transitions, flare, and a quiet landing rollout.",
          "One afternoon of real air produced more decision-relevant information than the preceding weeks of proxy testing: what the pressure stream actually looks like at thermal onsets, how much lag the filters really exhibit against the pressure-derived reference (about 0.6–0.7 s, after a correction to the analysis that had initially reported ~2.1 s — see the companion article), how the audio policy behaves in turbulent, near-threshold air, and which responsiveness-versus-smoothness trade-off actually matters to a pilot.",
        ],
        images: [
          {
            src: "/images/notebook/flying-breadboard/filters-final-approach.png",
            alt: "Final approach, landing and rollout replayed with all four candidate filters on the recorded BMP581 pressure stream, with the +0.20 m/s audio threshold.",
            caption:
              "The data no bench test could produce: final approach, landing and rollout of the flight, with all four candidate filters replayed on the recorded BMP581 pressure stream. Offline replay of frozen filter configurations on the recorded LOG00001 flight data (BMP581, 40 Hz); corrected reference alignment, workbook commit 53907ab.",
            aspect: "wide",
            objectFit: "contain",
          },
          {
            src: "/images/notebook/flying-breadboard/flight-display.webp",
            alt: "Close-up of the breadboard logger's display during the flight, showing live status.",
            caption:
              "In flight: the temporary breadboard logger's display under the harness. The unit is development tooling (Waveshare ESP32-S3-LCD-1.9 + BMP581 breakout + buzzer + microSD), not the product. Photograph: R. Malik.",
            aspect: "landscape",
          },
        ],
      },
      {
        id: "what-the-breadboard-bought",
        title: "What the breadboard bought us",
        bullets: [
          "Eliminated the largest open uncertainty — whether bench-derived filter behaviour survives contact with real air. It does, and now the programme knows quantitatively where and by how much the bench was right.",
          "Upgraded the filter discussion from rankings to trade-offs — on flight data the candidates differentiate on quietness, chatter and transient fidelity, not on correctness. That is a design conversation, not a bug hunt.",
          "Validated the sensor and recording chain end-to-end — the BMP581 at 40 Hz with zero integrity defects over 12.7 flight-minutes, and the SD recording path under real vibration.",
          "Told the programme what to build next — IMU + GPS in the flight recorder, multiple estimators logged simultaneously, and a quiet-soaring flight to firm up the quietness metrics. Requirements discovered from evidence, not assumed.",
        ],
      },
      {
        id: "lessons",
        title: "Lessons",
        callout: {
          label: "Match the investment to the uncertainty",
          body: "The custom PCB, the enclosure and the bigger processor were all reasonable products — and all wrong tools for this question. Spend on what reduces risk; defer what does not.",
        },
        bullets: [
          "Rapid feedback beats speculative perfection — four days of tooling plus one flight replaced an unbounded amount of bench extrapolation. A rough answer to the right question is worth more than a precise answer to the wrong one.",
          "AI reduces implementation time; it does not eliminate verification — it changed what the engineer's day looks like (more deciding, diagnosing and checking; less typing), but the record of what is verified, and the responsibility for it, stays human.",
          "A breadboard can fly — not elegantly, not forever, but long enough to turn a guess into a measurement. That is often all a development tool needs to do.",
        ],
      },
    ],
    limitations: [
      "One flight, one air mass, one day — the findings are conditional on this single recording.",
      "The logger recorded the C03 estimator only; D01, S4 and S5 were evaluated by offline replay on the recorded pressure stream (see the companion article).",
      "No IMU data exists in this recording; barometer-only context.",
      "The logger is disposable development tooling; nothing about its construction represents product design intent.",
    ],
    nextSteps: [
      "Add IMU + GPS to flight recordings — enables fusion evaluation and an independent velocity reference.",
      "Log multiple estimators to SD in interleaved frames, removing the replay-verification step.",
      "Fly a quiet-soaring sortie (20+ minutes straight-glide) to firm up quietness metrics beyond landing rollout.",
      "Repeat with S4 airborne to test the responsiveness recommendation against weak-lift onsets.",
    ],
    relatedNotebookSlugs: ["flight-data-filter-decisions"],
    sourceLinks: [
      {
        label: "vario-usb-workbook repository (analysis and reports)",
        href: "https://github.com/raghavmalik89/vario-usb-workbook",
        kind: "github",
      },
      {
        label: "ESP32-S3-Display-DataLogger repository (logger hardware and firmware)",
        href: "https://github.com/raghavmalik89/ESP32-S3-Display-DataLogger",
        kind: "github",
      },
    ],
    seo: {
      title: "A Flying Breadboard — Flight Data Logger | Engineering Notebook",
      description:
        "How a US$13 ESP32-S3 board, a BMP581 barometer and four days of AI-assisted integration built a temporary paragliding flight logger that turned weeks of bench guessing into one 761-second real-air measurement.",
      openGraphTitle: "A Flying Breadboard — A Product Development Story",
      openGraphDescription:
        "A disposable breadboard logger flown on a real paragliding flight turned the variometer programme's largest uncertainty into a measurement.",
      canonicalPath: "/notebook/flying-breadboard-vario-logger",
      keywords: [
        "ESP32-S3",
        "BMP581",
        "variometer",
        "paragliding",
        "flight data logger",
        "AI-assisted engineering",
        "product development",
      ],
    },
  },
  {
    title: "From Flight Data to Filter Decisions",
    shortTitle: "Flight Data Filter Decisions",
    slug: "flight-data-filter-decisions",
    cardEyebrow: "Engineering Notebook · Engineering Experiment",
    summary:
      "A corrected, evidence-based comparison of four frozen variometer filters (C03, D01, S4, S5) replayed on the first real paragliding flight recording: measurement integrity, a corrected 0.57–0.70 s response-lag estimate, the quietness-versus-transient trade-off, and a measured-evidence-based default for the next flight.",
    status: "published",
    visibleStatus: "Corrected analysis · Published",
    displayOrder: 5,
    entryType: "Engineering Experiment",
    organisation: "Independent engineering R&D",
    heroProposition:
      "One flight recording, four frozen filters, and an honest correction: the corrected response-lag analysis shows 0.57–0.70 s effective tracking lag and reframes the choice between filters as a measured trade-off, not a ranking.",
    heroSummary:
      "This entry documents the quantitative side of the flight recorded by the companion article A Flying Breadboard: how the recording's integrity was established, why the initially reported ~2.1 s lag was invalid, what the four filters actually differ on in real air, and exactly what evidence would reverse the recommendation.",
    actionLabel: "Read the engineering notebook",
    period: "November 2026",
    technologies: [
      "Filter Benchmarking",
      "Kalman Filtering",
      "Savitzky-Golay Filtering",
      "Signal Analysis",
      "Python",
      "Causal Replay",
      "BMP581",
      "Data Integrity",
    ],
    methods: [
      "Offline replay on recorded data",
      "Zero-phase reference derivation",
      "Delay and shape measured separately",
      "Delay-compensated shape metrics",
      "Proxy false-trigger screening",
      "Corrected methodology with defect register",
    ],
    cardImage: {
      src: "/images/notebook/flight-data-filter-decisions/fig1-overview.png",
      alt: "Full-flight altitude and vertical-speed history with all four filters and the audio thresholds.",
      aspect: "wide",
      objectFit: "contain",
    },
    heroImage: {
      src: "/images/notebook/flight-data-filter-decisions/fig1-overview.png",
      alt: "Full paragliding flight overview: altitude and vertical speed with all four candidate filters and the audio thresholds.",
      aspect: "landscape",
      objectFit: "contain",
    },
    snapshot: [
      {
        label: "Dataset",
        value:
          "LOG00001 flight recording: 761.65 s device time, 30,467 barometer samples at 40.0 Hz, 15,169 vario samples at 19.9 Hz.",
      },
      {
        label: "Integrity",
        value:
          "Zero sequence gaps, zero duplicates, zero malformed lines of 45,637, strictly monotonic barometer timestamps — no truncation.",
      },
      {
        label: "Filters compared",
        value:
          "C03 (CV Tracker), D01 (CV Kalman), S4 (Fast/Slow gated), S5 (robust CV Kalman) — frozen configurations, replayed offline at real device timestamps.",
      },
      {
        label: "Corrected headline",
        value:
          "Effective tracking lag is 0.57–0.70 s on real thermal transitions. The first published ~2.1 s figure was invalid and is corrected here.",
      },
      {
        label: "Evidence-based default",
        value:
          "S4 recommended as the airborne default for the next flight, conditional on this dataset — a recommendation, not a universal verdict, with the falsifying evidence stated.",
      },
    ],
    sections: [
      {
        id: "measurement-integrity",
        title: "Measurement integrity",
        body: [
          "Every conclusion in this entry rests on the recording being trustworthy, so the integrity check came first. The recording firmware logged the C03 estimator in its vario frames; D01, S4 and S5 are evaluated by deterministic offline replay on the recorded barometer stream. Pressure-to-altitude conversion throughout uses the ISA model, spot-verified against the logger's own altitude field (median offset across the file: 7.6 mm).",
        ],
        table: {
          caption: "Recording integrity summary for LOG00001.",
          columns: ["Item", "Value"],
          rows: [
            ["Recording span (device timestamps)", "761.65 s (12 min 41.6 s)"],
            ["Barometer rows / rate", "30,467 at 40.00 Hz (dt median 24.991 ms, p99 25.106 ms)"],
            ["Vario rows / rate", "15,169 at 19.92 Hz"],
            ["Sequence integrity", "Zero gaps, zero duplicates"],
            ["Malformed lines", "0 of 45,637"],
            ["Session markers", "Exactly one (S,1) — one continuous session"],
            ["Filters in vario rows", "C03 only (others by offline replay)"],
            ["IMU rows", "None"],
          ],
        },
        images: [
          {
            src: "/images/notebook/flight-data-filter-decisions/fig1-overview.png",
            alt: "Full-flight altitude and vertical-speed history with all four filters and the audio thresholds.",
            caption:
              "Offline replay of frozen filter configurations on the recorded LOG00001 flight data (BMP581, 40 Hz); corrected reference alignment, workbook commit 53907ab.",
            aspect: "landscape",
            objectFit: "contain",
          },
        ],
      },
      {
        id: "methodology",
        title: "Methodology: replay, reference, and metric hygiene",
        body: [
          "All four filters were replayed on the recorded barometer stream at real device timestamps using the frozen, previously validated Python implementations (C03: CV Tracker, q = 1.0, r = 0.035; D01: CV Kalman, same q/r; S4: Fast/Slow gated architecture, frozen P4 parameters; S5: robust CV Kalman with light gate, frozen P4 parameters). The audio policy — ON at v > +0.20 m/s, OFF at v < +0.05 m/s — was applied identically to each replayed output and to the device-recorded C03.",
          "The pressure-derived reference velocity is a two-stage Savitzky-Golay filter (81-tap on altitude, then gradient, then 41-tap on velocity). Because the SG window is symmetric about its centre, the filter is zero-phase and the reference is already time-aligned.",
          "Pipeline verification: replaying C03 and aligning against the device's own vario values gives best agreement at −25 ms (one 20 Hz sample, consistent with causal filtering) with 3.3 mm/s RMS excluding the shared 5 s initialization transient. Audio episodes: 93 replayed versus 94 recorded — agreement within one episode over 12.7 minutes. The bench Python C03 faithfully reproduces the device firmware C03.",
        ],
        bullets: [
          "Delay and shape error are measured separately — raw cross-correlation lag on 44 retained thermal transitions gives the effective tracking lag; overshoot and settling are then computed against a delay-compensated reference so they measure shape, not delay.",
          "Settling and overshoot windows are capped at the next transition start — thermalling transitions are often only 5–10 s apart, and an uncapped 8 s window would integrate the next thermal burst.",
        ],
      },
      {
        id: "quantitative-comparison",
        title: "Quantitative comparison on the flight recording",
        body: [
          "All values below are measured as described above. Delay is the effective cross-correlation lag on real thermal transitions against the aligned pressure-derived reference — a proxy for tracking responsiveness, to be read with the caveats of the limitations section.",
        ],
        table: {
          caption:
            "Measured metrics for the four frozen filters on the LOG00001 flight recording.",
          columns: ["Metric", "C03", "D01", "S4", "S5"],
          rows: [
            ["Quiet RMS (mm/s), 37 s coverage", "67.2", "67.1", "59.8", "59.5"],
            ["Quiet p95 |v| (mm/s)", "137.4", "137.1", "113.9", "112.9"],
            ["Transition delay median (s)", "0.600", "0.575", "0.700", "0.625"],
            ["Transition delay p75 (s)", "0.625", "0.625", "0.750", "0.675"],
            ["Overshoot median, delay-comp (m/s)", "0.277", "0.290", "0.349", "0.361"],
            ["Settling median, delay-comp (s)", "7.98", "8.27", "9.46", "9.71"],
            ["Fast-motion RMS error, raw (m/s, |ref|>1)", "0.642", "0.640", "0.732", "0.703"],
            ["Fast-motion RMS error, delay-comp (m/s)", "0.134", "0.145", "0.197", "0.211"],
            ["Fast-motion bias (mm/s)", "2.2", "2.2", "−5.9", "−5.8"],
            ["Output jerk RMS (m/s² per s)", "1.034", "1.085", "0.894", "0.945"],
            ["Audio episodes (+0.20 / −0.05)", "93", "96", "71", "80"],
            ["Audio ON time (s) / duty", "278.5 / 36.6%", "278.8 / 36.6%", "279.7 / 36.7%", "273.5 / 35.9%"],
            ["Mean episode duration (s)", "2.99", "2.90", "3.94", "3.42"],
            ["Proxy false triggers (ON ≥ 2 s while |ref| < 0.15)", "0", "0", "0", "0"],
          ],
        },
        images: [
          {
            src: "/images/notebook/flight-data-filter-decisions/fig2-overlay.png",
            alt: "All four filters overlaid on identical BMP581 pressure input across the full flight.",
            caption:
              "Offline replay of frozen filter configurations on the recorded LOG00001 flight data (BMP581, 40 Hz); corrected reference alignment, workbook commit 53907ab. The overlay shows the differences are matters of degree, not kind.",
            aspect: "wide",
            objectFit: "contain",
          },
        ],
      },
      {
        id: "reading-the-metrics",
        title: "Reading the metrics: quietness, transients, chatter",
        body: [
          "Quietness: S4/S5 are about 16% lower in RMS and about 18% lower in p95 than C03/D01 in the quiet segments — the largest robust difference in the study. The quiet coverage is 37 s of landing rollout only; there is no long quiet-soaring stretch in this flight.",
          "Transient shape: C03/D01 win the delay-compensated fast-motion error (134–145 versus 197–211 mm/s), overshoot (0.28–0.29 versus 0.35–0.36 m/s) and settling (8.0–8.3 versus 9.5–9.7 s).",
          "Chatter: total audio ON-time is nearly identical across filters (274–280 s of 761 s, about 36% duty) — all four capture essentially the same lift. The difference is how that time is broken up: C03/D01 produce 93–96 short episodes, S4 71 longer ones, S5 80. With zero proxy false triggers for every filter, the extra episodes are mostly re-entries around the +0.20 threshold in turbulent, near-threshold air — not demonstrably wrong, but audible.",
          "Smoothness: S4 has the lowest output jerk (0.894 versus 1.03–1.09), consistent with its gating architecture suppressing small-scale velocity jitter. C03 and D01 are nearly identical on every metric, as expected from their shared q/r heritage — the practical field on this flight is {C03/D01} versus {S4, S5}.",
        ],
        images: [
          {
            src: "/images/notebook/flight-data-filter-decisions/fig3-transitions.png",
            alt: "Three zoomed climb and sink transition windows showing onset, tracking and exit behaviour per filter.",
            caption:
              "Offline replay of frozen filter configurations on the recorded LOG00001 flight data (BMP581, 40 Hz); corrected reference alignment, workbook commit 53907ab.",
            aspect: "landscape",
            objectFit: "contain",
          },
          {
            src: "/images/notebook/flight-data-filter-decisions/fig5-audio.png",
            alt: "Per-filter audio ON-episode timelines versus the device-recorded C03, over the reference velocity.",
            caption:
              "Offline replay of frozen filter configurations on the recorded LOG00001 flight data (BMP581, 40 Hz); corrected reference alignment, workbook commit 53907ab.",
            aspect: "wide",
            objectFit: "contain",
          },
          {
            src: "/images/notebook/flight-data-filter-decisions/fig4-quiet.png",
            alt: "Landing-rollout quiet segment zoom plus per-filter velocity-distribution histograms.",
            caption:
              "Offline replay of frozen filter configurations on the recorded LOG00001 flight data (BMP581, 40 Hz); corrected reference alignment, workbook commit 53907ab.",
            aspect: "wide",
            objectFit: "contain",
          },
        ],
      },
      {
        id: "corrected-response-lag",
        title: "Corrected response-lag analysis — why ~2.1 s was wrong",
        body: [
          "The first published version of this analysis reported an effective lag of ~2.1 s. That value was invalid, for a subtle and instructive reason.",
          "The pressure-derived reference uses a centred (symmetric) Savitzky-Golay filter. A symmetric SG filter is zero-phase: it has no group delay to correct. The erroneous run applied a group-delay correction of 60 samples — a rule that holds for causal, trailing windows, not for a centred one — shifting the reference 1.5 s beyond truth. Every delay-conflated metric inherited exactly that inflation: filters appeared to lag ~2.1 s when the true lag was ~0.6 s, a discrepancy confirmed independently by cross-correlation.",
          "The shape-only metrics — delay-compensated overshoot, settling and fast-motion error — were essentially unaffected, as they should be. The corrected script carries a comment recording the mistake so it is not reintroduced.",
        ],
        callout: {
          label: "How to read the corrected 0.57–0.70 s",
          body: "The corrected lag is a pressure-derived, internally consistent estimate of effective tracking responsiveness — how far each filter trails the best pressure-only estimate of truth. With no independent vertical-speed ground truth in this recording, it must not be cited as an independently verified physical response time.",
        },
      },
      {
        id: "audio-threshold-behaviour",
        title: "Audio threshold behaviour in real air",
        body: [
          "The +0.20 / −0.05 m/s hysteresis policy behaves on flight data exactly as designed in the virtual-audio bench work, and the flight data makes its character visible: in turbulent air near threshold, output hovering around +0.20 m/s produces clusters of short re-entry episodes (C03/D01) versus fewer, longer sustained episodes (S4's gating extends mean episode length to 3.9 s). Episode patterns track the same thermal bands across all four filters, total ON-time is equal, and the proxy false-trigger screen finds zero violations for every filter.",
          "The practical interpretation: the threshold itself is not generating false lift indications on this flight; the design lever that remains is how calmly the threshold is approached — which is a filter property, not a policy property.",
        ],
      },
      {
        id: "ranking-and-recommendation",
        title: "Ranking on this dataset, and the recommended default",
        body: [
          "For real-world paragliding use, conditional on this single flight:",
        ],
        bullets: [
          "S4 — quietest-class noise, fewest audio episodes, lowest jerk, zero proxy false triggers; costs are real but bounded (+0.1 s onset delay, +0.07 m/s median overshoot, +0.06–0.13 m/s delay-compensated fast-motion error). Best overall pilot-experience metrics.",
          "S5 — statistically tied with S4 on quietness; middling chatter; better fast-motion shape than S4 but worse than C03/D01.",
          "C03 — best transient fidelity and fastest settling; verified identical to device firmware; noticeably chattier audio and noisier quiet output.",
          "D01 — same behaviour as C03 within measurement noise; no measured advantage over C03 on this data.",
        ],
        callout: {
          label: "Recommended default for the next flight: S4, with C03 retained as the verified reference",
          body: "A pilot prioritizing crisp lift onset over audio calm would rationally pick C03 instead — both choices are defensible on this data. This is a measured-evidence-based recommendation, not a universal verdict, and no final estimator selection has been frozen.",
        },
      },
      {
        id: "what-would-reverse-this",
        title: "What would reverse the recommendation",
        body: [
          "The recommendation states exactly what evidence would reverse it: (a) a flight with long quiet-soaring stretches confirming or refuting that the quiet advantage generalizes beyond landing rollout; or (b) GPS reference data showing S4's gating misses or delays weak-but-flyable lift onsets. Either result feeds back before anything is frozen — this remains a design-space investigation, not a selection.",
        ],
      },
    ],
    limitations: [
      "No independent ground truth: no GPS, video or pilot-log timestamps; all response and error figures use the pressure-derived SG reference — internally consistent proxies, not truth. The corrected lag must not be cited as an independently verified physical response time.",
      "Single flight: one air mass, one pilot, one day. Rankings are conditional on this dataset.",
      "No IMU data: barometer-IMU fusion is unevaluable on flight data, and all fusion gains from bench tests remain unvalidated in flight.",
      "Limited quiet coverage: the quiet metrics rest on 37 s of landing rollout.",
      "Launch and landing times are inferred from the data, not logged.",
      "Replay scope: D01/S4/S5 were evaluated by offline replay; the recording firmware logged C03 only. On-target CPU and timing for the other estimators stands from previous bench phases.",
    ],
    nextSteps: [
      "Log multiple estimators to SD in interleaved frames — removes the replay-verification step and gives on-device comparison.",
      "Add IMU + GPS to flight recordings — enables fusion evaluation, an independent velocity reference, and launch/landing annotation.",
      "Fly a quiet-soaring sortie (20+ minutes straight-glide) to firm up the quietness ranking beyond rollout data.",
      "Repeat with S4 airborne to test the recommendation against weak-lift onsets.",
      "Audit the recording firmware's SD filename-rotation behaviour.",
    ],
    relatedNotebookSlugs: ["flying-breadboard-vario-logger"],
    sourceLinks: [
      {
        label: "vario-usb-workbook repository (dataset, analysis, figures)",
        href: "https://github.com/raghavmalik89/vario-usb-workbook",
        kind: "github",
      },
      {
        label: "ESP32-S3-Display-DataLogger repository (recording hardware)",
        href: "https://github.com/raghavmalik89/ESP32-S3-Display-DataLogger",
        kind: "github",
      },
    ],
    seo: {
      title: "From Flight Data to Filter Decisions | Engineering Notebook",
      description:
        "A corrected, evidence-based comparison of four frozen variometer filters on the first real paragliding flight recording: measurement integrity, the corrected 0.57–0.70 s response-lag estimate, quietness-versus-transient trade-offs, and an evidence-based default for the next flight.",
      openGraphTitle: "From Flight Data to Filter Decisions",
      openGraphDescription:
        "Four frozen filters replayed on a real flight recording — corrected lag analysis, measured trade-offs, and the evidence that would reverse the recommendation.",
      canonicalPath: "/notebook/flight-data-filter-decisions",
      keywords: [
        "variometer",
        "Kalman filter",
        "Savitzky-Golay",
        "flight data analysis",
        "paragliding",
        "signal processing",
      ],
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
    technologyGroups: entry.technologyGroups,
    inspector: entry.inspector,
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
