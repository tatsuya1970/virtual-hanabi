import SectionTitle from "./SectionTitle";
import ObfuscatedEmail from "./ObfuscatedEmail";
import type { Dictionary } from "@/i18n";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-night-800/30">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>{dict.contact.title}</SectionTitle>

        <p className="text-gray-300 mb-8">{dict.contact.description}</p>

        <a
          href={dict.contact.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-night-900 text-sm font-semibold rounded hover:bg-gray-100 transition-colors"
        >
          {dict.contact.formButton}
        </a>

        <p className="text-xs text-gray-500 mt-6 mb-2">{dict.contact.emailNote}</p>
        <ObfuscatedEmail subject={dict.contact.emailSubject} revealLabel={dict.contact.emailReveal} />
      </div>
    </section>
  );
}
