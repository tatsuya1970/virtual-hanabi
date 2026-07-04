import SectionTitle from "./SectionTitle";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-night-800/30">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>お問い合わせ</SectionTitle>

        <p className="text-gray-300 mb-6">
          開催のご相談、協賛のお申し込み、取材のご依頼など、
          下記メールアドレスまでお気軽にご連絡ください。
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}?subject=バーチャル花火大会について`}
          className="text-lg text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4 break-all"
        >
          {CONTACT_EMAIL}
        </a>

        <p className="text-xs text-gray-500 mt-4">
          お問い合わせフォームは準備中です。
        </p>
      </div>
    </section>
  );
}
