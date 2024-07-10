import { Header } from '@/components/header'
import { CartProvider } from '@/context/cart-context'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="flex flex-col w-full w-calc ml-auto">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
