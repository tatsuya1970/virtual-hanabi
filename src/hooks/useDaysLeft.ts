"use client";

import { useEffect, useState } from "react";

// 開催日は日付単位で管理しているため、時刻を無視した「日数差」で比較する。
// 当日は 0、過去は負の値になる。
export function daysUntil(targetDate: Date) {
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const target = Date.UTC(
    targetDate.getUTCFullYear(),
    targetDate.getUTCMonth(),
    targetDate.getUTCDate()
  );
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
}

// SSR 時は日付が確定しないため null を返し、マウント後に計算する。
export function useDaysLeft(targetDate: Date) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const calc = () => setDays(daysUntil(targetDate));
    calc();
    const interval = setInterval(calc, 60000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return days;
}
