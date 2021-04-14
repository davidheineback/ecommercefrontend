import React from 'react'
import styled from 'styled-components'

const StyledProductImage = styled.img`
background: white;
width: 100%;
height: 75%;
appearance: none;
border: 0;
box-shadow: none;
cursor: pointer;

${props => props.type === 'productPage' && {
  minWidth:"350px",
  width: "30vw",
  height: "40vh",
  transform: "translateY(-10px)",
  transition: "transform .4s",
  boxShadow: `4px 4px 4px ${props.theme.colors.main}`,
  ":hover": {
    boxShadow: `4px 4px 4px ${props.theme.colors.main}`,
    transform: "scale(1.1) translateY(-10px)",
    transition: "transform .4s"
  }
}}
`


function ProductImage({ url, description, type }) {
  return (
    <StyledProductImage src={url} alt={description} type={type}/>
  )
}

export default ProductImage
