import React from 'react'
import { ProductImage } from '../Utilities/UtilitiesExporter'
// import { GlobalStateContext } from '../GlobalState/GlobalState'
import { StyledItemContainer, StyledDetails, StyledDetailsContainer, StyledCounter, StyledNumber } from './ProductStyles'

function ProductInCheckout({ children }) {
  // const { itemsInCart, setItemsInCart } = React.useContext(GlobalStateContext)
  const price = children.product.price * children.numberInCart

  return (
    <StyledItemContainer big>
      <ProductImage src={children.product.image} description={children.description} type='smallCart'/>
        <StyledDetailsContainer big>
          <StyledDetails itemName>{children.product.name}</StyledDetails>
          <StyledDetails numberOfItems>
          <StyledCounter>
            <StyledNumber>{children.numberInCart}</StyledNumber>
          </StyledCounter>
          </StyledDetails>
          <StyledDetails price>{price}kr</StyledDetails>
        </StyledDetailsContainer>
    </StyledItemContainer>
  )
}

export default ProductInCheckout
