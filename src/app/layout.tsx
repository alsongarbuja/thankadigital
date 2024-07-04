import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thankadigital.com"),
  title: "Thanka Digital",
  keywords: [
    "Software Development",
    "Web Development",
    "Mobile Development",
    "IT Company",
    "Nepal",
    "Software company",
  ],
  description:
    "Software Development company based in Nepal. We build software that helps businesses grow.",
  openGraph: {
    title: "Thanka Digital",
    description:
      "Software Development company based in Nepal. We build software that helps businesses grow.",
    url: "https://thankadigital.com",
    type: "website",
    images: ["/images/seo/link-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    description: "Software Development company based in Nepal.",
    title: "Thanka Digital",
    images: ["/images/seo/link-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Software Development company based in Nepal. We build software that helps businesses grow."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ColorSchemeScript />
      </Head>
      <body className={montserrat.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
