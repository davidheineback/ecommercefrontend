import React from 'react'
import styled from 'styled-components'
import { ProductImage, ProductDetails } from '../Utilities/UtilitiesExporter'

const StyledProduct = styled.div`
width: 260px;
height: 360px;
background: ${props => props.theme.colors.cardColor};
text-align: left;
font-size: 10px;
border: 2px solid white;
border-bottom: 4px solid ${props => props.theme.colors.main};
z-index: -10;
&:hover{
  border: 2px solid ${props => props.theme.colors.main};
  border-bottom: 4px solid ${props => props.theme.colors.main};
}
`

function ProductCard({ children }) {
  return (
    <StyledProduct>
      <ProductImage/>
      <ProductDetails>{children}</ProductDetails>
    </StyledProduct>
  )
}


export default ProductCard
