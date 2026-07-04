import { ORGANIZER_BRAND, ORGANIZER_NAME, ORGANIZER_WEBSITE, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} {SITE_NAME}</p>
        <p>
          運営: {ORGANIZER_NAME}（
          <a
            href={ORGANIZER_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors underline underline-offset-2"
          >
            {ORGANIZER_BRAND}
          </a>
          ）
        </p>
      </div>
    </footer>
  );
}
