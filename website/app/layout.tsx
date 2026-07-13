import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BackToTop } from "@/components/common/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raghavmalik.com.au"),
  title: "Raghav Malik - Engineering Portfolio",
  description:
    "Systems architecture, embedded electronics, RF communications, industrial IoT, and field-deployed product engineering across mining, aerospace, robotics, and medical accelerator environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
