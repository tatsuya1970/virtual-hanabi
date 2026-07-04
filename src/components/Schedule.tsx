"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { schedule2026 } from "@/data/schedule";

function Countdown({ targetDate }: { targetDate: Date }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    };
    calc();
    const interval = setInterval(calc, 60000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (days === null) return null;
  if (days === 0) return <span className="text-fire-400 text-sm font-bold">本日開催</span>;
  return <span className="text-gray-400 text-sm">あと{days}日</span>;
}

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionTitle>2026年 開催予定</SectionTitle>

      <table className="w-full">
        <tbody>
          {schedule2026.map((item) => (
            <tr key={item.name} className="border-b border-white/5">
              <td className="py-4 pr-4">
                <p className={`font-bold ${item.status === "finished" ? "text-gray-500" : "text-white"}`}>
                  {item.name}
                  {item.edition && <span className="text-gray-400 text-sm font-normal ml-2">第{item.edition}回</span>}
                </p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </td>
              <td className="py-4 text-right whitespace-nowrap">
                {item.status === "finished" ? (
                  <span className="text-gray-500 text-sm">開催済</span>
                ) : (
                  <div className="flex items-center justify-end gap-4">
                    <Countdown targetDate={item.dateObj} />
                    {item.clusterUrl && (
                      <a
                        href={item.clusterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 border border-gold-400 text-gold-400 text-sm rounded hover:bg-gold-400 hover:text-night-900 transition-colors"
                      >
                        参加する
                      </a>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
