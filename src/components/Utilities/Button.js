import styled from 'styled-components'
import React from 'react'

const StyledButton = styled.button`
appearance: none;
border: 0;
border-radius: 100px;
box-shadow: none;
cursor: pointer;
font-weight: 700;
letter-spacing: 2px;
padding: 1rem 1rem;
text-transform: uppercase;
&:hover {
background: ${props => props.theme.colors.mainHover};
color: ${props => props.theme.fontColors.mainHover};
}


${props => props.btnType === 'primary' && {
  background: props.theme.colors.main,
  color: props.theme.fontColors.main,
  ":hover": {
    background: "white",
    color: "red"
  }
}}

${props => props.btnType === 'headerBtn' && {
  background: 'none',
  color: props.theme.fontColors.headerNav,
  borderRadius: "none",
  ":hover": {
    background: "none",
    color: "grey"
  }
}}
`

function Button({ btnType, children }) {
  return (
    <StyledButton btnType={btnType}>{children}</StyledButton>
  )
}

export default Button

