import type { Metadata, Viewport } from "next";
import { Spline_Sans, Spline_Sans_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spline-sans",
  display: "swap",
});

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-spline-sans-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PufferStudy — Turn your notes into a printable cheat sheet",
  description:
    "Snap photos of your homework, notes, and packets. PufferStudy organizes them into a one-page cheat sheet before your test — without storing your data on any server.",
  applicationName: "PufferStudy",
  openGraph: {
    title: "PufferStudy — Turn your notes into a printable cheat sheet",
    description: "A study aid that reads your photos and writes the cheat sheet for you. v1.0 — free during beta.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF7EE" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1814" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${splineSans.variable} ${splineSansMono.variable}`}
    >
      <body className="landing min-h-dvh bg-canvas text-ink">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
