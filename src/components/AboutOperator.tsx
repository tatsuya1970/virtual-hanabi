import SectionTitle from "./SectionTitle";
import {
  ORGANIZER_BRAND,
  ORGANIZER_NAME,
  ORGANIZER_WEBSITE,
} from "@/lib/constants";

export default function AboutOperator() {
  return (
    <section id="about-operator" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionTitle>運営について</SectionTitle>

      <p className="text-gray-300 leading-relaxed mb-4">
        バーチャル花火大会は、広島を拠点に活動するクリエイター{ORGANIZER_NAME}（{ORGANIZER_BRAND}）が運営・主催しています。
        AI・XR・IoTを活用したメタバース制作やプロトタイプ開発を中心に、地域の花火大会をバーチャル空間で届ける取り組みを行っています。
      </p>

      <p className="text-gray-400 text-sm leading-relaxed mb-8">
        運営者のプロフィール、サービス内容、講演実績などの詳細は、公式サイトをご覧ください。
      </p>

      <a
        href={ORGANIZER_WEBSITE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4"
      >
        {ORGANIZER_BRAND} 公式サイト
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
