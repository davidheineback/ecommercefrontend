import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import slugify from 'slugify'
import { Link } from 'react-router-dom'
import Button from '../Utilities/Button.js'
import BurgerButton from '../Utilities/BurgerButton.js'
import Sidebar from '../Utilities/Sidebar.js'
import CartIcon from '../Utilities/CartIcon.js'
import categories from '../../mockDB/mockCategories.js'

const StyledHeader = styled.div`
position: fixed;
top: 0;
width: 100%;
min-height: 65px;
background-color: ${props => props.theme.colors.headerBackground};
margin: 0;
left: 0;
padding: 4rem 1rem;
padding-bottom: 5px;
text-align: ${props => props.align || "center"};
`

function Header( { size, onScroll } ) {
  const [active, setActive] = useState(false)
  
  function numberOfItemsInCart () {
    return 0
  }

  const handleActive = useCallback(
    (e) => {
      e = !active
      setActive(e)
    },
    [active, setActive],
  )

  if (size > 500) {
    return (
      <StyledHeader>
        {categories.map((category, index) => {
            return (
              <>
              <Link to={'/'+ slugify(category.name, {
                lower: true
              })} key={index}>
              <Button
                useDropdown={true}
                btnType="headerBtn"
                mainCategory={category.name}
                subCategories={category.subs}
                key={index}>
              </Button>
              </Link>
              </>
            )
      })
      }
      <CartIcon itemsInCart={numberOfItemsInCart()}/>
      </StyledHeader> 
    )
  } else {
  return (
    <>
    <StyledHeader>
    <BurgerButton isActive={active} onBurgerClick={handleActive}/>
    <CartIcon itemsInCart={numberOfItemsInCart()}/>
    </StyledHeader>
    {active && (<Sidebar categories={categories}/>)}
    </>
  )
}
}

export default Header

