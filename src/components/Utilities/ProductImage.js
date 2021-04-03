import React from 'react'
import styled from 'styled-components'

const StyledProductImage = styled.img`
background: white;
width: 100%;
height: 75%;
appearance: none;
border: 0;
box-shadow: none;
cursor: pointer;
`


function ProductImage() {
  return (
    <StyledProductImage/>
  )
}

export default ProductImage
