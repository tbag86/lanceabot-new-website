import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://lanceabot-new.46.225.129.231.sslip.io"),
  title: "Lanceabot - Human-Guarded AI Agents Manchester",
  description:
    "Manchester-based Lanceabot designs, deploys and manages human-guarded AI agents for UK business workflows.",
  keywords: [
    "AI agents Manchester",
    "agentic AI UK",
    "AI automation Manchester",
    "CRM automation",
    "AI chatbots",
    "business process automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lanceabot - Human-Guarded AI Agents Manchester",
    description:
      "Agentic AI services for UK businesses, built and operated by a Manchester-based human team.",
    url: "/",
    siteName: "Lanceabot",
    images: ["/assets/lanceabot-logo-wide.png"],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Lanceabot",
              url: "http://lanceabot-new.46.225.129.231.sslip.io/",
              email: "info@lanceabot.ai",
              areaServed: ["Manchester", "United Kingdom"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Manchester",
                addressCountry: "GB",
              },
              description:
                "Lanceabot designs, deploys and manages human-guarded AI agents for UK business workflows.",
              serviceType: [
                "AI Agents",
                "Agentic Chatbots",
                "CRM Automation",
                "Business Process Automation",
                "AI Voice Agents",
                "Data Dashboards",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
