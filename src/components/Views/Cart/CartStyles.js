import styled from 'styled-components'

export const StyledCartContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
width: 100%;
`
export const StyledCartHeaders = styled.div`
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

export const StyledCartFooter = styled.div`
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

export const StyledCartGrid = styled.div`
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
export const StyledShippingInfoHeader = styled.div`
text-transform: uppercase;
font-size: 16px;
font-weight: 700;
margin-top: 15px;
margin-bottom: 10px;
`
