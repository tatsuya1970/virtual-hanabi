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

            <h3 className="text-white font-bold mb-3">{dict.hosting.demoTitle}</h3>
            <ul className="flex flex-wrap gap-3 mb-8">
              {dict.hosting.demos.map((demo) => (
                <li key={demo.href}>
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-gold-400/60 text-gold-400 text-sm rounded hover:bg-gold-400/10 transition-colors"
                  >
                    {demo.label} ↗
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-night-900 text-sm font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              {dict.hosting.cta}
            </a>
          </div>

          <div className="flex items-start">
            <div className="bg-night-900/80 border border-white/10 rounded-lg px-8 py-6">
              <dl className="divide-y divide-white/10">
                {dict.hosting.prices.map((price) => (
                  <div key={price.label} className="py-3 first:pt-0 last:pb-0">
                    <dt className="text-xs text-gray-400 mb-1">{price.label}</dt>
                    <dd className="text-2xl sm:text-3xl font-bold text-white">{price.amount}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-gray-500 mt-4">{dict.hosting.priceNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
