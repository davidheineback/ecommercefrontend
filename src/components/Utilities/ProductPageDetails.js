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

${props => props.description && {
  fontWeight: "500",
  fontSize: "14px",
  maxWidth: "fit-content",
  textTransform: "uppercase",
  marginTop: "0",
  cursor: "pointer"
}}

${props => props.toggleDetailedDescription && {
  visibility: "hidden"
}}

${props => props.glassbox && {
  position: "absolute",
  padding: "1rem",
  maxWidth: "300px",
  minHeight: "80px",
  background: "linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%)",
  backdropFilter: "brightness(150%) saturate(150%) blur(5px)",
  backgroundClip: "padding-box",
  boxShadow: "rgba(0,0,0, 0.3) 0px 20px 30px",
  zIndex: "100000",
  color: "black",
  fontWeight: "900",
  fontSize: "16px",
  transform: "translateY(-50px)"
}}

${props => props.price && {
  color: props.theme.fontColors.dark,
  fontWeight: "600",
  fontSize: "24px",
}}
`


function ProductPageDetails({ children }) {
  const [toggleDetailedDescription, setToggleDetailedDescription] = useState(false)

  const displaySettings = {
    display: !toggleDetailedDescription && 'none'
  }

  
  return (
    <>
      <StyledProductDetails productname>{children.name}</StyledProductDetails>
      <StyledProductDetails brand>{children.brand}</StyledProductDetails>
      <StyledProductDetails
        description
        onMouseEnter={() => setToggleDetailedDescription(true)}
        toggleDetailedDescription={toggleDetailedDescription}
        >
          <>{children.description} <Dot info>i</Dot></>
      </StyledProductDetails>
      <StyledProductDetails
        style={displaySettings}
        glassbox
        onMouseLeave={() => setToggleDetailedDescription(false)}>
          {children.detailedDescription}
      </StyledProductDetails>
      <StyledProductDetails price>{children.price}kr
      </StyledProductDetails>
    </>
  )
}

export default ProductPageDetails
