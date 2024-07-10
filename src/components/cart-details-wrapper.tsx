'use client'

import { useCart } from '@/context/cart-context'
import * as Dialog from '@radix-ui/react-dialog'
import { CardThumb } from './card-thumb'
import { priceFormater } from '@/utils/price-format'
import axios from 'axios'
import { useState } from 'react'

export function CartDetailsWrapper() {
  const { items } = useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('http://localhost:3000/api/checkout', {
        products: items,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar')
    }
  }

  const quantity =
    items.length === 0
      ? '0'
      : `${items.length} ${items.length > 1 ? 'itens' : 'item'}`

  const totalPrice = items.reduce((acc, value) => acc + value.price, 0)
  return (
    <>
      <div className="flex flex-col gap-6 overflow-auto h-[19rem]">
        {items.map((item) => {
          return <CardThumb key={item.id} product={item} />
        })}
      </div>
      <div className="mt-[98px]">
        <div className="text-[1rem] text-base-title leading-[1.6] flex justify-between">
          <p>Quantidade</p>
          <p>{quantity}</p>
        </div>
        <div className="text-md font-bold text-base-title leading-[1.6] flex justify-between">
          <h2>Valor total</h2>
          <p>{priceFormater(totalPrice)}</p>
        </div>
        <Dialog.Close asChild>
          <button
            className="min-w-full h-[69px] bg-product-principal text-white rounded-lg font-bold leading-5 hover:bg-product-light hover:transition"
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession}
          >
            Finalizar compra
          </button>
        </Dialog.Close>
      </div>
    </>
  )
}
