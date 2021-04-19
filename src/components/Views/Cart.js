import React from 'react'
import styled from 'styled-components'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import ProductInCart from '../Product/ProductInCart'
import { Wrapper, Button } from '../Utilities/UtilitiesExporter'
import { Redirect, Link } from 'react-router-dom'

const StyledCartContainer = styled.div`
border: 2px solid black;
width: 70%;
`

const StyledCartHeaders = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
grid-template-columns: "0.2fr 1fr 1fr 1fr";
grid-template-areas:
". productName numberOfItems totalPrice";
text-align: left;
`

const StyledCartGrid = styled.div`
${props => props.name && {
  gridArea: 'productName'
}}
${props => props.numberOfItems && {
  gridArea: 'numberOfItems'
}}
${props => props.totalPrice && {
  gridArea: 'totalPrice'
}}
`

function Cart() {
const { currentSlug, itemsInCart, setEmptyCartFlash } = React.useContext(GlobalStateContext)
  return (
    <Wrapper flex='bigFlex'>
    <StyledCartContainer>
      <StyledCartHeaders>
        <StyledCartGrid name>Name:</StyledCartGrid>
        <StyledCartGrid numberOfItems>Amount of item:</StyledCartGrid>
        <StyledCartGrid totalPrice>Total price:</StyledCartGrid>
      </StyledCartHeaders>
      {itemsInCart.length > 0 ?
      itemsInCart.map(item => <ProductInCart>{item}</ProductInCart>)
      : (
        setEmptyCartFlash(true),
        <Redirect to={currentSlug}/>
        )}
    <Link to={currentSlug}>    
    <Button btnType="primary">Back to shop</Button>
    </Link>
    <Button btnType="primary">Proceed to checkout</Button>
    </StyledCartContainer>
    </Wrapper>
  )
}

export default Cart
