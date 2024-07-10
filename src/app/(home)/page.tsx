import { Card } from '@/components/card'
import { CardSlider } from '@/components/card-slider'
import { stripe } from '@/lib/stripe'
import { Metadata } from 'next'
import Stripe from 'stripe'

export const metadata: Metadata = {
  title: 'Home',
}

async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount as number,
      defaultPriceId: price.id,
    }
  })

  return products
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div>
      <CardSlider>
        {products.map((product) => {
          return <Card key={product.id} product={product} />
        })}
      </CardSlider>
    </div>
  )
}
