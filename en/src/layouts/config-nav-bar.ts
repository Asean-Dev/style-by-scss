import { paths } from "@/routers/paths";

export const ConfigNavBar = [
  { id: 1, title: "Home", linkUrl: paths.home, pathSegment: "home" },
  {
    id: 2,
    title: "Administrative Courts",
    linkUrl: "#",
    pathSegment: "administrative-court",
    image: "/assets/layout/submenu/administrative-court.png",
    subMenu: {
      one: [
        {
          title: "History",
          linkUrl: paths.administrativeCourt.history,
          pathSegment: "history",  
        },
        {
          title: "Structure and Jurisdiction",
          linkUrl: paths.administrativeCourt.structureAndJurisdiction,
          pathSegment: "structure-and-jurisdiction",
        },
        {
          title: "Executives",
          linkUrl: "#",
          pathSegment: "executives",
        },
        {
          title: "Master Plan and Vision",
          linkUrl: "#",
          pathSegment: "master-plan-and-vision",
        },
      ],
      tow: [
        {
          title: "Policy and Court Performance",
          linkUrl: "#",
          pathSegment: "policy-and-court-performance",
        },
        {
          title: "Emblem",
          linkUrl: "#",
          pathSegment: "emblem",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Competence and Procedures",
    linkUrl: "/competence-and-procedures",
    pathSegment: "competence-and-procedures",
    image: "/assets/layout/submenu/competence-and-procedures.png",
    subMenu: {
      one: [
        {
          title: "Competence",
          linkUrl: "#",
          pathSegment: "competence",
        },
        {
          title: "Supreme Administrative Court",
          linkUrl: "#",
          pathSegment: "supreme-administrative-court",
        },
        {
          title: "Administrative Courts of First Instance",
          linkUrl: "#",
          pathSegment: "administrative-courts-of-first-instance",
        },
      ],
      tow: [
        {
          title: "Filing of Administrative Cases",
          linkUrl: "#",
          pathSegment: "filing-of-administrative-cases",
        },
        {
          title: "Administrative Case Execution",
          linkUrl: "#",
          pathSegment: "administrative-case-execution",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Laws and Rules",
    linkUrl: "/laws-and-rules",
    pathSegment: "laws-and-rules",
    image: "/assets/layout/submenu/laws-and-rules.png",
    subMenu: {
      one: [
        {
          title: "Laws",
          linkUrl: "#",
          pathSegment: "laws",
        },
        {
          title: "Rules",
          linkUrl: "#",
          pathSegment: "rules",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Judgments and Orders",
    linkUrl: "/judgments-and-orders",
    pathSegment: "judgments-and-orders",
    image: "/assets/layout/submenu/judgments-and-orders.png",
    subMenu: {
      one: [
        {
          title: "Environmental Cases",
          linkUrl: "#",
          pathSegment: "judgments",
        },
        {
          title: "Rights Protection Cases",
          linkUrl: "#",
          pathSegment: "orders",
        },
        {
          title: "General Cases",
          linkUrl: "#",
          pathSegment: "orders",
        },
        {
          title: "Administrative Case Statistics",
          linkUrl: "#",
          pathSegment: "orders",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Principles of Administrative Practices from Decision",
    linkUrl: "/principles-of-administrative-practices-from-decision",
    pathSegment: "principles-of-administrative-practices-from-decision",
    image:
      "/assets/layout/submenu/principles-of-administrative-practices-from-decision.png",
    subMenu: {
      one: [
        {
          title: "Principles of Administrative Practices from Decision",
          linkUrl: "#",
          pathSegment: "principles-of-administrative-practices-from-decision",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Office of the Administrative Courts",
    linkUrl: "/office-of-the-administrative-courts",
    pathSegment: "office-of-the-administrative-courts",
    image: "/assets/layout/submenu/office-of-the-administrative-courts.png",
    subMenu: {
      one: [
        {
          title: "Structure and Mission",
          linkUrl: "#",
          pathSegment: "structure-and-mission",
        },
        {
          title: "Executives",
          linkUrl: "#",
          pathSegment: "executives",
        },
      ],
      tow: [
        {
          title: "Administrative Court Premises",
          linkUrl: "#",
          pathSegment: "administrative-court-premises",
        },
        {
          title: "Building Hours and Location",
          linkUrl: "#",
          pathSegment: "building-hours-and-location",
        },
        {
          title: "Public Service Center",
          linkUrl: "#",
          pathSegment: "public-service-center",
        },
        {
          title: "Public Law Library",
          linkUrl: "#",
          pathSegment: "public-law-library",
        },
        {
          title: "Administrative Court Museum",
          linkUrl: "#",
          pathSegment: "administrative-court-museum",
        },
        {
          title: "Reception Hall",
          linkUrl: "#",
          pathSegment: "reception-hall",
        },
      ],
    },
  },
  {
    id: 8,
    title: "Press Release",
    linkUrl: "/press-release",
    pathSegment: "press-release",
    image: "/assets/layout/submenu/press-release.png",
    subMenu: {
      one: [
        {
          title: "Administrative Court Etiquette",
          linkUrl: "#",
          pathSegment: "administrative-court-etiquette",
        },
        {
          title: "News",
          linkUrl: "#",
          pathSegment: "news",
        },
        {
          title: "Newsletters ",
          linkUrl: "#",
          pathSegment: "newsletters",
        },
        {
          title: "Articles",
          linkUrl: "#",
          pathSegment: "articles",
        },
      ],
      tow: [
        {
          title: "Integrity and Transparency Assessment (ITA)",
          linkUrl: "#",
          pathSegment: "integrity-and-transparency-assessment-ita",
        },
        {
          title: "Video",
          linkUrl: "#",
          pathSegment: "video",
        },
        {
          title: "E-Book",
          linkUrl: "#",
          pathSegment: "e-book",
        },
      ],
    },
  },
  {
    id: 9,
    title: "International Activities",
    linkUrl: "/international-activities",
    pathSegment: "international-activities",
    image: "/assets/layout/submenu/international-activities.png",
    subMenu: {
      one: [
        {
          title: "Technical Cooperation and Study Visits",
          linkUrl: "#",
          pathSegment: "international-activities",
        },
        {
          title:
            "Memorandums of Understanding with Foreign Countries / Agreements with Foreign Countries",
          linkUrl: "#",
          pathSegment:
            "memorandums-of-understanding-with-foreign-countries-agreements-with-foreign-countries",
        },
        {
          title: "Notable Visits to the Administrative Courts",
          linkUrl: "#",
          pathSegment: "notable-visits-to-the-administrative-courts",
        },
        {
          title:
            "The International Association of Supreme Administrative Jurisdictions (IASAJ)",
          linkUrl: "#",
          pathSegment:
            "the-international-association-of-supreme-administrative-jurisdictions-iasaj",
        },
      ],
    },
  },
];
export const footerNavbar = [
  {
    title: "ADMINISTRATIVE COURT",
    linkUrl: "#",
    items: [
      { title: "Royal Speech", linkUrl: "#" },
      { title: "History", linkUrl: "#" },
      { title: "Symbol", linkUrl: "#" },
      { title: "Vision and Mission", linkUrl: "#" },
      { title: "Jurisdiction of the Administrative Court", linkUrl: "#" },
      { title: "Structure of the Administrative Court", linkUrl: "#" },
    ],
  },
  {
    title: "SEARCH FOR INFORMATION",
    linkUrl: "#",
    items: [
      {
        title: "Supreme Administrative Court judgments and orders",
        linkUrl: "#",
      },
      {
        title: "Supreme Administrative Court judgments and orders",
        linkUrl: "#",
      },
      { title: "Classified by case type", linkUrl: "#" },
      { title: "Administrative Court appointment list", linkUrl: "#" },
      { title: "Academic information", linkUrl: "#" },
    ],
  },
  {
    title: "ADMINISTRATIVE COURT OFFICE",
    linkUrl: "#",
    items: [
      { title: "Structure and Mission", linkUrl: "#" },
      { title: "Office Executives", linkUrl: "#" },
      { title: "Administrative Court Culture (TRUST)", linkUrl: "#" },
      { title: "ITA Administrative Court Office", linkUrl: "#" },
    ],
  },
  {
    title: "MEETINGS",
    linkUrl: "#",
    items: [
      { title: "Public relations news", linkUrl: "#" },
      { title: "Job application news", linkUrl: "#" },
      { title: "Procurement news", linkUrl: "#" },
      {
        title: "Prominent cases/Resolutions of the Civil Service Commission",
        linkUrl: "#",
      },
      { title: "Public service center", linkUrl: "#" },
      {
        title: "Accounting for recruitment into government service",
        linkUrl: "#",
      },
      {
        title: "Rewind news...telling about administrative cases",
        linkUrl: "#",
      },
      { title: "10 Justice News", linkUrl: "#" },
    ],
  },
  {
    title: "ACADEMIC",
    linkUrl: "#",
    items: [
      { title: "Academic articles", linkUrl: "#" },
      { title: "Various legal knowledge", linkUrl: "#" },
      { title: "Examples from administrative cases", linkUrl: "#" },
      {
        title: "Summary of translations of administrative court rulings",
        linkUrl: "#",
      },
      { title: "Academic journals/books", linkUrl: "#" },
    ],
  },
  {
    title: "CONTACT US",
    linkUrl: "#",
    items: [
      { title: "CALL CENTER", linkUrl: "#" },
      { title: "Search for information", linkUrl: "#" },
      { title: "Link collection", linkUrl: "#" },
      { title: "Tag collection", linkUrl: "#" },
    ],
  },
];
