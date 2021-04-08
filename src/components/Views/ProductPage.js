import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../Utilities/UtilitiesExporter'
import ProductCard from '../Product/ProductCard'
import { getProductById } from '../../fetch.js'

function ProductPage() {
  const { mainCategory, subCategory, productId } = useParams()
  console.log(mainCategory, subCategory, productId)
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getProductById(productId, setProduct, setIsLoading) },[productId])

    if (isLoading) {
      return <Wrapper flex/>
    }

  return (
    <Wrapper flex>
      <ProductCard item={product.itemNr} key={product.itemNr}>{product}</ProductCard>
    </Wrapper>
  )
}

export default ProductPage
