import styled from 'styled-components'

export const StyledDropdown = styled.div`
position: absolute;
width: 20vw;
min-height: 15vh;
border-bottom: 5px solid ${props => props.theme.colors.main};
left: ${props => props.placement.left};
top: ${props => props.placement.top};
background-color: ${props => props.theme.colors.headerBackground};
color: ${props => props.theme.fontColors.main};
display: ${props => props.toggleDisplay ? 'flex' : 'none'};
flex-direction: column;
transform: translate(-37%, 5%);
z-index: 100;

${props => props.sideBar && {
  width: "300px",
  left: "0",
  transform: "translate(40%, -25%)",
  textAlign: "center"
}}
`