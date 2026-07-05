import type { Dictionary } from "@/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} {dict.siteName}</p>
        <p>
          {dict.footer.operatedBy}: {dict.organizer.name} (
          <a
            href={dict.organizer.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors underline underline-offset-2"
          >
            {dict.organizer.brand}
          </a>
          )
        </p>
      </div>
    </footer>
  );
}
