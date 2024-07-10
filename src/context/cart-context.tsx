'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

export interface CartItem {
  id: string
  name: string
  imageUrl: string
  price: number
  quantity: number
  defaultPriceId: string
}

interface CartContextProps {
  items: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeToCart: (id: string) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Omit<CartItem, 'quantity'>) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === product.id)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { ...product, quantity: 1 }]
      }
    })
  }

  function removeToCart(id: string) {
    setCartItems((state) => state.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
