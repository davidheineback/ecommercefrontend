import React, { useState } from 'react'
import styled from 'styled-components'
import { Dot } from './UtilitiesExporter'


export const StyledProductDetails = styled.div`
margin-left: 10px;
margin-top: 10px;
font-size: 24px;


${props => props.productname && {
  color: props.theme.fontColors.dark,
  textTransform: "uppercase",
  fontWeight: "600"
}}

${props => props.brand && {
  color: props.theme.fontColors.dark,
  textTransform: "uppercase",
  fontWeight: "500",
  fontSize: "16px",
  marginTop: "0"
}}

${props => props.decription && {
  color: props.theme.fontColors.dark,
  fontWeight: "500",
  fontSize: "14px",
  textTransform: "uppercase",
  marginTop: "0",
  cursor: "pointer"
}}

${props => props.toggleDetailedDescription && {
  position: "relative",
  border: "2px solid transparent",
  padding: "1rem",
  width: "fit-content",
  minHeight: "50px",
  backgroundColor: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(15px)",
  backgroundClip: "padding-box",
  boxShadow: "rgba(0,0,0, 0.2) 0px 20px 30px",
  zIndex: "100000",
  color: "black",
}}

${props => props.price && {
  color: props.theme.fontColors.dark,
  fontWeight: "600",
  fontSize: "24px",
  marginTop: "10px",
}}
`


function ProductPageDetails({ children }) {
  const [toggleDetailedDescription, setToggleDetailedDescription] = useState(false)


  return (
    <>
      <StyledProductDetails productname>{children.name}</StyledProductDetails>
      <StyledProductDetails brand>{children.brand}</StyledProductDetails>
      <StyledProductDetails
      onMouseEnter={() => setToggleDetailedDescription(true)}
      onMouseLeave={() => setToggleDetailedDescription(false)}
      decription
      toggleDetailedDescription={toggleDetailedDescription}>
      {toggleDetailedDescription ? children.detailedDescription
      :<>{children.description} <Dot info>i</Dot></>}
      </StyledProductDetails>
      <StyledProductDetails price>{children.price}kr
      </StyledProductDetails>
    </>
  )
}

export default ProductPageDetails
