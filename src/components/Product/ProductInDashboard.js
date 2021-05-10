import React, { useState } from 'react'
import { ProductImage } from '../Utilities/UtilitiesExporter'
import ProductEditor from './ProductEditor'
import { StyledItemContainer, StyledDetails, StyledDetailsContainer } from './ProductStyles'

function ProductInDashboard({ children }) {
  const product = children
  const [focus, setFocus] = useState(false)

  function handleFocus () {
    setFocus(!focus)
  }


  return (
    <StyledItemContainer big dashboard>
      <StyledItemContainer onClick={handleFocus}>
      <ProductImage src={product.image} description={product.description} type='smallCart'/>
      <StyledDetailsContainer big>
        <StyledDetails itemName>{product.name}</StyledDetails>
        </StyledDetailsContainer>
      </StyledItemContainer>
        <ProductEditor focus={focus} product={product}/>
        </StyledItemContainer>
  )
}

export default ProductInDashboard
