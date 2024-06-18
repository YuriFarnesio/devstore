import Header from '@/components/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'devstore',
}

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full max-w-[1600px] min-h-screen grid grid-rows-app gap-5 px-10 py-8 mx-auto">
      <Header />
      {children}
    </div>
  )
}
