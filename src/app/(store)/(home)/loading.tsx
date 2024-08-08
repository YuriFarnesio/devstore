import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="h-[860px] grid grid-rows-6 grid-cols-9 gap-6">
      <Skeleton className="row-span-6 col-span-6" />

      <Skeleton className="row-span-3 col-span-3" />
      <Skeleton className="row-span-3 col-span-3" />
    </div>
  )
}
