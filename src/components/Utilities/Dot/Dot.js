import React from 'react'
import { StyledDot } from './DotStyles'

function Dot({ btnType, onClick, arrowDirection, children }) {
  return (
    <StyledDot btnType={btnType} onClick={onClick} arrowDirection={arrowDirection}>
      {children}
    </StyledDot>
  )
}

export default Dot
