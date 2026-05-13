const STEPS = [
  {
    n: "01",
    title: "Capture material",
    body: "Take photos of homework, class notes, and review packets. Upload directly from your phone or computer.",
  },
  {
    n: "02",
    title: "Organize by subject",
    body: "Group images under a subject and add the test date. PufferStudy keeps everything ordered by relevance and recency.",
  },
  {
    n: "03",
    title: "Generate a cheat sheet",
    body: "Produce a printable one-page summary using your own Gemini API key. No data leaves your browser until you choose to print.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="hairline-b py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <p className="section-label">Process</p>
            <h2 className="mt-4 display-tight text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">
              Three steps from photo to cheat sheet.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px hairline bg-[var(--border)] md:grid-cols-3">
          {STEPS.map(({ n, title, body }) => (
            <article key={n} className="bg-surface backdrop-blur-xl p-10">
              <span className="tabular block text-5xl font-light text-ink-faint">{n}</span>
              <h3 className="mt-10 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
