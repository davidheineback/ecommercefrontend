import React from 'react'
import styled from 'styled-components'
import Button from '../Utilities/Button.js'

const StyledHeader = styled.div`
position: fixed;
top: 0;
width: 100%;
background-color: red;
margin: 0;
left: 0;
padding: 3rem 1rem;
`

function Header( { onScroll } ) {
  return (
    <StyledHeader>
      <Button>Hej</Button>
      <Button primary>Primary hej</Button>
    </StyledHeader> 
  )
}

export default Header

