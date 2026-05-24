import { LayoutGrid, NotebookPen, MessageSquare, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Feature = {
  icon: LucideIcon;
  status: "live" | "beta" | "soon";
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: LayoutGrid,
    status: "live",
    title: "Study Desk",
    body: "A workspace per subject. Test countdown, recent activity, upcoming timeline, search and archive.",
  },
  {
    icon: MessageSquare,
    status: "live",
    title: "Cheat sheets with AI chat",
    body: "Generate a one-page sheet, then refine it by asking questions inline. The chat can edit the sheet in place.",
  },
  {
    icon: NotebookPen,
    status: "beta",
    title: "Notepad",
    body: "Freeform notes that don't belong to a subject yet. Quick capture, distraction-free.",
  },
  {
    icon: Zap,
    status: "soon",
    title: "Practice & flashcards",
    body: "Auto-generated practice questions and spaced-repetition flashcards from your sheet. Shipping in v3.",
  },
];

function statusTone(s: Feature["status"]): "success" | "accent" | "neutral" {
  if (s === "live") return "success";
  if (s === "beta") return "accent";
  return "neutral";
}

export function WhatsInside() {
  return (
    <section id="whats-inside" className="border-t border-default py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
        <header className="mb-12 flex flex-col gap-3 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">What&apos;s inside</p>
          <h2
            className="text-balance text-[2rem] leading-tight tracking-tight text-ink sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            One workspace,{" "}
            <span className="italic" style={{ color: "var(--accent-deep)" }}>
              every angle
            </span>{" "}
            on your subject.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, status, title, body }) => (
            <article key={title} className="glow-card flex flex-col gap-3 border border-default bg-surface p-6">
              <div className="flex items-start justify-between gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-default"
                  style={{ background: "var(--surface-2)", color: "var(--accent-deep)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <Badge tone={statusTone(status)}>{status}</Badge>
              </div>
              <h3
                className="text-[1.25rem] leading-tight text-ink"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
