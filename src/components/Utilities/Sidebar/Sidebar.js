import React from 'react'
import { StyledSideBar } from './SidebarStyles'
import { DivButton } from '../UtilitiesExporter'


function SideBar({ categories }) {
  return (
    <StyledSideBar small>
    {categories.map((category, index) => {
            return (  
            <DivButton
            sideBar={true}
            useDropdown={true}
            btnType="headerBtn"
            mainCategory={category}
            subCategories={category.subs}
            key={'headerbtn'+index}>
            </DivButton>
            )
      })}
    </StyledSideBar>
  )
}

export default SideBar
