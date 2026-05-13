import Link from "next/link";
import { PufferLogo } from "@/components/puffer-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Nav() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  return (
    <header className="sticky top-0 z-40 border-b border-default bg-canvas/85 backdrop-blur supports-[backdrop-filter]:bg-canvas/70">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5 font-semibold text-ink">
          <PufferLogo className="h-7 w-7 text-[var(--primary)] transition-transform group-hover:rotate-[-6deg]" />
          <span className="text-[1.05rem] tracking-tight">PufferStudy</span>
          <span className="ml-1.5 rounded-full bg-[var(--primary)]/12 px-2 py-0.5 text-[11px] font-medium text-[var(--primary)]">
            v1.0
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="#how-it-works"
            className="hidden rounded-[var(--radius)] px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink sm:inline-block"
          >
            How it works
          </Link>
          <Link
            href="#faq"
            className="hidden rounded-[var(--radius)] px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink sm:inline-block"
          >
            FAQ
          </Link>
          {appUrl ? (
            <Button asChild size="sm" variant="secondary" className="hidden sm:inline-flex">
              <a href={appUrl} target="_blank" rel="noopener">Open app</a>
            </Button>
          ) : null}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
