import Link from "next/link";
import { PufferLogo } from "@/components/puffer-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://pufferstudy.vercel.app";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 hairline-b bg-canvas/80 backdrop-blur-xl supports-[backdrop-filter]:bg-canvas/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-ink">
          <PufferLogo className="h-6 w-6 text-[var(--primary)]" />
          <span className="text-[15px] font-semibold tracking-tight">PufferStudy</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            href="#how-it-works"
            className="hidden h-11 items-center rounded-none px-3 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink sm:inline-flex"
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            className="hidden h-11 items-center rounded-none px-3 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink sm:inline-flex"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="hidden h-11 items-center rounded-none px-3 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink sm:inline-flex"
          >
            FAQ
          </Link>
          <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
            <a href={`${APP_URL}/sign-in`}>Sign in</a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={`${APP_URL}/sign-up`}>Get started</a>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
