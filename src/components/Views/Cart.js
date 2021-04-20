import React from 'react'
import styled from 'styled-components'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import ProductInCart from '../Product/ProductInCart'
import { Wrapper, Button } from '../Utilities/UtilitiesExporter'
import { Redirect, Link } from 'react-router-dom'

const StyledCartContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
width: 100%;
`
const StyledCartHeaders = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
grid-template-columns: "1fr 1fr 1fr";
grid-template-areas:
"productName numberOfItems totalPrice";
text-align: center;

@media screen and (max-width: 800px) {
  ${props => props.big && {
  display: "none"
}}
}
`
const StyledCartFooter = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
padding-bottom: 10px;
border-bottom: 1px solid lightgray;
grid-template-columns: "1fr 1fr 1fr";
grid-template-areas:
"productName numberOfItems totalPrice";
text-align: center;

@media screen and (max-width: 800px) {
  ${props => props.big && {
  display: "none"
}}
}
`

const StyledCartGrid = styled.div`
text-transform: uppercase;
font-size: 16px;
font-weight: 700;


${props => props.itemName && {
  gridArea: 'productName',
  transform: "translateX(100px)"
}}
${props => props.numberOfItems && {
  gridArea: 'numberOfItems',
  transform: "translateX(65px)"
}}
${props => props.totalPrice && {
  gridArea: 'totalPrice',
  transform: "translateX(45px)"
}}
`



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
