import Header from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[1600px] min-h-screen flex flex-col gap-5 px-10 py-8 mx-auto">
      <Header />

      {children}
    </div>
  )
}
