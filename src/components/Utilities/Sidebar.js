import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import Button from './Button'
import { DivButton } from './UtilitiesExporter'


const StyledSideBar = styled.div`
  background: black;
  height: 100vh;
  width: 30vw;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 108px;
  z-index: 500;
  text-align: center;

  @media screen and (min-width: 600px) {
  ${props => props.small && {
  display: "none"
}}
}
`

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
