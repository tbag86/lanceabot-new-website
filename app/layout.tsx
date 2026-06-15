import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lanceabot - Agentic AI Agency Manchester",
  description:
    "Lanceabot designs, builds and manages practical AI agents for UK teams that need dependable workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
