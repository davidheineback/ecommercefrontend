import React from 'react'
import styled from 'styled-components'
import { Button } from '../Utilities/UtilitiesExporter'

const StyledProductAction = styled.div`
border: 2px solid black;
padding: 10px;
margin: 10px;
text-align: center;
`


function ProductActions({ children }) {
  return (
    <StyledProductAction>
      {children && children.options.length > 0 && 
      <select>
      {children.options.map(child => <option>{child}</option>
      )}
      </select>
      }
      <Button btnType={'primary'}>Buy me now!</Button>
    </StyledProductAction>
  )
}

export default ProductActions
