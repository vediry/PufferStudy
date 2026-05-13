"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "Is PufferStudy free?",
    a: "Yes. v1.0 is free during beta and the core flow (upload notes, generate cheat sheet, print) stays free even when paid tiers launch later. Paid tiers will cover features like homework chat, practice quizzes, and an AI key you don't have to bring yourself.",
  },
  {
    q: "What's a Gemini API key, and where do I get one?",
    a: "Google's free AI service. You sign in with any Google account at aistudio.google.com/apikey, click \"Create API key,\" copy it, paste it into PufferStudy's settings page once. The free tier covers a lot of study sessions — no payment info needed.",
  },
  {
    q: "Does it work on a school Chromebook?",
    a: "That's exactly who we built it for. PufferStudy proxies AI traffic through our own server, so your school's network filter only sees traffic to pufferstudy.vercel.app — never directly to Google's API. Works on locked-down Chromebooks where most AI tools get blocked.",
  },
  {
    q: "Can I lose my notes?",
    a: "Your photos live in your browser's IndexedDB. If you clear your browser data or switch browsers, you'll lose what's in PufferStudy on that browser. Treat it like a workspace, not permanent storage — and keep your originals.",
  },
  {
    q: "Can I share a cheat sheet with a friend?",
    a: "Today, print it or save it as PDF and share the file. Sharing via link is on the roadmap for the paid tier.",
  },
  {
    q: "Will my data ever be used to train AI?",
    a: "No. Your notes never reach our servers in the first place. The only thing we send to Google's Gemini API is the photos you choose to generate from — and Google's free tier may use that to improve their models, which is their policy, not ours. If that's a concern, the paid tier (when it launches) will route through providers with no-training agreements.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-default py-20 sm:py-28">
      <div className="mx-auto max-w-[820px] px-4 sm:px-8">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
            FAQ
          </span>
          <h2 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
            Questions students actually ask.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-[var(--radius-lg)] border border-default bg-surface shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-2/60"
                >
                  <span className="text-[15px] font-medium text-ink sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                    strokeWidth={1.75}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-[15px] leading-[1.6] text-ink-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
