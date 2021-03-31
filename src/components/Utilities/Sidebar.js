import React from 'react'
import styled from 'styled-components'



const StyledSideBar = styled.div`
  background: black;
  height: 100vh;
  width: 20vw;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 85px;
`

function SideBar({ children }) {
  return (
    <StyledSideBar>
      {children}
    </StyledSideBar>
  )
}

export default SideBar
