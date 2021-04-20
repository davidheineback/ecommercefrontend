import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { DivButton, BurgerButton, Sidebar, CartIcon } from '../Utilities/UtilitiesExporter'
import { getCategories } from '../../fetch.js'
import { GlobalStateContext } from '../GlobalState/GlobalState'

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
z-index: 800;


@media screen and (max-width: 599px) {
  ${props => props.big && {
  display: "none"
}}
}

@media screen and (min-width: 600px) {
  ${props => props.small && {
  display: "none"
}}
}
  ${props => props.small && {
  minHeight: "2vh",
  paddingBottom: "20px"
}}
`

function Header() {
  const { itemsInCart } = React.useContext(GlobalStateContext)
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

