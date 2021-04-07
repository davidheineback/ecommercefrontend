import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const { mainCategory, subCategory, productId } = useParams()
  console.log(mainCategory, subCategory, productId)
  
  return (
    <div>
    </div>
  )
}

export default ProductPage
