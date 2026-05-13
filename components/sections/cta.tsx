import { WaitlistForm } from "@/components/waitlist-form";

export function CTA() {
  return (
    <section className="border-b border-default bg-gradient-to-b from-transparent to-[var(--primary)]/8 py-20 sm:py-28">
      <div className="mx-auto flex max-w-[820px] flex-col items-center gap-7 px-4 text-center sm:px-8">
        <h2 className="max-w-[680px] text-[2rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
          Tomorrow&apos;s test. Tonight&apos;s cheat sheet.
        </h2>
        <p className="max-w-[560px] text-[16px] text-ink-muted sm:text-[18px]">
          Get the email when v1.0 opens to the public. Free during beta, no payment info, one email per launch milestone.
        </p>
        <div className="w-full max-w-[520px]">
          <WaitlistForm size="xl" />
        </div>
      </div>
    </section>
  );
}
