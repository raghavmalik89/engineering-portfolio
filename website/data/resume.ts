export const resumePdfPath = "/resume/Raghav_Malik_CV.pdf";
export const resumePortraitPath = "/images/resume/raghav-portrait.png";

export const resumeContact = {
  name: "Raghav Malik",
  location: "Tokyo",
  citizenship: "Australian citizen",
  japanPhone: "+81 70 2477 2310",
  australiaPhone: "+61 449 204 552",
  email: "raghavmalik89@gmail.com",
  abn: "56 384 076 880",
} as const;

export const resumeProfile = {
  title:
    "Product Systems Architect | Technical Lead | Product Delivery Specialist",
  domains:
    "Electronics | RF Communications | Mechatronics | Industrial IoT | AI Vision | Harsh-Environment Products",
  summary: [
    "Product Systems Architect, Technical Lead, and Product Delivery Specialist with 12+ years of experience turning complex engineering concepts into validated products ready for field deployment and commercial use.",
    "Core expertise spans electronics hardware, RF communications, mechatronics, mechanical integration, Industrial IoT, AI-enabled vision systems, robotics, aerospace electronics, mining technology, and medical accelerator systems.",
    "Specialises in high-reliability products for harsh operating environments, leading architecture decisions, technical scope, supplier and vendor delivery, customer deployment, validation, field trials, and operational handover.",
  ],
} as const;

export const careerHighlights = [
  "Led Bradken SmartRoller from field problem to commercial product, enabling multi-million-dollar global mining technology sales.",
  "Led Embedded Wear-Monitoring Research from field problem through sensing architecture, field trials and deployment-oriented development.",
  "Led GET Vision from prototype to commercial AI-enabled vision product for mining asset monitoring.",
  "Drove international validation and deployment across harsh mining environments, including Zambia, Finland, and Alaska.",
  "Acted as Bradken's sole dedicated hardware, electronics, RF, and mechatronics specialist across R&D programs, carrying technical ownership across multiple parallel product initiatives.",
  "Recovered a stalled space propulsion electronics programme by redesigning critical power and control architecture.",
  "Re-architected AML3D's robotic WAAM control platform, helping transition a research prototype toward commercial deployment.",
  "Delivered electromechanical integration of an EUR8M proton therapy accelerator across electrical, RF, mechanical, cooling, vacuum, and control systems.",
] as const;

