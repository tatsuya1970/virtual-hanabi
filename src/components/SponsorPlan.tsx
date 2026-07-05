import Image from "next/image";
import SectionTitle from "./SectionTitle";
import type { Dictionary } from "@/i18n";

export default function SponsorPlan({ dict }: { dict: Dictionary }) {
  return (
    <section id="sponsor-plan" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionTitle>{dict.sponsor.title}</SectionTitle>

      <p className="text-gray-300 mb-8 max-w-lg">{dict.sponsor.intro}</p>

      <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-lg overflow-hidden mb-8">
        <div className="bg-night-900 p-6">
          <div className="relative aspect-video rounded overflow-hidden bg-night-700 mb-4">
            <Image
              src="/images/sponsor01.png"
              alt={dict.sponsor.fireworksPlan.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-white font-bold mb-1">{dict.sponsor.fireworksPlan.title}</h3>
          <p className="text-2xl font-bold text-white mb-4">
            ¥30,000<span className="text-xs font-normal text-gray-500 ml-1">{dict.sponsor.taxIncluded}</span>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            {dict.sponsor.fireworksPlan.description}
          </p>
        </div>

        <div className="bg-night-900 p-6">
          <div className="relative aspect-video rounded overflow-hidden bg-night-700 mb-4">
            <Image
              src="/images/sponsor-telop.png"
              alt={dict.sponsor.telopPlan.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-white font-bold mb-1">{dict.sponsor.telopPlan.title}</h3>
          <p className="text-2xl font-bold text-white mb-4">
            ¥10,000<span className="text-xs font-normal text-gray-500 ml-1">{dict.sponsor.taxIncluded}</span>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            {dict.sponsor.telopPlan.description}
          </p>
        </div>
      </div>

      <a
        href="#contact"
        className="text-sm text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4"
      >
        {dict.sponsor.cta}
      </a>
    </section>
  );
}
