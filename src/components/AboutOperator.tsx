import SectionTitle from "./SectionTitle";
import type { Dictionary } from "@/i18n";

export default function AboutOperator({ dict }: { dict: Dictionary }) {
  return (
    <section id="about-operator" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionTitle>{dict.about.title}</SectionTitle>

      {dict.about.paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 24)}
          className={`leading-relaxed mb-4 ${paragraph === dict.about.paragraphs.at(-1) ? "text-gray-400 text-sm mb-8" : "text-gray-300"}`}
        >
          {paragraph}
        </p>
      ))}

      <a
        href={dict.organizer.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4"
      >
        {dict.about.websiteLink}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M10.5 13.5L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </section>
  );
}
