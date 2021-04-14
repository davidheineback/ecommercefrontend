import React from 'react'
import styled from 'styled-components'

const StyledProductDetails = styled.div`
margin-left: 10px;
margin-top: 10px;
font-size: 15px;


${props => props.productname && {
  color: props.theme.fontColors.dark,
  textTransform: "uppercase",
  fontWeight: "700"
}}

${props => props.brand && {
  color: props.theme.fontColors.dark,
  textTransform: "uppercase",
  fontWeight: "500",
  fontSize: "12px",
  marginTop: "0"
}}

${props => props.decription && {
  color: props.theme.fontColors.dark,
  textTransform: "uppercase",
  fontWeight: "500",
  fontSize: "10px",
  marginTop: "0",
}}

${props => props.price && {
  color: props.theme.fontColors.dark,
  position: "relative",
  transform: "translate(70%)",
  fontWeight: "700",
  fontSize: "20px",
  marginTop: "0",
}}
`

function ProductDetails({ productPage, children }) {
  return (
      <>
      <StyledProductDetails productname>{children.name}</StyledProductDetails>
      <StyledProductDetails brand>{children.brand}</StyledProductDetails>
      <StyledProductDetails decription>{children.description}</StyledProductDetails>
      {!productPage && <StyledProductDetails productPage={productPage} price>{children.price}kr
      </StyledProductDetails>}

      </>
  )
}

export default ProductDetails
