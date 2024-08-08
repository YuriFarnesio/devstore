import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="flex-1 grid grid-rows-6 grid-cols-9 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group flex items-end justify-center relative row-span-6 col-span-6 bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          src={highlightedProduct.image}
          alt={`Imagem de ${highlightedProduct.title}`}
          fill
          quality={100}
          className="group-hover:scale-105 object-contain transition-transform duration-500"
        />

        <div className="max-w-[240px] h-12 flex items-center absolute right-30 bottom-30 gap-2 bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="h-full flex items-center justify-center bg-violet-500 font-semibold rounded-full px-4">
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
          className="group flex items-end justify-center relative row-span-3 col-span-3 bg-zinc-900 rounded-lg overflow-hidden"
        >
          <Image
            src={product.image}
            alt={`Imagem de ${product.title}`}
            fill
            quality={100}
            className="group-hover:scale-105 object-contain transition-transform duration-500"
          />

          <div className="max-w-[240px] h-12 flex items-center absolute right-8 bottom-8 gap-2 bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
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
