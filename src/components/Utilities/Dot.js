import React from 'react'
import styled from 'styled-components'

const StyledDot = styled.div`
display: inline-flex;
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
margin-left: 10px;
z-index: 10;
justify-content: center;
text-align: center;
text-transform: lowercase;

${props => props.arrowDirection === 'down' && {
  transform: "translate(210px, -10px) rotate(-90deg)",
}}

${props => props.arrowDirection === 'up' && {
  transform: "translate(210px, -10px) rotate(90deg)",
}}
`
function Dot({ onClick, arrowDirection, children }) {
  return (
    <StyledDot onClick={onClick} arrowDirection={arrowDirection}>
      {children}
    </StyledDot>
  )
}

export default Dot
