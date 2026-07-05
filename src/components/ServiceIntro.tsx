import Image from "next/image";
import SectionTitle from "./SectionTitle";
import type { Dictionary } from "@/i18n";

export default function ServiceIntro({ dict }: { dict: Dictionary }) {
  return (
    <section id="service" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionTitle>{dict.service.title}</SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          {dict.service.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-gray-300 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
          <p className="text-gray-400 text-sm">{dict.service.platforms}</p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="/images/tomo/screenshot.jpeg"
            alt={dict.service.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
