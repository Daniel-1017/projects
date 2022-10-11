import React from 'react'

import { useParams } from 'react-router-dom'

const StockDetailsPage = () => {
  const { symbol } = useParams()

  return (
    <div>StockDetailsPage {symbol}</div>
  )
}

export default StockDetailsPage