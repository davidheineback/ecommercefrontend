import React from 'react'
import styled from 'styled-components'
import { ProductImage } from '../Utilities/UtilitiesExporter'

const StyledItemContainer = styled.div`
border: 2px solid black;
width: 100%;
height: 90px;
text-align:center;
display: inline-flex; 
`

const StyledDetailsContainer = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
grid-template-areas:
"1fr 1fr 1fr";
`

const StyledDetails = styled.div`
margin-left: 30px;
`
// [Bild] , [Namn + ev. Typ], [ - Antal + ], [Pris]
//                                          [Totalt pris för samtliga]


function ProductInCart({ children }) {
  return (
    <StyledItemContainer>
      <ProductImage src={children.image} description={children.description} type='smallCart'/>
      <StyledDetailsContainer>
        <StyledDetails>{children.name}</StyledDetails>
        <StyledDetails>Number of products</StyledDetails>
        <StyledDetails>{children.price}</StyledDetails>
        </StyledDetailsContainer>
    </StyledItemContainer>
  )
}

export default ProductInCart
