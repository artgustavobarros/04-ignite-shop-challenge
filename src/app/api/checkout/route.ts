import { env } from '@/env'
import { stripe } from '@/lib/stripe'

interface ProductsRequest {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    quantity: number
    defaultPriceId: string
  }[]
}

interface LineItems {
  price: string
  quantity: number
}

export async function POST(req: Request) {
  const { products }: ProductsRequest = await req.json()

  const lineItems = products.reduce((acc, value) => {
    const { defaultPriceId: price, quantity } = value
    acc.push({ price, quantity })
    return acc
  }, [] as LineItems[])

  const successUrl = `${env.NEXT_PUBLIC_API_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = env.NEXT_PUBLIC_API_BASE_URL

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: 'payment',
    line_items: lineItems,
  })

  return Response.json({ checkoutUrl: checkoutSession.url })
}
