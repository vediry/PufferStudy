import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-[var(--radius)] border border-default bg-surface px-4 py-2 text-base text-ink transition-colors",
        "placeholder:text-ink-faint",
        "focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2 focus-visible:border-strong",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
