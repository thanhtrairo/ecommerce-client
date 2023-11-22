import { AxiosError } from 'axios'

import { httpRequest } from '~/lib/httpRequest'
import { TSize } from '~/lib/types'

const getSizes = async (): Promise<TSize[]> => {
  try {
    const sizes = await httpRequest.get(`/sizes`)
    return sizes.data
  } catch (error) {
    console.log(`Get sizes error: ${(error as AxiosError).message}`)
    return []
  }
}

export { getSizes }
