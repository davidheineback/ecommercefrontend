import React from 'react'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import ProductInCart from '../../Product/ProductInCart'
import { Wrapper, Button } from '../../Utilities/UtilitiesExporter'
import { Redirect, Link } from 'react-router-dom'
import {  StyledCartContainer,StyledCartHeaders, StyledCartGrid, StyledCartFooter } from './CartStyles'

function Cart() {
const { currentSlug, itemsInCart, setEmptyCartFlash } = React.useContext(GlobalStateContext)

const numberOfItemsInCart = [...itemsInCart].reduce((total, obj) => obj.numberInCart + total,0)
const totalPriceOfItemsInCart = [...itemsInCart].reduce((total, obj) => obj.product.price * obj.numberInCart + total,0)

  return (
    <Wrapper flex='bigFlex'>
    <StyledCartContainer>
      <StyledCartHeaders big>
        <StyledCartGrid itemName>Name:</StyledCartGrid>
        <StyledCartGrid numberOfItems>Amount of item:</StyledCartGrid>
        <StyledCartGrid totalPrice>Total price:</StyledCartGrid>
      </StyledCartHeaders>
      {itemsInCart.length > 0 ?
      itemsInCart.map((item, index) => <ProductInCart key={index}>{item}</ProductInCart>)
      : (
        setEmptyCartFlash(true),
        <Redirect to={currentSlug}/>
        )}
    <StyledCartFooter big>
      <StyledCartGrid itemName>Grand Total:</StyledCartGrid>
      <StyledCartGrid numberOfItems>{numberOfItemsInCart}</StyledCartGrid>
      <StyledCartGrid totalPrice>{totalPriceOfItemsInCart}kr</StyledCartGrid>
    </StyledCartFooter>
    <Link to={currentSlug}>    
    <Button btnType="primary">Back to shop</Button>
    </Link>
    <Button btnType="primary">Proceed to checkout</Button>
    </StyledCartContainer>
    </Wrapper>
  )
}

export default Cart
