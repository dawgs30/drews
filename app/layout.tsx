import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drew Blackwell — Cofounder & Product Manager",
  description: "Drew Blackwell — cofounder and product manager. I build products that make people's lives better. Learn more about Drew's background, mission, and resume.",
  alternates: {
    canonical: "https://drewblackwell.com",
  },
  openGraph: {
    title: "Drew Blackwell — Cofounder & Product Manager",
    description: "Drew Blackwell — cofounder and product manager. I build products that make people's lives better.",
    type: "website",
    images: [
      {
        url: "/FF9A9723-CD91-433D-80E9-65CBCBC3438F_1_105_c.jpeg",
        width: 1200,
        height: 1200,
        alt: "Portrait of Drew Blackwell",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew Blackwell — Cofounder & Product Manager",
    description: "Drew Blackwell — cofounder and product manager. I build products that make people's lives better.",
    images: ["/FF9A9723-CD91-433D-80E9-65CBCBC3438F_1_105_c.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Drew Blackwell",
    jobTitle: "Cofounder & Product Manager",
    sameAs: ["https://www.linkedin.com/in/drew-blackwell-715200327/"],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
