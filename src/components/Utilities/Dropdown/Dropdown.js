import React from 'react'
import { Link } from 'react-router-dom'
import { StyledDropdown } from './DropdownStyles'
import { Button } from '../UtilitiesExporter'

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
