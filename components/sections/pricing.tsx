import { Button } from "@/components/ui/button";

const FEATURES = [
  "Unlimited subjects",
  "Unlimited images per subject",
  "Printable one-page cheat sheets",
  "Works offline after the first load",
  "Bring your own Gemini API key",
];

export function Pricing() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  return (
    <section id="pricing" className="hairline-b py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="section-label">Pricing</p>
        <h2 className="mt-4 display-tight text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">
          One plan. No tiers.
        </h2>

        <div className="mt-14 hairline bg-surface backdrop-blur-xl p-10 text-left md:p-12">
          <p className="section-label text-center">Open beta</p>
          <p className="mt-6 text-center text-6xl font-semibold tracking-tight text-ink">
            Free
          </p>
          <p className="mt-3 text-center text-sm text-ink-muted">
            Available at no cost during the open beta period.
          </p>

          <ul className="mt-10 flex flex-col hairline-t">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-center justify-between hairline-b py-4 text-sm text-ink"
              >
                <span>{f}</span>
                <span className="text-ink-faint text-xs tabular">Included</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            {appUrl ? (
              <Button asChild size="lg" className="w-full">
                <a href={appUrl} target="_blank" rel="noopener">
                  Open the app ↗
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" variant="secondary" className="w-full">
                <a href="#cta">Join the waitlist</a>
              </Button>
            )}
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-faint">
          Additional features in active development. Waitlist members receive early access.
        </p>
      </div>
    </section>
  );
}
