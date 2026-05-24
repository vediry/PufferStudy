import { Camera, FolderKanban, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; n: string; title: string; body: string };

const STEPS: Step[] = [
  {
    icon: Camera,
    n: "01",
    title: "Capture material",
    body: "Snap homework, notes, and review packets from your phone, or upload PDFs from your computer.",
  },
  {
    icon: FolderKanban,
    n: "02",
    title: "Organize by subject",
    body: "Group files under a subject and add the test date. Your study desk surfaces the soonest test automatically.",
  },
  {
    icon: Sparkles,
    n: "03",
    title: "Generate, chat, study",
    body: "Produce a one-page cheat sheet, ask the AI follow-ups, and run practice questions when test day approaches.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-default py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
        <header className="mb-12 flex flex-col gap-3 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">Process</p>
          <h2
            className="text-balance text-[2rem] leading-tight tracking-tight text-ink sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Three steps from photo to cheat sheet.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, n, title, body }) => (
            <article key={n} className="glow-card border border-default bg-surface p-8">
              <div className="mb-6 flex items-center justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-default"
                  style={{ background: "var(--surface-2)", color: "var(--accent-deep)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <span className="tabular text-[11px] font-bold uppercase tracking-wider text-ink-faint">
                  {n}
                </span>
              </div>
              <h3
                className="text-[1.25rem] leading-tight text-ink"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
