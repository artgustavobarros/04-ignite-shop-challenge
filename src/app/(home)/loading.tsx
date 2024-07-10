import { CardSlider } from '@/components/card-slider'
import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <CardSlider>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div className="grid grid-cols-6 grid-rows-6 gap-y-6" key={i}>
            <Skeleton className="w-[696px] h-[600px] col-span-6 row-span-5" />
            <Skeleton className="w-[330px] h-[32px] col-[1/3]" />
            <Skeleton className="w-[100px] h-[32px] col-[6/6]" />
          </div>
        )
      })}
    </CardSlider>
  )
}
