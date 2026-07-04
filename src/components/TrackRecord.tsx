import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { events } from "@/data/events";

export default function TrackRecord() {
  return (
    <section id="track-record" className="py-20 sm:py-28 px-4 sm:px-6 bg-night-800/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle sub="2021年から5つの花火大会を開催。延べ4,075名が参加しました。">
          開催実績
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-5 bg-night-900/60 rounded-lg flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video rounded overflow-hidden bg-night-700 mb-4">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-600 text-xs">
                    写真準備中
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">{event.name}</h3>
                {event.feature && (
                  <p className="text-sm text-gray-400 mb-3">{event.feature}</p>
                )}

                <table className="w-full text-sm">
                  <tbody>
                    {event.editions.map((ed) => (
                      <tr key={ed.date} className="border-b border-white/5 last:border-0">
                        <td className="py-1.5 text-gray-400 pr-4">第{ed.edition}回</td>
                        <td className="py-1.5 text-gray-400 pr-4">{ed.date}</td>
                        <td className="py-1.5 text-white text-right tabular-nums">{ed.participants}名</td>
                        <td className="py-1.5 text-right pl-3 whitespace-nowrap">
                          {ed.eventUrl && (
                            <a href={ed.eventUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gold-400 transition-colors">イベント</a>
                          )}
                          {ed.xSummaryUrl && (
                            <a href={ed.xSummaryUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gold-400 transition-colors ml-2">Xまとめ</a>
                          )}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="pt-2 text-gold-400 font-semibold" colSpan={2}>合計</td>
                      <td className="pt-2 text-gold-400 font-semibold text-right tabular-nums">
                        {event.totalParticipants.toLocaleString()}名
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
