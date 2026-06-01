import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinup Ram S A — Data Enthusiast",
  description: "Risk consultant turning data into decisions. CS, Math & Stats graduate passionate about cloud, AI, and analytics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
