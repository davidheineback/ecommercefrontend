import React from 'react'
import styled from 'styled-components'
import { Button } from '../Utilities/UtilitiesExporter'

const StyledProductAction = styled.div`
transform: translate(-35vw, -45.4vh);
border: 2px solid black;
width: 26vw;
height: 40vh;
`


function ProductActions({ children }) {
  return (
    <StyledProductAction>
      {children.options.length > 0 && 
      <select>
      {children.options.map(child => <option>{child}</option>
      )}
      </select>
      }
      <Button primary>Buy me now!</Button>
    </StyledProductAction>
  )
}

export default ProductActions
