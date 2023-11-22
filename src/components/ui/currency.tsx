'use client'

import { useMounted } from '~/hooks'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

type CurrencyProps = {
  value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
  const { isMounted } = useMounted()

  if (!isMounted) {
    return null
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>
}

export default Currency
