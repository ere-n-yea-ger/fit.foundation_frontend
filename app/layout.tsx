import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fit Foundation | Empowering the Children of Balongi",
  description:
    "Fit Foundation trains and educates underprivileged children from the Balongi slum area — building discipline, confidence, and teamwork through academics and badminton at Tynor Badminton Club.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-body bg-ink-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
