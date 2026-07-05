import SectionTitle from "./SectionTitle";
import type { Dictionary } from "@/i18n";

export default function FAQ({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionTitle>{dict.faq.title}</SectionTitle>

      <dl className="space-y-6">
        {dict.faq.items.map((item) => (
          <div key={item.question} className="border-b border-white/5 pb-6 last:border-0">
            <dt className="text-white font-bold mb-2">{item.question}</dt>
            <dd className="text-gray-400 text-sm leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
