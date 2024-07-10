import Image from 'next/image'
import Link from 'next/link'
import { CartCount } from './cart-count'

export function Header() {
  return (
    <header className="flex justify-between items-center py-8 pr-[136px]">
      <Link href="/">
        <Image src="/logo.svg" alt="" width={130} height={52} />
      </Link>
      <CartCount />
    </header>
  )
}
