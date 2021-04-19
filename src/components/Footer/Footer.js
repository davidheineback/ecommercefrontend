import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
right: 0;
left: 0;
bottom: 0;
background-color: ${props => props.theme.colors.footerBackground};
border-top: 3px solid ${props => props.theme.colors.main};
padding: 2.2rem 1rem;
text-align: ${props => props.align || "center"};
text-decoration: none;
color: white;
font-size: 12px;
overflow: hidden;
`

const StyledLink = styled.a`
text-decoration: underline;
color: white;
font-size: 12px;
`

function Footer({ children }) {
  return (
    <StyledFooter>
      {children}
    <StyledLink target="_blank" href="https://github.com/davidheineback/ecommercefrontend">Visit github for code</StyledLink>  
    </StyledFooter>
  )
}

export default Footer
