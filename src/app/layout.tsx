import { Metadata } from 'next';

import './globals.css'
import { KoHo, DM_Sans } from 'next/font/google';

const koho = KoHo({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-koho",
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: 'Thanka Digital',
  description: 'Bring your business to next level with Thanka Digital',
  icons: { icon: "/icons/favicon.ico" }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${koho.variable} ${dm_sans.variable}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
