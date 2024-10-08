'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, Suspense } from 'react'

function SearchFormComponent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-[320px] flex items-center bg-zinc-900 gap-3 ring-zinc-700 rounded-full py-3 px-5"
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 outline-none"
        required
      />
    </form>
  )
}

export function SearchForm() {
  return (
    <Suspense>
      <SearchFormComponent />
    </Suspense>
  )
}
