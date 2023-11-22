import { AxiosError } from 'axios'

import { httpRequest } from '~/lib/httpRequest'
import { TBillboard } from '~/lib/types'

const getBillboard = async (id: string): Promise<TBillboard | null> => {
  try {
    const billboard = await httpRequest.get(`/billboards/${id}`)
    return billboard.data
  } catch (error) {
    console.log(`Get billboard error: ${(error as AxiosError).message}`)
    return null
  }
}

const getBillboards = async ({ isLatest = false }): Promise<TBillboard[]> => {
  try {
    const billboards = await httpRequest.get('/billboards', {
      params: {
        isLatest,
      },
    })
    return billboards.data
  } catch (error) {
    console.log(`Get billboards error: ${(error as AxiosError).message}`)
    return []
  }
}

export { getBillboard, getBillboards }
