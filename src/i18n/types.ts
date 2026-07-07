import type { HanabiEvent } from "@/data/events";
import type { ScheduleItem } from "@/data/schedule";

export type Locale = "ja" | "en";

export type Dictionary = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    keywords: string[];
    ogImageAlt: string;
  };
  siteName: string;
  nav: { label: string; href: string }[];
  langSwitch: { label: string; href: string };
  hero: {
    tagline: string;
    title: string;
    titleMobileBreak: boolean;
    description: string;
    stats: {
      events: string;
      participants: string;
      festivals: string;
    };
    cta: string;
    videoPoster: string;
  };
  service: {
    title: string;
    paragraphs: string[];
    platforms: string;
    imageAlt: string;
  };
  trackRecord: {
    title: string;
    subtitle: string;
    datasetDescription: string;
    photoPending: string;
    total: string;
    eventLink: string;
    xSummaryLink: string;
    videoLink: string;
    events: HanabiEvent[];
  };
  schedule: {
    title: string;
    finished: string;
    today: string;
    join: string;
    items: ScheduleItem[];
  };
  sponsor: {
    title: string;
    intro: string;
    taxIncluded: string;
    fireworksPlan: {
      title: string;
      description: string;
      imageAlt: string;
    };
    telopPlan: {
      title: string;
      description: string;
      imageAlt: string;
    };
    cta: string;
  };
  hosting: {
    title: string;
    paragraphs: string[];
    flowTitle: string;
    flow: string;
    cta: string;
    priceLabel: string;
    price: string;
    priceNote: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    websiteLink: string;
  };
  contact: {
    title: string;
    description: string;
    emailSubject: string;
    formButton: string;
    emailNote: string;
    formUrl: string;
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    operatedBy: string;
    privacyPolicy: string;
    legalNotice: string;
    privacyPolicyUrl: string;
    legalNoticeUrl: string;
  };
  organizer: {
    name: string;
    brand: string;
    websiteUrl: string;
  };
};
