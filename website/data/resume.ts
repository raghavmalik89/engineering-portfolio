export const resumePdfPath = "/resume/Raghav_Malik_CV.pdf";
export const resumePortraitPath = "/images/resume/raghav-portrait.webp";

export const resumeContact = {
  name: "Raghav Malik",
  location: "Tokyo, Japan",
  relocation: "Open to relocation: Sydney, Australia",
  citizenship: "Australian citizen",
  japanPhone: "+81 70 2477 2310",
  australiaPhone: "+61 449 204 552",
  email: "raghavmalik89@gmail.com",
  linkedin: "linkedin.com/in/malikraghav",
  website: "raghavmalik.com.au",
  abn: "56 384 076 880",
} as const;

export const resumeProfile = {
  title: "Hardware Systems & R&D Technical Lead",
  domains:
    "Multidisciplinary R&D Leadership | Electronics | RF | Mechatronics | Validation & Field Deployment",
  summary: [
    "Hardware systems engineer who grew into multidisciplinary R&D technical leadership. Over 12+ years, built, integrated and deployed complex physical systems: mining IoT and AI-vision products, space-propulsion electronics, a proton-therapy accelerator, a robotic metal-additive platform and underground RF communications.",
    "Technical leadership that starts in the lab. Hands-on depth in electronics, RF and mechatronics — bring-up, RF characterization, reproducing failures, finding root cause — is the basis for architecture and schedule decisions, reviews of supplier designs, recovery of stalled programs and the commitments made to customers. Most recently served as technical and program lead, or principal hardware specialist, across five parallel mining R&D programs at Bradken (Hitachi Construction Machinery), in a lean team where engineering, product and program roles overlapped.",
  ],
} as const;

export const languages =
  "English native-level · Hindi native · Japanese basic–intermediate · Mandarin Chinese elementary";

export const careerHighlights = [
  "SmartRoller (Bradken) — Took a mining condition-monitoring product from field problem to commercial deployment: three product generations, ~5 vendors evaluated, 10+ systems built or fielded, and international field validation and deployment from Zambia to Alaska.",
  "GET Vision (Bradken) — Recovered a delayed, vendor-led AI-vision program. Deferred a redesign that would have missed a six-month customer commitment, kept the date and used the deployment to collect field data for the next design. Deployed in Australia, Finland and Zambia.",
  "SmartLiner (Bradken) — ~10× improvement in measurement resolution on a deployed sensing product, with simpler installation.",
  "SmartMill (Bradken) — Solved a critical RF link problem in a battery-powered rotating sensor operating inside a metal-dense mill.",
  "Plasma-thruster electronics (Neumann Space) — Restarted power/control electronics stalled for ~6 months by diagnosing before redesigning; recovered ~1 month of program schedule while leading the electronics workstream.",
  "ProteusONE (IBA, Japan) — Electromechanical installation and commissioning of a ~€9M proton-therapy system; the project team completed installation ~2 months ahead of a 12-month plan.",
] as const;

export const skillGroups = [
  {
    category: "Architecture & Technical Leadership",
    skills: [
      {
        label: "Product / Systems Architecture",
        details:
          "Turning field problems into requirements; feasibility; system architecture and interfaces; technical trade-offs; reusing sensing platforms across products",
      },
      {
        label: "Technical Program Leadership",
        details:
          "Running parallel R&D programs; schedules, critical path, risks and dependencies; documented design decisions; deciding when to fix, redesign or defer; protecting customer milestones",
      },
      {
        label: "Supplier & Cross-Functional Leadership",
        details:
          "Vendor evaluation and selection; technical scopes and acceptance criteria; supplier design reviews; aligning embedded, AI/vision, UX, mechanical, field and customer teams",
      },
    ],
  },
  {
    category: "Electronics, RF & Mechatronics",
    skills: [
      {
        label: "Electronics",
        details:
          "Analog, digital and mixed-signal electronics; power and low-power design; sensing; embedded integration; hardware bring-up",
      },
      {
        label: "RF & Wireless",
        details:
          "RF engineering, antennas and wireless; BLE, Sub-GHz/ISM, LTE, GNSS, MQTT; RF characterization and antenna/VNA work",
      },
      {
        label: "Mechatronics & Integration",
        details:
          "Mechanical, thermal and environmental integration; sealing, shock and vibration; controls; serviceability for harsh environments",
      },
    ],
  },
  {
    category: "Validation, Productization & Deployment",
    skills: [
      {
        label: "Bench & Field Validation",
        details:
          "Bench validation and RF characterization; failure reproduction and root cause; FAT/SAT; field trials; commissioning",
      },
      {
        label: "Productization & Handover",
        details:
          "Production readiness; installation readiness; deployment and operational handover; customer training",
      },
      {
        label: "Test & Measurement",
        details:
          "VNA, spectrum analyzer, oscilloscope, logic analyzer, power profiling, electronic loads, rework and inspection",
      },
    ],
  },
  {
    category: "Embedded, Interfaces & Controls",
    skills: [
      {
        label: "Embedded Platforms",
        details: "STM32, TI CC13xx; Embedded C/C++; hardware/firmware integration",
      },
      {
        label: "Industrial Interfaces & Controls",
        details:
          "CAN, RS485/RS232, I2C, SPI; PLC/SCADA, ABB RAPID, industrial robotics",
      },
    ],
  },
  {
    category: "Design & Analysis Tools",
    skills: [
      {
        label: "Design Tools",
        details: "Altium, KiCad, LTspice, ANSYS HFSS / Mechanical",
      },
      {
        label: "Software & Platforms",
        details: "Python, MATLAB, C/C++; Jira, SAP; Linux and Windows",
      },
    ],
  },
  {
    category: "Industry Experience",
    skills: [
      {
        label: "Domains",
        details:
          "Mining technology and industrial IoT, aerospace electronics, medical systems (proton therapy), metal additive manufacturing, telecommunications",
      },
    ],
  },
] as const;

