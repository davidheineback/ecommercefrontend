import React, { useState } from 'react'
import styled from 'styled-components'
import slugify from 'slugify'
import { Link } from 'react-router-dom'
import Button from '../Utilities/Button.js'
import BurgerButton from '../Utilities/BurgerButton.js'

const StyledHeader = styled.div`
position: fixed;
top: 0;
width: 100%;
background-color: ${props => props.theme.colors.headerBackground};
margin: 0;
left: 0;
padding: 4rem 1rem;
padding-bottom: 5px;
text-align: ${props => props.align || "center"};
`

const categories = ["First", "Second", "Third"]

function Header( { size, onScroll } ) {
  const [active, setActive] = useState(false)
  
  if (size > 500) {
    return (
      <StyledHeader>
        {categories.map((category, index) => {
            return (
              <Link to={'/'+ slugify(category, {
                lower: true
              })} key={index}>
              <Button
                btnType="headerBtn"
                key={index}>
                  {category}
              </Button>
              </Link>
            )
      })}
      </StyledHeader> 
    )
  } else {
  return (
    <StyledHeader align="left">
    <BurgerButton isActive={active} setActive={setActive} />
    </StyledHeader>
  )
}
}

export default Header

