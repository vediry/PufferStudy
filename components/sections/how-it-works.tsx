import { BookPlus, Camera, Sparkles } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: BookPlus,
    title: "Add a subject.",
    body: "Name your class, set a test date. PufferStudy shows you the countdown so you always know how many days you have.",
  },
  {
    n: "02",
    icon: Camera,
    title: "Snap your notes.",
    body: "Phone camera, scanner, or screenshots. Multiple photos at once is fine. PufferStudy resizes them locally so they fit in one request.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Generate.",
    body: "PufferStudy reads every photo, organizes the content by topic, and writes a one-page cheat sheet you can print or save as PDF.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-default py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
            How it works
          </span>
          <h2 className="max-w-[700px] text-[2rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
            Three steps. About a minute of your time.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map(({ n, icon: Icon, title, body }) => (
            <article
              key={n}
              className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-default bg-surface p-7 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-[var(--primary)]/12 text-[var(--primary)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <span className="tabular text-sm font-medium text-ink-faint">{n}</span>
              </div>
              <h3 className="text-[1.25rem] font-semibold leading-tight tracking-tight text-ink">
                {title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
