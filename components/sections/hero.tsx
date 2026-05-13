import { WaitlistForm } from "@/components/waitlist-form";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-default">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-10 px-4 pb-20 pt-16 text-center sm:px-8 sm:pb-28 sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-default bg-surface px-3 py-1.5 text-[12px] font-medium text-ink-muted shadow-soft">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" />
          v1.0 · Free during beta
        </span>

        <h1 className="max-w-[820px] text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[3.25rem] md:text-[3.75rem]">
          Your notes.{" "}
          <span className="gradient-text">One cheat sheet.</span>{" "}
          Test ready.
        </h1>

        <p className="max-w-[640px] text-[17px] leading-[1.55] text-ink-muted sm:text-[19px]">
          PufferStudy reads photos of your homework, notes, and packets — then writes the
          cheat sheet for you. No accounts. No servers storing your work. Just you, your
          notes, and a sharper way to study.
        </p>

        <div className="w-full max-w-[520px]">
          <WaitlistForm size="xl" />
        </div>

        <HeroPaperPreview />
      </div>
    </section>
  );
}

function HeroPaperPreview() {
  return (
    <div className="relative mt-4 w-full max-w-[860px]" aria-hidden="true">
      <div className="pointer-events-none absolute inset-x-12 -top-8 h-32 rounded-full bg-[var(--primary)]/12 blur-3xl" />
      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="origin-bottom-right rotate-[-2deg] rounded-[var(--radius-lg)] border border-default bg-surface p-5 text-left shadow-card sm:p-6">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
            Notebook page · 1
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-surface-3" />
            <div className="h-1.5 w-5/6 rounded-full bg-surface-3" />
            <div className="h-1.5 w-2/3 rounded-full bg-surface-3" />
            <div className="h-1.5 w-4/5 rounded-full bg-surface-3" />
            <div className="h-1.5 w-3/4 rounded-full bg-surface-3" />
            <div className="h-1.5 w-3/5 rounded-full bg-surface-3" />
          </div>
        </div>
        <div className="my-2 flex justify-center text-[var(--primary)] sm:my-0">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <circle cx="22" cy="22" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
            <path d="M16 18 L22 12 L28 18 M22 12 L22 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 22 22)" />
          </svg>
        </div>
        <div className="origin-bottom-left rotate-[2deg] rounded-[var(--radius-lg)] border border-default bg-surface p-5 text-left shadow-card sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
              Cheat sheet · biology Ch. 8
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] tabular text-[var(--warning)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--warning)]" />
              5 days
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="h-2 w-3/4 rounded-full bg-ink/85" />
            <div className="space-y-1">
              <div className="h-1.5 w-full rounded-full bg-surface-3" />
              <div className="h-1.5 w-11/12 rounded-full bg-surface-3" />
            </div>
            <div className="h-2 w-1/2 rounded-full bg-ink/85" />
            <div className="space-y-1">
              <div className="h-1.5 w-full rounded-full bg-surface-3" />
              <div className="h-1.5 w-5/6 rounded-full bg-surface-3" />
              <div className="h-1.5 w-3/4 rounded-full bg-surface-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
