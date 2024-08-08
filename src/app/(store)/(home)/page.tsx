import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-1 grid grid-rows-6 grid-cols-9 gap-6">
      <Link
        href="/"
        className="group flex items-end justify-center relative row-span-6 col-span-6 bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          alt="Moletom Never Stop Learning"
          fill
          quality={100}
          className="group-hover:scale-105 object-contain transition-transform duration-500"
        />

        <div className="max-w-[240px] h-12 flex items-center absolute right-30 bottom-30 gap-2 bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="h-full flex items-center justify-center bg-violet-500 font-semibold rounded-full px-4">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group flex items-end justify-center relative row-span-3 col-span-3 bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          src="/moletom-ai-side.png"
          alt="Moletom AI Side"
          fill
          quality={100}
          className="group-hover:scale-105 object-contain transition-transform duration-500"
        />

        <div className="max-w-[240px] h-12 flex items-center absolute right-8 bottom-8 gap-2 bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group flex items-end justify-center relative row-span-3 col-span-3 bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          alt="Camiseta Expand Your Mind"
          fill
          quality={100}
          className="group-hover:scale-105 object-contain transition-transform duration-500"
        />

        <div className="max-w-[240px] h-12 flex items-center absolute right-8 bottom-8 gap-2 bg-black/60 border-2 border-zinc-500 rounded-full p-1 pl-5">
          <span className="text-sm truncate">Camiseta Expand Your Mind</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
