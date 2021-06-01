import React from 'react'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import ProductInCheckout from '../../Product/ProductInCheckout'
import { Wrapper, Button } from '../../Utilities/UtilitiesExporter'
import { Redirect, Link } from 'react-router-dom'
import {  StyledCartContainer,StyledCartHeaders, StyledCartGrid, StyledCartFooter } from './CartStyles'

function Checkout() {
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
      itemsInCart.map((item, index) => <ProductInCheckout key={index}>{item}</ProductInCheckout>)
      : (
        setEmptyCartFlash(true),
        <Redirect to={currentSlug}/>
        )}
    <StyledCartFooter big>
      <StyledCartGrid itemName>Grand Total:</StyledCartGrid>
      <StyledCartGrid numberOfItems>{numberOfItemsInCart}</StyledCartGrid>
      <StyledCartGrid totalPrice>{totalPriceOfItemsInCart}kr</StyledCartGrid>
    </StyledCartFooter>
    <Link to='/cart'>    
    <Button btnType="primary">Back to cart</Button>
    </Link> 
    <Button btnType={'disabled'}>Payment</Button>
    </StyledCartContainer>
    </Wrapper>
  )
}

export default Checkout
