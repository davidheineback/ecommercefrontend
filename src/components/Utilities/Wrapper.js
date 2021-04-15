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
width: "100vw",
minHeight: "65vh",
maxHeight: "80vh",
margonTop: "0",
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
width: "40vw",
minWidth: "400px"
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
