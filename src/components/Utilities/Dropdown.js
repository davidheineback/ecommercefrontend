import styled from 'styled-components'
import Button from './Button'
import React from 'react'

const StyledDropdown = styled.div`
position: absolute;
width: 20vw;
min-height: 30vh;
border-bottom: 4px solid ${props => props.theme.colors.main};
left: ${props => props.placement.left};
top: ${props => props.placement.top};
background-color: ${props => props.theme.colors.headerBackground};
color: ${props => props.theme.fontColors.main};
display: ${props => props.display ? 'block' : 'none'};
transform: translate(-40%, 5%);
`

function Dropdown({ position, toggleDisplay, children }) {
  return (
    <StyledDropdown placement={position} display={toggleDisplay}>
      {children.map(child => {
        return (
          <Button btnType="dropdownBtn">{child}</Button>
        )
      })}
    </StyledDropdown>
  )
}

export default Dropdown
