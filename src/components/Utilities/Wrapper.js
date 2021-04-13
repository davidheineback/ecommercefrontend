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
justifyContent: "center",
textAlign: "center",
marginLeft: "15%",
marginRight: "15%",
gap: "40px"
}}

${props => props.flex === 'bigFlex' && {
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
width: "100vw",
paddingTop: "3%",
marginLeft:0,
marginRight: 0,
paddingLeft: "5%",
paddingRight: "5%",
justifyContent: "left",
textAlign: "center"
}}
`

function Wrapper({ flex, children }) {
  return (
    <StyledWrapper flex={flex}>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
