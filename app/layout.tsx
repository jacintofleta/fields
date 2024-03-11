import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Fields',
  description:
    'Make the most of your marketing investment and reduce noise in your CRM saving a ton of sales time',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
