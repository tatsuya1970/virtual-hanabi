import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceIntro from "@/components/ServiceIntro";
import TrackRecord from "@/components/TrackRecord";
import Schedule from "@/components/Schedule";
import HostingPlan from "@/components/HostingPlan";
import SponsorPlan from "@/components/SponsorPlan";
import AboutOperator from "@/components/AboutOperator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceIntro />
        <TrackRecord />
        <Schedule />
        <SponsorPlan />
        <HostingPlan />
        <AboutOperator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
