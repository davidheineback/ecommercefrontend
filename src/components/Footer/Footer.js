import React from 'react'
import styled from 'styled-components'
import { GradientBorder } from '../Utilities/UtilitiesExporter'

const StyledFooter = styled.div`
right: 0;
left: 0;
bottom: 0;
background-color: ${props => props.theme.colors.footerBackground};
padding: 2.2rem 1rem;
text-align: ${props => props.align || "center"};
text-decoration: none;
color: white;
font-size: 14px;
overflow: hidden;
`

const StyledLink = styled.a`
text-decoration: underline;
color: white;
font-size: 14px;
`

function Footer({ children }) {
  return (
    <>
    <GradientBorder/>
    <StyledFooter>
      {children}
      Visit github for code:
    <StyledLink target="_blank" href="https://github.com/davidheineback/ecommercefrontend">/ Frontend / </StyledLink>
    <StyledLink target="_blank" href="https://github.com/davidheineback/ecommercebackend"> Backend / </StyledLink>  
    </StyledFooter>
    </>
  )
}

export default Footer
