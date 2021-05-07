import styled from 'styled-components'

export const StyledDivButton = styled.div`
appearance: none;
border: 0;
border-radius: 100px;
box-shadow: none;
cursor: pointer;
font-weight: 700;
letter-spacing: 2px;
padding: 1rem 1rem;
text-transform: uppercase;
&:hover {
background: ${props => props.theme.colors.mainHover};
color: ${props => props.theme.fontColors.mainHover};
z-index: 100;
}

${props => props.btnType === 'headerBtn' && {
  background: 'none',
  color: props.theme.fontColors.headerNav,
  borderRadius: "none",
  ":hover": {
    background: "none",
    color: "grey"
  }
}}

${props => props.btnType === 'dropdownBtn' && {
  background: 'none',
  color: props.theme.fontColors.headerNav,
  borderRadius: "none",
  fontSize: "14px",
  padding: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  ":hover": {
    background: "none",
    color: "grey"
  }
}}
`