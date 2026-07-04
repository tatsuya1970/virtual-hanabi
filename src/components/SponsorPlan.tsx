import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function SponsorPlan() {
  return (
    <section id="sponsor-plan" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionTitle>協賛プラン</SectionTitle>

      <p className="text-gray-300 mb-8 max-w-lg">
        花火大会に協賛いただける方を募集しています。
        個人の方でもお申し込みいただけます。
      </p>

      <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-lg overflow-hidden mb-8">
        {/* Plan 1 */}
        <div className="bg-night-900 p-6">
          <div className="relative aspect-video rounded overflow-hidden bg-night-700 mb-4">
            <Image
              src="/images/sponsor01.png"
              alt="オリジナル花火プランのイメージ"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-white font-bold mb-1">オリジナル花火プラン</h3>
          <p className="text-2xl font-bold text-white mb-4">
            ¥30,000<span className="text-xs font-normal text-gray-500 ml-1">税込</span>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            協賛者専用にデザインした花火を、1時間に1回打ち上げます。
            打ち上げ時に協賛者名も表示されます。
          </p>
        </div>

        {/* Plan 2 */}
        <div className="bg-night-900 p-6">
          <div className="relative aspect-video rounded overflow-hidden bg-night-700 mb-4">
            <Image
              src="/images/sponsor-telop.png"
              alt="テロッププランのイメージ"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-white font-bold mb-1">テロッププラン</h3>
          <p className="text-2xl font-bold text-white mb-4">
            ¥10,000<span className="text-xs font-normal text-gray-500 ml-1">税込</span>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            お名前を、1時間に1回テロップで表示します。
          </p>
        </div>
      </div>

      <a
        href="#contact"
        className="text-sm text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4"
      >
        協賛について問い合わせる →
      </a>
    </section>
  );
}
