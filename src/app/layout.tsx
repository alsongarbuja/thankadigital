import './globals.css'
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ subsets: ['latin-ext'], weight: "400" })

export const metadata = {
  title: 'Thanka Digital',
  description: 'Bring your business to next level with Thanka Digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>{children}</body>
    </html>
  )
}