export const skillGroups = [
  {
    category: "Product Architecture & Technical Leadership",
    skills: [
      {
        label: "Systems Architecture",
        details:
          "System architecture, product architecture, requirements definition, interface management, technical trade-offs",
      },
      {
        label: "Product Development",
        details:
          "Concept development, architecture ownership, prototyping, verification & validation, productization",
      },
      {
        label: "Technical Leadership",
        details:
          "Architecture governance, technical leadership, multidisciplinary teams, mentoring, technical decision-making, technology road mapping",
      },
      {
        label: "Cross-Functional Leadership",
        details:
          "Vendor management, customer engagement, deployment support, cross-functional collaboration",
      },
    ],
  },
  {
    category: "Electronics, RF & Connected Product Systems",
    skills: [
      {
        label: "Electronics Design",
        details:
          "Analog, digital & mixed-signal design, PCB design, power & low-power electronics",
      },
      {
        label: "RF & Wireless",
        details:
          "RF engineering, antenna systems, LTE, BLE, GNSS, MQTT, ISM-band communications",
      },
      {
        label: "Embedded Systems",
        details:
          "STM32, ATmega, TI CC13xx, Embedded C/C++, TI-RTOS, FreeRTOS, I2C, SPI, UART/USART, CAN",
      },
      {
        label: "Connected Devices & IoT",
        details:
          "Wireless sensor networks, condition monitoring, asset monitoring, industrial IoT",
      },
      {
        label: "Hardware, Mechanical & Product Integration",
        details:
          "Mechanical integration, thermal management, environmental sealing, shock & vibration design, sensor integration, hardware bring-up, reliability engineering and DFM/DFA",
      },
    ],
  },
  {
    category: "Product Validation & Deployment",
    skills: [
      {
        label: "Test & Validation",
        details: "RF characterisation, mixed-signal validation, DVT, EMC compliance",
      },
      {
        label: "Test Equipment",
        details: "VNA, Spectrum Analyzer, Logic Analyzer, Power Meters",
      },
      {
        label: "Field Deployment",
        details:
          "Commissioning, acceptance testing, field validation, reliability engineering",
      },
    ],
  },
  {
    category: "Robotics, Automation & Manufacturing",
    skills: [
      {
        label: "Robotics & Control",
        details: "ABB, Fanuc, KUKA, PLC, Siemens Simatic, B&R IEC61131",
      },
      {
        label: "Industrial Networks",
        details:
          "Modbus, Profibus, PROFINET, EtherNet/IP, EtherCAT, DeviceNet",
      },
      {
        label: "Manufacturing",
        details: "CNC machining, WAAM, laser cutting, SLA/FDM 3D printing",
      },
    ],
  },
  {
    category: "Vision, AI & Data Systems",
    skills: [
      {
        label: "Vision & AI Systems",
        details:
          "OpenCV, YOLO, CVAT, computer vision, image annotation, neural networks, NI Vision (LabVIEW)",
      },
      {
        label: "Applied AI",
        details:
          "AI model training support, dataset preparation, particle size distribution prototyping, image-based monitoring systems",
      },
      {
        label: "AI-Assisted Engineering",
        details:
          "AI-assisted software development, agent-assisted workflows, engineering automation, technical documentation acceleration",
      },
    ],
  },
  {
    category: "Software & Tools",
    skills: [
      {
        label: "Engineering Tools",
        details: "Altium, KiCad, Eagle, LTspice, ANSYS HFSS, ANSYS Mechanical FEA",
      },
      {
        label: "Programming",
        details: "C, C++, Python, MATLAB",
      },
      {
        label: "Platforms",
        details: "Linux, Windows, Jira, Agile, SAP",
      },
    ],
  },
  {
    category: "Industry Experience",
    skills: [
      {
        label: "Domain Expertise",
        details:
          "Mining Technology, Aerospace, Healthcare (Radiotherapy), Manufacturing, Telecommunications",
      },
    ],
  },
] as const;

