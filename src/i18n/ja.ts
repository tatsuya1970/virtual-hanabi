import { events } from "@/data/events";
import { schedule2026 } from "@/data/schedule";
import type { Dictionary } from "./types";

export const ja: Dictionary = {
  locale: "ja",
  meta: {
    title: "バーチャル花火大会 - メタバースで花火大会を開催",
    description:
      "メタバース空間で花火大会を開催。中止となった花火大会の代替案として、低コストで地域イベントを継続できます。全13回・延べ4,075名の開催実績。",
    ogLocale: "ja_JP",
    keywords: [
      "バーチャル花火大会",
      "メタバース 花火大会",
      "cluster 花火",
      "花火大会 中止 代替",
      "広島 花火大会",
      "呉 花火大会",
      "PLATEAU",
      "VR 花火",
    ],
    ogImageAlt: "バーチャル呉花火大会の花火",
  },
  siteName: "バーチャル花火大会",
  nav: [
    { label: "サービス紹介", href: "#service" },
    { label: "開催実績", href: "#track-record" },
    { label: "開催予定", href: "#schedule" },
    { label: "協賛プラン", href: "#sponsor-plan" },
    { label: "開催プラン", href: "#hosting-plan" },
    { label: "運営について", href: "#about-operator" },
    { label: "よくある質問", href: "#faq" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  langSwitch: { label: "English", href: "/en" },
  hero: {
    tagline: "Virtual Fireworks Festival",
    title: "花火大会、バーチャルで。",
    titleMobileBreak: true,
    description: "花火大会を、メタバース空間で。\n2021年から広島県内で5つの大会を開催してきました。",
    stats: {
      events: "回開催",
      participants: "名が参加",
      festivals: "大会",
    },
    cta: "開催・協賛プランを見る",
    videoPoster: "/images/kure/yamato.png",
  },
  service: {
    title: "バーチャル花火大会とは",
    paragraphs: [
      "clusterのメタバース空間に、地域の風景を再現して花火を打ち上げます。PC・スマホ・VRヘッドセットから参加でき、自宅にいながら花火大会を楽しめます。",
      "国土交通省の3D都市モデル「PLATEAU」のデータを活用しているため、地形や建物は現地どおりに再現されています。市街地まるごと取り込んだ広大なワールドのなかで、風や空間の広がりを感じながら花火を楽しめます。",
      "ただの映像配信ではありません。戦艦大和の甲板に立ったり、路面電車に乗ったり、その土地ならではの体験を盛り込んでいるのが特徴です。",
    ],
    platforms: "対応プラットフォーム: cluster（PC / iOS / Android / Meta Quest）",
    imageAlt: "バーチャル花火大会のスクリーンショット",
  },
  trackRecord: {
    title: "開催実績",
    subtitle: "2021年から5つの花火大会を開催。延べ4,075名が参加しました。",
    datasetDescription:
      "2021年から広島県内で開催してきたバーチャル花火大会の開催実績データです。呉・鞆の浦・広島・福山・宮島の5大会について、開催回数、参加者数、開催地などの情報を掲載しています。",
    photoPending: "写真準備中",
    total: "合計",
    eventLink: "イベント",
    xSummaryLink: "Xまとめ",
    videoLink: "動画",
    events,
  },
  schedule: {
    title: "2026年 開催予定",
    finished: "開催済",
    today: "本日開催",
    join: "参加する",
    items: schedule2026,
  },
  sponsor: {
    title: "協賛プラン",
    intro: "花火大会に協賛いただける方を募集しています。個人の方でもお申し込みいただけます。",
    taxIncluded: "税込",
    fireworksPlan: {
      title: "オリジナル花火プラン",
      description:
        "協賛者専用にデザインした花火を、1時間に1回打ち上げます。打ち上げ時に協賛者名も表示されます。",
      imageAlt: "オリジナル花火プランのイメージ",
    },
    telopPlan: {
      title: "テロッププラン",
      description: "お名前を、1時間に1回テロップで表示します。",
      imageAlt: "テロッププランのイメージ",
    },
    cta: "協賛について問い合わせる →",
  },
  hosting: {
    title: "開催をお考えの方へ",
    paragraphs: [
      "花火大会が中止になった自治体や、地域イベントを企画したい企業の方に、バーチャル花火大会の開催をご提案しています。",
      "会場となるメタバース空間の制作から当日の運営までまとめて対応します。AR連携で現地でのハイブリッド開催にも対応できます。",
    ],
    flowTitle: "開催までの流れ",
    flow: "お問い合わせ → ヒアリング → 企画提案 → 制作 → リハーサル → 開催",
    cta: "開催について相談する",
    priceLabel: "開催費用",
    price: "10万円〜",
    priceNote: "規模・内容により変動します",
  },
  about: {
    title: "運営について",
    paragraphs: [
      "バーチャル花火大会は、広島を拠点に活動するクリエイター武村達也（タケムラテックラボ）が運営・主催しています。AI・XR・IoTを活用したメタバース制作やプロトタイプ開発を中心に、地域の花火大会をバーチャル空間で届ける取り組みを行っています。",
      "運営者のプロフィール、サービス内容、講演実績などの詳細は、公式サイトをご覧ください。",
    ],
    websiteLink: "タケムラテックラボ 公式サイト",
  },
  contact: {
    title: "お問い合わせ",
    description:
      "開催のご相談、協賛のお申し込み、取材のご依頼など、下記フォームよりお送りください。通常2〜3営業日以内にご返信いたします。",
    emailSubject: "バーチャル花火大会について",
    formButton: "お問い合わせフォームを開く",
    emailNote: "またはメールでもお問い合わせいただけます",
    formUrl: "https://forms.gle/JnDJbpS93RKKwHhF8",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        question: "バーチャル花火大会とは何ですか？",
        answer:
          "clusterのメタバース空間に地域の風景を再現し、花火を打ち上げるイベントです。PC・スマホ・VRヘッドセットから参加でき、映像配信ではなくその場で歩き回りながら花火を楽しめます。",
      },
      {
        question: "参加方法は？",
        answer:
          "開催予定のページからclusterのイベントURLにアクセスし、clusterアプリ（PC / iOS / Android / Meta Quest）で入場します。アカウント作成後、無料で参加できます。",
      },
      {
        question: "開催費用はいくらですか？",
        answer:
          "自治体・企業向けの開催プランは10万円〜です。会場となるメタバース空間の制作から当日運営まで対応します。規模・内容により費用は変動します。",
      },
      {
        question: "協賛プランはありますか？",
        answer:
          "オリジナル花火プラン（税込3万円）では協賛者専用の花火を1時間に1回打ち上げ、テロッププラン（税込1万円）ではお名前を1時間に1回表示します。個人の方もお申し込みいただけます。",
      },
      {
        question: "どの地域で開催実績がありますか？",
        answer:
          "2021年から広島県内で5つの大会（呉・鞆の浦・広島・福山・宮島）を開催し、全13回・延べ4,075名が参加しました。",
      },
      {
        question: "運営者は誰ですか？",
        answer:
          "広島を拠点に活動する武村達也（タケムラテックラボ）が運営・主催しています。AI・XR・IoTを活用したメタバース制作を専門としています。",
      },
    ],
  },
  footer: {
    operatedBy: "運営",
    privacyPolicy: "プライバシーポリシー",
    legalNotice: "特定商取引法に基づく表記",
    privacyPolicyUrl: "https://www.takemura-techlab.com/privacy.html",
    legalNoticeUrl: "https://www.takemura-techlab.com/tokusho.html",
  },
  organizer: {
    name: "武村達也",
    brand: "タケムラテックラボ",
    websiteUrl: "https://www.takemura-techlab.com/",
  },
};
