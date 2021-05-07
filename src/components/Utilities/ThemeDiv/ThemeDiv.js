import React from 'react'
import { WrapperDiv } from './ThemeDivStyles'

function ThemeDiv({ children }) {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv>
  )
}

export default ThemeDiv
