import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidEmail(value: string): boolean {
  // Simple, intentionally not overly strict — catches typos, lets edge cases through
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
