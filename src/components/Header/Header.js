import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import DivButton from '../Utilities/DivButton.js'
import BurgerButton from '../Utilities/BurgerButton.js'
import Sidebar from '../Utilities/Sidebar.js'
import CartIcon from '../Utilities/CartIcon.js'
import categories from '../../mockDB/mockCategories.js'

const StyledHeader = styled.div`
position: fixed;
display: flex;
flex-direction: row;
justify-content: center;
text-decoration: none;
top: 0;
width: 100vw;
min-height: 65px;
background-color: ${props => props.theme.colors.headerBackground};
margin: 0;
left: 0;
padding: 4rem 1rem;
padding-bottom: 5px;
text-align: ${props => props.align || "center"};
`


function Header( { size, setRouteToPath, onScroll } ) {
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
      <StyledHeader key='styledheader'>
        {categories.map((category, index) => {
            return (
              <DivButton
                useDropdown={true}
                btnType="headerBtn"
                mainCategory={category.name}
                subCategories={category.subs}
                key={'headerbtn'+index}>
              </DivButton>
            )
      })
      }
      <CartIcon key='carticon' itemsInCart={numberOfItemsInCart()}/>
      </StyledHeader> 
    )
  } else {
  return (
    <>
    <StyledHeader key='smallstyledheader'>
    <BurgerButton key='burgerbtn' isActive={active} onBurgerClick={handleActive}/>
    <CartIcon key='smallcarticon' itemsInCart={numberOfItemsInCart()}/>
    </StyledHeader>
    {active && (<Sidebar key='sidebar' categories={categories}/>)}
    </>
  )
}
}

export default Header

