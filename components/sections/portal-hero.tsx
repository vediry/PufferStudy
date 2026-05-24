import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://pufferstudy-app.vercel.app";

export function PortalHero() {
  return (
    <section className="relative">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center px-4 py-20 text-center sm:px-8 sm:py-28 lg:py-32">
        <Badge tone="accent" className="mb-6">
          <Sparkles className="mr-1.5 h-3 w-3" strokeWidth={2} />
          v2.3 · Study desk redesign
        </Badge>

        <h1
          className="max-w-[18ch] text-balance text-[2.4rem] leading-tight tracking-tight text-ink sm:text-[3.2rem] lg:text-[4rem]"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
        >
          Your study workspace,{" "}
          <span className="italic" style={{ color: "var(--accent-deep)" }}>
            focused
          </span>
          .
        </h1>

        <p className="mt-6 max-w-[52ch] text-base text-ink-muted sm:text-lg">
          A single workspace per subject. Snap your notes, get an AI-generated cheat sheet,
          chat about what you don&apos;t understand, and study with practice questions when
          test day approaches.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={APP_URL}>
              Continue
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={`${APP_URL}/sign-up`}>
              Get started
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-ink-faint">
          Free during the open beta. Bring your own Gemini key — typically zero cost on the free tier.
        </p>
      </div>
    </section>
  );
}
