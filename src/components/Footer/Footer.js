import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
bottom: 0;
height: 50px;
width: 100vw;
margin-right: 0;
background-color: ${props => props.theme.colors.footerBackground};
border-top: 3px solid ${props => props.theme.colors.main};
margin-top: 20px;
padding: 2.5rem 1rem;
text-align: ${props => props.align || "center"};
`

function Footer({ children }) {
  return (
    <StyledFooter>
      {children}
    </StyledFooter>
  )
}

export default Footer
