import { create } from 'zustand'

import { TProduct } from '~/lib/types'

type PreviewModalStore = {
  isOpen: boolean
  data?: TProduct
  onOpen: (data: TProduct) => void
  onClose: () => void
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: TProduct) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}))

export { usePreviewModal }
