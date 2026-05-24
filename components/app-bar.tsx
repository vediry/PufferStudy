"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemePicker } from "@/components/theme-picker";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://pufferstudy.vercel.app";

export function AppBar() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-default bg-[color:var(--surface)]/85 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/70">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2 text-ink no-underline">
          <span
            className="text-[1.4rem] leading-none"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Puffer<span className="italic" style={{ color: "var(--accent-deep)" }}>Study</span>
          </span>
        </Link>
        <nav className="flex items-center gap-3">
          <ThemePicker />
          <Link
            href={APP_URL}
            className="glow-on-hover inline-flex items-center gap-1.5 rounded-[10px] border border-default bg-surface-2 px-3 py-1.5 text-sm font-semibold text-ink-muted hover:text-ink"
          >
            Open app
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
