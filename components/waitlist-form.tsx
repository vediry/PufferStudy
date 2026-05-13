"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn, isValidEmail } from "@/lib/utils";

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "ok"; duplicate: boolean }
  | { kind: "error"; message: string };

export function WaitlistForm({ className, size = "lg" }: { className?: string; size?: "lg" | "xl" }) {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!isValidEmail(value)) {
      setState({ kind: "error", message: "That email looks off — give it another try." });
      return;
    }
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; duplicate?: boolean; message?: string };
      if (!res.ok) {
        setState({ kind: "error", message: data.message ?? "Couldn't sign you up. Try again in a minute." });
        return;
      }
      setState({ kind: "ok", duplicate: !!data.duplicate });
    } catch {
      setState({ kind: "error", message: "Network hiccup. Try again." });
    }
  }

  const inputSize = size === "xl" ? "h-14 text-base" : "h-12 text-base";
  const buttonSize = size === "xl" ? "xl" : "lg";

  if (state.kind === "ok") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-[var(--radius-lg)] border border-default bg-surface px-5 py-4 shadow-soft",
          className,
        )}
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--success)]/15 text-[var(--success)]">
          <Check className="h-5 w-5" strokeWidth={2} />
        </span>
        <div className="text-sm">
          <p className="font-medium text-ink">
            {state.duplicate ? "You're already on the list." : "You're in. Welcome aboard."}
          </p>
          <p className="text-ink-muted">
            We&apos;ll email when v1.0 opens up and when new features ship.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state.kind === "error") setState({ kind: "idle" });
          }}
          placeholder="you@school.edu"
          aria-label="Email address"
          autoComplete="email"
          className={cn("flex-1 sm:flex-1", inputSize)}
          disabled={state.kind === "submitting"}
        />
        <Button type="submit" size={buttonSize} disabled={state.kind === "submitting"}>
          {state.kind === "submitting" ? <Loader2 className="animate-spin" /> : null}
          {state.kind === "submitting" ? "Adding…" : "Join the waitlist"}
          {state.kind === "idle" ? <ArrowRight /> : null}
        </Button>
      </div>
      {state.kind === "error" ? (
        <p role="alert" className="text-sm text-[var(--danger)]">
          {state.message}
        </p>
      ) : (
        <p className="text-[13px] text-ink-faint">
          Free during beta · No spam · One email per launch milestone
        </p>
      )}
    </form>
  );
}
