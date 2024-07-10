'use client'

import { useCart } from '@/context/cart-context'
import { Handbag } from '@phosphor-icons/react/dist/ssr'

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
  }
  card?: boolean
}

export function AddToCartButton({ product, card }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(product)
  }

  const variantClass = card
    ? 'flex items-center justify-center bg-product-principal min-w-12 h-12 rounded-md text-white hover:transition hover:bg-product-light'
    : 'absolute bottom-0 min-w-full h-[69px] bg-product-principal text-white rounded-lg font-bold leading-5 hover:bg-product-light hover:transition'

  return (
    <button className={variantClass} onClick={handleAddProductToCart}>
      {card ? <Handbag size={24} weight="bold" /> : 'Colocar na sacola'}
    </button>
  )
}
