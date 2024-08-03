import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
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
    <html
      lang="en"
      className={`${playfair_display.variable} ${dm.variable} bg-white text-neutral_black`}
    >
      <body className="font-dm">
        <MantineProvider>
          <Notifications
            position="top-right"
            zIndex={1000}
            notificationMaxHeight={250}
          />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
