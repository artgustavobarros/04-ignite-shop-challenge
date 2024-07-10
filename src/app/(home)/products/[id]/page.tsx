import { AddToCartButton } from '@/components/add-to-cart-button'
import { stripe } from '@/lib/stripe'
import { priceFormater } from '@/utils/price-format'
import { Metadata } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

interface ProductProps {
  params: { id: string }
}

async function getProduct(id: string) {
  const response = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = response.default_price as Stripe.Price

  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    description: response.description,
    price: price.unit_amount ?? 0,
    defaultPriceId: price.id,
  }

  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.id)

  return {
    title: product.name,
  }
}

export default async function Product({ params }: ProductProps) {
  const product = await getProduct(params.id)
  
  return (
    <div className="grid grid-cols-layout gap-[4.5rem]">
      <div className="group bg-hero-gradient w-[576px] h-[656px] rounded-lg flex flex-col items-center justify-center relative overflow-hidden col-span-1">
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          quality={100}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="relative">
        <h1 className="text-base-text font-bold text-2xl leading-snug mb-4">
          {product.name}
        </h1>
        <h2 className="text-product-light text-2xl leading-snug mb-10">
          {priceFormater(product.price as number)}
        </h2>
        <p className="leading-[1.6] text-md text-base-text text-justify">
          {product.description}
        </p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}
