import React, { useState } from 'react'
import { StyledDivButton } from './DivButtonStyles'
import { Dropdown }from '../UtilitiesExporter'

function DivButton({ sideBar, useDropdown, mainCategory, subCategories, btnType, children }) {
const [renderDropdown, setRenderDropdown] = useState(false)
const [dropdownPlacement, setDropdownPlacement] = useState({ left: '', top: '' })

const handleHover = (e) => {
  setRenderDropdown(true)
  setDropdownPlacement({left: e.clientX, top: e.clientY})
}

const hideDropdown = (e) => {
  setRenderDropdown(false);
}

  return (
    <StyledDivButton
      type="button"
      onMouseEnter={handleHover}
      onMouseLeave={hideDropdown}
      btnType={btnType}>
      {mainCategory.name}
      {children}
      {useDropdown && <Dropdown position={dropdownPlacement} sideBar={sideBar} mainCategoryName={mainCategory.name} mainCategory={mainCategory.searchurl} toggleDisplay={renderDropdown}>{subCategories}</Dropdown>} 
      </StyledDivButton>
  )
}

export default DivButton

