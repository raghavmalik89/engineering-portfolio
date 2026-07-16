import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BackToTop } from "@/components/common/BackToTop";
import { absoluteUrl, site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  applicationName: site.shortName,
  title: {
    default: site.defaultTitle,
    template: site.titleTemplate,
  },
  description: site.description,
  authors: [{ name: site.shortName, url: site.origin }],
  creator: site.shortName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.defaultTitle,
    description: site.description,
    url: "/",
    images: [
      {
        url: site.defaultSocialImage.src,
        alt: site.defaultSocialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.description,
    images: [site.defaultSocialImage.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: site.shortName,
      url: site.origin,
      jobTitle: "Product Systems Architect and Technical Lead",
      sameAs: site.sameAs,
      knowsAbout: site.knowsAbout,
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: site.name,
      url: site.origin,
      description: site.description,
      publisher: {
        "@id": absoluteUrl("/#person"),
      },
    },
  ],
};

const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
        />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
