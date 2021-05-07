import React from 'react'
import { ProductImage } from '../Utilities/UtilitiesExporter'
import { StyledItemContainer, StyledDetails, StyledDetailsContainer } from './ProductStyles'

function ProductInDashboard({ children }) {
  const product = children

  return (
    <StyledItemContainer big dashboard>
      <ProductImage src={product.image} description={product.description} type='smallCart'/>
      <StyledDetailsContainer big>
        <StyledDetails itemName>{product.name}</StyledDetails>
        </StyledDetailsContainer>
    </StyledItemContainer>
  )
}

export default ProductInDashboard
