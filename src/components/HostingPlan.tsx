import SectionTitle from "./SectionTitle";
import type { Dictionary } from "@/i18n";

export default function HostingPlan({ dict }: { dict: Dictionary }) {
  return (
    <section id="hosting-plan" className="py-20 sm:py-28 px-4 sm:px-6 bg-night-800/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{dict.hosting.title}</SectionTitle>

        <div className="grid md:grid-cols-[1fr_auto] gap-12">
          <div>
            {dict.hosting.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}

            <h3 className="text-white font-bold mb-3">{dict.hosting.flowTitle}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{dict.hosting.flow}</p>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-night-900 text-sm font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              {dict.hosting.cta}
            </a>
          </div>

          <div className="flex items-start">
            <div className="bg-night-900/80 border border-white/10 rounded-lg px-8 py-6 text-center">
              <p className="text-xs text-gray-400 mb-1">{dict.hosting.priceLabel}</p>
              <p className="text-3xl font-bold text-white">{dict.hosting.price}</p>
              <p className="text-xs text-gray-500 mt-2">{dict.hosting.priceNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
