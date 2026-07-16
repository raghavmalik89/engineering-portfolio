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
    status: "published",
    displayOrder: 1,
    presentation: {
      indexVariant: "flagship",
      indexGroup: "flagship",
      showOnStoriesIndex: true,
    },
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
    relatedProjectSlugs: ["get-vision"],
  },
  {
    title: "GET Tracker / Tooth Fairy",
    shortTitle: "GET Tracker",
    slug: "get-tracker",
    company: "Bradken",
    summary:
      "Led research, sensing architecture and product development for an embedded wear-monitoring system designed for an exceptionally severe mining environment, including field trials in New South Wales.",
    status: "draft",
    displayOrder: 10,
    presentation: {
      indexVariant: "compact",
      indexGroup: "bradken-programmes",
      showOnStoriesIndex: true,
    },
    role: "Technical Lead / Product Systems Architecture",
    period: "To be confirmed",
    domains: [
      "Industrial IoT",
      "Embedded Sensing",
      "Harsh-Environment Design",
      "Product Architecture",
    ],
    technologies: ["Wear monitoring", "Field sensing", "Product architecture"],
    countries: ["AU"],
    sections: [],
    relatedProjectSlugs: ["get-vision"],
  },
  {
    title: "GET Vision — From Vision Prototype to Rugged Mining Product",
    cardTitle: "GET Vision — AI-Enabled Monitoring in the Field",
    shortTitle: "GET Vision",
    slug: "get-vision",
    company: "Bradken",
    eyebrow: "Bradken · AI-Enabled Mining Vision",
    summary:
      "Leading Bradken-side supplier delivery, hardware-system integration and field deployment as GET Vision progressed from an early vision prototype into a rugged, customer-deployed product for monitoring lost and worn mining GET.",
    heroProposition:
      "Turning an unstable vision prototype into a connected, field-deployable product for one of mining's most demanding operating environments.",
    heroSummary:
      "As Bradken's Technical Product Lead, Raghav coordinated suppliers, customers, architecture reviews, validation and international deployment. He guided the hardware and machine-integration decisions around power, protection, mounting, serviceability and field readiness, stepping into hands-on installation and fault finding whenever the product met reality.",
    status: "published",
    displayOrder: 2,
    presentation: {
      indexVariant: "flagship",
      indexGroup: "flagship",
      showOnStoriesIndex: true,
    },
    role:
      "Technical Product Lead — Systems Integration, Vendor Delivery & Field Deployment",
    period: "2021–2025+",
    domains: [
      "Product Systems",
      "AI-Enabled Vision",
      "Harsh-Environment Design",
      "Vendor Delivery",
      "Field Validation",
    ],
    technologies: [
      "AI-enabled vision systems",
      "Electrical integration",
      "Mechatronics",
      "Rugged mounting",
      "Sealing",
      "Thermal review",
      "Communications",
      "Remote support",
    ],
    countries: ["AU", "FI", "ZM"],
    cardImage: {
      src: "/images/stories/get-vision/hero.webp",
      alt: "Front view of a large mining excavator and bucket during GET Vision deployment in Zambia.",
      aspect: "wide",
      objectPosition: "center center",
    },
    heroImage: {
      src: "/images/stories/get-vision/hero.webp",
      alt: "Front view of a large mining excavator and bucket during GET Vision deployment in Zambia.",
      aspect: "wide",
      objectPosition: "center center",
    },
    heroMedia: {
      type: "video",
      src: "/images/stories/get-vision/hero-video.webm",
      poster: "/images/stories/get-vision/hero.webp",
      fallbackImage: {
        src: "/images/stories/get-vision/hero.webp",
        alt: "Front view of a large mining excavator and bucket during GET Vision deployment in Zambia.",
        aspect: "wide",
        objectPosition: "center center",
      },
      objectPosition: "center center",
    },
    snapshot: [
      {
        label: "My role",
        value:
          "Technical Product Lead — Systems Integration, Vendor Delivery & Field Deployment",
      },
      {
        label: "Hands-on scope",
        value:
          "Installation scoping, wiring, machine integration, commissioning, fault finding, field-data capture and deployment support when required",
      },
      {
        label: "Technical domains",
        value:
          "AI-enabled vision systems, electrical integration, mechatronics, rugged mounting, sealing, thermal review, communications and remote support",
      },
      {
        label: "Product value",
        value:
          "Detecting GET loss before components travel downstream, while supporting wear monitoring and planned replacement",
      },
      {
        label: "Delivery status",
        value:
          "Progressed from an early supplier prototype to a rugged, working product deployed in Australia, Finland and Zambia",
      },
      {
        label: "Contribution boundary",
        value:
          "Detailed production vision software and model development remained with specialist supplier and vision engineers; Raghav led Bradken-side product, hardware, supplier and deployment integration",
      },
    ],
    sections: [
      {
        id: "problem-larger-than-camera",
        title: "The problem was larger than a camera",
        body: [
          "Ground Engaging Tools are hardened steel components fitted to the working edge of an excavator bucket. If a point or adaptor is lost during digging and travels with the material toward downstream processing equipment, the consequence can be severe: damaged machinery, unplanned downtime and a difficult recovery operation.",
          "Bradken's GET Vision programme set out to detect those losses during operation. The wider ambition also included measuring wear so maintenance teams could plan replacement more intelligently. The finished product would eventually combine rugged imaging hardware with machine-learning-based monitoring, but the programme began much earlier — when the available technology was still a vendor prototype rather than a mining product.",
        ],
      },
      {
        id: "early-concept",
        title: "An early concept, not yet a system",
        body: [
          "Raghav joined the programme in early 2021 as a technical adviser and observer. The supplier was developing a classical computer-vision approach, and the work was centred on proving that imagery could be processed rather than demonstrating a complete, deployable system.",
          "He learned enough of the proposed vision environment to assess the supplier's direction independently. By late 2021, he had already questioned whether the classical approach and proposed processing pathway were suitable for the required result, and raised neural-network-based detection as an alternative.",
          "At that stage, however, GET Vision was one of several technologies competing for attention. Raghav was simultaneously supporting SmartRoller, RFID, Industrial IoT and other trials. His ownership increased gradually rather than through a formal handover.",
        ],
      },
      {
        id: "project-champion",
        title: "Becoming the project champion",
        body: [
          "By mid-2022, an approaching customer installation made GET Vision a priority. Bradken needed someone to bring together the supplier, internal stakeholders, site preparation, technical readiness and field delivery. As the company's sole mechatronics and electronics engineer across the programme, Raghav became the Bradken-side project champion.",
          "The role was not conventional project management and it was not detailed authorship of every subsystem. It sat between the two.",
          "Raghav coordinated supplier meetings, technical reviews, schedules, customer communication, documentation and readiness decisions. He studied the proposed technology, reviewed strengths and weaknesses, prepared management briefings and made sure the practical installation work was not left between organisational boundaries.",
          "When required, he also became the person holding the tools.",
        ],
      },
      {
        id: "finland-first-source",
        title: "Finland: installation as the first source of truth",
        body: [
          "The first major field campaign ran from approximately October to early December 2022 in Finland. The supplier arrived without a sufficiently complete installation package. Mounting, enclosure integration, logistics and machine wiring still needed substantial work.",
          "Raghav had already scoped the machine and prepared the installation approach before travelling. On site, he coordinated the work, installed and removed the large legacy unit, completed wiring, helped resolve mounting and power issues, and used hands-on electrical fault finding — including soldering and oscilloscope work — to keep the trial moving.",
          "The physical system was installed and operated long enough to capture a substantial amount of real field data. But the campaign also exposed the gap between collecting images and delivering reliable detection. The original software approach was not ready, processing capability was inadequate, and the supplier was attempting to recover the algorithm while the team was already on site.",
          "That did not make the campaign worthless. It validated the physical installation and data pathway, created real operating data and gave Bradken clear evidence that the original technical direction needed to change.",
        ],
        images: [
          {
            src: "/images/stories/get-vision/image_2.webp",
            alt: "Mining excavator bucket with ground-engaging tools during field validation in Finland.",
            caption:
              "Field validation beside an excavator bucket in Finland, using representative GET conditions to support imaging-system evaluation and specialist vision-model development.",
            aspect: "tall",
            objectPosition: "center center",
          },
        ],
      },
      {
        id: "six-month-deadline",
        title: "A tactical decision under a six-month deadline",
        body: [
          "After Finland, Bradken faced a difficult supplier decision. Replacing the incumbent could improve the long-term architecture and delivery model, but restarting would almost certainly miss the next customer commitment. The programme needed to demonstrate a working system within approximately six months.",
          "Raghav recommended retaining the supplier for the immediate phase while monitoring performance closely. In his later assessment, the decision was tactically defensible but strategically costly: it protected the near-term delivery window while increasing dependency on a difficult supplier relationship.",
          "The scope was also simplified. The original ambition covered three outcomes — loss detection, wear measurement and material-volume estimation. The team prioritised them sequentially:",
        ],
        orderedItems: [
          "reliable GET-loss detection;",
          "wear monitoring; and",
          "volume estimation only after the core system matured.",
        ],
        closingBody: [
          "This was an important technical-lead decision: reduce an overloaded programme to the highest-consequence problem first.",
        ],
      },
      {
        id: "phase-two",
        title: "Phase 2: replacing the prototype",
        body: [
          "The supplier moved to a neural-network-based approach and produced a more professional interim system with a stronger backend, improved cabin interface and better physical presentation.",
          "In July 2023, Raghav returned to Finland to remove the original installation and commission the Phase 2 system. The revised camera arrangement improved the view of the bucket and reduced perspective problems. The team also collected additional controlled field data to support the specialist vision work.",
          "Phase 2 was a necessary bridge, but it was still an interim product. Bradken could no longer treat each installation as a custom recovery exercise. The next stage needed repeatable hardware, clearer interfaces, proper validation and a design that could survive long-term use.",
        ],
      },
      {
        id: "phase-three",
        title: "Phase 3: designing for a commercial product",
        body: [
          "Before the next development cycle, Bradken paused for a concentrated architecture and product-definition campaign. Raghav helped drive the decisions that would turn a makeshift system into a maintainable mining product.",
          "His responsibility centred on the hardware-system and field-integration architecture:",
        ],
        bullets: [
          "power distribution and protection;",
          "isolation between machine and sensitive electronics;",
          "fault containment and recoverability;",
          "positioning and partitioning of enclosures;",
          "cable types, routing and connector strategy;",
          "thermal constraints and test quality;",
          "mounting concepts and secondary retention;",
          "remote visibility and support;",
          "installation time, serviceability and field replacement; and",
          "the overall electrical and mechanical interface with the excavator.",
        ],
        closingBody: [
          "The supplier performed much of the detailed engineering. Bradken's mechanical specialists conducted the professional structural analysis. Raghav provided field context, reviewed the results, participated in mounting and FEA discussions, challenged design decisions and carried the conclusions into the broader system and deployment plan.",
        ],
      },
      {
        id: "ruggedisation-interface",
        title: "Ruggedisation is an interface problem",
        body: [
          "The project developed substantial expertise in designing vision hardware for severe service.",
          "The structural design used generous margins, mechanical testing and professional FEA, but field work showed that calculated strength was only part of the problem. Mounting position, local impact exposure, load paths, fastener serviceability, cable restraint and secondary safety features all influenced whether the product survived on a working excavator.",
          "Environmental sealing was similarly dependent on details at the interfaces: connector position and exposure, cable entries, enclosure face seals, and maintaining the glass-to-enclosure seal through temperature changes.",
          "Electrical integration had its own field realities. The system needed to tolerate machine-start voltage variation, use appropriate grounding and isolation, contain faults and rely on rugged connectors that could be serviced from parts commonly available in the heavy-equipment environment.",
          "The design also had to recognise that an AI model could not recover information that the imaging system failed to capture. Dust, snow, day-to-night dynamic range, changing bucket position, lighting geometry and lens contamination all affected the consistency of the model's inputs. Image quality therefore became a system requirement spanning mechanical, electrical, optical, maintenance and software decisions.",
        ],
        images: [
          {
            src: "/images/stories/get-vision/image_3.webp",
            alt: "Frost-covered GET Vision hardware mounted on an excavator in Finland.",
            caption:
              "GET Vision hardware during cold-weather field work in Finland, demonstrating the environmental exposure faced by the imaging, lighting, mounting and cabling systems.",
            aspect: "tall",
            objectPosition: "center center",
          },
        ],
      },
      {
        id: "zambia-field-decisions",
        title: "Zambia: turning field failures into product decisions",
        body: [
          "Two Zambia deployment cycles became important ruggedisation milestones.",
          "The first installation exposed that the imaging hardware was operating in a more severe impact, shock and vibration environment than expected at its original position. Raghav helped recognise the mounting risk, brought the mechanical design team into the reassessment, contributed the field constraints and participated in the structural review process.",
          "The public lesson was not that the team had ignored ruggedisation. The system had been analysed and intentionally over-specified. The lesson was that real machine exposure reveals conditions, impact paths and serviceability problems that are difficult to reproduce completely before deployment.",
          "The mounting strategy was revised, the product was redeployed and the later installation operated as a working customer system. Minor glitches remained — normal for complex equipment in an exceptionally harsh environment — but the product had moved beyond a temporary demonstration into sustained operational use.",
        ],
        images: [
          {
            src: "/images/stories/get-vision/image_1.webp",
            alt: "Large mining excavator at an open-pit mine in Zambia with field personnel nearby.",
            caption:
              "GET Vision deployed on a large mining excavator in Zambia, where imaging, power, communications and mechanical integration had to operate as one field-ready system.",
            aspect: "wide",
            objectPosition: "center center",
          },
        ],
      },
      {
        id: "limited-authority",
        title: "Product leadership with limited direct authority",
        body: [
          "GET Vision was also a lesson in supplier governance.",
          "Raghav was accountable for customer communication, readiness, deployment and much of the technical coordination, but he did not directly control the supplier's internal engineering team. That mismatch between responsibility and authority created recurring tension.",
          "He maintained the customer relationship, kept the technical record and documentation in order, attended senior management briefings, participated in vendor selection and reviews, and made sure installations were completed correctly whenever he went to site.",
          "Around early 2025, Bradken added a PhD-level vision specialist who strengthened internal ownership of the software and model domain. Raghav continued as the mechatronics, hardware-integration and deployment counterpart — scoping installations, reviewing hardware architecture, supporting approvals and remaining involved whenever the vision system had to work on a real machine.",
        ],
      },
      {
        id: "ai-boundary",
        title: "The boundary around the AI",
        body: [
          "Raghav did not author the complete production GET Vision model, and the story should not imply that he did.",
          "His contribution was to lead the product and system conditions that allowed specialist vision work to function in the field: usable imagery, stable power, controlled interfaces, rugged mounting, field-data capture, installation discipline, diagnostics, remote support and customer deployment.",
          "Later collaboration with an internal vision specialist also gave him practical experience with annotation, model training, inference and interface development through a separate internal proof of concept. That work strengthened his ability to collaborate with specialist AI engineers, but it remained separate from the delivered GET Vision product.",
        ],
      },
      {
        id: "prototype-to-product",
        title: "From prototype to deployed product",
        body: [
          "GET Vision did not cross a single ceremonial commercialisation gate. It matured through repeated redesign, specialist capability, industrial design, improved hardware, field validation and customer use.",
          "Bradken now publicly presents GETVision as a digital solution for loss detection and advanced wear monitoring on hydraulic shovels and excavators. For Raghav, the more meaningful milestone was practical: after successive field-driven changes, the system had become rugged enough to remain installed, perform its function and be supported as a working product.",
          "The programme was not perfect. Some outcomes fell below his personal engineering standards, and supplier constraints made the path more difficult than it needed to be. But the responsibilities within his control were delivered: the customer was kept informed, the installations were completed, technical issues were worked through and the product reached a stable deployed state.",
        ],
      },
      {
        id: "demonstrates-get-vision",
        title: "What the project demonstrates",
        body: [
          "GET Vision demonstrates a form of technical leadership that is easy to overlook when engineering work is divided across suppliers and specialist disciplines.",
          "Raghav did not claim every circuit, algorithm or mechanical drawing. He represented Bradken's technical and product interests across the complete system. He translated customer commitments into staged scope, challenged supplier decisions, guided hardware integration, coordinated validation and carried the programme through difficult international installations.",
          "Most importantly, he understood that an AI-enabled product is still a physical product. Its performance depends on power, mounting, optics, sealing, serviceability, data quality, people and the operating environment behaving as one system.",
        ],
      },
      {
        id: "lessons-reflection",
        title: "Lessons and reflection",
        body: [
          "The strongest management lesson was that outsourcing work does not outsource accountability.",
          "A third party should not be selected only because it accepts the lowest cost, shortest schedule and broadest requirement set. Its ability to deliver each promised outcome needs independent technical verification. Otherwise, the customer can end up funding the supplier's learning curve while carrying the schedule, customer and product risk.",
          "GET Vision reinforced several principles that Raghav carried into later product work:",
        ],
        bullets: [
          "verify capability before dependency develops;",
          "make difficult supplier decisions early;",
          "recognise when a tactical delivery victory creates a strategic loss;",
          "front-load architecture, technical leadership and validation;",
          "simplify ambitious programmes into sequential, testable outcomes; and",
          "treat field deployment as engineering validation, not as an afterthought.",
        ],
        closingBody: ["His own assessment remains deliberately measured:"],
        quote:
          "I do not view GET Vision as a perfectly executed programme. My authority over the supplier was limited, and parts of the result fell short of my own standards. What I did control was delivery: keeping the customer informed, maintaining technical discipline, preparing each deployment and making sure the installation worked before I left site.",
      },
    ],
    externalLinks: [
      {
        label: "Bradken GETVision solution",
        description:
          "View Bradken's public description of the GETVision solution for GET loss detection and advanced wear monitoring.",
        cta: "View GETVision on Bradken",
        href: "https://www.bradken.com/products-and-services/digital-solutions/getvision-solution",
      },
    ],
    seo: {
      title: "GET Vision | AI-Enabled Mining Vision Product Delivery",
      description:
        "How Raghav Malik led Bradken-side systems integration, supplier delivery and field validation as GET Vision became a rugged AI-enabled mining product.",
      openGraphTitle:
        "GET Vision — From Vision Prototype to Rugged Mining Product",
      openGraphDescription:
        "A field-driven engineering story spanning AI-enabled vision, rugged hardware, supplier delivery, validation and mining deployments across Australia, Finland and Zambia.",
      canonicalPath: "/stories/get-vision",
      keywords: [
        "GET Vision",
        "AI-enabled mining vision",
        "mining technology product development",
        "product systems integration",
        "harsh-environment engineering",
        "machine vision deployment",
        "mining mechatronics",
        "vendor technical leadership",
        "rugged camera system",
        "field validation",
      ],
    },
    relatedProjectSlugs: ["smartroller"],
  },
  {
    title: "Recovering a Plasma-Thruster Electronics Workstream",
    cardTitle: "Plasma-Thruster Electronics Recovery",
    shortTitle: "Plasma-Thruster Electronics",
    slug: "neumann-space-plasma-thruster-electronics",
    company: "Neumann Space",
    eyebrow: "Neumann Space",
    summary:
      "Recovered and stabilised an inherited plasma-thruster power-and-control platform, led a small electronics workstream and progressed the system into sustained firing and integrated vacuum testing.",
    heroProposition:
      "Stabilising an inherited power-and-control platform and leading it into sustained vacuum testing for the SpIRIT mission.",
    heroSummary:
      "Raghav joined as an Electronics Engineer and functionally led a small electronics workstream supporting Neumann Space propulsion development for the SpIRIT programme. The public lesson is deliberately high-level: stabilise and verify before redesigning.",
    status: "published",
    displayOrder: 3,
    presentation: {
      indexVariant: "flagship",
      indexGroup: "flagship",
      showOnStoriesIndex: true,
    },
    role: "Electronics Engineer | Functional Technical Lead",
    period: "2020",
    domains: [
      "Aerospace electronics",
      "Electric propulsion",
      "Power electronics",
      "Embedded control",
      "Vacuum testing",
      "Technical programme recovery",
      "Engineering leadership",
    ],
    technologies: [
      "Aerospace electronics",
      "Power electronics",
      "Embedded control",
      "Vacuum testing",
      "Technical leadership",
    ],
    countries: ["AU-ADELAIDE"],
    cardImage: {
      src: "/images/stories/neumann-space/neumann-thruster-flight-model.png",
      alt: "Publicly released Neumann Space plasma-thruster hardware shown against a transparent background.",
      aspect: "landscape",
      objectFit: "contain",
    },
    heroImage: {
      src: "/images/stories/neumann-space/neumann-thruster-flight-model.png",
      alt: "Publicly released Neumann Space plasma-thruster hardware shown against a transparent background.",
      caption:
        "Publicly released Neumann Space thruster image. Raghav's work occurred during the earlier electronics-development and vacuum-test phase; the final flight configuration may include later revisions.",
      aspect: "landscape",
      objectFit: "contain",
    },
    snapshot: [
      {
        label: "Company",
        value: "Neumann Space",
      },
      {
        label: "Role",
        value: "Electronics Engineer | Functional Technical Lead",
      },
      {
        label: "Period",
        value: "2020",
      },
      {
        label: "Footprint",
        value: "Adelaide, Australia",
      },
      {
        label: "Mission context",
        value: "SpIRIT",
      },
      {
        label: "Domains",
        value:
          "Aerospace electronics, electric propulsion, power electronics, embedded control and vacuum testing",
      },
      {
        label: "Challenge",
        value:
          "A representative propulsion-electronics platform was not operating reliably, development hardware was scarce and an immediate redesign risked consuming schedule without identifying the root cause.",
      },
      {
        label: "Responsibility",
        value:
          "Lead the electronics recovery path, allocate meaningful work across two early-career engineers and retain responsibility for technical direction, integration and test sequencing.",
      },
      {
        label: "Approach",
        value:
          "Preserve the inherited architecture, isolate the failure systematically, change one meaningful variable at a time and defer non-essential redesign until the system was stable.",
      },
      {
        label: "Outcome",
        value:
          "Recovered the electronics path and enabled sustained firing and integrated vacuum testing toward the programme's next maturity milestone.",
      },
    ],
    sections: [
      {
        id: "entering-a-blocked-programme",
        title: "Entering a blocked programme",
        body: [
          "Raghav joined Neumann Space as an Electronics Engineer and functionally led a small electronics workstream supporting plasma-propulsion development for the SpIRIT mission context.",
          "The propulsion concept had previously been demonstrated, but the more representative power-and-control electronics were not operating reliably. Electronics had become a critical path to further integrated testing, with limited development hardware, instrumentation and schedule margin.",
          "The workstream included Raghav and two early-career engineers. His public role is best described as Electronics Engineer with functional technical leadership responsibility, not as the confirmed contractual title of Technical Lead.",
        ],
      },
      {
        id: "choosing-recovery-before-redesign",
        title: "Choosing recovery before redesign",
        body: [
          "A new PCB was one possible response, but the failure was not yet understood. An immediate redesign could have reproduced the same problem, consumed schedule and destroyed useful diagnostic evidence from the inherited system.",
          "Raghav recommended understanding and stabilising the existing architecture first. This was a systems and programme-risk decision rather than reluctance to design.",
          "Under schedule pressure, architecture change is not automatically progress.",
        ],
      },
      {
        id: "reconstructing-the-system",
        title: "Reconstructing the system",
        body: [
          "Raghav reconstructed the expected system behaviour and compared it with measured operation. The investigation moved through static checks, operating observations and high-level review of magnetic, thermal and switching-loss possibilities.",
          "Plausible causes were eliminated systematically. The initiating problem was traced into the control path, a controlled correction was applied and repeatable operation was restored without a clean-sheet redesign.",
          "This public account deliberately excludes the exact fault mechanism, topology, component identities, operating values, timing, control constants, PCB details and test configuration.",
        ],
      },
      {
        id: "leading-the-electronics-workstream",
        title: "Leading the electronics workstream",
        body: [
          "Raghav led two early-career engineers, one focused primarily on electronics and one primarily on firmware. He allocated meaningful supporting-circuit, assembly, embedded and test work, reviewed the results and retained responsibility for architecture, integration and test sequencing.",
          "The leadership task was to maintain technical direction under significant programme pressure while protecting the team's ability to focus.",
        ],
        quote: "The leader owns the mistakes; the success belongs to the team.",
      },
      {
        id: "moving-into-verification",
        title: "Moving into verification",
        body: [
          "After the electronics path was recovered, the work shifted from intervention to repeatability and verification. Raghav corrected engineering records, assembled additional hardware and helped move the workstream into sustained firing campaigns.",
          "The integrated system entered vacuum testing, with thermal and pulsed-current behaviour monitored at a high level. The workstream moved from blocking programme progress to representative-environment testing.",
        ],
      },
      {
        id: "contribution-boundaries-and-later-mission-context",
        title: "Contribution boundaries and later mission context",
        body: [
          "Raghav left while the TRL-6-oriented ground campaign remained underway. Later qualification, later flight-hardware revisions, spacecraft integration and on-orbit operations remained with Neumann Space and the wider SpIRIT team.",
          "SpIRIT later launched and publicly demonstrated a Neumann Space propulsion system in orbit. That later outcome is programme context, not a claim that Raghav's exact 2020 electronics revision flew.",
          "This Story does not claim that Raghav invented the thruster, designed the complete propulsion system, delivered flight-qualified hardware or formally certified TRL 6.",
        ],
        images: [
          {
            src: "/images/stories/neumann-space/spirit-mission-context.webp",
            alt: "SpIRIT spacecraft hardware photographed with Earth visible in the background.",
            caption:
              "The SpIRIT mission later launched and demonstrated a Neumann Space propulsion system in orbit. This later outcome is included as programme context and does not establish that Raghav's exact 2020 electronics revision flew. Image reuse remains subject to confirmation before publication.",
            aspect: "wide",
            objectFit: "contain",
          },
        ],
      },
      {
        id: "engineering-and-leadership-lessons",
        title: "Engineering and leadership lessons",
        bullets: [
          "Recovering an inherited design may be harder than designing from scratch.",
          "Measure the operating system rather than relying only on nominal assumptions.",
          "Change one meaningful variable at a time.",
          "Do not redesign before the failure is understood.",
          "A technical lead protects the team's ability to think.",
          "Ownership belongs with the leader; credit belongs with the team.",
        ],
      },
    ],
    externalLinks: [
      {
        label: "Official company",
        description:
          "Neumann Space public company website. Link provided for organisational context only.",
        cta: "Visit Neumann Space",
        href: "https://neumannspace.com/",
      },
      {
        label: "SpIRIT mission",
        description:
          "University of Melbourne public mission page for the SpIRIT satellite programme.",
        cta: "View SpIRIT mission",
        href: "https://spirit.research.unimelb.edu.au/",
      },
      {
        label: "SpIRIT thruster technology",
        description:
          "Public mission technology page describing the Neumann Space propulsion payload.",
        cta: "View thruster technology",
        href: "https://spirit.research.unimelb.edu.au/technology/thruster/",
      },
      {
        label: "In-orbit propulsion demonstration",
        description:
          "University of Melbourne public update on the later in-orbit demonstration. This is programme context, not an individual contribution claim.",
        cta: "Read mission update",
        href: "https://spirit.research.unimelb.edu.au/2024/08/21/spirit-successfully-demonstrates-australian-propulsion-technology/",
      },
    ],
    seo: {
      title: "Plasma-Thruster Electronics Recovery | Raghav Malik",
      description:
        "How Raghav Malik recovered an inherited plasma-thruster power-and-control platform, led a small electronics workstream and progressed the system into sustained vacuum testing for the SpIRIT programme.",
      openGraphTitle:
        "Plasma-Thruster Electronics Recovery",
      openGraphDescription:
        "A conservative engineering Story about recovering an inherited plasma-thruster electronics workstream, leading a small team and preserving contribution boundaries around later mission outcomes.",
      canonicalPath: "/stories/neumann-space-plasma-thruster-electronics",
      keywords: [
        "Neumann Space",
        "SpIRIT mission",
        "plasma thruster electronics",
        "aerospace electronics",
        "power electronics",
        "embedded control",
        "vacuum testing",
        "technical leadership",
      ],
    },
    relatedProjectSlugs: ["smartroller", "get-vision"],
  },
  {
    title: "Commissioning a Proteus One Proton-Therapy Accelerator",
    shortTitle: "Proteus One Commissioning",
    slug: "proton-therapy-commissioning",
    company: "IBA",
    summary:
      "Delivering the electromechanical integration and commissioning of a complex proton-therapy accelerator system across precision mechanics, electrical systems, RF, vacuum, cryogenics, cooling and international site coordination.",
    status: "planned",
    displayOrder: 4,
    presentation: {
      indexVariant: "flagship",
      indexGroup: "flagship",
      showOnStoriesIndex: true,
    },
    role: "Electromechanical Engineer",
    period: "02/2017 - 06/2019",
    domains: [
      "Medical Accelerators",
      "Electromechanical Systems",
      "Precision Commissioning",
      "Multidisciplinary Integration",
      "International Delivery",
    ],
    technologies: [
      "Electrical systems",
      "RF systems",
      "Vacuum",
      "Cryogenics",
      "Water cooling",
      "Precision mechanical alignment",
    ],
    countries: ["BE", "PL", "JP-TOYOHASHI"],
    sections: [],
    relatedProjectSlugs: [],
  },
  {
    title: "Mining IoT Gateway",
    shortTitle: "Mining IoT Gateway",
    slug: "mining-iot-gateway",
    company: "Bradken",
    summary:
      "Connected field gateway integrating sensing, communications and remote-monitoring functions.",
    status: "draft",
    displayOrder: 90,
    presentation: {
      indexVariant: "compact",
      indexGroup: "bradken-programmes",
      showOnStoriesIndex: false,
    },
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
    summary:
      "Provided technical leadership and RF expertise through sensing development and trial activity, including remote technical support for a Namibia field trial and later specialist consulting input.",
    status: "planned",
    displayOrder: 12,
    presentation: {
      indexVariant: "compact",
      indexGroup: "bradken-programmes",
      showOnStoriesIndex: true,
    },
    role: "Technical Lead and RF Specialist",
    period: "To be confirmed",
    domains: ["RF Systems", "Sensing", "Mining Technology", "Field Validation"],
    technologies: ["Sensing prototype", "RF systems", "Validation"],
    countries: [],
    sections: [],
    relatedProjectSlugs: [],
  },
  {
    title: "SmartLiner",
    shortTitle: "SmartLiner",
    slug: "smartliner",
    company: "Bradken",
    summary:
      "Supported product-improvement work focused on increasing sensing resolution and strengthening the usefulness of the existing monitoring system.",
    status: "planned",
    displayOrder: 13,
    presentation: {
      indexVariant: "compact",
      indexGroup: "bradken-programmes",
      showOnStoriesIndex: true,
    },
    role: "Product Improvement and Systems Contribution",
    period: "To be confirmed",
    domains: [
      "Product Improvement",
      "Sensing Resolution",
      "Mining Technology",
      "Systems Integration",
    ],
    technologies: ["Product upgrade", "Sensing resolution", "Systems integration"],
    countries: [],
    sections: [],
    relatedProjectSlugs: [],
  },
  {
    title: "Vibration Energy Harvesting for Autonomous IoT",
    shortTitle: "Vibration Energy Harvesting",
    slug: "vibration-energy-harvesting",
    company: "Bradken",
    summary:
      "Researched and designed an energy-harvesting concept for regenerating electrical power from machine vibration to support autonomous industrial sensing and reduce dependence on conventional battery replacement.",
    status: "planned",
    displayOrder: 11,
    presentation: {
      indexVariant: "compact",
      indexGroup: "bradken-programmes",
      showOnStoriesIndex: true,
    },
    role: "Researcher and System Designer",
    period: "To be confirmed",
    domains: [
      "Energy Harvesting",
      "Industrial IoT",
      "Applied Research",
      "Sensing Systems",
    ],
    technologies: ["Energy harvesting", "Industrial sensing", "Applied research"],
    countries: [],
    sections: [],
    relatedProjectSlugs: [],
  },
];

export function getStories() {
  return [...stories].sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getStoriesForIndex() {
  return getStories().filter(
    (story) => story.presentation?.showOnStoriesIndex !== false,
  );
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
