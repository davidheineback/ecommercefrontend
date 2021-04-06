import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const { mainCategory, subCategory, productId } = useParams();
  return (
    <div>
      {console.log(mainCategory)}
      {console.log(subCategory)}
      {console.log(productId)}
    </div>
  )
}

export default ProductPage
