import React from 'react'
import styled from 'styled-components'
import { Dot, ProductImage } from '../Utilities/UtilitiesExporter'
import { GlobalStateContext } from '../GlobalState/GlobalState'

const StyledItemContainer = styled.div`
border-bottom: 1px solid lightgray;
width: 100%;
height: 90px;
text-align:center;
display: inline-flex;
&:hover {
  box-shadow: 2px 2px 2px grey;
}
`

const StyledDetailsContainer = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
grid-template-areas:
"name numberOfItems price";
`

const StyledDetails = styled.div`
margin-left: 30px;
font-size: 16px;
text-transform: uppercase;
font-weight: 600;
justify-content: center;
align-content: center;
grid-auto-flow: column;


${props => props.itemName && {
  gridArea: "name"
}}

${props => props.price && {
  textTransform: "lowercase",
  gridArea: "price"
}}

${props => props.numberOfItems && {
  fontWeight: "500",
  gridArea: "numberOfItems"
}}
`

const StyledCounter = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`
const StyledNumber = styled.div`
display: inline-flex;
position: relative;
z-index: -1;
margin-left: 8px;
width: 30px;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
backdrop-filter: brightness(150%) saturate(150%) blur(5px);
background-clip: padding-box;
color: rgba(0, 0, 0, 0.7);
`
// [Bild] , [Namn + ev. Typ], [ - Antal + ], [Pris]
//                                          [Totalt pris för samtliga]




function ProductInCart({ children }) {
  const { itemsInCart, setItemsInCart } = React.useContext(GlobalStateContext)
  return (
    <StyledItemContainer>
      <ProductImage src={children.product.image} description={children.description} type='smallCart'/>
      <StyledDetailsContainer>
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
        <StyledDetails price>{children.product.price * children.numberInCart}kr</StyledDetails>
        </StyledDetailsContainer>
    </StyledItemContainer>
  )
}

export default ProductInCart
