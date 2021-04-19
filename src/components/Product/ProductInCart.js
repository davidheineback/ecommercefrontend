import React from 'react'
import styled from 'styled-components'
import { ProductImage } from '../Utilities/UtilitiesExporter'

const StyledItemContainer = styled.div`
border: 2px solid black;
width: 100%;
height: 90px;
text-align:left;
`

function ProductInCart({ children }) {
  return (
    <StyledItemContainer>
      <ProductImage src={children.image} description={children.description} type='smallCart'/>
      {children.name}
    </StyledItemContainer>
  )
}

export default ProductInCart
