import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Baldakijn',
  description: 'An Antwerp-based local business. Crafting home textiles for your spaces.',
  themeColor: '#000068',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/bpu4xfb.css"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
