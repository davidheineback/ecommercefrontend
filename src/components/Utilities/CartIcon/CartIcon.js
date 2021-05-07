import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../../img/shopping-cart-128x128.png'
import { StyledCounter, StyledCart } from './CartIconStyles'


function CartIcon({ itemsInCart }) {
  return (
    <Link key={'CartLink'} to={'/cart'}>
    <StyledCounter>{itemsInCart}</StyledCounter>
    <StyledCart src={cart} alt="ShoppingCart"/>
    </Link>
  )
}

export default CartIcon
