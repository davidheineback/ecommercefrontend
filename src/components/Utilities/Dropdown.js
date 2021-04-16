import styled from 'styled-components'
import Button from './Button'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledDropdown = styled.div`
position: absolute;
width: 20vw;
min-height: 15vh;
border-bottom: 5px solid ${props => props.theme.colors.main};
left: ${props => props.placement.left};
top: ${props => props.placement.top};
background-color: ${props => props.theme.colors.headerBackground};
color: ${props => props.theme.fontColors.main};
display: ${props => props.toggleDisplay ? 'flex' : 'none'};
flex-direction: column;
transform: translate(-37%, 5%);
z-index: 100;

${props => props.sideBar && {
  width: "300px",
  left: "0",
  transform: "translate(40%, -25%)",
  textAlign: "center"
}}
`

function Dropdown({ sideBar, position, mainCategoryName, mainCategory, toggleDisplay, children }) {
  return (
    <StyledDropdown sideBar={sideBar} key='styleddropdown' placement={position} toggleDisplay={toggleDisplay}>
        <Link key={'mainLink'} to={`/${mainCategory}`}>
          <Button key={'dropdownMainbtn'} btnType="dropdownMainBtn">{mainCategoryName}</Button>
        </Link>
      {children.map((child, index) => {
        return (
          <Link key={'dropdownlink'+index} to={`/${mainCategory}/${child.searchurl}`}>
          <Button key={'dropdownbtn'+{index}} btnType="dropdownBtn">{child.name}</Button>
          </Link>
        )
      })}
    </StyledDropdown>
  )
}

export default Dropdown
