import NextImage from 'next/image'
import { Tab } from '@headlessui/react'

import { cn } from '~/lib/cn'
import { TImage } from '~/lib/types'

type GalleryTabProps = {
  image: TImage
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <NextImage fill src={image.url} alt="" className="object-cover object-center" />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab
