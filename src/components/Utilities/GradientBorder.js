import React from 'react'
import styled from 'styled-components'

const StyledGradientBorder = styled.div`
  height: 5px;
  width: 100%;
  background: ${props => props.theme.colors.borderGradient};
`


function GradientBorder() {
  return (
    <StyledGradientBorder/>
  )
}

export default GradientBorder
