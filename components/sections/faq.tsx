import { Plus, Minus } from "lucide-react";

const FAQ = [
  {
    q: "What does PufferStudy do?",
    a: "It turns photos of your study material into a single printable cheat sheet ahead of a test. You upload images of notes, homework, or packets, group them by subject, and generate the sheet on demand.",
  },
  {
    q: "Where is my data stored?",
    a: "Locally in your browser. Images live in IndexedDB; subject metadata lives in localStorage. Clearing browser data will erase your subjects, so treat the app as a workspace and keep your originals.",
  },
  {
    q: "Do I need an account?",
    a: "No. You provide a Gemini API key, which is stored in your browser only. The free tier from Google covers most study sessions and requires no payment information.",
  },
  {
    q: "How much does it cost?",
    a: "PufferStudy is free during the open beta. Any AI usage costs are billed to your own Gemini account by Google — typically zero at the free tier.",
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
    <section id="faq" className="hairline-b py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="section-label">Questions</p>
        <h2 className="mt-4 display-tight text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">
          Common questions.
        </h2>

        <div className="mt-14 hairline-t">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group hairline-b py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="text-base font-medium text-ink">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-ink-muted transition-colors group-hover:text-ink"
                >
                  <Plus className="h-4 w-4 group-open:hidden" strokeWidth={1.75} />
                  <Minus className="hidden h-4 w-4 group-open:block" strokeWidth={1.75} />
                </span>
              </summary>
              <div className="mt-4 pl-4 hairline-l">
                <p className="text-sm leading-relaxed text-ink-muted">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
