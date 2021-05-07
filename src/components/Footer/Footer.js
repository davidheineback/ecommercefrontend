import React from 'react'
import { GradientBorder } from '../Utilities/UtilitiesExporter'
import { StyledFooter, StyledLink } from './StyledFooter'


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
