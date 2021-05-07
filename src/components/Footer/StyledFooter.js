import styled from 'styled-components'

export const StyledFooter = styled.div`
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

export const StyledLink = styled.a`
text-decoration: underline;
color: white;
font-size: 14px;
`
