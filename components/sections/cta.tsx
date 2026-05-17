import { GetStartedCTA } from "@/components/get-started-cta";

export function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="section-label">Start now</p>
        <h2 className="mt-4 display-tight text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">
          Ready when your next test is.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink-muted">
          Create an account, add a subject, and start uploading your notes.
        </p>
        <div className="mt-10 flex justify-center">
          <GetStartedCTA />
        </div>
      </div>
    </section>
  );
}
