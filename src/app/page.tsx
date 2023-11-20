import ProductList from '~/components/product-list'
import Billboard from '~/components/ui/billboard'
import Container from '~/components/ui/container'
import { getBillboards } from '~/services/billboard-service'
import { getProducts } from '~/services/product-service'

const HomePage = async () => {
  const [billboard] = await getBillboards({ isLatest: true })
  const products = await getProducts({})

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  )
}

export default HomePage
