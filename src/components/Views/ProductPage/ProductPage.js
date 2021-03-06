import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Flash } from '../ViewsExporter'
import { Breadcrumbs, Wrapper, ProductImage, ProductPageDetails, Loader } from '../../Utilities/UtilitiesExporter'
import ProductActions from '../../Product/ProductActions'
import { getProductById } from '../../../fetch.js'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
  

function ProductPage() {
  const { mainCategory, subCategory, productId } = useParams()
  const [product, setProduct] = useState([])
  const { isLoading, setIsLoading} = React.useContext(GlobalStateContext)

  useEffect(() => {
    setIsLoading(true)
    getProductById(productId, setProduct, setIsLoading)},[productId, setIsLoading])

  return (
    isLoading ?
    <Wrapper flex='bigFlex'>
      <Loader/>
    </Wrapper>
    :<Wrapper flex='bigFlex'>
      <Breadcrumbs itemNr={productId}>{[mainCategory, subCategory, product.name]}</Breadcrumbs>
      <Flash/>
      <ProductImage src={product.image} description={product.description} type='productPage'/>
      <Wrapper productDetails>
      <ProductPageDetails>{product}</ProductPageDetails>
      <ProductActions>{product}</ProductActions>
      </Wrapper>
    </Wrapper>
  )
}

export default ProductPage
