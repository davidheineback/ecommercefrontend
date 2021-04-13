import React from 'react'
import styled from 'styled-components'
import { ProductImage, ProductDetails } from '../Utilities/UtilitiesExporter'

const StyledProduct = styled.div`
width: 260px;
height: 360px;
background: ${props => props.theme.colors.cardColor};
border-left: 1px solid ${props => props.theme.colors.cardColor};
text-align: left;
font-size: 10px;
z-index: -10;
&:hover{
  border-left: 1px solid ${props => props.theme.colors.main};
  box-shadow: 4px 4px 4px ${props => props.theme.colors.main};
}
`

function ProductCard({ children }) {
  return (
    <StyledProduct>
      <ProductImage url={children.image}/>
      <ProductDetails>{children}</ProductDetails>
    </StyledProduct>
  )
}


export default ProductCard
