import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    cache: 'no-cache',
  })

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="h-[calc(100vh-128px)] xl:max-h-[860px] grid grid-rows-9 grid-cols-6 xl:grid-rows-6 xl:grid-cols-9 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group flex items-end justify-center relative row-span-5 col-span-6 md:row-span-6 bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          src={highlightedProduct.image}
          alt={`Imagem de ${highlightedProduct.title}`}
          width={860}
          height={860}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="max-w-[calc(100%-32px)] md:max-w-[240px] h-12 flex items-center absolute top-4 md:top-auto md:right-12 md:bottom-12 xl:right-28 xl:bottom-28 gap-2 bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-5">
          <span className="text-xs md:text-sm truncate">
            {highlightedProduct.title}
          </span>
          <span className="h-full flex items-center justify-center bg-violet-500 text-sm md:text-base font-semibold rounded-full px-2 md:px-4">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group flex items-end justify-center relative row-span-3 col-span-3 md:row-span-3 bg-zinc-900 rounded-lg overflow-hidden"
        >
          <Image
            src={product.image}
            alt={`Imagem de ${product.title}`}
            width={418}
            height={418}
            quality={100}
            className="group-hover:scale-105 object-contain transition-transform duration-500"
          />

          <div className="max-w-[calc(100%-16px)] md:max-w-[240px] h-8 md:h-12 flex items-center absolute right-2 top-2 md:top-auto md:right-8 md:bottom-8 gap-2 bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-5">
            <span className="text-xs md:text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 text-xs md:text-base font-semibold px-2 md:px-4">
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
  )
}
