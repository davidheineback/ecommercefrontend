import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumbs, Wrapper, ProductImage } from '../Utilities/UtilitiesExporter'
import { getProductById } from '../../fetch.js'

function ProductPage() {
  const { mainCategory, subCategory, productId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    getProductById(productId, setProduct)},[productId])

  return (
    <Wrapper flex='bigFlex'>
      <Breadcrumbs itemNr={productId}>{[mainCategory, subCategory, product.name]}</Breadcrumbs>
      <ProductImage url={product.image} description={product.description} type='productPage'/>
    </Wrapper>
  )
}

export default ProductPage
