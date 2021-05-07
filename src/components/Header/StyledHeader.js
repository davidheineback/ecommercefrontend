import styled from 'styled-components'

export const StyledHeader = styled.div`
position: fixed;
display: flex;
flex-direction: row;
justify-content: center;
text-decoration: none;
top: 0;
width: 100vw;
min-height: 65px;
background-color: ${props => props.theme.colors.headerBackground};
margin: 0;
left: 0;
padding: 4rem 1rem;
padding-bottom: 5px;
text-align: ${props => props.align || "center"};
z-index: 800;


@media screen and (max-width: 599px) {
  ${props => props.big && {
  display: "none"
}}
}

@media screen and (min-width: 600px) {
  ${props => props.small && {
  display: "none"
}}
}
  ${props => props.small && {
  minHeight: "2vh",
  paddingBottom: "20px"
}}
`