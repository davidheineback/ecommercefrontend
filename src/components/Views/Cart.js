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

function Cart() {
const { currentSlug, itemsInCart, setEmptyCartFlash } = React.useContext(GlobalStateContext)
  return (
    <Wrapper flex='bigFlex'>
    <StyledCartContainer>
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
