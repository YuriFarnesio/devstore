import { env } from '@/env'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(env.APP_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
  openGraph: {
    images: 'icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.className} lang="pt-BR">
      <body className="bg-zinc-950 text-gray-50 antialiased">{children}</body>
    </html>
  )
}
