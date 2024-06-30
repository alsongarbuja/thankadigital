import React from "react";
import type { Metadata } from "next";

import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Thanka Digital",
  description:
    "Software Development company based in Nepal. We build software that helps businesses grow.",
  openGraph: {
    title: "Thanka Digital",
    description:
      "Software Development company based in Nepal. We build software that helps businesses grow.",
    url: "https://thankadigital.com",
    type: "website",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={montserrat.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
