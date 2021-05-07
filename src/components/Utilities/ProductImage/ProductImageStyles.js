import styled from 'styled-components'

export const StyledProductImage = styled.img`
background: white;
width: 100%;
height: 75%;
overflow: hidden;
appearance: none;
border: 0;
box-shadow: none;
cursor: pointer;
@supports (-webkit-touch-callout: none) {
  ${props => props.type === 'productPage' && { 
    marginTop: "30px",
  }}
}

${props => props.type === 'productPage' && {
  minWidth:"280px",
  maxWidth: "35vw",
  maxHeight: "45vh",
  width: "auto",
  height: "auto",
  transform: "translateY(-7vh)",
  transition: "transform .4s",
  boxShadow: `4px 4px 4px ${props.theme.colors.main}`,
  ":hover": {
    boxShadow: `4px 4px 4px ${props.theme.colors.main}`,
    transform: "scale(1.1) translateY(-7vh)",
    transition: "transform .4s"
  }
}}

${props => props.type === 'smallCart' && {
  minWidth:"120px",
  maxWidth: "120px",
  minHeight: "85px",
  maxHeight: "90px",
  marginLeft: "2px",
  width: "auto",
  height: "100%",
  boxShadow: `2px 2px 2px grey`
}}
`