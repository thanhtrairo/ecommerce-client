import { AxiosError } from 'axios'

import { httpRequest } from '~/lib/httpRequest'
import { TCategory } from '~/lib/types'

const getCategories = async (): Promise<TCategory[]> => {
  try {
    const categories = await httpRequest.get(`/categories`)
    return categories.data
  } catch (error) {
    console.log(`Get categories error: ${(error as AxiosError).message}`)
    return []
  }
}

const getCategory = async (id: string): Promise<TCategory | null> => {
  try {
    const category = await httpRequest.get(`/categories/${id}`)
    return category.data
  } catch (error) {
    console.log(`Get category error: ${(error as AxiosError).message}`)
    return null
  }
}

export { getCategories, getCategory }
