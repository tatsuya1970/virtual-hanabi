"use client";

import { useEffect, useRef, useState } from "react";

import { totalStats } from "@/data/events";

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 sm:pb-28 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/40 to-night-900/10" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm text-gold-400 tracking-widest mb-3">Virtual Fireworks Festival</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
          花火大会、<br className="sm:hidden" />
          バーチャルで。
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
          花火大会を、メタバース空間で。<br />
          2021年から広島県内で5つの大会を開催してきました。
        </p>

        {/* Stats - horizontal, compact */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10 text-sm">
          <div>
            <span className="text-2xl font-bold text-white tabular-nums">
              <CountUp end={totalStats.totalEvents} />
            </span>
            <span className="text-gray-400 ml-1">回開催</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white tabular-nums">
              <CountUp end={totalStats.totalParticipants} />
            </span>
            <span className="text-gray-400 ml-1">名が参加</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white tabular-nums">
              <CountUp end={totalStats.totalFestivals} />
            </span>
            <span className="text-gray-400 ml-1">大会</span>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-white text-night-900 text-sm font-semibold rounded hover:bg-gray-100 transition-colors"
        >
          開催・協賛のご相談
        </a>
      </div>
    </section>
  );
}
