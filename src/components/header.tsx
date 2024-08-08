import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="w-[320px] flex items-center bg-zinc-900 ring-zinc-700 gap-3 rounded-full px-5 py-3">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            width={24}
            height={24}
            src="https://github.com/YuriFarnesio.png"
            alt="Imagem do perfil do usuário (Yuri Farnesio)"
            className="w-6 h-6 rounded-full"
          />
        </Link>
      </div>
    </div>
  )
}
