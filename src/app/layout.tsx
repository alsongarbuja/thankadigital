import React from 'react';
import { Metadata } from 'next';

import './globals.css'
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: 'Thanka Digital',
  description: 'Bring your business to next level with Thanka Digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${dm_sans.variable}`} lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
