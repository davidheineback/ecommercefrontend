import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import slugify from 'slugify'
import { Link } from 'react-router-dom'
import Button from '../Utilities/Button.js'
import BurgerButton from '../Utilities/BurgerButton.js'
import Sidebar from '../Utilities/Sidebar.js'

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

  const handleActive = useCallback(
    (e) => {
      e = !active
      setActive(e)
    },
    [active, setActive],
  )


  if (size > 800) {
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
    <>
    <StyledHeader>
    <BurgerButton isActive={active} onBurgerClick={handleActive}/>
    </StyledHeader>
    {active && (<Sidebar categories={categories}/>)}
    </>
  )
}
}

export default Header

