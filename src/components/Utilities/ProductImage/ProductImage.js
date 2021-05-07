import React from 'react'
import { StyledProductImage } from './ProductImageStyles'

function ProductImage({ src, description, type }) {
  return (
    <StyledProductImage src={src} alt={description} type={type}/>
  )
}

export default ProductImage
