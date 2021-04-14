import React from 'react'
import styled from 'styled-components'
import { Button } from '../Utilities/UtilitiesExporter'

const StyledProductAction = styled.div`
display: block;
border: 2px solid black;
padding: 10px;
margin: 10px;
width: 80%;
text-align: center;
`

const StyledSelect = styled.select`
border: 0;
border-bottom: 2px solid ${props => props.theme.colors.main};
cursor: pointer;
font-weight: 700;
letter-spacing: 2px;
min-width: 40%;
padding: 0.5rem 0.5rem;
`

const StyledOption = styled.option`
`


function ProductActions({ children }) {
  return (
    <StyledProductAction>
      {children.options && children.options.length > 0 && 
      <StyledSelect>
      {children.options.map((child, index) => <StyledOption val={index}>{child}</StyledOption>
      )}
      </StyledSelect>
      }
      <Button btnType={'primary'}>Buy me now!</Button>
    </StyledProductAction>
  )
}

export default ProductActions
