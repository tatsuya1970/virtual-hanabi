export type EventEdition = {
  edition: number;
  date: string;
  participants: number;
  eventUrl?: string;
  xSummaryUrl?: string;
  videoUrl?: string;
};

export type HanabiEvent = {
  id: string;
  name: string;
  shortName: string;
  totalEditions: number;
  totalParticipants: number;
  feature: string;
  image: string | null;
  editions: EventEdition[];
};

export const events: HanabiEvent[] = [
  {
    id: "kure",
    name: "バーチャル呉花火大会",
    shortName: "呉",
    totalEditions: 5,
    totalParticipants: 2454,
    feature: "戦艦大和に乗れる / バスに乗りながら花火鑑賞",
    image: "/images/kure/yamato.png",
    editions: [
      { edition: 1, date: "2021/9/25", participants: 252, eventUrl: "https://cluster.mu/e/a52cf835-e60c-4ca8-928c-b3444972b2f6", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/p2eF9xw", videoUrl: "https://youtu.be/kDQTaRffiH0" },
      { edition: 2, date: "2022/7/30", participants: 851, eventUrl: "https://cluster.mu/e/a4b5f146-b542-4237-a501-a615ecd38025", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/3VvkDcL", videoUrl: "https://youtu.be/WrpR720lyg0" },
      { edition: 3, date: "2024/7/20", participants: 896, eventUrl: "https://cluster.mu/e/46f57acb-576d-47d5-85de-c1645e0d1f58", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/exNi0P0", videoUrl: "https://youtu.be/T6LHRukMplk" },
      { edition: 4, date: "2025/7/19", participants: 325, eventUrl: "https://cluster.mu/e/548eacf0-952d-4cac-a27f-45a9e38ecf7b", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/q58yTlC" },
      { edition: 5, date: "2026/7/18", participants: 130, eventUrl: "https://cluster.mu/e/2e625054-4fcc-4064-8a3c-b9250aee9e84" },
    ],
  },
  {
    id: "tomo",
    name: "バーチャル鞆の浦弁天島花火大会",
    shortName: "鞆の浦",
    totalEditions: 4,
    totalParticipants: 645,
    feature: "鞆の街並みのフォトグラメトリ",
    image: "/images/tomo/HJj1g8sacAAzS_W.jpeg",
    editions: [
      { edition: 1, date: "2023/6/3", participants: 124, eventUrl: "https://cluster.mu/e/a192a257-6c6e-4b0e-bb9e-9c9783aa2cc2" },
      { edition: 2, date: "2024/5/25", participants: 154, eventUrl: "https://cluster.mu/e/36bf687c-75b5-4c0d-9dc8-2b79f0f148fe", videoUrl: "https://youtu.be/5V1ba2f0Hik" },
      { edition: 3, date: "2025/5/31", participants: 264, eventUrl: "https://cluster.mu/e/54fce28e-eae1-4b47-a849-29d2c728ba8c" },
      { edition: 4, date: "2026/5/30", participants: 103, eventUrl: "https://cluster.mu/e/0fff8f02-d321-4fdf-8d30-1cd47528287f", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/7BqGXk4", videoUrl: "https://youtu.be/hrxnDSvBa8A" },
    ],
  },
  {
    id: "hiroshima",
    name: "バーチャル広島花火大会",
    shortName: "広島",
    totalEditions: 2,
    totalParticipants: 650,
    feature: "路面電車に乗れる",
    image: "/images/hiroshima/photo1.jpeg",
    editions: [
      { edition: 1, date: "2024/7/27", participants: 461, eventUrl: "https://cluster.mu/e/ee4c856c-ef29-4aba-8230-99fbadc31612", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/Faw9KQR", videoUrl: "https://youtu.be/U3NdPXEOIQ8" },
      { edition: 2, date: "2025/7/26", participants: 189, eventUrl: "https://cluster.mu/e/745af647-3597-4ce0-b024-62bc04e48bf0", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/Q1JgVJJ" },
    ],
  },
  {
    id: "ashida",
    name: "バーチャルあしだ川花火大会",
    shortName: "あしだ川",
    totalEditions: 2,
    totalParticipants: 388,
    feature: "廃線となった鞆鉄道に乗れる",
    image: "/images/ashida/GVBncjpboAAS0y1.jpeg",
    editions: [
      { edition: 1, date: "2024/8/15", participants: 199, eventUrl: "https://cluster.mu/e/1c609b06-9488-4b9e-ab9f-add598740ed8", xSummaryUrl: "https://posfie.com/@tatsuya1970/p/W6XifTD", videoUrl: "https://youtu.be/rBgzP7VFL6Q" },
      { edition: 2, date: "2025/8/15", participants: 189, eventUrl: "https://cluster.mu/e/2e6d946c-30e3-4718-a82b-0939097a1884" },
    ],
  },
  {
    id: "miyajima",
    name: "バーチャル宮島花火大会",
    shortName: "宮島",
    totalEditions: 1,
    totalParticipants: 68,
    feature: "",
    image: "/images/miyajima/frame_000247.png",
    editions: [{ edition: 1, date: "2024/9/28", participants: 68, eventUrl: "https://cluster.mu/e/e0c21ce4-d991-429f-9e92-58143f4be953", videoUrl: "https://youtu.be/7UfubbRDZsc" }],
  },
];

export const totalStats = {
  totalEvents: 14,
  totalParticipants: 4205,
  totalFestivals: 5,
  years: 5,
};
