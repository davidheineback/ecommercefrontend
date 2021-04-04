import React from 'react'
import styled from 'styled-components'
import ProductImage from '../Utilities/ProductImage.js'
import ProductDetails from '../Utilities/ProductDetails.js'


const StyledProduct = styled.div`
min-width: 260px;
min-height: 360px;
background: ${props => props.theme.colors.cardColor};
margin: 20px;
text-align: left;
font-size: 10px;
border: 2px solid white;
border-bottom: 4px solid ${props => props.theme.colors.main};
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
