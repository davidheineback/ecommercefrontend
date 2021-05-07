import React from 'react'
import { StyledBurger } from './BurgerButtonStyles'

function BurgerButton({ active, onBurgerClick }) {
  return (
    <StyledBurger isActive={active} onClick={() => onBurgerClick(!active)}>
      <div/>
      <div/>
      <div/>
    </StyledBurger>
    
  )
}

export default BurgerButton
