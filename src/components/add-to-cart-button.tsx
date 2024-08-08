'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="h-12 flex items-center justify-center bg-emerald-600 text-white font-semibold rounded-full mt-8"
    >
      Adicionar ao carrinho
    </button>
  )
}
