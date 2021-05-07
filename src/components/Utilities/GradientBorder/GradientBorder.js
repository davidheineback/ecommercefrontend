import React from 'react'
import { StyledGradientBorder } from './GradientBorderStyles'

function GradientBorder({ children }) {
  return (
    <StyledGradientBorder fit={children}>
      {children}
    </StyledGradientBorder>
  )
}

export default GradientBorder
