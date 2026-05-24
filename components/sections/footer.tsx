import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://pufferstudy-app.vercel.app";

export function Footer() {
  return (
    <footer className="border-t border-default py-12">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            className="text-[1.2rem] leading-none text-ink no-underline"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Puffer<span className="italic" style={{ color: "var(--accent-deep)" }}>Study</span>
          </Link>
          <p className="text-xs text-ink-faint">Your study workspace. Founded by Xempted.</p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            Open app ↗
          </a>
          <Link href="#how-it-works" className="text-ink-muted transition-colors hover:text-ink">
            How it works
          </Link>
          <Link href="#whats-inside" className="text-ink-muted transition-colors hover:text-ink">
            What&apos;s inside
          </Link>
          <Link href="#faq" className="text-ink-muted transition-colors hover:text-ink">
            FAQ
          </Link>
          <a
            href="https://aistudio.google.com/apikey"
            target="_blank"
            rel="noopener"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            Get a Gemini key ↗
          </a>
        </nav>

        <p className="tabular text-xs text-ink-faint">© 2026 PufferStudy · v2.3</p>
      </div>
    </footer>
  );
}
