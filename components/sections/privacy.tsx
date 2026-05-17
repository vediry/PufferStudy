import { Check } from "lucide-react";

const GUARANTEES = [
  {
    title: "Private to your account",
    body: "Subjects and uploads are scoped to your account. Only you can see them.",
  },
  {
    title: "Bring-your-own AI key",
    body: "Cheat sheet generation uses your Gemini API key. The key stays in your browser only — we never store it.",
  },
  {
    title: "No tracking",
    body: "No analytics, no third-party scripts, no behavioral data collection.",
  },
  {
    title: "Open source",
    body: "Source code is public on GitHub. Verify any claim made on this page.",
  },
];

export function Privacy() {
  return (
    <section className="hairline-b py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="section-label">Data handling</p>
            <h2 className="mt-4 display-tight text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">
              Your study material is private to your account.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
              Sign in once and your subjects follow you across devices. Files
              and notes are stored securely under your account on Vercel infrastructure.
              Your Gemini API key always stays in your browser — it never touches our servers.
            </p>
          </div>

          <ul className="flex flex-col">
            {GUARANTEES.map(({ title, body }, i) => (
              <li
                key={title}
                className={`flex items-start gap-5 py-5 ${i > 0 ? "hairline-t" : ""}`}
              >
                <span
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center hairline-strong text-ink"
                  aria-hidden="true"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
