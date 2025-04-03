import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import {
  // DM_Sans,
  Playfair_Display,
  // Noto_Sans,
  Nunito,
  Afacad,
  // Poppins,
} from "next/font/google";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

// const dm = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-dm-sans",
// });

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-afacad",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-playfair",
});

// const noto_sans = Noto_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-noto-sans",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-poppins",
// });

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
  verification: {
    other: {
      "facebook-domain-vetification": ["vakjbcwdr6u9xsa6tu2rmx4xmw6uur"],
    },
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
      className={`${playfair_display.variable} ${afacad.variable} ${nunito.variable} bg-white text-neutral_black`}
    >
      <body className="font-nunito">
        <NextTopLoader
          color="#E8343E"
          height={3}
          easing="ease"
          showSpinner
          speed={600}
        />
        <MantineProvider>
          <Notifications zIndex={1000} notificationMaxHeight={250} />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
