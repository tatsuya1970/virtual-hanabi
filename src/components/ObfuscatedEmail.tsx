"use client";

import { useState } from "react";
import { decodeContactEmail } from "@/lib/email";

type ObfuscatedEmailProps = {
  subject: string;
  revealLabel: string;
  className?: string;
};

export default function ObfuscatedEmail({ subject, revealLabel, className }: ObfuscatedEmailProps) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className={className ?? "text-sm text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4"}
      >
        {revealLabel}
      </button>
    );
  }

  const email = decodeContactEmail();

  return (
    <a
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
      className={className ?? "text-sm text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4 break-all"}
    >
      {email}
    </a>
  );
}
