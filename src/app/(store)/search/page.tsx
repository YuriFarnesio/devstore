import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group flex items-end justify-center relative bg-zinc-900 rounded-lg overflow-hidden"
          >
            <Image
              src={product.image}
              alt={`Imagem de ${product.title}`}
              width={480}
              height={480}
              quality={100}
              className="group-hover:scale-105 transition-transform duration-500"
            />

            <div className="max-w-[280px] h-12 flex items-center absolute right-10 bottom-10 gap-2 bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="h-full flex items-center justify-center bg-violet-500 font-semibold rounded-full px-4">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
