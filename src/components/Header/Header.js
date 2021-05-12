import React, { useState, useCallback, useEffect } from 'react'
import { Button, DivButton, BurgerButton, Sidebar, CartIcon } from '../Utilities/UtilitiesExporter'
import { getCategories } from '../../fetch.js'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import { StyledHeader } from './StyledHeader'

function Header() {
  const { itemsInCart, loggedIn, handleLogOut } = React.useContext(GlobalStateContext)
  const [active, setActive] = useState(false)
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories(setCategories) },[])


  const handleActive = useCallback(
    (e) => {
      e = !active
      setActive(e)
    },
    [active, setActive],
  )
  
  const numberOfItemsInCart = [...itemsInCart].reduce((total, obj) => obj.numberInCart + total,0)

    return (
      <>
      <StyledHeader big key='styledheader'>
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
      {loggedIn && <Button onClick={handleLogOut}>Logout</Button>}
      <CartIcon key='carticon' itemsInCart={numberOfItemsInCart}/>
      </StyledHeader> 
    <StyledHeader small key='smallstyledheader'>
    <BurgerButton key='burgerbtn' isActive={active} onBurgerClick={handleActive}/>
    <CartIcon key='smallcarticon' itemsInCart={numberOfItemsInCart}/>
    </StyledHeader>
    {active && (<Sidebar key='sidebar' categories={categories}/>)}
    </>
  )
}

export default Header

