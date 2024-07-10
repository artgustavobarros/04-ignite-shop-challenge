import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

interface SucessProps {
  searchParams: {
    session_id: string
  }
}

async function getPurchaseProducts(id: string) {
  const session = await stripe.checkout.sessions.retrieve(id, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const lineItems = session.line_items?.data

  const productsImage = lineItems?.reduce((acc, value) => {
    const { price } = value
    acc.push(price?.product.images[0])
    return acc
  }, [])

  console.log(productsImage)

  return { customerName, productsImage }
}

export default async function Success({ searchParams }: SucessProps) {
  const { customerName, productsImage } = await getPurchaseProducts(
    searchParams.session_id,
  )
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        alt=""
        width={130}
        height={52}
        className="mt-16 mb-40"
      />
      <div className="relative flex border-red-500">
        {productsImage?.map((image, index) => {
          return (
            <div
              key={image}
              className={`bg-hero-gradient absolute rounded-full w-[130px] h-[142px] flex items-center justify-center bottom-0`}
              style={{ left: `${index * 80 - 105}px` }}
            >
              <Image src={image} alt="" width={130} height={52} />
            </div>
          )
        })}
      </div>
      <h1 className="font-bold text-2xl leading-[1.4] text-base-title mt-16 mb-6">
        Compra efetuada!
      </h1>
      <p className="text-xl leading-[1.4] w-[590px] text-center mb-16">
        Uhuul <strong>{customerName}</strong>, sua compra de 3 camisetas já está
        a caminho da sua casa.
      </p>
      <Link
        href="/"
        className="text-product-principal text-lg hover:text-product-light hover:transition font-bold"
      >
        Voltar ao catálogo
      </Link>
    </div>
  )
}