export const employmentHistory = [
  {
    dates: "10/2025 - Present",
    title: "Principal R&D Engineer (Contract)",
    company: "Bradken (Hitachi Construction Machinery)",
    companyUrl: "https://www.bradken.com/products-and-services/digital-solutions",
    location: "Japan",
    functionalRole: "Product systems architect, connected sensing",
    summary:
      "Bradken is a mining wear-parts manufacturer building digital monitoring products for large excavators, mills and ground-engaging tools. This role develops connected-sensing reference platforms for future mining products and supports international field deployment.",
    responsibilities: [
      "Develop connected-sensing reference platforms for future mining products: custom electronics, BLE/Sub-GHz RF, low-power architecture, hardware/firmware integration and technology selection.",
      "Support Arctic-region deployment and U.S. market-expansion activity through Alaska field validation, commissioning and product readiness work.",
    ],
  },
  {
    dates: "01/2021 - 09/2025",
    title: "Senior Mechatronics Engineer (R&D)",
    company: "Bradken (Hitachi Construction Machinery)",
    companyUrl: "https://www.bradken.com/products-and-services/digital-solutions",
    location: "Australia",
    functionalRole:
      "Technical, product and program lead; principal hardware/RF specialist",
    summary:
      "The R&D team was small: initially a technical manager, a mechanical engineer and this role, growing to ~6 with embedded, AI/vision, UX and junior engineers. Most detailed development was outsourced, so the technical lead also owned product definition, schedules, validation and deployment across parallel programs, and decided what stayed in-house and what went to suppliers.",
    projects: [
      "R&D lab — Built and ran the team's electronics, RF and mechatronics lab: PCB bring-up, RF characterization and antenna/VNA work, oscilloscope and logic analysis, power profiling, hardware/firmware integration and prototype builds. Used it to prototype independently, check supplier claims with measurements, reproduce field failures and decide when hardware was ready for FAT and the field.",
      "SmartRoller — roller condition monitoring for large excavators. Started from a field safety problem: roller temperatures were checked by hand under the undercarriage. Took it through requirements, concept and first design, evaluated ~5 vendors and technically managed the selected supplier through FAT/SAT and field trials. Over three generations, used field failures to re-architect the system and ran the RF/system testing, reducing installation complexity and improving serviceability on the way to commercial deployment. Led installation readiness and commissioning in Alaska; work in Australia, Zambia (RF validation), South America and Finland ranged from trials to customer deployments.",
      "GET Vision — AI camera monitoring for ground-engaging tools (technical product lead, 2022–2025). Vendor development was late, documentation was incomplete and a customer deployment was due in six months. Pieced together the architecture, open risks and dependencies, showed that a full redesign would miss the date and recommended deferring it. The deployment went ahead on time as a planned field trial, and its data shaped the redesign and productization that followed.",
      "GET Vision — machine integration & global validation. Led the work needed to make specialist vision technology run reliably on mining machines: machine integration, power, grounding, isolation, mounting, sealing, thermal, serviceability, field data and fault finding. When the vendor and internal team disagreed, brought in the internal AI specialist so the decision rested on evidence. Deployed in Australia, Finland and Zambia, where it supported a multi-million-dollar customer program.",
      "SmartMill — rotating mill vibration sensing. As technical lead and RF specialist, solved a critical link problem in a battery-powered rotating accelerometer system inside a metal-dense mill, where large data payloads had to move within short transmit windows. Coordinated the Namibia trial remotely and mentored an internal engineer to continue the electronics work.",
      "GET Tracker — wireless wear monitoring. Led product systems and hardware architecture from field problem through vendor tender, validation and Hunter Valley field trials. Proposed sharing sensing-platform elements with SmartRoller, so the work carried on after GET Tracker was discontinued.",
      "SmartLiner — liner wear-sensing upgrade. Delivered a ~10× improvement in measurement resolution on a deployed product while simplifying installation.",
    ],
  },
  {
    dates: "06/2020 - 12/2020",
    title: "Electronics Design Engineer",
    company: "Neumann Space",
    companyUrl: "https://neumannspace.com/",
    location: "Australia",
    functionalRole:
      "Technical lead, electronics workstream — plasma-thruster power/control electronics for the SpIRIT mission",
    summary:
      "Inherited power/control electronics that had blocked integrated testing for ~6 months. The pressure was for a quick PCB redesign; instead, stabilized the existing design first, measuring power, thermal and control behavior stage by stage until the main fault was isolated. A targeted fix put the hardware back into sustained testing and recovered ~1 month of schedule.",
    responsibilities: [
      "Led the electronics workstream: allocated work, reviewed designs, mentored junior engineers, coordinated external specialists and vendors, and escalated technical risk to management with measurement evidence.",
      "Contributed to advancing the propulsion electronics from TRL 4 toward TRL 6.",
    ],
  },
  {
    dates: "03/2020 - 01/2021",
    title: "Robotics / Electronics Engineer (Contract)",
    company: "AML3D",
    companyUrl: "https://aml3d.com/",
    location: "Australia",
    functionalRole: "Full-time, then part-time alongside Neumann Space",
    summary:
      "Re-architected the electrical and control system of the ARCEMY robotic wire-arc additive manufacturing (WAAM) platform across PLC/SCADA and ABB RAPID, improving fault handling, repeatability and maintainability.",
    responsibilities: [
      "Aligned controls with manufacturing workflow, operating procedures and quality-system requirements, helping move a research-grade system toward repeatable customer-facing operation.",
    ],
  },
  {
    dates: "07/2019 - 12/2019",
    title: "RF Systems Engineer",
    company: "Mine Site Technologies (MST)",
    companyUrl: "https://mstglobal.com/",
    location: "Australia",
    summary:
      "Designed underground and surface RF communication and tracking systems: architecture input, BOM, installation planning for site-specific propagation and regulatory constraints, commissioning and acceptance testing.",
  },
  {
    dates: "02/2017 - 06/2019",
    title: "Electromechanical Engineer",
    company: "Ion Beam Applications (IBA)",
    companyUrl: "https://www.iba-worldwide.com/",
    location: "Toyohashi, Japan",
    functionalRole: "ProteusONE proton-therapy system (~€9M)",
    summary:
      "Joined at the early site phase and worked through rigging, installation, alignment, commissioning, acceptance and handover of a superconducting synchrocyclotron (230 MeV), rotating gantry and 6-DOF patient-positioning robot, with high-power electrical, RF, vacuum, cryogenic, cooling, PLC/SCADA and imaging interfaces.",
    responsibilities: [
      "Responsible for electromechanical installation quality: supervised contractor work within scope, rejected substandard work and required correction, then tested, documented and released subsystems into later testing.",
      "Diagnosed interacting mechanical, brake, control and alignment faults on the patient-positioning robot and fed commissioning evidence back to design engineering.",
    ],
    achievements: [
      "Part of the team that completed installation in ~10 months against a ~12-month plan; stayed through the center's first patient treatment (09/2018) and trained the local team for handover.",
    ],
  },
  {
    dates: "09/2015 - 01/2017",
    title: "Electronics / RF Engineer",
    company: "Trans Communication",
    companyUrl: "https://transcommunications.com.au/",
    location: "Australia",
    summary:
      "Performed RF fault isolation, calibration, ACMA compliance testing and commissioning across radio front-ends, IF chains, amplifiers and antenna systems.",
  },
  {
    dates: "2010 - 2011",
    title: "Earlier Roles",
    company: "Pancham Enterprises / Siemens",
    location: "India",
    summary:
      "Service Engineer, Pancham Enterprises (2010–2011) — control valves and compressor turbines. Customer Service Engineer, Siemens (2010) — building-systems commissioning and maintenance.",
  },
] as const;

export const education = [
  {
    dates: "2015",
    qualification: "Antenna Design — Professional Development",
    institution: "The University of Queensland",
    location: "Queensland, Australia",
  },
  {
    dates: "2011 - 2013",
    qualification:
      "Master of Engineering Management (Electronics & Electrical Engineering)",
    institution: "The University of Queensland",
    location: "Queensland, Australia",
  },
  {
    dates: "2006 - 2010",
    qualification:
      "Bachelor of Technology — Electronics and Communication Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Andhra Pradesh, India",
  },
] as const;

export const personalInterests = [
  {
    label: "Sports",
    details:
      "Paragliding (Advanced licensed), SCUBA diving (Advanced licensed) and trekking.",
  },
  {
    label: "Engineering",
    details:
      "Personal projects in power supply design, RF receiver creation, and commercial electronics repair. Expertise in 3D printing using FDM technology.",
  },
] as const;
