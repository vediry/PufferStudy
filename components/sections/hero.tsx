import { GetStartedCTA } from "@/components/get-started-cta";

export function Hero() {
  return (
    <section className="relative hairline-b">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:gap-20 md:py-32 lg:py-40">
        <div className="flex flex-col justify-center">
          <p className="section-label">v1.0 · May 2026</p>
          <h1 className="mt-6 display-tight text-[clamp(2.25rem,6vw,4rem)] font-semibold text-ink">
            Turn your notes into a printable cheat sheet.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            Capture homework, notes, and packets. PufferStudy organizes the material into a
            single-page cheat sheet — without storing your data on any server.
          </p>
          <div className="mt-10">
            <GetStartedCTA />
          </div>
          <p className="mt-6 max-w-md text-xs text-ink-faint">
            Free during the open beta. Bring your own AI key — your notes stay in your browser.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <HeroFigure />
          <p className="section-label mt-4 text-center">Fig. 01 — Generated cheat sheet</p>
        </div>
      </div>
    </section>
  );
}

function HeroFigure() {
  return (
    <div className="hairline bg-surface backdrop-blur-xl shadow-soft p-8 flex flex-col gap-5 aspect-[4/5] max-w-md mx-auto w-full" aria-hidden="true">
      <div className="flex items-baseline justify-between hairline-b pb-3">
        <span className="text-[11px] tracking-widest uppercase text-ink-faint">
          Biology — Ch. 8
        </span>
        <span className="tabular text-[11px] text-ink-muted">May 14</span>
      </div>

      <FigureSection title="Cell respiration">
        <Line w="92%" />
        <Line w="80%" />
        <Line w="86%" />
      </FigureSection>

      <FigureSection title="Photosynthesis">
        <Line w="78%" />
        <Line w="90%" />
      </FigureSection>

      <FigureSection title="Enzyme kinetics">
        <Line w="82%" />
        <Line w="74%" />
        <Line w="88%" />
      </FigureSection>

      <div className="mt-auto hairline-t pt-3 flex items-center justify-between">
        <span className="text-[11px] text-ink-faint">Page 1 of 1</span>
        <span className="tabular text-[11px] text-ink-muted">PufferStudy</span>
      </div>
    </div>
  );
}

function FigureSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink">
        {title}
      </span>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function Line({ w }: { w: string }) {
  return <div className="h-[6px] bg-surface-3" style={{ width: w }} />;
}
