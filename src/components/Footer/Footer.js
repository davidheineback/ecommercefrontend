import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
position: fixed;
bottom: 0;
width: 100%;
min-height: 30px;
background-color: ${props => props.theme.colors.footerBackground};
border-top: 3px solid ${props => props.theme.colors.main};
margin: 0;
left: 0;
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
