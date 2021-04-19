import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Flash } from './ViewsExporter'
import { Breadcrumbs, Wrapper, ProductImage, ProductPageDetails } from '../Utilities/UtilitiesExporter'
import ProductActions from '../Product/ProductActions'
import { getProductById } from '../../fetch.js'


function ProductPage({ size }) {
  const { mainCategory, subCategory, productId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    getProductById(productId, setProduct)},[productId])

  return (
    <Wrapper flex='bigFlex'>
      <Breadcrumbs itemNr={productId}>{[mainCategory, subCategory, product.name]}</Breadcrumbs>
      <Flash/>
      <ProductImage src={product.image} description={product.description} type='productPage'/>
      <Wrapper size={size} productDetails>
      <ProductPageDetails>{product}</ProductPageDetails>
      <ProductActions>{product}</ProductActions>
      </Wrapper>
    </Wrapper>
  )
}

export default ProductPage
