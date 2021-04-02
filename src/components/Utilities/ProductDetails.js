import React from 'react'
import styled from 'styled-components'

const StyledProductDetails = styled.div`
margin-left: 10px;
margin-top: 10px;
font-size: 15px;
`

function ProductDetails({ children }) {
  return (
    <StyledProductDetails>
      {children.name}
      {children.price}
      {children.description}
    </StyledProductDetails>
  )
}

export default ProductDetails
