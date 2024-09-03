'use client'

import { useSearchParams } from 'next/navigation'

import { Skeleton } from '@/components/skeleton'
import { Suspense } from 'react'

function SearchLoadingComponent() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
      </div>
    </div>
  )
}

export default function SearchLoading() {
  return (
    <Suspense>
      <SearchLoadingComponent />
    </Suspense>
  )
}
