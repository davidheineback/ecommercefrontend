import React from 'react'
import styled from 'styled-components'

const StyledProductDetails = styled.div`
margin-left: 10px;
margin-top: 10px;
font-size: 15px;

${props => props.name && {
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
  transform: "translate(75%)",
  fontWeight: "700",
  fontSize: "20px",
  marginTop: "0",
}}
`

function ProductDetails({ children }) {
  return (
    <>
    <StyledProductDetails name>{children.name}</StyledProductDetails>
    <StyledProductDetails brand>{children.brand}</StyledProductDetails>
    <StyledProductDetails decription>{children.description}</StyledProductDetails>
    <StyledProductDetails price>{children.price}kr</StyledProductDetails>
    </>
  )
}

export default ProductDetails
