import Image from "next/image";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    area: "呉",
    title: "戦艦大和の上で花火を見る",
    image: "/images/kure/photo1.jpeg",
  },
  {
    area: "広島",
    title: "路面電車に揺られながら",
    image: "/images/hiroshima/photo3.jpeg",
  },
  {
    area: "鞆の浦",
    title: "フォトグラメトリで再現した街並み",
    image: null,
  },
  {
    area: "あしだ川",
    title: "廃線になった鞆鉄道が走る",
    image: null,
  },
];

export default function ServiceIntro() {
  return (
    <section id="service" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionTitle>バーチャル花火大会とは</SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <p className="text-gray-300 leading-relaxed mb-4">
            clusterのメタバース空間に、地域の風景を再現して花火を打ち上げます。
            PC・スマホ・VRヘッドセットから参加でき、自宅にいながら花火大会を楽しめます。
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            国土交通省の3D都市モデル「PLATEAU」のデータを活用しているため、地形や建物は現地どおりに再現されています。
            市街地まるごと取り込んだ広大なワールドのなかで、風や空間の広がりを感じながら花火を楽しめます。
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            ただの映像配信ではありません。戦艦大和の甲板に立ったり、路面電車に乗ったり、
            その土地ならではの体験を盛り込んでいるのが特徴です。
          </p>
          <p className="text-gray-400 text-sm">
            対応プラットフォーム: cluster（PC / iOS / Android / Meta Quest）
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="/images/tomo/screenshot.jpeg"
            alt="バーチャル花火大会のスクリーンショット"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
