import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
font-size: 3rem;
margin-top: ${props => props.theme.elementAfterHeader.marginTop};
margin-left: ${props => props.theme.elementAfterHeader.marginLeft};
min-height: 65vh;
width: 100%;
justify-content: center;
overflow: hidden;


${props => props.flex && {
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
width: "70vw",
overflowY: "scroll",
justifyContent: "center",
textAlign: "center",
paddingLeft: "15%",
paddingRight: "15%",
marginBottom: "40px",
paddingBottom: "20px",
gap: "40px"
}}

${props => props.flex === 'bigFlex' && {
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
minHeight: "65vh",
maxHeight: "80vh",
marginTop: "80px",
marginLeft:"0",
marginRight: "0",
paddingLeft: "15%",
paddingRight: "15%",
justifyContent: "left",
textAlign: "center",
gap: "20",
}}

${props => props.productDetails && {
marginTop: "0",
justifyContent: "left",
textAlign: "left",
transform: "translateY(-7vh)",
minHeight: "80px",
width: "20vw",
minWidth: "400px"
}}

${props => props.flex === 'flash' && {
position: "absolute",
left:0,
background: "linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%)",
backdropFilter: "brightness(150%) saturate(150%) blur(5px)",
backgroundClip: "padding-box",
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
minWidth: "70vw",
maxWidth: "70vw",
minHeight: "100px",
maxHeight: "100px",
marginTop: "10",
paddingTop: "100px",
textAlign: "center",
zIndex: "300",
fontSize: "30px",
fontWeight: "700"
}}
`

function Wrapper({ productDetails, flex, children }) {
  return ( 
    <StyledWrapper productDetails={productDetails} flex={flex}>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
