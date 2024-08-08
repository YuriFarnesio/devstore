import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="w-full max-w-[1600px] min-h-screen flex flex-col gap-5 px-10 py-8 mx-auto">
        <Header />

        {children}
      </div>
    </CartProvider>
  )
}
