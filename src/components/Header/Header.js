import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { DivButton, BurgerButton, Sidebar, CartIcon } from '../Utilities/UtilitiesExporter'
import { getCategories } from '../../fetch.js'

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
z-index: 200;
`

function Header( { size, onScroll } ) {
  const [active, setActive] = useState(false)
  const [categories, setCategories] = useState([])
  const [numberOfItemsInCart] = useState(0)
  
  useEffect(() => {
    getCategories(setCategories) },[])


  const handleActive = useCallback(
    (e) => {
      e = !active
      setActive(e)
    },
    [active, setActive],
  )

  if (size > 600) {
    return (
      <StyledHeader key='styledheader'>
        {categories.map((category, index) => {
            return (
              <DivButton
                useDropdown={true}
                btnType="headerBtn"
                mainCategory={category}
                subCategories={category.subs}
                key={'headerbtn'+index}>
              </DivButton>
            )
      })
      }
      <CartIcon key='carticon' itemsInCart={numberOfItemsInCart}/>
      </StyledHeader> 
    )
  } else {
  return (
    <>
    <StyledHeader key='smallstyledheader'>
    <BurgerButton key='burgerbtn' isActive={active} onBurgerClick={handleActive}/>
    <CartIcon key='smallcarticon' itemsInCart={numberOfItemsInCart}/>
    </StyledHeader>
    {active && (<Sidebar key='sidebar' categories={categories}/>)}
    </>
  )
}
}

export default Header

