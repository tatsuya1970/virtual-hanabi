import type { HanabiEvent } from "@/data/events";
import type { ScheduleItem } from "@/data/schedule";
import type { Dictionary } from "./types";

const eventsEn: HanabiEvent[] = [
  {
    id: "kure",
    name: "Virtual Kure Fireworks Festival",
    shortName: "Kure",
    totalEditions: 4,
    totalParticipants: 2324,
    feature: "Board the battleship Yamato / Watch fireworks from a bus",
    image: "/images/kure/yamato.png",
    editions: [
      { edition: 1, date: "Sep 25, 2021", participants: 252, eventUrl: "https://cluster.mu/e/a52cf835-e60c-4ca8-928c-b3444972b2f6", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/p2eF9xw" },
      { edition: 2, date: "Jul 30, 2022", participants: 851, eventUrl: "https://cluster.mu/e/a4b5f146-b542-4237-a501-a615ecd38025", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/3VvkDcL" },
      { edition: 3, date: "Jul 20, 2024", participants: 896, eventUrl: "https://cluster.mu/e/46f57acb-576d-47d5-85de-c1645e0d1f58", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/exNi0P0" },
      { edition: 4, date: "Jul 19, 2025", participants: 325, eventUrl: "https://cluster.mu/e/548eacf0-952d-4cac-a27f-45a9e38ecf7b", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/q58yTlC" },
    ],
  },
  {
    id: "tomo",
    name: "Virtual Tomonoura Bentenjima Fireworks Festival",
    shortName: "Tomonoura",
    totalEditions: 4,
    totalParticipants: 645,
    feature: "Photogrammetry recreation of Tomonoura's townscape",
    image: "/images/tomo/HJj1g8sacAAzS_W.jpeg",
    editions: [
      { edition: 1, date: "Jun 3, 2023", participants: 124, eventUrl: "https://cluster.mu/e/a192a257-6c6e-4b0e-bb9e-9c9783aa2cc2" },
      { edition: 2, date: "May 25, 2024", participants: 154, eventUrl: "https://cluster.mu/e/36bf687c-75b5-4c0d-9dc8-2b79f0f148fe" },
      { edition: 3, date: "May 31, 2025", participants: 264, eventUrl: "https://cluster.mu/e/54fce28e-eae1-4b47-a849-29d2c728ba8c" },
      { edition: 4, date: "May 30, 2026", participants: 103, eventUrl: "https://cluster.mu/e/0fff8f02-d321-4fdf-8d30-1cd47528287f", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/7BqGXk4" },
    ],
  },
  {
    id: "hiroshima",
    name: "Virtual Hiroshima Fireworks Festival",
    shortName: "Hiroshima",
    totalEditions: 2,
    totalParticipants: 650,
    feature: "Ride the streetcar",
    image: "/images/hiroshima/photo1.jpeg",
    editions: [
      { edition: 1, date: "Jul 27, 2024", participants: 461, eventUrl: "https://cluster.mu/e/ee4c856c-ef29-4aba-8230-99fbadc31612", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/Faw9KQR" },
      { edition: 2, date: "Jul 26, 2025", participants: 189, eventUrl: "https://cluster.mu/e/745af647-3597-4ce0-b024-62bc04e48bf0", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/Q1JgVJJ" },
    ],
  },
  {
    id: "ashida",
    name: "Virtual Ashidagawa Fireworks Festival",
    shortName: "Ashidagawa",
    totalEditions: 2,
    totalParticipants: 388,
    feature: "Ride the discontinued Tomo Railway",
    image: "/images/ashida/GVBncjpboAAS0y1.jpeg",
    editions: [
      { edition: 1, date: "Aug 15, 2024", participants: 199, eventUrl: "https://cluster.mu/e/1c609b06-9488-4b9e-ab9f-add598740ed8", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/W6XifTD" },
      { edition: 2, date: "Aug 15, 2025", participants: 189, eventUrl: "https://cluster.mu/e/2e6d946c-30e3-4718-a82b-0939097a1884" },
    ],
  },
  {
    id: "miyajima",
    name: "Virtual Miyajima Fireworks Festival",
    shortName: "Miyajima",
    totalEditions: 1,
    totalParticipants: 68,
    feature: "",
    image: "/images/miyajima/frame_000247.png",
    editions: [{ edition: 1, date: "Sep 28, 2024", participants: 68, eventUrl: "https://cluster.mu/e/e0c21ce4-d991-429f-9e92-58143f4be953" }],
  },
];

const scheduleEn: ScheduleItem[] = [
  {
    name: "Virtual Tomonoura Bentenjima Fireworks Festival",
    date: "Sat, May 30, 2026",
    dateObj: new Date("2026-05-30"),
    status: "finished",
    clusterUrl: null,
  },
  {
    name: "Virtual Kure Fireworks Festival",
    date: "Sat, Jul 18, 2026",
    dateObj: new Date("2026-07-18"),
    status: "upcoming",
    clusterUrl: "https://cluster.mu/e/2e625054-4fcc-4064-8a3c-b9250aee9e84",
    edition: 5,
  },
  {
    name: "Virtual Hiroshima Fireworks Festival",
    date: "Sat, Jul 25, 2026",
    dateObj: new Date("2026-07-25"),
    status: "upcoming",
    clusterUrl: "https://cluster.mu/e/c95c0ebb-3963-4acd-b853-dcdb9afd5b98",
  },
  {
    name: "Virtual Ashidagawa Fireworks Festival",
    date: "Sat, Aug 15, 2026",
    dateObj: new Date("2026-08-15"),
    status: "upcoming",
    clusterUrl: null,
  },
];

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "Virtual Fireworks Festival - Fireworks in the Metaverse",
    description:
      "Host fireworks festivals in the metaverse. A low-cost alternative for cancelled events and a way to keep local celebrations going. 13 events held with 4,075 total participants.",
    ogLocale: "en_US",
    keywords: [
      "virtual fireworks festival",
      "metaverse fireworks",
      "cluster fireworks",
      "Hiroshima fireworks",
      "Kure fireworks",
      "PLATEAU metaverse",
      "VR fireworks event",
    ],
    ogImageAlt: "Fireworks at the Virtual Kure Fireworks Festival",
  },
  siteName: "Virtual Fireworks Festival",
  nav: [
    { label: "About", href: "#service" },
    { label: "Track Record", href: "#track-record" },
    { label: "Schedule", href: "#schedule" },
    { label: "Sponsorship", href: "#sponsor-plan" },
    { label: "Hosting", href: "#hosting-plan" },
    { label: "About Us", href: "#about-operator" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  langSwitch: { label: "日本語", href: "/" },
  hero: {
    tagline: "Virtual Fireworks Festival",
    title: "Fireworks festivals, virtually.",
    titleMobileBreak: false,
    description:
      "Experience fireworks festivals in the metaverse. We have hosted five festivals across Hiroshima Prefecture since 2021.",
    stats: {
      events: "events held",
      participants: "participants",
      festivals: "festivals",
    },
    cta: "View hosting & sponsorship plans",
    videoPoster: "/images/kure/yamato.png",
  },
  service: {
    title: "What is a Virtual Fireworks Festival?",
    paragraphs: [
      "We recreate local landscapes in cluster's metaverse spaces and launch fireworks above them. Join from a PC, smartphone, or VR headset and enjoy a fireworks festival from home.",
      "Using 3D city model data from PLATEAU by Japan's Ministry of Land, Infrastructure, Transport and Tourism, terrain and buildings are reproduced as they appear on site. Enjoy fireworks in a vast world that includes entire downtown areas, with a real sense of wind and open space.",
      "This is not just a video stream. Stand on the deck of the battleship Yamato, ride a streetcar, and enjoy experiences unique to each location.",
    ],
    platforms: "Supported platform: cluster (PC / iOS / Android / Meta Quest)",
    imageAlt: "Screenshot of a virtual fireworks festival",
  },
  trackRecord: {
    title: "Track Record",
    subtitle: "Five fireworks festivals since 2021. 4,075 participants in total.",
    photoPending: "Photo coming soon",
    total: "Total",
    eventLink: "Event",
    xSummaryLink: "X recap",
    events: eventsEn,
  },
  schedule: {
    title: "2026 Schedule",
    finished: "Completed",
    today: "Today",
    join: "Join",
    items: scheduleEn,
  },
  sponsor: {
    title: "Sponsorship Plans",
    intro: "We welcome sponsors for our fireworks festivals. Individuals are welcome to apply.",
    taxIncluded: "incl. tax",
    fireworksPlan: {
      title: "Custom Fireworks Plan",
      description:
        "A fireworks display designed exclusively for the sponsor, launched once every hour. The sponsor's name is shown during the launch.",
      imageAlt: "Custom fireworks plan preview",
    },
    telopPlan: {
      title: "On-Screen Message Plan",
      description: "Your name is displayed on screen once every hour.",
      imageAlt: "On-screen message plan preview",
    },
    cta: "Inquire about sponsorship →",
  },
  hosting: {
    title: "Interested in Hosting?",
    paragraphs: [
      "We offer virtual fireworks festivals for municipalities whose events were cancelled and for companies planning local events.",
      "We handle everything from building the metaverse venue to running the event on the day. Hybrid events with AR at the physical site are also available.",
    ],
    flowTitle: "How it works",
    flow: "Inquiry → Discovery → Proposal → Production → Rehearsal → Event day",
    cta: "Discuss hosting",
    priceLabel: "Starting from",
    price: "¥100,000",
    priceNote: "Varies by scale and scope",
  },
  about: {
    title: "About the Organizer",
    paragraphs: [
      "Virtual Fireworks Festival is organized by Tatsuya Takemura (Takemura Tech Lab), a creator based in Hiroshima. Through metaverse production and prototype development using AI, XR, and IoT, we bring local fireworks festivals into virtual spaces.",
      "For the organizer's profile, services, and speaking engagements, please visit the official website.",
    ],
    websiteLink: "Takemura Tech Lab Official Site",
  },
  contact: {
    title: "Contact",
    description:
      "For hosting inquiries, sponsorship applications, media requests, and other questions, please contact us at the email address below.",
    emailSubject: "Inquiry about Virtual Fireworks Festival",
    formPending: "Contact form coming soon.",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is a Virtual Fireworks Festival?",
        answer:
          "It is an event where local landscapes are recreated in cluster's metaverse spaces and fireworks are launched above them. You can join from a PC, smartphone, or VR headset and walk around the venue — not just watch a video stream.",
      },
      {
        question: "How do I participate?",
        answer:
          "Open the cluster event URL from the schedule page and enter via the cluster app (PC / iOS / Android / Meta Quest). After creating a free account, you can join at no cost.",
      },
      {
        question: "How much does it cost to host an event?",
        answer:
          "Hosting plans for municipalities and companies start from ¥100,000. We handle everything from building the metaverse venue to running the event on the day. Pricing varies by scale and scope.",
      },
      {
        question: "Are there sponsorship plans?",
        answer:
          "The Custom Fireworks Plan (¥30,000 incl. tax) launches sponsor-designed fireworks once every hour. The On-Screen Message Plan (¥10,000 incl. tax) displays your name once every hour. Individuals are welcome to apply.",
      },
      {
        question: "Where have events been held?",
        answer:
          "Since 2021, we have hosted five festivals across Hiroshima Prefecture (Kure, Tomonoura, Hiroshima, Ashidagawa, and Miyajima) — 13 events with 4,075 total participants.",
      },
      {
        question: "Who organizes this?",
        answer:
          "Virtual Fireworks Festival is organized by Tatsuya Takemura (Takemura Tech Lab), based in Hiroshima, specializing in metaverse production with AI, XR, and IoT.",
      },
    ],
  },
  footer: {
    operatedBy: "Operated by",
  },
  organizer: {
    name: "Tatsuya Takemura",
    brand: "Takemura Tech Lab",
    websiteUrl: "https://www.takemura-techlab.com/index_en.html",
  },
};
