'use client'

import { useCart } from '@/context/cart-context'

interface RemoveToCardButtonProps {
  productId: string
}

export function RemoveToCardButton({ productId }: RemoveToCardButtonProps) {
  const { removeToCart } = useCart()

  function handleRemoveProductToCart() {
    removeToCart(productId)
  }

  return (
    <button
      className="text-product-principal hover:text-product-light hover:transition font-bold"
      onClick={handleRemoveProductToCart}
    >
      Remover
    </button>
  )
}
