import AboutOperator from "@/components/AboutOperator";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HostingPlan from "@/components/HostingPlan";
import JsonLd from "@/components/JsonLd";
import Schedule from "@/components/Schedule";
import ServiceIntro from "@/components/ServiceIntro";
import SponsorPlan from "@/components/SponsorPlan";
import TrackRecord from "@/components/TrackRecord";
import { getDictionary, type Locale } from "@/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Header dict={dict} />
      <main>
        <Hero dict={dict} />
        <ServiceIntro dict={dict} />
        <TrackRecord dict={dict} />
        <Schedule dict={dict} />
        <SponsorPlan dict={dict} />
        <HostingPlan dict={dict} />
        <AboutOperator dict={dict} />
        <FAQ dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
