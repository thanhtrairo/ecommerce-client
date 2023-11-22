import { AxiosError } from 'axios'

import { httpRequest } from '~/lib/httpRequest'
import { TColor } from '~/lib/types'

const getColors = async (): Promise<TColor[]> => {
  try {
    const colors = await httpRequest.get(`/colors`)
    return colors.data
  } catch (error) {
    console.log(`Get colors error: ${(error as AxiosError).message}`)
    return []
  }
}

export { getColors }
