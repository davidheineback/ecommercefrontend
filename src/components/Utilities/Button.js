import styled from 'styled-components'
import React, { useState } from 'react'
import Dropdown from './Dropdown.js'

export const StyledButton = styled.button`
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
@media screen and (max-width: 800px) {
  padding: 0.5rem 0.3rem;
  min-width: 200px;
}

${props => props.btnType === 'primary' && {
  minWidth: "280px",
  width: "fit-content",
  marginTop: "10px",
  marginLeft: "5px",
  marginRight: "5px",
  background: props.theme.colors.main,
  color: props.theme.fontColors.main,
  ":hover": {
    background: props.theme.colors.mainHover,
    color: props.theme.fontColors.mainHover,
  }
}}

${props => props.btnType === 'addedProduct' && {
  minWidth: "280px",
  width: "fit-content",
  background: props.theme.colors.addToCart,
  color: props.theme.fontColors.main,
  ":hover": {
    background: props.theme.colors.addToCart,
    color: props.theme.fontColors.mainHover,
  }
}}

${props => props.btnType === 'disabled' && {
  background: "grey",
  color: props.theme.fontColors.main,
  ":disabled": true,
  ":hover": {
    background: "grey",
    color: props.theme.fontColors.main,
  }
}}

${props => props.btnType === 'counterBtn' && {
  background: props.theme.colors.main,
  width: "40px",
  height: "40px",
  margin: "5px",
  color: props.theme.fontColors.main,
  ":hover": {
    background: props.theme.colors.mainHover,
    color: props.theme.fontColors.mainHover,
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

${props => props.btnType === 'dropdownBtn' && {
  background: 'none',
  color: props.theme.fontColors.headerNav,
  borderRadius: "none",
  fontSize: "14px",
  padding: "10px",
  paddingLeft: "30px",
  paddingRight: "30px",
  zIndex: "100",
  ":hover": {
    background: "none",
    color: "grey"
  }
}}

${props => props.btnType === 'dropdownMainBtn' && {
  background: 'none',
  color: props.theme.fontColors.headerNav,
  borderRadius: "0",
  fontSize: "12px",
  padding: "5px",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderBottom: `3px solid ${props.theme.colors.main}`,
  zIndex: "100",
  ":hover": {
    background: "none",
    color: "grey"
  }
}}

`

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

