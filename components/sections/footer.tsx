import Link from "next/link";
import { PufferLogo } from "@/components/puffer-logo";

export function Footer() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  return (
    <footer className="hairline-t py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2.5 text-ink">
            <PufferLogo className="h-6 w-6 text-[var(--primary)]" />
            <span className="text-[15px] font-semibold tracking-tight">PufferStudy</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            A study aid that turns photos of your notes into a printable cheat sheet.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="section-label">Product</p>
            <ul className="mt-4 flex flex-col gap-3">
              {appUrl ? (
                <li>
                  <a
                    href={appUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-ink-muted transition-colors hover:text-ink"
                  >
                    Open app ↗
                  </a>
                </li>
              ) : null}
              <li>
                <Link href="#how-it-works" className="text-ink-muted transition-colors hover:text-ink">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-ink-muted transition-colors hover:text-ink">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="section-label">Info</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="#faq" className="text-ink-muted transition-colors hover:text-ink">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noopener"
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  Get a Gemini key ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-xs text-ink-faint md:text-right">
          <p>Founded by Xempted</p>
          <p className="tabular">v1.0 — Released May 7, 2026</p>
          <p>© 2026 PufferStudy</p>
        </div>
      </div>
    </footer>
  );
}
