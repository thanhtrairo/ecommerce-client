import { AxiosError } from 'axios'

import { httpRequest } from '~/lib/httpRequest'
import { TProduct } from '~/lib/types'

type Query = {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<TProduct[]> => {
  try {
    const { categoryId, colorId, isFeatured, sizeId } = query
    const products = await httpRequest.get('/products', {
      params: {
        categoryId,
        colorId,
        sizeId,
        isFeatured,
      },
    })
    return products.data
  } catch (error) {
    console.log(`Get products error: ${(error as AxiosError).message}`)
    return []
  }
}

const getProduct = async (id: string): Promise<TProduct | null> => {
  try {
    const products = await httpRequest.get(`/products/${id}`)
    return products.data
  } catch (error) {
    console.log(`Get product error: ${(error as AxiosError).message}`)
    return null
  }
}

export { getProducts, getProduct }
