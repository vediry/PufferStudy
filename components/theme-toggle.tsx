"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Trees, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ORDER = ["light", "dark", "forest"] as const;
type Mode = (typeof ORDER)[number];

const ICONS: Record<Mode, LucideIcon> = { light: Sun, dark: Moon, forest: Trees };
const LABEL: Record<Mode, string> = { light: "Light", dark: "Dark", forest: "Forest" };

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const current = (mounted && ORDER.includes(theme as Mode) ? (theme as Mode) : "light");
  const Icon = ICONS[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(ORDER[(ORDER.indexOf(current) + 1) % ORDER.length])}
      aria-label={`Theme: ${LABEL[current]}. Click to change.`}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-none text-ink-muted",
        "transition-colors hover:bg-surface-2 hover:text-ink",
        "focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2",
        className,
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </button>
  );
}
