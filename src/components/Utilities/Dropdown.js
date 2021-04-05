import styled from 'styled-components'
import Button from './Button'
import React from 'react'
import slugify from 'slugify'
import { Link } from 'react-router-dom'

const StyledDropdown = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 20vw;
min-height: 30vh;
border-bottom: 5px solid ${props => props.theme.colors.main};
left: ${props => props.placement.left};
top: ${props => props.placement.top};
background-color: ${props => props.theme.colors.headerBackground};
color: ${props => props.theme.fontColors.main};
display: ${props => props.toggleDisplay ? 'block' : 'none'};
transform: translate(-40%, 5%);
z-index: 100;
`

function Dropdown({ position, mainCategory, toggleDisplay, children }) {
  return (
    <StyledDropdown key='styleddropdown' placement={position} toggleDisplay={toggleDisplay}>
      {children.map((child, index) => {
        return (
          <Link key={'dropdownlink'+index} to={'/'+
          slugify(mainCategory, {lower: true})
          + '/' +
          slugify(child.name, {lower: true})
          }>
          <Button key={'dropdownbtn'+{index}} btnType="dropdownBtn">{child.name}</Button>
          </Link>
        )
      })}
    </StyledDropdown>
  )
}

export default Dropdown
