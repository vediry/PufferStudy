import Link from "next/link";
import { PufferLogo } from "@/components/puffer-logo";

export function Footer() {
  return (
    <footer className="bg-surface-2/40 py-12 sm:py-16">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-6 px-4 text-center sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-ink">
          <PufferLogo className="h-7 w-7 text-[var(--primary)]" />
          <span className="text-[1.05rem] tracking-tight">PufferStudy</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-[14px] text-ink-muted">
          <p className="tabular">PufferStudy v1.0 — Released May 7, 2026</p>
          <p>Founded by Xempted</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-ink-faint">
          <Link href="#how-it-works" className="hover:text-ink">How it works</Link>
          <span aria-hidden="true">·</span>
          <Link href="#faq" className="hover:text-ink">FAQ</Link>
          <span aria-hidden="true">·</span>
          <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener" className="hover:text-ink">
            Get a Gemini key
          </a>
        </div>
        <p className="max-w-[560px] text-[12px] leading-[1.5] text-ink-faint">
          PufferStudy is a study aid, not a replacement for doing the work. Your notes live in
          your browser; clearing browser data clears your subjects. Nothing on this page is
          academic advice.
        </p>
      </div>
    </footer>
  );
}
