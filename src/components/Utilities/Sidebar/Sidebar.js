import React from 'react'
import { StyledSideBar } from './SidebarStyles'
import { StyledLink } from '../../Header/StyledHeader'
import { DivButton } from '../UtilitiesExporter'


function SideBar({ categories }) {
  return (
    <StyledSideBar small>
    {categories.map((category, index) => {
            return (  
            <StyledLink key={index} to={`./${category.searchurl}`} >
            <DivButton
            sideBar={true}
            useDropdown={false}
            btnType="headerBtn"
            mainCategory={category}
            subCategories={category.subs}
            key={'headerbtn'+index}>
            </DivButton>
            </StyledLink>
            )
      })}
    </StyledSideBar>
  )
}

export default SideBar
