import SectionTitle from "./SectionTitle";

export default function HostingPlan() {
  return (
    <section id="hosting-plan" className="py-20 sm:py-28 px-4 sm:px-6 bg-night-800/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>開催をお考えの方へ</SectionTitle>

        <div className="grid md:grid-cols-[1fr_auto] gap-12">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              花火大会が中止になった自治体や、地域イベントを企画したい企業の方に、
              バーチャル花火大会の開催をご提案しています。
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              会場となるメタバース空間の制作から当日の運営までまとめて対応します。
              AR連携で現地でのハイブリッド開催にも対応できます。
            </p>

            <h3 className="text-white font-bold mb-3">開催までの流れ</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              お問い合わせ → ヒアリング → 企画提案 → 制作 → リハーサル → 開催
            </p>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-night-900 text-sm font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              開催について相談する
            </a>
          </div>

          <div className="flex items-start">
            <div className="bg-night-900/80 border border-white/10 rounded-lg px-8 py-6 text-center">
              <p className="text-xs text-gray-400 mb-1">開催費用</p>
              <p className="text-3xl font-bold text-white">
                10<span className="text-lg font-normal text-gray-400">万円〜</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">規模・内容により変動します</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
