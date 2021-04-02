import React from 'react'
import styled from 'styled-components'
import ProductImage from '../Utilities/ProductImage.js'
import ProductDetails from '../Utilities/ProductDetails.js'


const StyledProduct = styled.div`
width: 260px;
height: 300px;
background: ${props => props.theme.colors.cardColor};
display: inline-block;
margin: 20px;
text-align: left;
font-size: 10px;
z-index: 0;
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
