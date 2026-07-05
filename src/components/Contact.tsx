import SectionTitle from "./SectionTitle";
import { CONTACT_EMAIL } from "@/lib/constants";
import type { Dictionary } from "@/i18n";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-night-800/30">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>{dict.contact.title}</SectionTitle>

        <p className="text-gray-300 mb-6">{dict.contact.description}</p>

        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(dict.contact.emailSubject)}`}
          className="text-lg text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4 break-all"
        >
          {CONTACT_EMAIL}
        </a>

        <p className="text-xs text-gray-500 mt-4">{dict.contact.formPending}</p>
      </div>
    </section>
  );
}
