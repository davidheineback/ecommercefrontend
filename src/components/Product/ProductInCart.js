import React from 'react'
import { Dot, ProductImage } from '../Utilities/UtilitiesExporter'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import { StyledItemContainer, StyledDetails, StyledDetailsContainer, StyledCounter, StyledNumber } from './ProductStyles'

function ProductInCart({ children }) {
  const { itemsInCart, setItemsInCart } = React.useContext(GlobalStateContext)
  const price = children.product.price * children.numberInCart

  return (
    <StyledItemContainer big>
      <ProductImage src={children.product.image} description={children.description} type='smallCart'/>
      <StyledDetailsContainer big>
        <StyledDetails itemName>{children.product.name}</StyledDetails>
        <StyledDetails numberOfItems>
        <StyledCounter>
              <Dot
              onClick={() => {
                const currentIndex  = itemsInCart.findIndex(product => product.product.itemNr === children.product.itemNr)
                const newArray = [...itemsInCart]
                if (newArray[currentIndex].numberInCart > 1) {
                  newArray[currentIndex].numberInCart -= 1
                  setItemsInCart(newArray)
                } else {
                  const removeItemFromCart = newArray.filter(item => item.product.itemNr !== children.product.itemNr)
                  setItemsInCart(removeItemFromCart)
                }
              }}
              btnType={children.numberInCart <= 1 && 'dangerBtn'}>{children.numberInCart > 1 ? '-' : 'x' }</Dot>
              <StyledNumber>{children.numberInCart}</StyledNumber>
              <Dot
              onClick={() => {
                const currentIndex  = itemsInCart.findIndex(product => product.product.itemNr === children.product.itemNr)
                const newArray = [...itemsInCart]
                newArray[currentIndex].numberInCart += 1
                setItemsInCart(newArray)
              }}>+</Dot>
              </StyledCounter>
          </StyledDetails>
        <StyledDetails price>{price}kr</StyledDetails>
        </StyledDetailsContainer>
    </StyledItemContainer>
  )
}

export default ProductInCart
