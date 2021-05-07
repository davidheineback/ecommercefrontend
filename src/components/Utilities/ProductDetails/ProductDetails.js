import React from 'react'
import { StyledProductDetails } from './ProductDetailsStyles'

function ProductDetails({ productPage, children }) {
  return (
      <>
      <StyledProductDetails productname>{children.name}</StyledProductDetails>
      <StyledProductDetails brand>{children.brand}</StyledProductDetails>
      <StyledProductDetails decription>{children.description}</StyledProductDetails>
      <StyledProductDetails productPage={productPage} price>{children.price}kr
      </StyledProductDetails>
      </>
  )
}

export default ProductDetails
