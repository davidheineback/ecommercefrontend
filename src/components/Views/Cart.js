import React from 'react'
import styled from 'styled-components'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import { Wrapper } from '../Utilities/UtilitiesExporter'
import { Redirect } from 'react-router-dom'

const StyledCartContainer = styled.div`
border: 2px solid black;
width: 70%;
`

function Cart() {
const { currentSlug, itemsInCart, setEmptyCartFlash } = React.useContext(GlobalStateContext)
  return (
    <Wrapper flex='bigFlex'>
    <StyledCartContainer>
      {itemsInCart.length > 0 ? <div>KÖP</div>
      : (
        setEmptyCartFlash(true),
        <Redirect to={currentSlug}/>
        )}
    </StyledCartContainer>
    </Wrapper>
  )
}

export default Cart