export const employmentHistory = [
  {
    dates: "10/2025 - Present",
    title: "Contract Product Systems Architect (IIoT)",
    company: "Bradken (Hitachi)",
    companyUrl: "https://www.bradken.com/products-and-services/digital-solutions",
    location: "Japan",
    summary:
      "Provides contract-based systems architecture, field deployment support, and independent commercial-grade IoT product development for mining technology programs. Focused on connected sensing platforms, RF communications, custom electronics, low-power architecture, validation, and deployment readiness for harsh operating environments.",
    responsibilities: [
      "Develop commercial-grade Industrial IoT sensing platforms incorporating BLE, Sub-GHz wireless communications, custom electronics, embedded integration, cloud connectivity, and ultra-low-power architecture.",
      "Provide specialist architecture support across requirements definition, system architecture, custom PCB design, hardware-firmware integration, prototyping, validation, and commercialisation planning.",
      "Support field deployment, validation, and technical troubleshooting of mining technology systems in harsh operating environments.",
      "Advise on technical investigations, architecture reviews, technology selection, reference platforms, and product development strategy.",
      "Support customer, supplier, and product-stakeholder discussions where connected sensing architecture, validation evidence, or deployment readiness need senior technical review.",
    ],
    achievements: [
      "Led development and commercial deployment of industrial IoT sensing technologies supporting multi-million-dollar mining operations across global sites.",
      "Designed and validated industrial IoT reference platforms incorporating custom hardware, embedded integration, BLE and Sub-GHz communications, supporting future product development, field deployment, and commercial engineering services.",
    ],
    projects: [
      "Industrial IoT Sensor Platform (BLE & Sub-GHz) - Development of wireless sensing platform incorporating custom PCB design, embedded integration, BLE, Sub-GHz communications, cloud connectivity, and ultra-low-power architecture.",
      "Arctic Monitoring Trial (Alaska) - Field deployment, validation, and technical support of industrial sensing technologies under extreme environmental conditions.",
      "Mining Technology Architecture Consulting - Systems architecture, embedded systems, RF communications, and industrial IoT support for product strategy, technical investigations, and technology roadmaps.",
    ],
  },
  {
    dates: "01/2021 - 09/2025",
    title: "Senior Mechatronics Engineer (R&D)",
    company: "Bradken (Hitachi)",
    companyUrl: "https://www.bradken.com/products-and-services/digital-solutions",
    location: "Australia",
    summary:
      "Functioned as technical product owner for high-reliability mining technology systems, translating field problems into product architectures, vendor scopes, validation plans, field trials, and commercially deployable Industrial IoT and AI-enabled monitoring products.",
    responsibilities: [
      "Owned product definition and technical direction across multiple R&D programs, translating customer, field, and stakeholder requirements into product concepts, architecture decisions, technical scopes, and delivery plans.",
      "Led early-stage ideation, feasibility research, proof-of-concept development, and technical risk assessment before committing to larger engineering, vendor, or deployment investment.",
      "Defined system architecture across electronics hardware, RF communications, sensing, power, mechanical integration, environmental sealing, field installation, and deployment constraints.",
      "Prepared technical documentation, validation requirements, test plans, supplier scopes, and product evidence required to move concepts from prototype stage toward field deployment and commercial use.",
      "Identified, evaluated, and coordinated external vendors, supporting tender activity, supplier selection, technical reviews, delivery tracking, and acceptance against engineering requirements.",
      "Served as technical product lead during design reviews, vendor discussions, site trials, installation planning, troubleshooting, and deployment decisions.",
      "Oversaw lab validation, field testing, site installation, and international deployment activities across harsh mining environments, including direct involvement in Zambia, Finland, and Alaska.",
      "Mentored engineers and coordinated multidisciplinary contributors across electronics, RF, firmware, mechanical design, vendors, site teams, and product stakeholders.",
    ],
    achievements: [
      "Led architecture, development, and commercial deployment of an embedded RF sensing system for harsh mining environments, generating multi-million-AUD revenue while improving measurement resolution by 10x and reducing installation complexity and lifecycle cost.",
    ],
    projects: [
      "SmartRoller - Industrial IoT condition monitoring platform incorporating embedded RF sensing, thermal transfer optimisation, ruggedised mechanical design, environmental sealing, and deployment across mining operations in Australia, Finland and Zambia.",
      "GET Vision - Computer vision and AI-enabled monitoring platform for mining asset performance and operational insights.",
      "Embedded Wear-Monitoring Research - rugged RF sensing platform for mining wear component monitoring.",
      "Industrial Gateway - LTE, GNSS, BLE, Sub-GHz RF, and MQTT-enabled connectivity platform for industrial IoT deployments.",
    ],
  },
  {
    dates: "06/2020 - 12/2020",
    title: "Electronics Design Engineer (Technical Lead)",
    company: "Neumann Space (NS)",
    companyUrl: "https://neumannspace.com/",
    location: "Australia",
    summary:
      "Technical lead for space-grade power and control electronics, owning architecture decisions, design trade-offs, verification activities, and electronics workstream delivery within a regulated aerospace environment.",
    responsibilities: [
      "Led redesign of control, power, and integration architecture to resolve stability, fault-handling, and maintainability issues.",
      "Directed electronics design, PCB development, prototyping, verification, and system-level testing across mission-critical subsystems.",
      "Mentored less-experienced engineers through design review, failure analysis, documentation discipline, verification planning and system-level thinking while retaining technical ownership of the electronics workstream.",
      "Collaborated with industry experts, vendors, and stakeholders to refine the product architecture and streamline rollout.",
    ],
    achievements: [
      "Resolved critical power supply and microcontroller challenges that had stalled progress for six months, accelerating the mission timeline by a month.",
    ],
  },
  {
    dates: "03/2020 - 01/2021",
    title: "Robotics / Electronics Engineer",
    company: "AML3D Ltd",
    companyUrl: "https://aml3d.com/",
    location: "Australia",
    summary:
      "Re-architected the electrical and control system of the Alchemy WAAM platform, helping transition a research-grade robotic additive manufacturing prototype toward commercially deployable operation.",
    responsibilities: [
      "Integrated robotics, PLC/SCADA, ABB RAPID control logic, manufacturing workflows, and process reliability improvements.",
      "Improved system robustness, fault handling, repeatability, and maintainability for customer-facing industrial deployment.",
      "Supported operational procedures, quality systems, and commercial readiness for large-scale robotic metal printing.",
    ],
    achievements: [
      "Enabled transition of the Alchemy WAAM platform from research prototype toward commercially deployable industrial operation.",
    ],
  },
  {
    dates: "07/2019 - 12/2019",
    title: "RF Systems Engineer",
    company: "Mine Site Technologies (MST)",
    companyUrl: "https://mstglobal.com/",
    location: "Australia",
    summary:
      "RF systems role supporting underground and surface mining communications, tracking, and industrial network deployments in constrained operating environments.",
    responsibilities: [
      "Developed RF communication and tracking solutions aligned with client, site, and regulatory requirements.",
      "Supported architecture, BOM preparation, installation planning, commissioning, and acceptance testing.",
      "Built practical field experience in underground RF propagation, harsh-environment deployment, and mining communications.",
    ],
  },
  {
    dates: "02/2017 - 06/2019",
    title: "Electromechanical Engineer",
    company: "Ion Beam Applications (IBA)",
    companyUrl: "https://www.iba-worldwide.com/",
    location: "Japan",
    summary:
      "Design-adjacent systems engineer responsible for integration, stabilisation, and commissioning of a high-energy particle accelerator system. Coordinated design-team, specialist-supplier, site and customer-facing interfaces during commissioning in a regulated medical environment.",
    responsibilities: [
      "Integrated and validated high-power electrical systems, RF chains, vacuum systems, cryogenic subsystems, and water-cooled infrastructure.",
      "Identified system-level design gaps during commissioning and implemented corrective design and integration changes.",
      "Acted as technical interface between design teams, specialist suppliers, site execution, customer operations, and long-term operational requirements.",
      "Trained the local technical team in system architecture, start-up and shutdown, controls, utilities, practical fault isolation, and escalation boundaries before operational handover.",
    ],
    achievements: [
      "Helped deliver an operational proton therapy accelerator by resolving system-level integration and commissioning risks across electrical, RF, mechanical, cooling, vacuum and control subsystems.",
    ],
  },
  {
    dates: "09/2015 - 01/2017",
    title: "Electronics/RF Engineer",
    company: "Trans Communication Pty Ltd",
    companyUrl: "https://transcommunications.com.au/",
    location: "Australia",
    summary:
      "Early-career RF engineering role establishing foundations in mission-critical communications, RF compliance, system validation, and fault diagnosis.",
    responsibilities: [
      "RF and electronics fault isolation across radio front-ends, amplification stages, IF chains, and antenna systems.",
      "RF system calibration, compliance testing, and commissioning in accordance with ACMA and industry standards.",
      "Practical electronics design, repair, and validation under constrained documentation and time-critical conditions.",
    ],
  },
  {
    dates: "11/2010 - 07/2011",
    title: "Service Engineer",
    company: "Pancham Enterprises",
    location: "India",
    summary:
      "Early-career role providing hands-on exposure to industrial electromechanical systems, including control valves, compressor turbines, and associated electrical and electronic equipment. Built a practical foundation in equipment inspection, fault diagnosis, documentation discipline, and quality-driven maintenance practices within heavy industrial environments.",
  },
  {
    dates: "07/2010 - 10/2010",
    title: "Building Systems Service Engineer",
    company: "The Siemens Group",
    location: "India",
    summary:
      "Entry-level engineering role supporting commissioning and maintenance of integrated building systems within a critical financial environment. Developed early exposure to structured engineering workflows, safety-critical systems, fault diagnosis, and cross-disciplinary coordination across electrical, electronic, and automation domains.",
  },
] as const;

export const education = [
  {
    dates: "2015",
    qualification: "Antenna Design — Professional Development Course",
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
      "Bachelor of Technology: Electronics and Communication Engineering (ECE)",
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
