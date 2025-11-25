// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GOBLUUE Laundry — Premium Laundry Pickup & Delivery in Wesley Chapel",
  description:
    "Premium laundry pickup & delivery with 24-hour turnaround in Wesley Chapel. Simple monthly pricing, no contracts, and professional wash & fold service.",
  metadataBase: new URL("https://tudominio-o-vercel-url.com"),
  openGraph: {
    title: "GOBLUUE Laundry — Never Do Laundry Again",
    description:
      "We pick up, wash, fold, and deliver your laundry in 24 hours. Designed for busy professionals and families in Wesley Chapel.",
    url: "https://tudominio-o-vercel-url.com",
    siteName: "GOBLUUE Laundry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOBLUUE Laundry — 24h Pickup & Delivery",
    description:
      "Premium laundry pickup & delivery in Wesley Chapel. Simple, fast, and contract-free.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GOOGLE ANALYTICS (GA4) - REEMPLAZA G-XXXXXX POR TU ID */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>

        {/* GOOGLE ADS CONVERSION (OPCIONAL) - RELLENA TU ID AW-XXXX */}
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          `}
        </Script>
      </head>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
