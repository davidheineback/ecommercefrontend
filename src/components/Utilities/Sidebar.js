import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../Utilities/Button.js'
import slugify from 'slugify'


const StyledSideBar = styled.div`
  background: black;
  height: 100vh;
  width: 35vw;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 150px;
`

function SideBar({ categories }) {
  return (
    <StyledSideBar>
    {categories.map((category, index) => {
            return (  
              <Link to={'/'+ slugify(category.name, {
                lower: true
              })} key={index}>
              <Button
                btnType="headerBtn"
                key={index}>
                  {category.name}
              </Button>
              </Link>
            )
      })}
    </StyledSideBar>
  )
}

export default SideBar
