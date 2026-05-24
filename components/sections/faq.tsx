import { Plus, Minus } from "lucide-react";

const FAQ = [
  {
    q: "What does PufferStudy do?",
    a: "It turns photos and PDFs of your study material into a single printable cheat sheet ahead of a test, plus a per-subject workspace with chat, notes, and (coming soon) practice questions.",
  },
  {
    q: "Where is my data stored?",
    a: "In your PufferStudy account, securely. Your subjects and uploaded files sync to the cloud so they follow you across devices. The only thing that stays browser-local is your Gemini API key.",
  },
  {
    q: "Do I need an account?",
    a: "Yes. Sign up with email or Google (it takes 10 seconds) so your subjects can sync across phone, laptop, and school computer. You'll also need a free Google Gemini API key for AI generation.",
  },
  {
    q: "How much does it cost?",
    a: "PufferStudy is free during the open beta. AI usage is billed to your own Gemini account by Google — typically zero at the free tier. Storage of your subjects and files is included.",
  },
  {
    q: "Does it work on a school Chromebook?",
    a: "Yes. AI traffic is routed through pufferstudy.vercel.app rather than directly to googleapis.com, so network filters that block AI tools generally still permit PufferStudy.",
  },
  {
    q: "Who built this?",
    a: "PufferStudy was founded by Xempted. The source code for both the app and this landing page is public on GitHub.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-default py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <header className="mb-10 flex flex-col gap-3 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">Questions</p>
          <h2
            className="text-balance text-[2rem] leading-tight tracking-tight text-ink sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Common questions.
          </h2>
        </header>

        <div className="glow-card border border-default bg-surface">
          {FAQ.map((item, i) => (
            <details
              key={item.q}
              className={`group [&_summary::-webkit-details-marker]:hidden ${
                i < FAQ.length - 1 ? "border-b border-default" : ""
              }`}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 hover:bg-surface-2/40">
                <span className="text-base font-semibold text-ink">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-default text-ink-muted transition-colors group-open:border-[color:var(--accent)] group-open:text-[color:var(--accent)]"
                >
                  <Plus className="h-3.5 w-3.5 group-open:hidden" strokeWidth={2} />
                  <Minus className="hidden h-3.5 w-3.5 group-open:block" strokeWidth={2} />
                </span>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-sm leading-relaxed text-ink-muted">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
