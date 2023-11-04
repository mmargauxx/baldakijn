import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Baldakijn',
  description: 'Baldakijn is een webshop voor handgemaakte producten.',
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
