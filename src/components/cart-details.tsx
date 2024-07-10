import { X } from '@phosphor-icons/react/dist/ssr'
import * as Dialog from '@radix-ui/react-dialog'
import { CartDetailsWrapper } from './cart-details-wrapper'

export function CartDetails() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 w-full h-full" />
      <Dialog.Content className="absolute h-full w-[480px] top-0 right-0 bg-base-elements p-12">
        <Dialog.Close className="flex min-w-full justify-end">
          <X
            size={24}
            weight="bold"
            className="text-base-icon hover:text-base-text hover:transition"
          />
        </Dialog.Close>
        <Dialog.Title className="font-bold text-lg text-base-title leading-[1.6] mt-6 mb-8">
          Sacola de compras
        </Dialog.Title>
        <Dialog.Description className="opacity-0">shop cart</Dialog.Description>
        <CartDetailsWrapper />
      </Dialog.Content>
    </Dialog.Portal>
  )
}
