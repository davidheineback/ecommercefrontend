import styled from 'styled-components'

export const StyledProduct = styled.div`
width: 260px;
height: 360px;
background: ${props => props.theme.colors.cardColor};
border-top: 1px solid ${props => props.theme.colors.cardColor};
border-left: 1px solid ${props => props.theme.colors.cardColor};
text-align: left;
transition: transform .4s;
font-size: 10px;
&:hover{
  border-left: 1px solid ${props => props.theme.colors.main};
  border-top: 1px solid ${props => props.theme.colors.main};
  box-shadow: 4px 4px 4px ${props => props.theme.colors.main};
  transform: scale(1.1) translateY(-10px);
  transition: transform .4s;
}
`

export const StyledItemContainer = styled.div`
border-bottom: 1px solid lightgray;
width: 100%;
height: 90px;
text-align:center;
display: flex;
flex: 1 0 99%;
&:hover {
  box-shadow: 2px 2px 2px grey;
}

${props => props.dashboard && {
  position: "relative",
  maxWidth: "30vw",
  marginBottom: "20px",
  padding: "10px",
  boxShadow: "2px 2px 2px grey",
  cursor: "pointer"
  }}

@media screen and (max-width: 800px) {
  ${props => props.big && {
    display: "inline-block",
    height: "fit-content",
    marginBottom: "5px"
}}
}
`

export const StyledDetailsContainer = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
grid-template-areas:
"name numberOfItems price";

@media screen and (max-width: 800px) {
  ${props => props.big && {
    display: "inline-block",
    paddingTop: "5px",
    marginLeft: "0px"
}}
}
`

export const StyledDetails = styled.div`
margin-left: 30px;
font-size: 16px;
text-transform: uppercase;
font-weight: 600;
justify-content: center;
align-content: center;
grid-auto-flow: column;

@media screen and (max-width: 800px) {
  margin-left: 0;
}

${props => props.itemName && {
  gridArea: "name"
}}

${props => props.price && {
  textTransform: "lowercase",
  gridArea: "price"
}}
`

export const StyledNumber = styled.div`
display: inline-flex;
position: relative;
z-index: -1;
margin-left: 8px;
width: 30px;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
backdrop-filter: brightness(150%) saturate(150%) blur(5px);
background-clip: padding-box;
color: rgba(0, 0, 0, 0.7);
`

export const StyledCounter = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`

export const StyledProductAction = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 250px;
text-align: center;
justify-content: center;

${props => props.selectbox && {
  position: "relative",
  border: "1px solid lightgrey",
  boxShadow: "2px 2px 2px teal",
  cursor: "pointer",
  fontWeight: "700",
  marginBottom: "20px",
  fontSize: "14px",
  textTransform: "uppercase"
  }}
`

export const StyledSelect = styled.div`
position: absolute;
border: 1px solid lightgray;
cursor: pointer;
font-weight: 700;
width: 38%;
margin-left: 0.8%;
margin-top: 10px;
`
export const StyledOption = styled.div`
border: 0;
background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
backdrop-filter: brightness(150%) saturate(150%) blur(5px);
background-clip: padding-box;
cursor: pointer;
font-weight: 700;
padding: 0.5rem 0.5rem;
text-shadow: 2px 2px 2px white;
z-index: 10000;
&:hover {
background: ${props => props.theme.colors.main};
opacity: 0.8;
color: ${props => props.theme.fontColors.mainHover};
text-shadow: none;
}
`

export const StyledActionCounter = styled.div`
  justify-content: left;
  align-items: left;
  padding: 10px;
  width: 120px;
  margin-bottom: 10px;
  
`

export const StyledProductManager = styled.div`
  position: absolute;
  left: 0;
  top: 10px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  border: 1px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 35vw;
  height: 500px;
  margin-left: 5px;
  margin-top: 100px;
  min-height: 100px;
  background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
  backdrop-filter: brightness(150%) saturate(150%) blur(5px);
  background-clip: padding-box;
  justify-content: space-evenly;
  z-index: 100;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    flex-direction: column;
    flex-flow: column wrap;
    transform: translateX(-100%)
  }
`

export const StyledFlexGridHeader = styled.div`
  padding-top: 3px;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 700;
  width: 30%;
  @media screen and (max-width: 800px) {
    width:100%;
  }
`
export const StyledFlexGridContent = styled.div`
  padding-top: 3px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid grey;
  word-wrap: break-word;
  width: 30%;
  @media screen and (max-width: 800px) {
    width:100%;
  }

  ${props => props.editBtn && {
    color: "black",
    width: "14%"
  }}

${props => props.deleteBtn && {
    color: "red",
    width: "100%"
    
  }}

${props => props.infoText && {
    width: "100%"
  }}


`

export const StyledEditorInput = styled.input`
  width: 30%;
  font-size: 16px;
  @media screen and (max-width: 800px) {
    width:100%;
  }
`