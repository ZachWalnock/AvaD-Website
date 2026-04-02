import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg text-white font-semibold">
          Ava D&apos;Alessandro
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink transition-colors"
          >
            TikTok
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink transition-colors"
          >
            LinkedIn
          </Link>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Ava D&apos;Alessandro
        </p>
      </div>
    </footer>
  );
}
