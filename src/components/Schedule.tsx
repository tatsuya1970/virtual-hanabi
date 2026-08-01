"use client";

import SectionTitle from "./SectionTitle";
import type { Dictionary } from "@/i18n";
import type { ScheduleItem } from "@/data/schedule";
import { formatDaysLeft, formatEdition } from "@/i18n/format";
import { useDaysLeft } from "@/hooks/useDaysLeft";

function ScheduleRow({ item, dict }: { item: ScheduleItem; dict: Dictionary }) {
  const daysLeft = useDaysLeft(item.dateObj);
  // データ更新が漏れても、開催日を過ぎたものは自動的に「終了」扱いにする。
  const finished = item.status === "finished" || (daysLeft !== null && daysLeft < 0);

  return (
    <tr className="border-b border-white/5">
      <td className="py-4 pr-4">
        <p className={`font-bold ${finished ? "text-gray-500" : "text-white"}`}>
          {item.name}
          {item.edition && (
            <span className="text-gray-400 text-sm font-normal ml-2">
              {formatEdition(dict.locale, item.edition)}
            </span>
          )}
        </p>
        <p className="text-sm text-gray-400">{item.date}</p>
      </td>
      <td className="py-4 text-right whitespace-nowrap">
        {finished ? (
          <span className="text-gray-500 text-sm">{dict.schedule.finished}</span>
        ) : (
          <div className="flex items-center justify-end gap-4">
            {daysLeft === 0 ? (
              <span className="text-fire-400 text-sm font-bold">{dict.schedule.today}</span>
            ) : daysLeft !== null ? (
              <span className="text-gray-400 text-sm">{formatDaysLeft(dict.locale, daysLeft)}</span>
            ) : null}
            {item.clusterUrl && (
              <a
                href={item.clusterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 border border-gold-400 text-gold-400 text-sm rounded hover:bg-gold-400 hover:text-night-900 transition-colors"
              >
                {dict.schedule.join}
              </a>
            )}
          </div>
        )}
      </td>
    </tr>
  );
}

export default function Schedule({ dict }: { dict: Dictionary }) {
  return (
    <section id="schedule" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionTitle>{dict.schedule.title}</SectionTitle>

      <table className="w-full">
        <tbody>
          {dict.schedule.items.map((item) => (
            <ScheduleRow key={item.name} item={item} dict={dict} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
