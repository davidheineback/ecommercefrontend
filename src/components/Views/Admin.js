import React, { useState } from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { GradientBorder, Wrapper, Button } from '../Utilities/UtilitiesExporter'
import { GlobalStateContext } from '../GlobalState/GlobalState'
// import ProductCard from '../Product/ProductCard.js'
// import { getAllProducts } from '../../fetch.js'

const StyledLogInContainer = styled.div`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 6.0px );
    -webkit-backdrop-filter: blur( 6.0px );
  width: 100%;
  min-height: inherit;
`

const StyledInput = styled.input`
  width: 250px;
  padding: 0.3rem;
  border-radius: 50px;
  caret-color: rgba(0,0,0,0);
  text-align: center;
  appearance: none;
  background: inherit;
  border: transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 5px;
  &:focus {
    outline: none;
    background: white;
  } 
`


function Admin() {
  const { setLoggedIn } = React.useContext(GlobalStateContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsernameInput ({ target }) {
    setUsername(target.value)
  }

  function handlePasswordInput ({ target }) {
    setPassword(target.value)
  }

  // Den här funktionen ska göra ett POST call till backen för att verifiera användaren och sedan setLoggedIn(true) om det är ok.
  function handleLogin () {
    console.log(username)
    console.log(password)
    setLoggedIn(false)
  }

  return (
      <Wrapper flex="bigFlex">
        <Wrapper adminLogin>
          <GradientBorder/>
         <StyledLogInContainer>
           <StyledInput onChange={handleUsernameInput} placeholder="username"/>
           <StyledInput type='password' onChange={handlePasswordInput} placeholder="password"/>
           <Button onClick={handleLogin} btnType="login">Log in</Button>
        </StyledLogInContainer>
        </Wrapper>
      </Wrapper>
  )
}

export default Admin
