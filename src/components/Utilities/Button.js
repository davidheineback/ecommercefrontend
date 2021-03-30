import styled from 'styled-components'
import React from 'react'

const StyledButton = styled.button`
background: ${props => props.primary ? "black" : props.theme.colors.main};
color: ${props => props.primary ? "white" : "black"};
appearance: none;
border: 0;
border-radius: 100px;
box-shadow: none;
cursor: pointer;
font-weight: 700;
letter-spacing: 2px;
margin: 1rem 2px 5px 2px;
padding: 1rem 1rem;
text-transform: uppercase;
&:hover {
background: ${props => !props.primary ? "black" : "white"};
color: ${props => !props.primary ? "white" : "black"};
}
`

function Button({ btnType, children }) {
  return (
    <StyledButton btnType={btnType}>{children}</StyledButton>
  )
}

export default Button

