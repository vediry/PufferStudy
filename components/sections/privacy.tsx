import { Lock, KeyRound, EyeOff } from "lucide-react";

const PILLARS = [
  {
    icon: Lock,
    title: "Your photos stay in your browser.",
    body: "Notes are stored in IndexedDB on your device — never uploaded to our servers, never accessible to anyone but you.",
  },
  {
    icon: KeyRound,
    title: "Bring your own AI key.",
    body: "Get a free Google Gemini key in 30 seconds. PufferStudy holds it in your browser only. We never log it or save it.",
  },
  {
    icon: EyeOff,
    title: "No accounts. No tracking.",
    body: "Nothing to sign up for. No analytics on your study sessions. Nothing to leak. Close the tab and we have nothing on you.",
  },
];

export function Privacy() {
  return (
    <section className="border-b border-default bg-surface-2/40 py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-8">
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
            Privacy by design
          </span>
          <h2 className="max-w-[760px] text-[2rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
            Built for school networks. Built for your peace of mind.
          </h2>
          <p className="max-w-[640px] text-[15px] text-ink-muted sm:text-base">
            PufferStudy is non-custodial. We never see your notes, your photos, or what
            you&apos;re studying. Three rules we&apos;ll never break:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-default bg-surface p-7"
            >
              <Icon className="h-6 w-6 text-[var(--primary)]" strokeWidth={1.75} />
              <h3 className="text-[1.05rem] font-semibold leading-tight tracking-tight text-ink">
                {title}
              </h3>
              <p className="text-[14px] leading-[1.55] text-ink-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
