import React from 'react'
import { ProductImage, ProductDetails } from '../Utilities/UtilitiesExporter'
import { StyledProduct } from './ProductStyles'

function ProductCard({ children }) {
  return (
    <StyledProduct>
      <ProductImage src={children.image}/>
      <ProductDetails>{children}</ProductDetails>
    </StyledProduct>
  )
}

export default ProductCard
