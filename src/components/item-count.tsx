'use client'

import { useCart } from '@/context/cart-context'
import { Handbag } from '@phosphor-icons/react/dist/ssr'
import * as Dialog from '@radix-ui/react-dialog'

export function ItemCount() {
  const { items } = useCart()

  const itemsCount = items.length

  return (
    <div className="relative">
      <Dialog.Trigger asChild>
        <button className="flex items-center justify-center bg-base-elements min-w-12 h-12 rounded-md  hover:text-base-text hover:transition">
          <Handbag
            size={24}
            weight="bold"
            className={itemsCount > 0 ? 'text-base-text' : 'text-base-icon'}
          />
        </button>
      </Dialog.Trigger>
      {itemsCount > 0 && (
        <span className="flex items-center justify-center rounded-full bg-product-light text-white absolute min-w-6 -top-3 -right-3">
          {itemsCount}
        </span>
      )}
    </div>
  )
}
