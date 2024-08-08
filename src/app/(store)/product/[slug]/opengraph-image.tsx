import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { env } from '@/env'

export const runtime = 'edge'

export const alt = ''

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: colors.zinc[950],
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={productImageURL} alt="" style={{ height: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
