import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'bg-base-elements/50 animate-pulse rounded-lg',
        className,
      )}
      {...props}
    />
  )
}
