import * as Dialog from '@radix-ui/react-dialog'
import { CartDetails } from './cart-details'
import { ItemCount } from './item-count'

export function CartCount() {
  return (
    <Dialog.Root>
      <ItemCount />
      <CartDetails />
    </Dialog.Root>
  )
}
