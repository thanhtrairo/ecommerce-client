export type TProduct = {
  id: string
  category: TCategory
  name: string
  price: string
  isFeatured: boolean
  size: TSize
  color: TColor
  images: TImage[]
}

export type TImage = {
  id: string
  url: string
}

export type TBillboard = {
  id: string
  label: string
  imageUrl: string
}

export type TCategory = {
  id: string
  name: string
  billboard: TBillboard
}

export type TSize = {
  id: string
  name: string
  value: string
}

export type TColor = {
  id: string
  name: string
  value: string
}
