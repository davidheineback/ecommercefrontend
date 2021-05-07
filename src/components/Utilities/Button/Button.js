import React, { useState } from 'react'
import { StyledButton } from './ButtonStyles'
import { Dropdown } from '../UtilitiesExporter'

function Button({ useDropdown, mainCategory, subCategories, btnType, onClick, children }) {
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
    <StyledButton
      type="button"
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={hideDropdown}
      btnType={btnType}>
      {mainCategory}
      {children}
      {useDropdown && <Dropdown position={dropdownPlacement} mainCategory={mainCategory} toggleDisplay={renderDropdown}>{subCategories}</Dropdown>} 
      </StyledButton>
  )
}

export default Button

