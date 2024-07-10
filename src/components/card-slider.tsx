'use client'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { ReactNode } from 'react'

export function CardSlider({ children }: { children: ReactNode }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    ClassNames(),
  ])

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-12">{children}</div>
    </div>
  )
}
