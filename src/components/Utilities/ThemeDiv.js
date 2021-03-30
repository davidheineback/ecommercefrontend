import styled from 'styled-components'
import React from 'react'

const WrapperDiv = styled.div `
color: red;
margin: 20px;
position: relative;
`

function ThemeDiv({ children }) {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv>
  )
}

export default ThemeDiv
