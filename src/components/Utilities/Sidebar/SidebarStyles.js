import styled from 'styled-components'

export const StyledSideBar = styled.div`
  background: black;
  height: 100vh;
  width: 30vw;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 108px;
  z-index: 500;
  text-align: center;

  @media screen and (min-width: 600px) {
  ${props => props.small && {
  display: "none"
}}
}
`