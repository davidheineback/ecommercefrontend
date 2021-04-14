import React, { useState } from 'react'
import styled from 'styled-components'


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
  border: "2px solid black",
  padding: "1rem"
}}

${props => props.price && {
  color: props.theme.fontColors.dark,
  fontWeight: "600",
  fontSize: "24px",
  marginTop: "10px",
}}
`

const StyledInfoBtn = styled.div`
border: 0;
border-radius: 50%;
box-shadow: none;
cursor: pointer;
font-weight: 700;
padding: 2px;
font-size: 15px;
background: ${props => props.theme.colors.main};
color: ${props => props.theme.fontColors.main};
width: 15px;
height: 15px;
z-index: 10;
justify-content: center;
text-align: center;
text-transform: lowercase;
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
      :<>{children.description} <StyledInfoBtn>i</StyledInfoBtn></>}
      </StyledProductDetails>

      <StyledProductDetails price>{children.price}kr
      </StyledProductDetails>
    </>
  )
}

export default ProductPageDetails
