export type ScheduleItem = {
  name: string;
  date: string;
  dateObj: Date;
  status: "finished" | "upcoming";
  clusterUrl: string | null;
  edition?: number;
};

export const schedule2026: ScheduleItem[] = [
  {
    name: "バーチャル鞆の浦弁天島花火大会",
    date: "2026年5月30日(土)",
    dateObj: new Date("2026-05-30"),
    status: "finished",
    clusterUrl: null,
  },
  {
    name: "バーチャル呉花火大会",
    date: "2026年7月18日(土)",
    dateObj: new Date("2026-07-18"),
    status: "finished",
    clusterUrl: null,
    edition: 5,
  },
  {
    name: "バーチャル広島花火大会",
    date: "2026年7月25日(土)",
    dateObj: new Date("2026-07-25"),
    status: "upcoming",
    clusterUrl:
      "https://cluster.mu/e/c95c0ebb-3963-4acd-b853-dcdb9afd5b98",
  },
  {
    name: "バーチャルあしだ川花火大会",
    date: "2026年8月15日(土)",
    dateObj: new Date("2026-08-15"),
    status: "upcoming",
    clusterUrl: null,
  },
];
