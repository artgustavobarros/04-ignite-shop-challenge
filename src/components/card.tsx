import Image from 'next/image'
import Link from 'next/link'
import { AddToCartButton } from './add-to-cart-button'
import { priceFormater } from '@/utils/price-format'

interface CardProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
  }
}

export function Card({ product }: CardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-hero-gradient w-[696px] h-[656px] rounded-lg flex flex-col items-center justify-center relative overflow-hidden embla__slide embla__class-names"
    >
      <Image
        src={product.imageUrl}
        width={520}
        height={480}
        quality={100}
        alt=""
        className="object-cover"
      />
      <footer className="bg-base-elements rounded-md flex p-8 absolute left-1 right-1 bottom-1 items-center justify-between translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all  ease-in-out duration-200">
        <section>
          <h1 className="font-bold text-base-title leading-relaxed text-lg">
            {product.name}
          </h1>
          <span className="font-bold text-product-light text-xl">
            {priceFormater(product.price)}
          </span>
        </section>
        <AddToCartButton card product={product} />
      </footer>
    </Link>
  )
}
