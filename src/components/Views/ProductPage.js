import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const { mainCategory, subCategory, productId } = useParams()
  return (
    <div>
    </div>
  )
}

export default ProductPage
