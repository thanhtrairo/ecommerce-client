'use client'

import PreviewModal from '~/components/preview-modal'
import { useMounted } from '~/hooks'

const ModalProvider = () => {
  const { isMounted } = useMounted()

  if (!isMounted) {
    return null
  }

  return (
    <>
      <PreviewModal />
    </>
  )
}

export { ModalProvider }
