import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProductPageProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)

  return (
    <div className="flex-1 max-h-[860px] grid grid-cols-3 relative">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt={`Imagem de ${product.title}`}
          fill
          quality={100}
          className="object-contain object-left"
        />
      </div>

      <div className="flex flex-col justify-center px-10">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-zinc-400 mt-2">{product.description}</p>

        <div className="flex items-center gap-3 mt-8">
          <span className="inline-block bg-violet-500 font-semibold leading-tight rounded-full py-2.5 px-5">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de{' '}
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="space-y-4 mt-8">
          <span className="block font-semibold leading-tight">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="w-14 h-9 flex items-center justify-center bg-zinc-800 text-sm font-semibold border border-zinc-700 rounded-full"
            >
              P
            </button>
            <button
              type="button"
              className="w-14 h-9 flex items-center justify-center bg-zinc-800 text-sm font-semibold border border-zinc-700 rounded-full"
            >
              M
            </button>
            <button
              type="button"
              className="w-14 h-9 flex items-center justify-center bg-zinc-800 text-sm font-semibold border border-zinc-700 rounded-full"
            >
              G
            </button>
            <button
              type="button"
              className="w-14 h-9 flex items-center justify-center bg-zinc-800 text-sm font-semibold border border-zinc-700 rounded-full"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="h-12 flex items-center justify-center bg-emerald-600 text-white font-semibold rounded-full mt-8"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
