'use client'

import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { Expand, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'

import Currency from '~/components/ui/currency'
import IconButton from '~/components/ui/icon-button'
import { usePreviewModal, useCart } from '~/hooks'
import { TProduct } from '~/lib/types'

type ProductCard = {
  data: TProduct
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal()
  const cart = useCart()
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    cart.addItem(data)
  }

  return (
    <div onClick={handleClick} className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3">
      {/* Image & actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image src={data.images?.[0]?.url} alt="" fill className="aspect-square rounded-md object-cover" />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-gray-600" />} />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
