import axios, { AxiosError } from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const httpRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { httpRequest }
