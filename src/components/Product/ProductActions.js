import React from 'react'
import styled from 'styled-components'
import { Dot, Button } from '../Utilities/UtilitiesExporter'

const StyledProductAction = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
width: 60%;
text-align: center;
`

const StyledSelect = styled.select`
appearance: none;
border: 0;
border-bottom: 2px solid ${props => props.theme.colors.main};
cursor: pointer;
font-weight: 700;
letter-spacing: 2px;
min-width: 40%;
padding: 0.5rem 0.5rem;
margin: 20px;
`

const StyledOption = styled.option`
`


function ProductActions({ children }) {
  return (
    <StyledProductAction>
      {children.options && children.options.length > 0 && 
      <StyledSelect>
        <Dot>v</Dot>
      {children.options.map((child, index) => <StyledOption val={index}>{child}</StyledOption>
      )}
      </StyledSelect>
      }
      <Button btnType={'primary'}>Add to cart</Button>
    </StyledProductAction>
  )
}

export default ProductActions
