import Image from 'next/image'
import { RemoveToCardButton } from './remove-to-card-button'
import { priceFormater } from '@/utils/price-format'

interface CardThumProps {
  product: {
    imageUrl: string
    name: string
    price: number
    id: string
  }
}

export function CardThumb({ product }: CardThumProps) {
  return (
    <div className="flex gap-5">
      <div className="bg-hero-gradient w-[6.25rem] h-[5.8rem] rounded-lg">
        <Image src={product.imageUrl} alt="" width={100} height={93} />
      </div>
      <div>
        <h1 className="text-md">{product.name}</h1>
        <p className="font-bold text-md">{priceFormater(product.price)}</p>
        <RemoveToCardButton productId={product.id} />
      </div>
    </div>
  )
}
