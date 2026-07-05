import { totalStats } from "@/data/events";
import { getDictionary, type Locale } from "@/i18n";
import { CONTACT_EMAIL } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pageUrl = locale === "en" ? `${SITE_URL}/en` : SITE_URL;

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: dict.siteName,
    alternateName: locale === "ja" ? "Virtual Fireworks Festival" : "バーチャル花火大会",
    url: pageUrl,
    inLanguage: locale === "ja" ? "ja" : "en",
    description: dict.meta.description,
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: dict.organizer.brand,
    url: dict.organizer.websiteUrl,
    email: CONTACT_EMAIL,
    founder: {
      "@type": "Person",
      name: dict.organizer.name,
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: dict.siteName,
    description: dict.meta.description,
    provider: {
      "@type": "Organization",
      name: dict.organizer.brand,
      url: dict.organizer.websiteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: locale === "ja" ? "広島県" : "Hiroshima Prefecture, Japan",
    },
    offers: [
      {
        "@type": "Offer",
        name: dict.sponsor.fireworksPlan.title,
        price: "30000",
        priceCurrency: "JPY",
        description: dict.sponsor.fireworksPlan.description,
      },
      {
        "@type": "Offer",
        name: dict.sponsor.telopPlan.title,
        price: "10000",
        priceCurrency: "JPY",
        description: dict.sponsor.telopPlan.description,
      },
      {
        "@type": "Offer",
        name: dict.hosting.title,
        price: "100000",
        priceCurrency: "JPY",
        description: dict.hosting.paragraphs[0],
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const eventSeries = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: dict.siteName,
    description: dict.trackRecord.subtitle,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: "https://cluster.mu/",
    },
    organizer: {
      "@type": "Organization",
      name: dict.organizer.brand,
      url: dict.organizer.websiteUrl,
    },
    subEvent: dict.schedule.items
      .filter((item) => item.status === "upcoming" && item.clusterUrl)
      .map((item) => ({
        "@type": "Event",
        name: item.name,
        startDate: item.dateObj.toISOString().split("T")[0],
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "VirtualLocation",
          url: item.clusterUrl,
        },
        organizer: {
          "@type": "Organization",
          name: dict.organizer.brand,
        },
      })),
  };

  const dataset = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: locale === "ja" ? "バーチャル花火大会 開催実績" : "Virtual Fireworks Festival Track Record",
    description: dict.trackRecord.subtitle,
    variableMeasured: [
      { "@type": "PropertyValue", name: "totalEvents", value: totalStats.totalEvents },
      { "@type": "PropertyValue", name: "totalParticipants", value: totalStats.totalParticipants },
      { "@type": "PropertyValue", name: "totalFestivals", value: totalStats.totalFestivals },
    ],
  };

  return (
    <>
      <JsonLdScript data={website} />
      <JsonLdScript data={organization} />
      <JsonLdScript data={service} />
      <JsonLdScript data={faqPage} />
      <JsonLdScript data={eventSeries} />
      <JsonLdScript data={dataset} />
    </>
  );
}
