import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PufferStudy — Turn your notes into a printable cheat sheet",
  description:
    "Capture photos of your homework, notes, and packets. PufferStudy organizes them into a single-page cheat sheet before your test — without storing your data on any server.",
  applicationName: "PufferStudy",
  openGraph: {
    title: "PufferStudy — Turn your notes into a printable cheat sheet",
    description:
      "A study aid that reads your photos and generates a printable cheat sheet. v1.0 — available at no cost during the open beta.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF7EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={publicSans.variable}>
      <body className="landing min-h-dvh bg-canvas text-ink">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={["light", "dark", "forest"]}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
