import React from 'react'
import styled from 'styled-components'
import { ProductImage, ProductDetails } from '../Utilities/UtilitiesExporter'

const StyledProduct = styled.div`
width: 260px;
height: 360px;
background: ${props => props.theme.colors.cardColor};
border-top: 1px solid ${props => props.theme.colors.cardColor};
border-left: 1px solid ${props => props.theme.colors.cardColor};
text-align: left;
transition: transform .4s;
font-size: 10px;
&:hover{
  border-left: 1px solid ${props => props.theme.colors.main};
  border-top: 1px solid ${props => props.theme.colors.main};
  box-shadow: 4px 4px 4px ${props => props.theme.colors.main};
  transform: scale(1.1) translateY(-10px);
  transition: transform .4s;
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
