import { Sparkle, Lock } from "lucide-react";

export function Pricing() {
  return (
    <section className="border-b border-default py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
            Pricing
          </span>
          <h2 className="max-w-[680px] text-[2rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
            Free during beta. Free forever for the core flow.
          </h2>
        </div>
        <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-5 md:grid-cols-2">
          <article className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-default bg-surface p-8 shadow-soft">
            <div className="flex items-center gap-2 text-[var(--primary)]">
              <Sparkle className="h-5 w-5" strokeWidth={1.75} />
              <span className="text-sm font-medium uppercase tracking-wider">v1.0 · Today</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[2.5rem] font-bold tracking-tight text-ink">$0</span>
              <span className="text-sm text-ink-muted">/ forever during beta</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-[15px] text-ink-muted">
              <Bullet>Unlimited subjects, unlimited photos</Bullet>
              <Bullet>Cheat sheet generation from your notes</Bullet>
              <Bullet>Print or save as PDF, with the print stylesheet tuned</Bullet>
              <Bullet>Light + dark mode</Bullet>
              <Bullet>Your own Gemini API key (free from Google)</Bullet>
            </ul>
          </article>
          <article className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-default border-dashed bg-surface-2/60 p-8">
            <div className="flex items-center gap-2 text-ink-faint">
              <Lock className="h-5 w-5" strokeWidth={1.75} />
              <span className="text-sm font-medium uppercase tracking-wider">Coming later</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[2.5rem] font-bold tracking-tight text-ink-muted">$—</span>
              <span className="text-sm text-ink-faint">/ on PufferStudy&apos;s own AI</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-[15px] text-ink-muted">
              <Bullet dim>Skip the API key — we cover the AI cost</Bullet>
              <Bullet dim>Homework chat scoped to your notes</Bullet>
              <Bullet dim>Auto-generated practice quizzes</Bullet>
              <Bullet dim>Share a cheat sheet via link</Bullet>
              <Bullet dim>Cross-device sync</Bullet>
            </ul>
            <p className="mt-2 text-[13px] text-ink-faint">
              Waitlist members get the first invites and early-bird pricing.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children, dim }: { children: React.ReactNode; dim?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className={
          dim
            ? "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint"
            : "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
        }
      />
      <span>{children}</span>
    </li>
  );
}
